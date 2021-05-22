(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{297:function(I,e,i){"use strict";i.r(e),i.d(e,"frontMatter",(function(){return n})),i.d(e,"metadata",(function(){return b})),i.d(e,"toc",(function(){return g})),i.d(e,"default",(function(){return r}));var t=i(3),a=i(8),l=(i(0),i(318)),n={},b={type:"mdx",permalink:"/tr/benchmarks",source:"@site/src/pages/benchmarks.md"},g=[{value:"Lots of Files",id:"lots-of-files",children:[]}],j={toc:g};function r(I){var e=I.components,n=Object(a.a)(I,["components"]);return Object(l.b)("wrapper",Object(t.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"benchmarks-of-javascript-package-managers"},"Benchmarks of JavaScript Package Managers"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Last benchmarked at"),": ",Object(l.b)("em",{parentName:"p"},"May 22, 2021, 7:21 PM")," (",Object(l.b)("em",{parentName:"p"},"daily")," updated)."),Object(l.b)("p",null,"This benchmark compares the performance of npm, pnpm, and Yarn (both regular and PnP variant)."),Object(l.b)("p",null,"Here's a quick explanation of how these tests could apply to the real world:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"clean install"),": How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with cache"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with lockfile"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with node_modules"),": After the first install is done, the install command is run again."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with cache"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with lockfile"),": When a repo is fetched by a developer and installation is first run."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with cache"),": Same as the one above, but the package manager doesn't have a lockfile to work from."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with lockfile"),": When an installation runs on a CI server."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with cache"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with node_modules"),": The lockfile is deleted and the install command is run again."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with node_modules"),", ",Object(l.b)("inlineCode",{parentName:"li"},"with lockfile"),": The package cache is deleted and the install command is run again."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"with node_modules"),": The package cache and the lockfile is deleted and the install command is run again."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"update"),": Updating your dependencies by changing the version in the ",Object(l.b)("inlineCode",{parentName:"li"},"package.json")," and running the install command again.")),Object(l.b)("h2",{id:"lots-of-files"},"Lots of Files"),Object(l.b)("p",null,"The app's ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(l.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json"},"here")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"action"),Object(l.b)("th",{parentName:"tr",align:null},"cache"),Object(l.b)("th",{parentName:"tr",align:null},"lockfile"),Object(l.b)("th",{parentName:"tr",align:null},"node_modules"),Object(l.b)("th",{parentName:"tr",align:null},"npm"),Object(l.b)("th",{parentName:"tr",align:null},"pnpm"),Object(l.b)("th",{parentName:"tr",align:null},"Yarn Berry"),Object(l.b)("th",{parentName:"tr",align:null},"Yarn Berry PnP"),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"46.8s"),Object(l.b)("td",{parentName:"tr",align:null},"14s"),Object(l.b)("td",{parentName:"tr",align:null},"53.9s"),Object(l.b)("td",{parentName:"tr",align:null},"44.3s"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"1.7s"),Object(l.b)("td",{parentName:"tr",align:null},"1.3s"),Object(l.b)("td",{parentName:"tr",align:null},"2.2s"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"10.4s"),Object(l.b)("td",{parentName:"tr",align:null},"3.9s"),Object(l.b)("td",{parentName:"tr",align:null},"12.7s"),Object(l.b)("td",{parentName:"tr",align:null},"1.8s"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"24.4s"),Object(l.b)("td",{parentName:"tr",align:null},"7s"),Object(l.b)("td",{parentName:"tr",align:null},"18.2s"),Object(l.b)("td",{parentName:"tr",align:null},"7.1s"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"26.5s"),Object(l.b)("td",{parentName:"tr",align:null},"12.1s"),Object(l.b)("td",{parentName:"tr",align:null},"46.5s"),Object(l.b)("td",{parentName:"tr",align:null},"35.2s"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"2.3s"),Object(l.b)("td",{parentName:"tr",align:null},"1.7s"),Object(l.b)("td",{parentName:"tr",align:null},"7.5s"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"1.7s"),Object(l.b)("td",{parentName:"tr",align:null},"1.3s"),Object(l.b)("td",{parentName:"tr",align:null},"37s"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"install"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"\u2714"),Object(l.b)("td",{parentName:"tr",align:null},"2.5s"),Object(l.b)("td",{parentName:"tr",align:null},"5.6s"),Object(l.b)("td",{parentName:"tr",align:null},"42s"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"update"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null},"n/a"),Object(l.b)("td",{parentName:"tr",align:null},"1.7s"),Object(l.b)("td",{parentName:"tr",align:null},"10.8s"),Object(l.b)("td",{parentName:"tr",align:null},"1m 4.7s"),Object(l.b)("td",{parentName:"tr",align:null},"56.3s"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("p",null,Object(l.b)("img",{alt:"Graph of the alotta-files results",src:i(410).default})))}r.isMDXComponent=!0},318:function(I,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return N}));var t=i(0),a=i.n(t);function l(I,e,i){return e in I?Object.defineProperty(I,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):I[e]=i,I}function n(I,e){var i=Object.keys(I);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(I);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(I,e).enumerable}))),i.push.apply(i,t)}return i}function b(I){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){l(I,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(I,e,Object.getOwnPropertyDescriptor(i,e))}))}return I}function g(I,e){if(null==I)return{};var i,t,a=function(I,e){if(null==I)return{};var i,t,a={},l=Object.keys(I);for(t=0;t<l.length;t++)i=l[t],e.indexOf(i)>=0||(a[i]=I[i]);return a}(I,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(I);for(t=0;t<l.length;t++)i=l[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(I,i)&&(a[i]=I[i])}return a}var j=a.a.createContext({}),r=function(I){var e=a.a.useContext(j),i=e;return I&&(i="function"==typeof I?I(e):b(b({},e),I)),i},c=function(I){var e=r(I.components);return a.a.createElement(j.Provider,{value:e},I.children)},d={inlineCode:"code",wrapper:function(I){var e=I.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(I,e){var i=I.components,t=I.mdxType,l=I.originalType,n=I.parentName,j=g(I,["components","mdxType","originalType","parentName"]),c=r(i),m=t,N=c["".concat(n,".").concat(m)]||c[m]||d[m]||l;return i?a.a.createElement(N,b(b({ref:e},j),{},{components:i})):a.a.createElement(N,b({ref:e},j))}));function N(I,e){var i=arguments,t=e&&e.mdxType;if("string"==typeof I||t){var l=i.length,n=new Array(l);n[0]=m;var b={};for(var g in e)hasOwnProperty.call(e,g)&&(b[g]=e[g]);b.originalType=I,b.mdxType="string"==typeof I?I:t,n[1]=b;for(var j=2;j<l;j++)n[j]=i[j];return a.a.createElement.apply(null,n)}return a.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},410:function(I,e,i){"use strict";i.r(e),e.default="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMwMCAzMTkiPgogIDxzdHlsZT4KICAgIC5mb250IHsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IH0KICAgIC5zMyB7IGZvbnQtc2l6ZTogM3B4OyB9CiAgICAuczQgeyBmb250LXNpemU6IDRweDsgfQogICAgLnM1IHsgZm9udC1zaXplOiA1cHg7IH0KICAgIC5saW5lIHsgc3Ryb2tlOiAjY2FjYWNhOyB9CiAgICAud2lkdGggeyBzdHJva2Utd2lkdGg6IDAuNTsgfQogICAgLnRleHQgeyBmaWxsOiAjODg4OyB9CiAgPC9zdHlsZT4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMxOSIgZmlsbD0iI2ZmZiI+PC9yZWN0PgogIDxjaXJjbGUgY3g9IjQ0IiBjeT0iNiIgcj0iNCIgZmlsbD0iI2NkMzczMSI+PC9jaXJjbGU+CiAgPHRleHQgeD0iNDQiIHk9IjE0IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bnBtPC90ZXh0PgogIDx0ZXh0IHg9IjQ0IiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnY3LjE0LjA8L3RleHQ+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSI2IiByPSI0IiBmaWxsPSIjZmJhZTAwIj48L2NpcmNsZT4KICA8dGV4dCB4PSI2MCIgeT0iMTQiIGNsYXNzPSJmb250IHM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5wbnBtPC90ZXh0PgogIDx0ZXh0IHg9IjYwIiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnY2LjQuMDwvdGV4dD4KICA8Y2lyY2xlIGN4PSI3NiIgY3k9IjYiIHI9IjQiIGZpbGw9IiMyNDhlYmQiPjwvY2lyY2xlPgogIDx0ZXh0IHg9Ijc2IiB5PSIxNCIgY2xhc3M9ImZvbnQgczQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPllhcm4gQmVycnk8L3RleHQ+CiAgPHRleHQgeD0iNzYiIHk9IjE4IiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djIuNC4xPC90ZXh0PgogIDxjaXJjbGUgY3g9IjkyIiBjeT0iNiIgcj0iNCIgZmlsbD0iIzI0OGViZCI+PC9jaXJjbGU+CiAgPHRleHQgeD0iOTIiIHk9IjE0IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+WWFybiBCZXJyeSBQblA8L3RleHQ+CiAgPHRleHQgeD0iOTIiIHk9IjE4IiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djIuNC4xPC90ZXh0PgogIDx0ZXh0IHg9IjQwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PgogIDxsaW5lIHgxPSI5MCIgeTE9IjMxIiB4Mj0iOTAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iOTAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMzwvdGV4dD4KICA8dGV4dCB4PSI5MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMzwvdGV4dD4KICA8bGluZSB4MT0iMTQwIiB5MT0iMzEiIHgyPSIxNDAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iMTQwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjY8L3RleHQ+CiAgPHRleHQgeD0iMTQwIiB5PSIzMTAiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjI2PC90ZXh0PgogIDxsaW5lIHgxPSIxOTAiIHkxPSIzMSIgeDI9IjE5MCIgeTI9IjMwNSIgY2xhc3M9ImxpbmUgd2lkdGgiPjwvbGluZT4KICA8dGV4dCB4PSIxOTAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zOTwvdGV4dD4KICA8dGV4dCB4PSIxOTAiIHk9IjMxMCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Mzk8L3RleHQ+CiAgPGxpbmUgeDE9IjI0MCIgeTE9IjMxIiB4Mj0iMjQwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjI0MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjUyPC90ZXh0PgogIDx0ZXh0IHg9IjI0MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41MjwvdGV4dD4KICA8bGluZSB4MT0iMjkwIiB5MT0iMzEiIHgyPSIyOTAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iMjkwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NjU8L3RleHQ+CiAgPHRleHQgeD0iMjkwIiB5PSIzMTAiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjY1PC90ZXh0PgogIDx0ZXh0IHg9IjI5MCIgeT0iMjAiIGNsYXNzPSJmb250IHM0IHRleHQiIGZvbnQtc3R5bGU9Iml0YWxpYyIgdGV4dC1hbmNob3I9ImVuZCI+SW5zdGFsbGF0aW9uIHRpbWUgaW4gc2Vjb25kcyAobG93ZXIgaXMgYmV0dGVyKTwvdGV4dD4KICA8cmVjdCB4PSI0MCIgeT0iMzUiIHdpZHRoPSIxODAiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjQxLjUiIHdpZHRoPSI1NCIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iNDgiIHdpZHRoPSIyMDciIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjU0LjUiIHdpZHRoPSIxNzAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjY1IiB3aWR0aD0iNyIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iNzEuNSIgd2lkdGg9IjUiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9Ijc4IiB3aWR0aD0iOCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iODQuNSIgd2lkdGg9IjAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9Ijk1IiB3aWR0aD0iNDAiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEwMS41IiB3aWR0aD0iMTUiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEwOCIgd2lkdGg9IjQ5IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMTQuNSIgd2lkdGg9IjciIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEyNSIgd2lkdGg9Ijk0IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMzEuNSIgd2lkdGg9IjI3IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMzgiIHdpZHRoPSI3MCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTQ0LjUiIHdpZHRoPSIyNyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTU1IiB3aWR0aD0iMTAyIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNjEuNSIgd2lkdGg9IjQ3IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNjgiIHdpZHRoPSIxNzkiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE3NC41IiB3aWR0aD0iMTM1IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxODUiIHdpZHRoPSI5IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxOTEuNSIgd2lkdGg9IjciIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE5OCIgd2lkdGg9IjI5IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMDQuNSIgd2lkdGg9IjAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjIxNSIgd2lkdGg9IjciIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjIyMS41IiB3aWR0aD0iNSIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjI4IiB3aWR0aD0iMTQyIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMzQuNSIgd2lkdGg9IjAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI0NSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNTEuNSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNTgiIHdpZHRoPSIxNjIiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI2NC41IiB3aWR0aD0iMCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjc1IiB3aWR0aD0iNyIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjgxLjUiIHdpZHRoPSI0MiIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjg4IiB3aWR0aD0iMjQ5IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyOTQuNSIgd2lkdGg9IjIxNyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8bGluZSB4MT0iNDAiIHkxPSIzMSIgeDI9IjQwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSI+PC9saW5lPgogIDx0ZXh0IHg9IjM4IiB5PSI0NC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+Y2xlYW4gaW5zdGFsbDwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iNzAuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggY2FjaGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9Ijc0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGxvY2tmaWxlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSI3OC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBub2RlX21vZHVsZXM8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjEwMi41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBjYWNoZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTA2LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGxvY2tmaWxlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxMzQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggY2FjaGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjE2NC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBsb2NrZmlsZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTkyLjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGNhY2hlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxOTYuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbm9kZV9tb2R1bGVzPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIyMjIuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbm9kZV9tb2R1bGVzPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIyMjYuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjI1NC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBub2RlX21vZHVsZXM8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjI4NC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+dXBkYXRlPC90ZXh0PgogIDx0ZXh0IHg9IjI5MCIgeT0iMzE3IiBjbGFzcz0iZm9udCBzNCB0ZXh0IiB0ZXh0LWFuY2hvcj0iZW5kIj5UZXN0cyB3ZXJlIHJ1biB1c2luZyBOb2RlLmpzIHYxNi4yLjAgYXQ6IE1heSAyMiwgMjAyMSwgNzoyMSBQTTwvdGV4dD4KPC9zdmc+Cg=="}}]);