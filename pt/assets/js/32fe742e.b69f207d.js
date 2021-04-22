(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{134:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t(3),i=t(8),r=(t(0),t(318)),o={id:"continuous-integration",title:"Continuous Integration"},p={unversionedId:"continuous-integration",id:"version-6.x/continuous-integration",isDocsHomePage:!1,title:"Continuous Integration",description:"pnpm can easily be used in various continuous integration systems.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/continuous-integration.md",slug:"/continuous-integration",permalink:"/pt/continuous-integration",editUrl:"https://crowdin.com/project/pnpm/pt",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"Using Changesets with pnpm",permalink:"/pt/using-changesets"},next:{title:"Only allow pnpm",permalink:"/pt/only-allow-pnpm"}},s=[{value:"Travis",id:"travis",children:[]},{value:"Semaphore",id:"semaphore",children:[]},{value:"AppVeyor",id:"appveyor",children:[]},{value:"Sail CI",id:"sail-ci",children:[]},{value:"GitHub Actions",id:"github-actions",children:[]},{value:"Gitlab CI",id:"gitlab-ci",children:[]}],l={toc:s};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"pnpm can easily be used in various continuous integration systems."),Object(r.b)("h2",{id:"travis"},"Travis"),Object(r.b)("p",null,"On ",Object(r.b)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),", you can use pnpm for installing your dependencies by adding this to your ",Object(r.b)("inlineCode",{parentName:"p"},".travis.yml")," file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.js | node - add --global pnpm@6\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),Object(r.b)("h2",{id:"semaphore"},"Semaphore"),Object(r.b)("p",null,"On ",Object(r.b)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", you can use pnpm for installing and caching your dependencies by adding this to your ",Object(r.b)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml")," file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.js | node - add --global pnpm@6\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) ~/.pnpm-store\n")),Object(r.b)("h2",{id:"appveyor"},"AppVeyor"),Object(r.b)("p",null,"On ",Object(r.b)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),", you can use pnpm for installing your dependencies by adding this to your ",Object(r.b)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.js | node - add --global pnpm@6\n  - pnpm install\n")),Object(r.b)("h2",{id:"sail-ci"},"Sail CI"),Object(r.b)("p",null,"On ","[Sail CI]",", you can use pnpm for installing your dependencies by adding this to your ",Object(r.b)("inlineCode",{parentName:"p"},".sail.yml")," file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".sail.yml"',title:'".sail.yml"'},"install:\n  image: znck/pnpm:latest\n  command:\n    - pnpm\n  args:\n    - install\n")),Object(r.b)("p",null,"To get the exact Node version and pnpm version you require you can always make your own Docker image and push to ",Object(r.b)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),"."),Object(r.b)("h2",{id:"github-actions"},"GitHub Actions"),Object(r.b)("p",null,"On GitHub Actions, you can use pnpm for installing and caching your dependencies like so (belongs in ",Object(r.b)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n    - name: Cache .pnpm-store\n      uses: actions/cache@v1\n      with:\n        path: ~/.pnpm-store\n        key: ${{ runner.os }}-node${{ matrix.node-version }}-${{ hashFiles('**/pnpm-lock.yaml') }}\n    - name: Install pnpm\n      run: curl -f https://get.pnpm.io/v6.js | node - add --global pnpm@6\n    - name: pnpm Build\n      run: pnpm install\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Using ",Object(r.b)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," you need to install pnpm with ",Object(r.b)("a",{parentName:"p",href:"https://github.com/actions/setup-node/issues/177"},"root permissions"),", eg:",Object(r.b)("inlineCode",{parentName:"p"},"sudo npm install -g pnpm"),". Alternatively, if you specify the Node.js version to use, pnpm may be installed with no priviledged user."))),Object(r.b)("h2",{id:"gitlab-ci"},"Gitlab CI"),Object(r.b)("p",null,"On Gitlab, you can use pnpm for installing and caching your dependencies like so (belongs in ",Object(r.b)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},'stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.js | node - add --global pnpm@6\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key: "$CI_COMMIT_REF_SLUG"\n    paths:\n      - .pnpm-store\n')))}c.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),c=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=c(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),b=a,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||r;return t?i.a.createElement(d,p(p({ref:n},l),{},{components:t})):i.a.createElement(d,p({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);