import {CreateFunctionCommand, LambdaClient} from '@aws-sdk/client-lambda';
import {readFileSync} from 'fs';
import {bundleLambda} from './bundle-lambda';
import {
	EFS_MOUNT_PATH,
	ENABLE_EFS,
	MEMORY_SIZE,
	REGION,
	RENDER_FN_PREFIX,
} from './constants';
import {randomHash} from './helpers/random-hash';
import {ensureLayers} from './lambda-layers';
import {waitForLambdaReady} from './wait-for-lambda-ready';

const lambdaClient = new LambdaClient({
	region: REGION,
});

type Developer = 'jonny' | 'shankhadeep';
const developer: Developer = 'jonny' as Developer;

export const createLambda = async () => {
	const {layerArn} = await ensureLayers(lambdaClient);
	console.log('Done creating layers');
	const fnNameRender = RENDER_FN_PREFIX + randomHash();
	const renderOut = await bundleLambda('render');
	console.log('done Bundling');

	const created = await lambdaClient.send(
		new CreateFunctionCommand({
			Code: {
				ZipFile: readFileSync(renderOut),
			},
			FunctionName: fnNameRender,
			Handler: 'index.handler',
			Role:
				developer === 'shankhadeep'
					? 'arn:aws:iam::363307378317:role/awesomeLambda'
					: 'arn:aws:iam::976210361945:role/lambda-admin', // IAM_ROLE_ARN; e.g., arn:aws:iam::650138640062:role/v3-lambda-tutorial-lambda-role
			Runtime: 'nodejs14.x',
			Description: 'Renders a Remotion video.',
			MemorySize: MEMORY_SIZE,
			Timeout: 120,
			Layers: [layerArn],

			VpcConfig: ENABLE_EFS
				? {
						SubnetIds: [
							developer === 'shankhadeep'
								? 'subnet-be85fcd4'
								: 'subnet-00e3aa99745996ff7',
						],
						SecurityGroupIds: [
							developer === 'shankhadeep'
								? 'sg-8f2391fc'
								: 'sg-0251b3f6fa6af4577',
						],
				  }
				: undefined,
			FileSystemConfigs: ENABLE_EFS
				? [
						{
							Arn:
								developer === 'shankhadeep'
									? 'arn:aws:elasticfilesystem:eu-central-1:363307378317:access-point/fsap-05a31f7aad4e47581'
									: 'arn:aws:elasticfilesystem:eu-central-1:976210361945:access-point/fsap-0e697d03f5bf221a7',
							LocalMountPath: EFS_MOUNT_PATH,
						},
				  ]
				: undefined,
		})
	);
	console.log('lambdas created');

	if (!created.FunctionName) {
		throw new Error('Lambda was created but has no name');
	}

	await waitForLambdaReady(created.FunctionName);
	return {
		functionName: created.FunctionName,
	};
};