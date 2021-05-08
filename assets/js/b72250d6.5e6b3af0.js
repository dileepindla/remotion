(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5185],{3905:function(e,n,r){"use strict";r.r(n),r.d(n,{MDXContext:function(){return d},MDXProvider:function(){return p},mdx:function(){return v},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var t=r(2784);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),c=function(e){return function(n){var r=m(n.components);return t.createElement(e,o({},n,{components:r}))}},m=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=m(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(r),p=a,f=c["".concat(i,".").concat(p)]||c[p]||u[p]||o;return r?t.createElement(f,l(l({ref:n},d),{},{components:r})):t.createElement(f,l({ref:n},d))}));function v(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9814:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var t=r(2122),a=r(9756),o=(r(2784),r(3905)),i={id:"env-variables",title:"Environment variables"},l={unversionedId:"env-variables",id:"env-variables",isDocsHomePage:!1,title:"Environment variables",description:"Available from v2.1.2.",source:"@site/docs/env-variables.md",sourceDirName:".",slug:"/env-variables",permalink:"/docs/env-variables",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/env-variables.md",version:"current",frontMatter:{id:"env-variables",title:"Environment variables"},sidebar:"someSidebar",previous:{title:"Using legacy Babel transpilation",permalink:"/docs/legacy-babel"},next:{title:"CLI options",permalink:"/docs/cli"}},s=[{value:"Passing variables from the CLI",id:"passing-variables-from-the-cli",children:[]},{value:"Using a dotenv file",id:"using-a-dotenv-file",children:[]},{value:"Setting via <code>renderFrames()</code>",id:"setting-via-renderframes",children:[]},{value:"See also",id:"see-also",children:[]}],d={toc:s};function c(e){var n=e.components,r=(0,a.default)(e,["components"]);return(0,o.mdx)("wrapper",(0,t.default)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Available from v2.1.2.")),(0,o.mdx)("p",null,"Remotion supports environment variables being passed directly from the CLI, using a ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," file and from the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/render-frames"},(0,o.mdx)("inlineCode",{parentName:"a"},"renderFrames()"))," function."),(0,o.mdx)("h2",{id:"passing-variables-from-the-cli"},"Passing variables from the CLI"),(0,o.mdx)("p",null,"If you want to pass an environment variable from the CLI, you need to prefix it with ",(0,o.mdx)("inlineCode",{parentName:"p"},"REMOTION_"),". This is a security feature to prevent your whole environment which could contain sensitive information being included in a Webpack bundle."),(0,o.mdx)("p",null,"You can pass environment variables in development mode and while rendering. For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-console"},"REMOTION_MY_VAR=hello_world npm start\n")),(0,o.mdx)("p",null,"In your project, you can access the variable using ",(0,o.mdx)("inlineCode",{parentName:"p"},"process.env.REMOTION_MY_VAR"),"."),(0,o.mdx)("h2",{id:"using-a-dotenv-file"},"Using a dotenv file"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"Dotenv")," support is built in. Simply place a ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," file in the root of your project and place key-value pairs in it."),(0,o.mdx)("p",null,"For example, if your file contains"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-dotenv"},"MY_VAR=hello\nANOTHER_VAR=world\n")),(0,o.mdx)("p",null,"in your project you can read ",(0,o.mdx)("inlineCode",{parentName:"p"},"process.env")," to get an object ",(0,o.mdx)("inlineCode",{parentName:"p"},'{"MY_VAR": "hello", "ANOTHER_VAR": "world"}'),"."),(0,o.mdx)("p",null,"You can override the location of your dotenv file using the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setdotenvlocation"},"configuration file setting")," or the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/cli"},"CLI flag"),"."),(0,o.mdx)("h2",{id:"setting-via-renderframes"},"Setting via ",(0,o.mdx)("inlineCode",{parentName:"h2"},"renderFrames()")),(0,o.mdx)("p",null,"The above two methods only work when rendering from the CLI. To pass environment variables while server-side-rendering, pass an object to the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/render-frames#env-variables"},(0,o.mdx)("inlineCode",{parentName:"a"},"envVariables")," option of ",(0,o.mdx)("inlineCode",{parentName:"a"},"renderFrames()")),"."),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/render-frames#env-variables"},(0,o.mdx)("inlineCode",{parentName:"a"},"renderFrames()")," - envVariables")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/dotenv"},"dotenv"))))}c.isMDXComponent=!0}}]);