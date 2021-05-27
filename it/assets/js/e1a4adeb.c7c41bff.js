(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(8),o=(n(0),n(318)),a={id:"git",title:"Lavorare con Git"},c={unversionedId:"git",id:"version-6.x/git",isDocsHomePage:!1,title:"Lavorare con Git",description:"File Lock",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/git.md",slug:"/git",permalink:"/it/git",editUrl:"https://crowdin.com/project/pnpm/it",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"Consenti solo pnpm",permalink:"/it/only-allow-pnpm"},next:{title:"Loghi",permalink:"/it/logos"}},l=[{value:"File Lock",id:"file-lock",children:[{value:"Conflitti Merge",id:"conflitti-merge",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"file-lock"},"File Lock"),Object(o.b)("p",null,"Dovresti eseguire sempre il commit del file lock (",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). Questo per molte ragioni, le principali sono:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"permette di avere installazioni veloci per CI e ambienti di produzione, grazie alla possibilit\xe0 di saltare la risoluzione dei pacchetti"),Object(o.b)("li",{parentName:"ul"},"applica installazioni e risoluzioni consistenti tra ambienti di sviluppo, test e produzione, questo significa che i pacchetti usati in test e in produzione saranno gli stessi di quando hai sviluppato il tuo progetto")),Object(o.b)("h3",{id:"conflitti-merge"},"Conflitti Merge"),Object(o.b)("p",null,"pnpm pu\xf2 risolvere automaticamente i conflitti di merge in ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". Se hai conflitti, esegui ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install")," ed esegui il commit dei cambiamenti."),Object(o.b)("p",null,"Attenzione, per\xf2. Si consiglia di controllare i cambiamenti prima di mettere una commit nello stage, perch\xe9 non possiamo garantire che pnpm scelga l\u2019head corretto - compilando invece con il lockfile pi\xf9 recente, essendo l\u2019ideale nella maggior parte dei casi."))}u.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,f=s["".concat(a,".").concat(d)]||s[d]||m[d]||o;return n?r.a.createElement(f,c(c({ref:t},p),{},{components:n})):r.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);