(self.webpackChunk=self.webpackChunk||[]).push([[9267],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7689);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=d(n),u=l,c=k["".concat(o,".").concat(u)]||k[u]||m[u]||r;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2278:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,metadata:()=>o,toc:()=>d,default:()=>m});var a=n(1424),l=n(2489),r=(n(7689),n(9848)),i=["components"],p={id:"pnpm-install-pkg",title:"pnpm install <pkg>",original_id:"pnpm-install-pkg"},o={unversionedId:"pnpm-install-pkg",id:"version-4.x/pnpm-install-pkg",isDocsHomePage:!1,title:"pnpm install <pkg>",description:"Telep\xedt egy csomagot, valamint minden olyan csomagot, amely f\xfcgg\u0151s\xe9ge az adott csomagnak. By default, any new package is installed as a prod dependency.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/pnpm-install-pkg.md",sourceDirName:".",slug:"/pnpm-install-pkg",permalink:"/hu/4.x/pnpm-install-pkg",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",frontMatter:{id:"pnpm-install-pkg",title:"pnpm install <pkg>",original_id:"pnpm-install-pkg"}},d=[{value:"tl;dr",id:"tldr",children:[]},{value:"T\xe1mogatott csomag forr\xe1sok",id:"t\xe1mogatott-csomag-forr\xe1sok",children:[{value:"Telep\xedt\xe9s az npm b\xe1zisb\xf3l",id:"telep\xedt\xe9s-az-npm-b\xe1zisb\xf3l",children:[]},{value:"Telep\xedt\xe9s helyi f\xe1jlrendszerb\u0151l",id:"telep\xedt\xe9s-helyi-f\xe1jlrendszerb\u0151l",children:[]},{value:"Install from remote gzipped tarball",id:"install-from-remote-gzipped-tarball",children:[]},{value:"Telep\xedt\xe9s a Git t\xe1rh\xe1zb\xf3l",id:"telep\xedt\xe9s-a-git-t\xe1rh\xe1zb\xf3l",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]}]}],s={toc:d};function m(e){var t=e.components,p=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Telep\xedt egy csomagot, valamint minden olyan csomagot, amely f\xfcgg\u0151s\xe9ge az adott csomagnak. By default, any new package is installed as a prod dependency."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3127).Z})),(0,r.kt)("h2",{id:"tldr"},"tl;dr"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i sax")),(0,r.kt)("td",{parentName:"tr",align:null},"npm package (save to ",(0,r.kt)("inlineCode",{parentName:"td"},"dependencies"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i -D sax")),(0,r.kt)("td",{parentName:"tr",align:null},"save to ",(0,r.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i -O sax")),(0,r.kt)("td",{parentName:"tr",align:null},"save to ",(0,r.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i -P sax")),(0,r.kt)("td",{parentName:"tr",align:null},"save to ",(0,r.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i sax@next")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify tag ",(0,r.kt)("inlineCode",{parentName:"td"},"next"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i sax@3.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify version ",(0,r.kt)("inlineCode",{parentName:"td"},"3.0.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'pnpm i sax@">=1 <2.0"')),(0,r.kt)("td",{parentName:"tr",align:null},"Specify version range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i user/repo")),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i user/repo#master")),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i user/repo#semver:^2.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i github:user/repo")),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i gitlab:user/repo")),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i /path/to/repo")),(0,r.kt)("td",{parentName:"tr",align:null},"Absolute path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i ./archive.tgz")),(0,r.kt)("td",{parentName:"tr",align:null},"Tarball")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i https://site.com/archive.tgz")),(0,r.kt)("td",{parentName:"tr",align:null},"Tarball via HTTP")))),(0,r.kt)("h2",{id:"t\xe1mogatott-csomag-forr\xe1sok"},"T\xe1mogatott csomag forr\xe1sok"),(0,r.kt)("p",null,"A package can be installed from different locations:"),(0,r.kt)("h3",{id:"telep\xedt\xe9s-az-npm-b\xe1zisb\xf3l"},"Telep\xedt\xe9s az npm b\xe1zisb\xf3l"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install package-name")," will install the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"package-name")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry"),"."),(0,r.kt)("p",null,"You may also install packages by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"tag: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm install express@nightly")),(0,r.kt)("li",{parentName:"ul"},"version: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm install express@1.0.0")),(0,r.kt)("li",{parentName:"ul"},"version range: ",(0,r.kt)("inlineCode",{parentName:"li"},'pnpm install express@2 react@">=0.1.0 <0.2.0"'))),(0,r.kt)("h3",{id:"telep\xedt\xe9s-helyi-f\xe1jlrendszerb\u0151l"},"Telep\xedt\xe9s helyi f\xe1jlrendszerb\u0151l"),(0,r.kt)("p",null,"There are two ways to install from the local file system:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"from a tarball file (",(0,r.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".tar.gz"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,r.kt)("li",{parentName:"ol"},"from a directory")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm install ./package.tgz\npnpm install ./some-directory\n")),(0,r.kt)("p",null,"When you install from a directory, a symlink will be created in the current project's ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,r.kt)("h3",{id:"install-from-remote-gzipped-tarball"},"Install from remote gzipped tarball"),(0,r.kt)("p",null,'The argument must start with "http://" or "https://".'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm install https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,r.kt)("h3",{id:"telep\xedt\xe9s-a-git-t\xe1rh\xe1zb\xf3l"},"Telep\xedt\xe9s a Git t\xe1rh\xe1zb\xf3l"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install <git remote url>\n")),(0,r.kt)("p",null,"Installs the package from the hosted Git provider, cloning it with Git."),(0,r.kt)("p",null,"You may install from Git by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"commit: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm install kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,r.kt)("li",{parentName:"ul"},"branch: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm install kevva/is-positive#master")),(0,r.kt)("li",{parentName:"ul"},"version range: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm install kevva/is-positive#semver:^2.0.0"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,r.kt)("p",null,"This will install one or more packages in your ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,r.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-dev")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," will install one or more packages in your ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,r.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-optional")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-O")," will install one or more packages in your ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,r.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,r.kt)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),(0,r.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,r.kt)("p",null,"Added in: v3.2.0"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."))}m.isMDXComponent=!0},3127:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/pnpm-install-package-5a2978bb5d926b98518d1aa3d97b5122.svg"}}]);