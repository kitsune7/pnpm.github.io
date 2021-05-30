(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{318:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=b(t),d=r,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return t?a.a.createElement(m,c(c({ref:n},p),{},{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),i=(t(0),t(318)),l={id:"recursive",title:"pnpm recursive"},c={unversionedId:"cli/recursive",id:"cli/recursive",isDocsHomePage:!1,title:"pnpm recursive",description:"Runs a pnpm command recursively on all subdirectories in the package or every available workspace. Currently, only the following commands can be used recursively: add, exec, install, list, outdated, publish, rebuild, remove, run, test, unlink, update, why",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/recursive.md",slug:"/cli/recursive",permalink:"/zh/next/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"current",sidebar:"docs",previous:{title:"pnpm publish",permalink:"/zh/next/cli/publish"},next:{title:"pnpm server",permalink:"/zh/next/cli/server"}},o=[{value:"Options",id:"options",children:[{value:"--link-workspace-packages",id:"--link-workspace-packages",children:[]},{value:"--workspace-concurrency",id:"--workspace-concurrency",children:[]},{value:"--no-bail",id:"--no-bail",children:[]},{value:"--no-sort",id:"--no-sort",children:[]},{value:"--reverse",id:"--reverse",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:o};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Runs a pnpm command recursively on all subdirectories in the package or every available workspace. Currently, only the following commands can be used recursively: ",Object(i.b)("inlineCode",{parentName:"p"},"add"),", ",Object(i.b)("inlineCode",{parentName:"p"},"exec"),", ",Object(i.b)("inlineCode",{parentName:"p"},"install"),", ",Object(i.b)("inlineCode",{parentName:"p"},"list"),", ",Object(i.b)("inlineCode",{parentName:"p"},"outdated"),", ",Object(i.b)("inlineCode",{parentName:"p"},"publish"),", ",Object(i.b)("inlineCode",{parentName:"p"},"rebuild"),", ",Object(i.b)("inlineCode",{parentName:"p"},"remove"),", ",Object(i.b)("inlineCode",{parentName:"p"},"run"),", ",Object(i.b)("inlineCode",{parentName:"p"},"test"),", ",Object(i.b)("inlineCode",{parentName:"p"},"unlink"),", ",Object(i.b)("inlineCode",{parentName:"p"},"update"),", ",Object(i.b)("inlineCode",{parentName:"p"},"why")),Object(i.b)("p",null,"Aliases: ",Object(i.b)("inlineCode",{parentName:"p"},"m"),", ",Object(i.b)("inlineCode",{parentName:"p"},"multi"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<command> -r")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"true, false, deep"))),Object(i.b)("p",null,"Link locally available packages in workspaces of a monorepo into ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," instead of re-downloading them from the registry. This emulates functionality similar to ",Object(i.b)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),Object(i.b)("p",null,"When this is set to deep, local packages can also be linked to subdependencies."),Object(i.b)("p",null,"Be advised that it is encouraged instead to use ",Object(i.b)("a",{parentName:"p",href:"/zh/next/workspaces#link-workspace-packages"},"npmrc")," for this setting, to enforce the same behaviour in all environments. This option exists solely so you may override that if necessary."),Object(i.b)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),Object(i.b)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"4")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Number"))),Object(i.b)("p",null,"Set the maximum number of tasks to run simultaneously. For unlimited concurrency use ",Object(i.b)("inlineCode",{parentName:"p"},"Infinity"),"."),Object(i.b)("h3",{id:"--no-bail"},"--","[no-]","bail"),Object(i.b)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.13.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"If true, stops when a task throws an error."),Object(i.b)("p",null,"This config does not affect the exit code. Even if ",Object(i.b)("inlineCode",{parentName:"p"},"--no-bail")," is used, all tasks will finish but if any of the tasks fail, the command will exit with a non-zero code."),Object(i.b)("p",null,"Example (run tests in every package, continue if tests fail in one of them):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),Object(i.b)("h3",{id:"--no-sort"},"--","[no-]","sort"),Object(i.b)("p",null,"Added in: v2.14.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", packages are sorted topologically (dependencies before dependents). Pass ",Object(i.b)("inlineCode",{parentName:"p"},"--no-sort")," to disable."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),Object(i.b)("h3",{id:"--reverse"},"--reverse"),Object(i.b)("p",null,"Added in: v5.17.1"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"boolean"))),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", the order of packages is reversed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),Object(i.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/zh/next/filtering"},"Read more about filtering.")))}b.isMDXComponent=!0}}]);