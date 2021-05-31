(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{180:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var a=t(3),i=t(8),o=(t(0),t(318)),s={id:"faq",title:"Domande frequenti (FAQ)",original_id:"faq"},r={unversionedId:"faq",id:"version-4.x/faq",isDocsHomePage:!1,title:"Domande frequenti (FAQ)",description:"Perch\xe9 la mia cartella node_modules utilizza spazio su disco se i pacchetti sono salvati in un archivio globale?",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-4.x/faq.md",slug:"/faq",permalink:"/it/4.x/faq",editUrl:"https://crowdin.com/project/pnpm/it",version:"4.x"},p=[{value:"Perch\xe9 la mia cartella <code>node_modules</code> utilizza spazio su disco se i pacchetti sono salvati in un archivio globale?",id:"perch\xe9-la-mia-cartella-node_modules-utilizza-spazio-su-disco-se-i-pacchetti-sono-salvati-in-un-archivio-globale",children:[]},{value:"Funziona su Windows? It is harder to create symlinks on Windows",id:"funziona-su-windows-it-is-harder-to-create-symlinks-on-windows",children:[]},{value:"Funziona su Windows? Nested <code>node_modules</code> approach is basically incompatible with Windows",id:"funziona-su-windows-nested-node_modules-approach-is-basically-incompatible-with-windows",children:[]},{value:"What about circular symlinks?",id:"what-about-circular-symlinks",children:[]},{value:"Why have hard links at all? Why not symlink directly to the global store?",id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store",children:[]},{value:"Does pnpm work across multiple hard drives or filesystems?",id:"does-pnpm-work-across-multiple-hard-drives-or-filesystems",children:[{value:"Store path is specified",id:"store-path-is-specified",children:[]},{value:"Store path is NOT specified",id:"store-path-is-not-specified",children:[]}]},{value:"What does <code>pnpm store prune</code> do? Is it harmful?",id:"what-does-pnpm-store-prune-do-is-it-harmful",children:[]},{value:"Cosa significa <code>pnpm</code>?",id:"cosa-significa-pnpm",children:[]},{value:"<code>pnpm</code> does not work with &lt;YOUR-PROJECT-HERE&gt;?",id:"pnpm-does-not-work-with-your-project-here",children:[{value:"Solution 1",id:"solution-1",children:[]},{value:"Solution 2",id:"solution-2",children:[]},{value:"Solution 3",id:"solution-3",children:[]}]}],l={toc:p};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"perch\xe9-la-mia-cartella-node_modules-utilizza-spazio-su-disco-se-i-pacchetti-sono-salvati-in-un-archivio-globale"},"Perch\xe9 la mia cartella ",Object(o.b)("inlineCode",{parentName:"h2"},"node_modules")," utilizza spazio su disco se i pacchetti sono salvati in un archivio globale?"),Object(o.b)("p",null,"pnpm creates ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"hard links")," from the global store to project's ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folders. Hard links point to the same place on the disk where the original files are. So, for example, if you have ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," in your project as a dependency and it occupies 1MB of space, then it will look like it occupies 1MB of space in the project's ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder and the same amount of space in the global store. However, that 1MB is ",Object(o.b)("em",{parentName:"p"},"the same space")," on the disk addressed from two different locations. So in total ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," occupies 1MB, not 2MB."),Object(o.b)("p",null,"For more on this subject:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Why do hard links seem to take the same space as the originals?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"A thread from the pnpm chat room")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"An issue in the pnpm repo"))),Object(o.b)("h2",{id:"funziona-su-windows-it-is-harder-to-create-symlinks-on-windows"},"Funziona su Windows? It is harder to create symlinks on Windows"),Object(o.b)("p",null,"Using symlinks on Windows is problematic indeed. That is why pnpm uses junctions instead of symlinks on Windows OS."),Object(o.b)("h2",{id:"funziona-su-windows-nested-node_modules-approach-is-basically-incompatible-with-windows"},"Funziona su Windows? Nested ",Object(o.b)("inlineCode",{parentName:"h2"},"node_modules")," approach is basically incompatible with Windows"),Object(o.b)("p",null,"Early versions of npm had issues because of nesting all ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," (see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"Node's nested node_modules approach is basically incompatible with Windows"),"). However, pnpm does not create deep folders, it stores all packages flatly and uses symlinks to create the dependency tree structure."),Object(o.b)("h2",{id:"what-about-circular-symlinks"},"What about circular symlinks?"),Object(o.b)("p",null,"Although pnpm uses symlinks to put dependencies into ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folders, circular symlinks are avoided because parent packages are placed into the same ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder in which their dependencies are. So ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),"'s dependencies are not in ",Object(o.b)("inlineCode",{parentName:"p"},"foo/node_modules")," but ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," is in ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules/foo"),", together with its own dependencies."),Object(o.b)("h2",{id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store"},"Why have hard links at all? Why not symlink directly to the global store?"),Object(o.b)("p",null,"One package can have different sets of dependencies on one machine."),Object(o.b)("p",null,"In project ",Object(o.b)("strong",{parentName:"p"},"A")," ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," can have dependency resolved to ",Object(o.b)("inlineCode",{parentName:"p"},"bar@1.0.0")," but in project ",Object(o.b)("strong",{parentName:"p"},"B")," the same dependency of ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," might resolve to ",Object(o.b)("inlineCode",{parentName:"p"},"bar@1.1.0"),". So pnpm hard links ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," to every project where it is used, in order to create different sets of dependencies for it."),Object(o.b)("p",null,"Direct symlinking to the global store would work with Node's ",Object(o.b)("inlineCode",{parentName:"p"},"--preserve-symlinks")," flag. But ",Object(o.b)("inlineCode",{parentName:"p"},"--preserve-symlinks")," comes with a bunch of different issues, so we decided to stick with hard links. For more details about why this decision was made, see: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"https://github.com/nodejs/node-eps/issues/46"),"."),Object(o.b)("h2",{id:"does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"Does pnpm work across multiple hard drives or filesystems?"),Object(o.b)("p",null,"The package store should be on the same disk as installations. Otherwise packages will be copied, not linked. This is due to a OS limitation in hard-linking. See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"Issue #712")," for more details."),Object(o.b)("p",null,"pnpm functions differently based on the 2 cases below:"),Object(o.b)("h3",{id:"store-path-is-specified"},"Store path is specified"),Object(o.b)("p",null,"If the store path is specified via ",Object(o.b)("a",{parentName:"p",href:"/it/4.x/configuring"},"the store config"),", then copying occurs between the store and any projects that are on a different disk."),Object(o.b)("p",null,"If you run ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install")," on disk ",Object(o.b)("inlineCode",{parentName:"p"},"D:"),", then the pnpm store must be on disk ",Object(o.b)("inlineCode",{parentName:"p"},"D:"),". If the pnpm store is located on disk ",Object(o.b)("inlineCode",{parentName:"p"},"C:"),", then all required packages will be directly copied to the project location. This severely reduces the benefits of pnpm."),Object(o.b)("h3",{id:"store-path-is-not-specified"},"Store path is NOT specified"),Object(o.b)("p",null,"If the store path is not set, then multiple stores are created (one per each drive or filesystem)."),Object(o.b)("p",null,"If installation is run on disk ",Object(o.b)("inlineCode",{parentName:"p"},"D:"),", the store will be created in ",Object(o.b)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),". If later the installation is run on disk ",Object(o.b)("inlineCode",{parentName:"p"},"C:"),", an independent store will be created in ",Object(o.b)("inlineCode",{parentName:"p"},"C:\\.pnpm-store"),". The projects would still maintain the benefits of pnpm, but each drive may have redundant packages."),Object(o.b)("h2",{id:"what-does-pnpm-store-prune-do-is-it-harmful"},"What does ",Object(o.b)("inlineCode",{parentName:"h2"},"pnpm store prune")," do? Is it harmful?"),Object(o.b)("p",null,"The command ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm store prune")," removes ",Object(o.b)("em",{parentName:"p"},"unreferenced packages"),"."),Object(o.b)("p",null,"Unreferenced packages are packages that are not used by any projects on the system. Packages can become unreferenced after most installation operations."),Object(o.b)("p",null,"For example: during ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install"),", package ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm will keep ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not automatically remove packages. If package ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other project on the system, it becomes unreferenced. Running ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm store prune")," would remove ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),Object(o.b)("p",null,"Running ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm store prune")," is not harmful and has no side effects on your projects. If future installations require removed packages, pnpm will download them again."),Object(o.b)("p",null,"It is best practice to run ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the store, but not too frequently. Sometimes, unreferenced packages become required again. This could occur when switching branches and installing older dependencies. Then pnpm would need to re-download all removed packages, briefly slowing down the installation process."),Object(o.b)("h2",{id:"cosa-significa-pnpm"},"Cosa significa ",Object(o.b)("inlineCode",{parentName:"h2"},"pnpm"),"?"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pnpm")," significa ",Object(o.b)("inlineCode",{parentName:"p"},"npm performante"),". ",Object(o.b)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"Rico Sta. Cruz")," ha ideato questo nome."),Object(o.b)("h2",{id:"pnpm-does-not-work-with-your-project-here"},Object(o.b)("inlineCode",{parentName:"h2"},"pnpm")," does not work with ","<","YOUR-PROJECT-HERE",">","?"),Object(o.b)("p",null,"In most cases it means that one of the dependencies require packages not declared in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". It is a common mistake caused by flat ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),". If this happens, this is an error in the dependency and the dependency should be fixed. That might take time though, so pnpm supports workarounds to make the buggy packages work."),Object(o.b)("h3",{id:"solution-1"},"Solution 1"),Object(o.b)("p",null,"In the following example, a dependency does ",Object(o.b)("strong",{parentName:"p"},"not")," have the ",Object(o.b)("inlineCode",{parentName:"p"},"iterall")," module in its own list of deps."),Object(o.b)("p",null,"The easiest solution to resolve missing dependencies of the buggy packages is to ",Object(o.b)("strong",{parentName:"p"},"add ",Object(o.b)("inlineCode",{parentName:"strong"},"iterall")," as a dependency to our project's ",Object(o.b)("inlineCode",{parentName:"strong"},"package.json")),"."),Object(o.b)("p",null,"You can do so, by installing it via:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pnpm i iterall")),Object(o.b)("p",null,"It will be automatically added to your project's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),Object(o.b)("h3",{id:"solution-2"},"Solution 2"),Object(o.b)("p",null,"One of the solutions is to use ",Object(o.b)("a",{parentName:"p",href:"/it/4.x/pnpmfile#hooks"},"hooks")," for adding the missing dependencies to the package's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(o.b)("p",null,"An example was ",Object(o.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," which wasn't working with ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm"),". It has since been resolved such that it works with ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm")," now."),Object(o.b)("p",null,"It used to throw an error:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/.registry.npmjs.org/inspectpack/2.2.3/node_modules/inspectpack/lib/actions/parse\n")),Object(o.b)("p",null,"The problem was that ",Object(o.b)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",Object(o.b)("inlineCode",{parentName:"p"},"inspectpack")," library which was used by ",Object(o.b)("inlineCode",{parentName:"p"},"webpack-dashboard"),". But ",Object(o.b)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in ",Object(o.b)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," and ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," because they create flat ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(o.b)("p",null,"Solution was to create a ",Object(o.b)("inlineCode",{parentName:"p"},"pnpmfile.js")," with the following contents:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage (pkg) {\n      switch (pkg.name) {\n        case 'inspectpack':\n          pkg.dependencies['babel-traverse'] = '^6.26.0'\n          break\n      }\n      return pkg\n    }\n  }\n}\n")),Object(o.b)("p",null,"After creating ",Object(o.b)("inlineCode",{parentName:"p"},"pnpmfile.js"),", delete ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," only. No need to delete ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),". Then install the dependencies & it should be working."),Object(o.b)("h3",{id:"solution-3"},"Solution 3"),Object(o.b)("p",null,"In case there are too many issues, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"shamefully-hoist")," config. This creates a flat ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yarn"),"."),Object(o.b)("p",null,"To use it, try ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}c.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),c=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,u=d["".concat(s,".").concat(m)]||d[m]||b[m]||o;return t?i.a.createElement(u,r(r({ref:n},l),{},{components:t})):i.a.createElement(u,r({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var l=2;l<o;l++)s[l]=t[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);