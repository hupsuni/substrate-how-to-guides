(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return d})),a.d(t,"MDXProvider",(function(){return u})),a.d(t,"mdx",(function(){return x})),a.d(t,"useMDXComponents",(function(){return l})),a.d(t,"withMDXComponents",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),m=function(e){return function(t){var a=l(t.components);return r.a.createElement(e,i({},t,{components:a}))}},l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,u=d["".concat(i,".").concat(m)]||d[m]||h[m]||o;return a?r.a.createElement(u,s(s({ref:t},p),{},{components:a})):r.a.createElement(u,s({ref:t},p))}));function x(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),o=(a(0),a(186)),i={sidebar_position:2},p={unversionedId:"tools/create-tx-wrapper-package",id:"tools/create-tx-wrapper-package",isDocsHomePage:!1,title:"Create a `txwrapper` for a chain",description:"\ud83c\udf6c",source:"@site/docs/08-tools/create-tx-wrapper-package.md",sourceDirName:"08-tools",slug:"/tools/create-tx-wrapper-package",permalink:"/substrate-how-to-guides/docs/tools/create-tx-wrapper-package",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/08-tools/create-tx-wrapper-package.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Include `try-runtime` in your project",permalink:"/substrate-how-to-guides/docs/tools/integrate-try-runtime"},next:{title:"Track Parachain auction winners using Substrate API Sidecar",permalink:"/substrate-how-to-guides/docs/tools/auction-winners-sidecar"}},s=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Create a repo using <code>txwrapper-template</code>",id:"1-create-a-repo-using-txwrapper-template",children:[]},{value:"2. Update <code>package.json</code>",id:"2-update-packagejson",children:[]},{value:"3. Choose relevant methods to re-export",id:"3-choose-relevant-methods-to-re-export",children:[]},{value:"4. Create a <code>getRegistry</code> method",id:"4-create-a-getregistry-method",children:[]},{value:"5. Create a working example",id:"5-create-a-working-example",children:[]},{value:"6. Publish your package",id:"6-publish-your-package",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Resources",id:"resources",children:[]}],c={toc:s};function d(e){var t=e.components,a=Object(r.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(n.default)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"\ud83c\udf6c"),Object(o.mdx)("h2",{id:"goal"},"Goal"),Object(o.mdx)("p",null,"Structure the public API of a chain's ",Object(o.mdx)("inlineCode",{parentName:"p"},"txwrapper")," package."),Object(o.mdx)("h2",{id:"use-cases"},"Use cases"),Object(o.mdx)("p",null,"For existing ",Object(o.mdx)("inlineCode",{parentName:"p"},"txwrapper")," users to easily integrate new txwrappers."),Object(o.mdx)("h2",{id:"overview"},"Overview"),Object(o.mdx)("p",null,"Creating a ",Object(o.mdx)("inlineCode",{parentName:"p"},"txwrapper")," package will expand the offline signing options for users of your chain. This is important for security\nconscious users who need to facilitate transaction signing, construction and/or decoding with an air-gapped device(s). This includes\n(but is not limited to) custodians, exchanges, and cold storage users."),Object(o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.mdx)("div",{parentName:"div",className:"admonition-content"},Object(o.mdx)("p",{parentName:"div"},"Prior to building a ",Object(o.mdx)("inlineCode",{parentName:"p"},"txwrapper")," for your own chain, have a look at the ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/blob/main/packages/txwrapper-examples/README.md"},Object(o.mdx)("inlineCode",{parentName:"a"},"txwrapper-examples")),". Make sure you understand the Polkadot example and take a look at the ",Object(o.mdx)("inlineCode",{parentName:"p"},"txwrapper-core")," methods an end user is expected to use (see ",Object(o.mdx)("inlineCode",{parentName:"p"},"decode"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"construct.{signingPayload, signedTx, txHash}"),"). Your package will be re-exporting these so be sure to understand the public API you will create."))),Object(o.mdx)("h2",{id:"steps"},"Steps"),Object(o.mdx)("h3",{id:"1-create-a-repo-using-txwrapper-template"},"1. Create a repo using ",Object(o.mdx)("inlineCode",{parentName:"h3"},"txwrapper-template")),Object(o.mdx)("p",null,"Copy the ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/blob/main/packages/txwrapper-template"},Object(o.mdx)("inlineCode",{parentName:"a"},"txwrapper-template"))," directory into your working repository."),Object(o.mdx)("p",null,"The template provides the basics of a typescript package near ready for being published to ",Object(o.mdx)("inlineCode",{parentName:"p"},"NPM"),". The exports show some methods\nthat are relevant to a FRAME based chain using at least the ",Object(o.mdx)("inlineCode",{parentName:"p"},"balances"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"proxy"),", and ",Object(o.mdx)("inlineCode",{parentName:"p"},"utility pallets"),"."),Object(o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.mdx)("div",{parentName:"div",className:"admonition-content"},Object(o.mdx)("p",{parentName:"div"},"All of ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core"},Object(o.mdx)("inlineCode",{parentName:"a"},"txwrapper-core"))," is re-exported at the top level to give the user access to its tools."))),Object(o.mdx)("h3",{id:"2-update-packagejson"},"2. Update ",Object(o.mdx)("inlineCode",{parentName:"h3"},"package.json")),Object(o.mdx)("p",null,"Modify the following fields to reflect your chains information: "),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"name"),Object(o.mdx)("li",{parentName:"ul"},"author "),Object(o.mdx)("li",{parentName:"ul"},"description "),Object(o.mdx)("li",{parentName:"ul"},"repository "),Object(o.mdx)("li",{parentName:"ul"},"bugs "),Object(o.mdx)("li",{parentName:"ul"},"homepage"),Object(o.mdx)("li",{parentName:"ul"},"private (mark as false) ")),Object(o.mdx)("p",null,"Additionally, add the following field to give publishing permission:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},'  "publishConfig": {\n    "access": "public"\n  },\n')),Object(o.mdx)("h3",{id:"3-choose-relevant-methods-to-re-export"},"3. Choose relevant methods to re-export"),Object(o.mdx)("p",null,"You will need to choose what pallet methods you want your ",Object(o.mdx)("inlineCode",{parentName:"p"},"txwrapper")," to expose. It is recommended to choose methods that are likely to be\nsigned by keys stored offline. "),Object(o.mdx)("div",{className:"admonition admonition-info alert alert--info"},Object(o.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.mdx)("div",{parentName:"div",className:"admonition-content"},Object(o.mdx)("p",{parentName:"div"},"If you just need methods from Substrate or ORML pallets, checkout ",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/blob/main/packages/txwrapper-substrate/README.md"},"txwrapper-substrate")," and\n",Object(o.mdx)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/blob/main/packages/txwrapper-orml/README.md"},"txwrapper-orml")," to see if the methods are already defined."))),Object(o.mdx)("h3",{id:"4-create-a-getregistry-method"},"4. Create a ",Object(o.mdx)("inlineCode",{parentName:"h3"},"getRegistry")," method"),Object(o.mdx)("p",null," Your txwrapper will need to export a ",Object(o.mdx)("inlineCode",{parentName:"p"},"getRegistry")," method so users can get a Polkadot-js ",Object(o.mdx)("inlineCode",{parentName:"p"},"TypeRegistry")," with the most up-to-date types for your chain."),Object(o.mdx)("p",null,"With some small modifications, the ",Object(o.mdx)("inlineCode",{parentName:"p"},"foo")," example below can be applied to any ",Object(o.mdx)("inlineCode",{parentName:"p"},"FRAME"),"-based chain compatible with Polkadot-js types:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"// src/index.ts\n\nimport { typesBundleForPolkadot } from '@foo-network/type-definitions';\nimport { OverrideBundleType } from '@polkadot/types/types';\nimport {\n  getRegistryBase,\n  GetRegistryOptsCore,\n  getSpecTypes,\n  TypeRegistry,\n} from '@substrate/txwrapper-core';\n\n// As a convenience to users we can provide them with hardcoded chain properties\n// as these rarely change.\n/**\n * `ChainProperties` for networks that txwrapper-foo supports. These are normally returned\n * by `system_properties` call, but since they don't change much, it's pretty safe to hardcode them.\n */\nconst KNOWN_CHAIN_PROPERTIES = {\n  foo: {\n    ss58Format: 3,\n    tokenDecimals: 18,\n    tokenSymbol: 'FOO',\n  },\n  bar: {\n    ss58Format: 42,\n    tokenDecimals: 18,\n    tokenSymbol: 'FOO',\n  },\n};\n\n// We override the `specName` property of `GetRegistryOptsCore` in order to get narrower type specificity,\n// hopefully creating a better experience for users.\n/**\n * Options for the `getRegistry` function.\n */\nexport interface GetRegistryOpts extends GetRegistryOptsCore {\n  specName: keyof typeof KNOWN_CHAIN_PROPERTIES;\n}\n\n/**\n * Get a type registry for networks that txwrapper-foo supports.\n *\n * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime\n */\nexport function getRegistry({\n  specName,\n  chainName,\n  specVersion,\n  metadataRpc,\n  properties,\n}: GetRegistryOpts): TypeRegistry {\n  const registry = new TypeRegistry();\n  registry.setKnownTypes({\n    // If your types are not packaged in the `OverrideBundleType` format, you can\n    // specify types in any of the formats supported by `RegisteredTypes`:\n    // https://github.com/polkadot-js/api/blob/4ff9b51af2c49294c676cc80abc6476565c70b11/packages/types/src/types/registry.ts#L59\n    typesBundle: (typesBundleForPolkadot as unknown) as OverrideBundleType,\n  });\n\n  return getRegistryBase({\n    chainProperties: properties || KNOWN_CHAIN_PROPERTIES[specName],\n    specTypes: getSpecTypes(registry, chainName, specName, specVersion),\n    metadataRpc,\n  });\n}\n")),Object(o.mdx)("p",null,"And add relevant exports:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"// src/methods/currencies/index.ts\n\n// export the method, effectively making available under the `currencies` namespace\nexport * from './transfer';\n// src/methods\n\n// Export everything from within `methods`, including the `currencies` namespace, making it so we can\n// access the method via `methods.currencies.transfer`\nexport * as methods from './methods';\n")),Object(o.mdx)("h3",{id:"5-create-a-working-example"},"5. Create a working example"),Object(o.mdx)("div",{className:"admonition admonition-info alert alert--info"},Object(o.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.mdx)("div",{parentName:"div",className:"admonition-content"},Object(o.mdx)("p",{parentName:"div"},"A good example can ease user friction and reduce workload for maintainers. Create an end-to-end example so users have a clear understanding of the full flow for offline transaction generation for your chain. "))),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},"Rename ",Object(o.mdx)("inlineCode",{parentName:"li"},"template-example.ts")," to something appropriate to your chain and update all the sections in the file marked TODO. "),Object(o.mdx)("li",{parentName:"ol"},"Update ",Object(o.mdx)("inlineCode",{parentName:"li"},"examples/README.md")," in the sections marked TODO."),Object(o.mdx)("li",{parentName:"ol"},"Make sure you can run the example using a development node for your chain.")),Object(o.mdx)("h3",{id:"6-publish-your-package"},"6. Publish your package"),Object(o.mdx)("p",null,"Once you've made sure that versioning make sense and that the ",Object(o.mdx)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/commands/npm-pack"},"package works locally"),",\nrefer to ",Object(o.mdx)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/commands/npm-publish"},"this guide")," to learn how publish your package to ",Object(o.mdx)("inlineCode",{parentName:"p"},"NPM"),"."),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/txwrapper-core/blob/main/packages/txwrapper-template/examples/template-example.ts"},"Template example"))),Object(o.mdx)("h2",{id:"resources"},"Resources"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"How-to use ",Object(o.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/txwrapper-core/blob/main/packages/txwrapper-examples/README.md"},Object(o.mdx)("inlineCode",{parentName:"a"},"tx-wrapper-polkadot"))),Object(o.mdx)("li",{parentName:"ul"},"Serialization/deserialization ",Object(o.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/txwrapper-core/blob/main/packages/txwrapper-orml/src/methods/currencies/transfer.spec.ts"},"unit tests using ",Object(o.mdx)("inlineCode",{parentName:"a"},"jest")))))}d.isMDXComponent=!0}}]);