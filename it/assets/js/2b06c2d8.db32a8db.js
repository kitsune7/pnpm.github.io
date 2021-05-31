(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(8),i=(t(0),t(318)),a={id:"remove",title:"pnpm remove",original_id:"remove"},c={unversionedId:"cli/remove",id:"version-4.x/cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"Rimuove i pacchetti da node_modules e dal package.json del progetto.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-4.x/cli/remove.md",slug:"/cli/remove",permalink:"/it/4.x/cli/remove",editUrl:"https://crowdin.com/project/pnpm/it",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"pnpm update",permalink:"/it/4.x/cli/update"},next:{title:"pnpm link",permalink:"/it/4.x/cli/link"}},p=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]}]}],l={toc:p};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Rimuove i pacchetti da ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," e dal ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," del progetto."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm remove [-r] [--filter <package_selector>] <pkg>...\npnpm recursive remove [--filter <package_selector>] <pkg>...\npnpm multi remove [--filter <package_selector>] <pkg>...\n")),Object(i.b)("p",null,"Alias: rm, uninstall, un"),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(i.b)("p",null,"When used inside a ",Object(i.b)("a",{parentName:"p",href:"/it/4.x/workspaces"},"workspace"),", removes a dependency (or dependencies) from every workspace package."),Object(i.b)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from every package found in subdirectories."),Object(i.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/it/4.x/filtering"},"Read more about filtering.")),Object(i.b)("h3",{id:"--global"},"--global"),Object(i.b)("p",null,"Rimuove un pacchetto installato globalmente."),Object(i.b)("h3",{id:"--save-dev--d"},"--save-dev, -D"),Object(i.b)("p",null,"Remove the dependency only from ",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(i.b)("h3",{id:"--save-optional--o"},"--save-optional, -O"),Object(i.b)("p",null,"Remove the dependency only from ",Object(i.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(i.b)("h3",{id:"--save-prod--p"},"--save-prod, -P"),Object(i.b)("p",null,"Remove the dependency only from ",Object(i.b)("inlineCode",{parentName:"p"},"dependencies"),"."))}d.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(t),b=r,m=u["".concat(a,".").concat(b)]||u[b]||s[b]||i;return t?o.a.createElement(m,c(c({ref:n},l),{},{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);