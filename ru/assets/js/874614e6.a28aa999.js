(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{196:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var o=t(3),a=t(8),r=(t(0),t(318)),p={title:"\u041f\u043b\u043e\u0441\u043a\u0438\u0439 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},s={permalink:"/ru/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://crowdin.com/project/pnpm/ru",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",description:"\u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 pnpm \u0447\u0430\u0441\u0442\u043e \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043c\u0435\u043d\u044f \u043e \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 node_modules \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 pnpm. \u041f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0430 \u043d\u0435 \u043f\u043b\u043e\u0441\u043a\u0430\u044f? \u0413\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u043f\u043e\u0434-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438?",date:"2020-05-27T00:00:00.000Z",formattedDate:"27 \u043c\u0430\u044f 2020 \u0433.",tags:[],title:"\u041f\u043b\u043e\u0441\u043a\u0438\u0439 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c",readingTime:2.675,truncated:!0,prevItem:{title:"Node-Modules configuration options with pnpm",permalink:"/ru/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},l=[],i={toc:l};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 pnpm \u0447\u0430\u0441\u0442\u043e \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043c\u0435\u043d\u044f \u043e \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 pnpm. \u041f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0430 \u043d\u0435 \u043f\u043b\u043e\u0441\u043a\u0430\u044f? \u0413\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u043f\u043e\u0434-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438?"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u042f \u043f\u0440\u0438\u043d\u044f\u043b \u0441\u0447\u0438\u0442\u0430\u0442\u044c, \u0447\u0442\u043e \u0447\u0438\u0442\u0430\u0442\u0435\u043b\u0438 \u044d\u0442\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 \u0443\u0436\u0435 \u0445\u043e\u0440\u043e\u0448\u043e \u0437\u043d\u0430\u043a\u043e\u043c\u044b \u0441 \u043f\u043b\u043e\u0441\u043a\u0438\u043c ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),", \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u043c npm \u0438 Yarn. If you don't understand why npm 3 had to start using flat ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," in v3, you can find some prehistory in ",Object(r.b)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"Why should we use pnpm?"),".")),Object(r.b)("p",null,"So why is pnpm's ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," unusual? Let's create two directories and run ",Object(r.b)("inlineCode",{parentName:"p"},"npm add express")," in one of them and ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm add express")," in the other one. Here's the top of what you get in the first directory's ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),Object(r.b)("p",null,"You can see the whole directory ",Object(r.b)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"here"),"."),Object(r.b)("p",null,"And this is what you get in the ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," created by pnpm:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),Object(r.b)("p",null,"You can check it ",Object(r.b)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"here"),"."),Object(r.b)("p",null,"So where are all the dependencies? There is only one folder in the ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," called ",Object(r.b)("inlineCode",{parentName:"p"},".pnpm")," and a symlink called ",Object(r.b)("inlineCode",{parentName:"p"},"express"),". Well, we installed only ",Object(r.b)("inlineCode",{parentName:"p"},"express"),", so that is the only package that your application has to have access to"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Read more about why pnpm's strictness is a good thing ",Object(r.b)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"here"))),Object(r.b)("p",null,"Let's see what is inside ",Object(r.b)("inlineCode",{parentName:"p"},"express"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n    .modules.yaml\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"express")," has no ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),"? Where are all the dependencies of ",Object(r.b)("inlineCode",{parentName:"p"},"express"),"?"),Object(r.b)("p",null,"The trick is that ",Object(r.b)("inlineCode",{parentName:"p"},"express")," is just a symlink. When Node.js resolves dependencies, it uses their real locations, so it does not preserve symlinks. But where is the real location of ",Object(r.b)("inlineCode",{parentName:"p"},"express"),", you might ask?"),Object(r.b)("p",null,"Here: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express"),"."),Object(r.b)("p",null,"OK, so now we know the purpose of the ",Object(r.b)("inlineCode",{parentName:"p"},".pnpm/")," folder. ",Object(r.b)("inlineCode",{parentName:"p"},".pnpm/")," stores all the packages in a flat folder structure, so every package can be found in a folder named by this pattern:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},".pnpm/<name>@<version>/node_modules/<name>\n")),Object(r.b)("p",null,"We call it the virtual store directory."),Object(r.b)("p",null,"This flat structure avoids the long path issues that were caused by the nested ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," created by npm v2 but keeps packages isolated unlike the flat ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," created by npm v3,4,5,6 or Yarn v1."),Object(r.b)("p",null,"Now let's look into the real location of ",Object(r.b)("inlineCode",{parentName:"p"},"express"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),Object(r.b)("p",null,"Is it a scam? It still lacks ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),"! The second trick of pnpm's ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," structure is that the dependencies of packages are on the same directory level on which the real location of the dependent package. So dependencies of ",Object(r.b)("inlineCode",{parentName:"p"},"express")," are not in ",Object(r.b)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/")," but in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),Object(r.b)("p",null,"All the dependencies of ",Object(r.b)("inlineCode",{parentName:"p"},"express")," are symlinks to appropriate directories in ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules/.pnpm/"),". Placing dependencies of ",Object(r.b)("inlineCode",{parentName:"p"},"express")," one level up allows avoiding circular symlinks."),Object(r.b)("p",null,"So as you can see, even though pnpm's ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," structure seems unusual at first:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"it is completely Node.js compatible"),Object(r.b)("li",{parentName:"ol"},"packages are nicely grouped with their dependencies")),Object(r.b)("p",null,"The structure is a little bit ",Object(r.b)("a",{parentName:"p",href:"/how-peers-are-resolved"},"more complex")," for packages with peer dependencies but the idea is the same: using symlinks to create a nesting with a flat directory structure."))}c.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),c=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,b=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return t?a.a.createElement(b,s(s({ref:n},i),{},{components:t})):a.a.createElement(b,s({ref:n},i))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,p=new Array(r);p[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var i=2;i<r;i++)p[i]=t[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);