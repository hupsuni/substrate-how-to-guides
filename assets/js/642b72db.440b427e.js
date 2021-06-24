(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return x})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),m=function(e){return function(t){var n=p(t.components);return r.a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(168)),o={sidebar_position:6,keywords:"pallet design, intermediate, runtime"},c={unversionedId:"pallet-design/add-contracts-pallet",id:"pallet-design/add-contracts-pallet",isDocsHomePage:!1,title:"Use the Contracts pallet",description:"Create the basis for building Wasm smart contracts using FRAME.",source:"@site/docs/02-pallet-design/add-contracts-pallet.md",sourceDirName:"02-pallet-design",slug:"/pallet-design/add-contracts-pallet",permalink:"/substrate-how-to-guides/docs/pallet-design/add-contracts-pallet",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/02-pallet-design/add-contracts-pallet.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,keywords:"pallet design, intermediate, runtime"},sidebar:"tutorialSidebar",previous:{title:"Simple staking pallet",permalink:"/substrate-how-to-guides/docs/pallet-design/lockable-currency"},next:{title:"Generating on-chain randomness",permalink:"/substrate-how-to-guides/docs/pallet-design/randomness"}},l=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Import the dependencies",id:"1-import-the-dependencies",children:[]},{value:"2. Add the Contracts pallet to your runtime",id:"2-add-the-contracts-pallet-to-your-runtime",children:[]},{value:"3. Add API dependencies",id:"3-add-api-dependencies",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Related material",id:"related-material",children:[]}],s={toc:l};function d(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Create the basis for building Wasm smart contracts using FRAME.")),Object(i.mdx)("h2",{id:"goal"},"Goal"),Object(i.mdx)("p",null,"Add the Contracts pallet to your runtime to be able to use Wasm smart contracts in your blockchain."),Object(i.mdx)("h2",{id:"use-cases"},"Use cases"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Smart Contract develoment"),Object(i.mdx)("li",{parentName:"ul"},"On-chain execution of Wasm binaries")),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"This guide will show you how you can add the ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_contracts/"},"Contracts pallet")," to your runtime in order to allow your blockchain\nto support Wasm smart contracts. You can follow similar patterns to add additional FRAME pallets to your runtime,\nhowever you should note that each pallet is a little different in terms of the specific configuration settings\nneeded to use it correctly."),Object(i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"You should already have the latest version of the Substrate Node Template compiled on your computer to follow this guide.\nIf you haven't already done so, refer to ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/docs/en/tutorials/create-your-first-substrate-chain/"},"this tutorial"),"."))),Object(i.mdx)("h2",{id:"steps"},"Steps"),Object(i.mdx)("h3",{id:"1-import-the-dependencies"},"1. Import the dependencies"),Object(i.mdx)("p",null,"Refer to this guide to properly include Contracts in your runtime."),Object(i.mdx)("p",null,"This includes ",Object(i.mdx)("strong",{parentName:"p"},"updating ",Object(i.mdx)("inlineCode",{parentName:"strong"},"runtime/Cargo.toml"))," and ",Object(i.mdx)("strong",{parentName:"p"},"runtime/Cargo.toml` with:")),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre"},"- `pallet-contracts`\n- `pallet-contracts-primitives`\n")),Object(i.mdx)("h3",{id:"2-add-the-contracts-pallet-to-your-runtime"},"2. Add the Contracts pallet to your runtime"),Object(i.mdx)("p",null,"Now you'll have to implement the Contract's pallet ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_contracts/trait.Config.html"},"configuration traits")," in order for your runtime to use it properly."),Object(i.mdx)("h4",{id:"implement-pallet_contracts"},"Implement ",Object(i.mdx)("inlineCode",{parentName:"h4"},"pallet_contracts")),Object(i.mdx)("p",null,"Start by making sure you've included all of the types that ",Object(i.mdx)("inlineCode",{parentName:"p"},"pallet_contracts")," exposes. You can copy these from ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_contracts/"},"FRAME's source code")," (assuming versioning is equivalent to the imported crate). Here's what you need to add inside ",Object(i.mdx)("inlineCode",{parentName:"p"},"runtime/lib.rs")," ","\u2014"," only the first 4 types are shown:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"impl pallet_contracts::Config for Runtime {\n    type Time = Timestamp;\n    type Randomness = RandomnessCollectiveFlip;\n    type Currency = Balances;\n    type Event = Event;\n    /* --snip-- */\n")),Object(i.mdx)("h4",{id:"parameter-types"},"Parameter types"),Object(i.mdx)("p",null,"Some of these types require ",Object(i.mdx)("inlineCode",{parentName:"p"},"parameter_types"),". Have a look at their implementation in ",Object(i.mdx)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/bin/node/runtime/src/lib.rs#L786"},"this")," runtime to make sure you include everything. We'll take ",Object(i.mdx)("inlineCode",{parentName:"p"},"DeletionQueueDepth")," as one example. Parameter types go right above ",Object(i.mdx)("inlineCode",{parentName:"p"},"impl pallet_contracts::Config for Runtime")," :"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"parameter_types! {\n     /* --snip-- */\n    pub DeletionQueueDepth: u32 = ((DeletionWeightLimit::get() / (\n            <Runtime as pallet_contracts::Config>::WeightInfo::on_initialize_per_queue_item(1) -\n            <Runtime as pallet_contracts::Config>::WeightInfo::on_initialize_per_queue_item(0)\n        )) / 5) as u32;\n        /* --snip-- */\n    }\n")),Object(i.mdx)("p",null,"Notice how the above parameter type requires ",Object(i.mdx)("inlineCode",{parentName:"p"},"WeightInfo"),". This requires you to add the following to the top of ",Object(i.mdx)("inlineCode",{parentName:"p"},"runtime/lib.rs"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"use pallet_contracts::weights::WeightInfo;\n")),Object(i.mdx)("p",null,"Similarly, other parameter types use constants such as ",Object(i.mdx)("inlineCode",{parentName:"p"},"DAYS"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"MILLICENTS")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"AVERAGE_ON_INITIALIZE_RATIO"),"."),Object(i.mdx)("p",null,"Define these towards the top of your ",Object(i.mdx)("inlineCode",{parentName:"p"},"runtime/lib.rs")," file where the other constants exists:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"// Contracts price units.\npub const MILLICENTS: Balance = 1_000_000_000;\npub const CENTS: Balance = 1_000 * MILLICENTS;\npub const DOLLARS: Balance = 100 * CENTS;\n\nconst fn deposit(items: u32, bytes: u32) -> Balance {\n    items as Balance * 15 * CENTS + (bytes as Balance) * 6 * CENTS\n}\n\n/// We assume that ~10% of the block weight is consumed by `on_initalize` handlers.\n/// This is used to limit the maximal weight of a single extrinsic.\nconst AVERAGE_ON_INITIALIZE_RATIO: Perbill = Perbill::from_percent(10);\n")),Object(i.mdx)("h4",{id:"add-an-instance-in-runtime-for-pallet_contracts"},"Add an instance in runtime for ",Object(i.mdx)("inlineCode",{parentName:"h4"},"pallet_contracts")),Object(i.mdx)("p",null,"Ceate an instance of the Contracts pallet in ",Object(i.mdx)("inlineCode",{parentName:"p"},"construct_macro!")," inside ",Object(i.mdx)("inlineCode",{parentName:"p"},"runtime/lib.rs"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"/* --snip-- */\n Contracts: pallet_contracts::{Module, Call, Config<T>, Storage, Event<T>},\n /* --snip-- */\n")),Object(i.mdx)("h3",{id:"3-add-api-dependencies"},"3. Add API dependencies"),Object(i.mdx)("div",{className:"admonition admonition-info alert alert--info"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"Some pallets, including the Contracts pallet, expose custom runtime APIs and RPC endpoints. In the case of the Contracts pallet, this enables reading contracts state from off chain."))),Object(i.mdx)("p",null,"In this guide, we want to use the Contracts pallet to make calls to our node's storage without making a transaction. "),Object(i.mdx)("p",null,"To achieve this, we'll use another pallet called ",Object(i.mdx)("inlineCode",{parentName:"p"},"pallet-contracts-rpc-runtime-api"),". "),Object(i.mdx)("h4",{id:"import-dependencies"},"Import dependencies"),Object(i.mdx)("p",null,"Just like in the first step of this guide, update ",Object(i.mdx)("inlineCode",{parentName:"p"},"Cargo.toml")," to add ",Object(i.mdx)("inlineCode",{parentName:"p"},"pallet-contracts-rpc-runtime-api"),"."),Object(i.mdx)("p",null,"Now we can add the ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_contracts_rpc_runtime_api/trait.ContractsApi.html"},Object(i.mdx)("inlineCode",{parentName:"a"},"ContractsApi"))," dependency required to implement the Contracts runtime API. "),Object(i.mdx)("p",null,"Add this with the other ",Object(i.mdx)("inlineCode",{parentName:"p"},"use")," statements."),Object(i.mdx)("h4",{id:"implement-the-contracts-runtime-api"},"Implement the Contracts runtime API"),Object(i.mdx)("p",null,"We're now ready to implement the contracts\nruntime API. "),Object(i.mdx)("p",null,"This happens in the\n",Object(i.mdx)("inlineCode",{parentName:"p"},"impl_runtime_apis! "),"macro near the end of your\nruntime."),Object(i.mdx)("p",null,"Make sure to add the following functions that the ",Object(i.mdx)("inlineCode",{parentName:"p"},"ContractsApi")," exposes:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"strong"},"call()")),": returns ",Object(i.mdx)("inlineCode",{parentName:"li"},"pallet_contracts_primitives::ContractExecResult { Contracts::bare_call(origin, dest, value, gas_limit, input_data)}")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"strong"},"get_storage()")),": returns ",Object(i.mdx)("inlineCode",{parentName:"li"},"pallet_contracts_primitives::GetStorageResult {Contracts::get_storage(address, key)}")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},Object(i.mdx)("inlineCode",{parentName:"strong"},"rent_projection()")),": returns ",Object(i.mdx)("inlineCode",{parentName:"li"},"pallet_contracts_primitives::RentProjectionResult<BlockNumber> {Contracts::rent_projection(address)}"))),Object(i.mdx)("h4",{id:"add-rpc-api-extension"},"Add RPC API extension"),Object(i.mdx)("p",null,"To be able to call the runtime API, we must add the RPC to the node's service."),Object(i.mdx)("p",null,"In ",Object(i.mdx)("inlineCode",{parentName:"p"},"node/Cargo.toml"),", add the dendencies for ",Object(i.mdx)("inlineCode",{parentName:"p"},"pallet-contracts")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"pallet-contracts-rpc"),"."),Object(i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Unsure what version to include? ")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"Use the latest version as indicated on ",Object(i.mdx)("a",{parentName:"p",href:"https://crates.io/search?q=pallet-contracts-rpc"},"crates.io"),"."))),Object(i.mdx)("p",null,"This RPC does not contain access to the Contracts pallet by default. To interact with this pallet, we have to ",Object(i.mdx)("strong",{parentName:"p"},"extend the existing RPC and add the Contracts pallet")," along with its API."),Object(i.mdx)("p",null,"In ",Object(i.mdx)("inlineCode",{parentName:"p"},"node/src/rpc.rs"),", add this line to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"where")," clause in ",Object(i.mdx)("inlineCode",{parentName:"p"},"create_full<C, P>"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"}," C::Api: pallet_contracts_rpc::ContractsRuntimeApi<Block, AccountId, Balance, BlockNumber>,\n")),Object(i.mdx)("p",null," And add the contracts RPC API extension using:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"}," // Contracts RPC API extension\n   io.extend_with(\n       ContractsApi::to_delegate(Contracts::new(client.clone()))\n   );\n")),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"canvas-node")," ",Object(i.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/canvas-node/blob/master/runtime/src/lib.rs#L361"},"runtime")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"canvas-node")," ",Object(i.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/canvas-node/blob/master/node/src/rpc.rs"},"rpc file"))),Object(i.mdx)("h2",{id:"related-material"},"Related material"),Object(i.mdx)("h4",{id:"rust-docs"},"Rust docs"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_contracts/index.html"},Object(i.mdx)("inlineCode",{parentName:"a"},"pallet_contracts")," crate")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_contracts_rpc/index.html"},Object(i.mdx)("inlineCode",{parentName:"a"},"pallet_contracts_rpc")," crate"))))}d.isMDXComponent=!0}}]);