(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{318:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||c;return t?a.a.createElement(m,i(i({ref:n},p),{},{components:t})):a.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),c=(t(0),t(318)),o={id:"exec",title:"pnpm exec"},i={unversionedId:"cli/exec",id:"version-6.x/cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"Execute a shell command in scope of a project.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",slug:"/cli/exec",permalink:"/hu/cli/exec",editUrl:"https://crowdin.com/project/pnpm/hu",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"pnpm run",permalink:"/hu/cli/run"},next:{title:"pnpm test",permalink:"/hu/cli/test"}},l=[{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--parallel",id:"--parallel",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Execute a shell command in scope of a project."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"node_modules/.bin")," is added to the ",Object(c.b)("inlineCode",{parentName:"p"},"PATH"),", so ",Object(c.b)("inlineCode",{parentName:"p"},"pnpm exec")," allows executing commands of dependencies."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("p",null,"If you have Jest as a dependency of your project, there is no need to install Jest globally, just run it with ",Object(c.b)("inlineCode",{parentName:"p"},"pnpm exec"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"pnpm exec jest\n")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"exec")," part is actually optional when the command is not in conflict with a builtin pnpm command, so you may also just run:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"pnpm jest\n")),Object(c.b)("h2",{id:"options"},"Options"),Object(c.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(c.b)("p",null,"Added in: v2.9.0"),Object(c.b)("p",null,"Execute the shell command in every project of the workspace."),Object(c.b)("p",null,"The name of the current package is available through the environment variable ",Object(c.b)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),Object(c.b)("p",null,"Examples:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),Object(c.b)("h3",{id:"--parallel"},"--parallel"),Object(c.b)("p",null,"Added in: v5.1.0"),Object(c.b)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),Object(c.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/hu/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);