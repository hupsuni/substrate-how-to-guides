(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return g})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return c}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),c=function(e){return function(t){var n=p(t.components);return r.a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,u=m["".concat(o,".").concat(c)]||m[c]||b[c]||i;return n?r.a.createElement(u,d(d({ref:t},s),{},{components:n})):r.a.createElement(u,d({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),i=(n(0),n(168)),o={sidebar_position:7,keywords:"pallet design, intermediate, runtime"},s={unversionedId:"pallet-design/randomness",id:"pallet-design/randomness",isDocsHomePage:!1,title:"Generating on-chain randomness",description:"Useful in instances to generate unique values or select things without bias.",source:"@site/docs/02-pallet-design/randomness.md",sourceDirName:"02-pallet-design",slug:"/pallet-design/randomness",permalink:"/substrate-how-to-guides/docs/pallet-design/randomness",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/02-pallet-design/randomness.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,keywords:"pallet design, intermediate, runtime"},sidebar:"tutorialSidebar",previous:{title:"Use the Contracts pallet",permalink:"/substrate-how-to-guides/docs/pallet-design/add-contracts-pallet"},next:{title:"Conditional weighting struct",permalink:"/substrate-how-to-guides/docs/weights/conditional-weight-struct"}},d=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Import <code>Randomness</code>",id:"1-import-randomness",children:[]},{value:"2. Create a nonce",id:"2-create-a-nonce",children:[]},{value:"3. Use Randomness in a dispatchable",id:"3-use-randomness-in-a-dispatchable",children:[]},{value:"4. Updating your pallet&#39;s runtime implementation",id:"4-updating-your-pallets-runtime-implementation",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Related material",id:"related-material",children:[]}],l={toc:d};function m(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Useful in instances to generate unique values or select things without bias.")),Object(i.mdx)("h2",{id:"goal"},"Goal"),Object(i.mdx)("p",null,"Implement randomness for a pallet."),Object(i.mdx)("h2",{id:"use-cases"},"Use cases"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"NFT applications"),Object(i.mdx)("li",{parentName:"ul"},"Casino gaming type applications")),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/randomness"},"Randomness")," is useful in computer programs for everything from gaming applications to selecting block\nauthors. True randomness is hard to come by in deterministic computers. This is particularly true in the context\nof a blockchain when all the nodes in the network must agree on the state of the chain. FRAME provides runtime engineers\nwith a source of randomness, using the ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/frame_support/traits/trait.Randomness.html"},"Randomness trait"),"."),Object(i.mdx)("p",null,"This guide would step you through making use of FRAME's Randomness trait by using it's ",Object(i.mdx)("inlineCode",{parentName:"p"},"random")," method and a nonce as a subject.\nFor additional entropy to the randomness value, the last step shows how to assign the ",Object(i.mdx)("inlineCode",{parentName:"p"},"RandomCollectiveFlip"),' pallet\nto the configuration trait of a pallet exposing some "random" type.'),Object(i.mdx)("h2",{id:"steps"},"Steps"),Object(i.mdx)("h3",{id:"1-import-randomness"},"1. Import ",Object(i.mdx)("inlineCode",{parentName:"h3"},"Randomness")),Object(i.mdx)("p",null,"From ",Object(i.mdx)("inlineCode",{parentName:"p"},"frame_support"),", import the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Randomness")," trait:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"use frame_support::traits::Randomness;\n")),Object(i.mdx)("p",null,"Now you'll have to include it in your pallet's configuration trait:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"#[pallet::config]\n    pub trait frame_system::Config {\n        type MyRandomness: Randomness<H256>; \n    }\n\n")),Object(i.mdx)("p",null,"Notice that the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Randomness")," trait specifies a generic return of type ",Object(i.mdx)("inlineCode",{parentName:"p"},"Output"),". Use ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/sp_core/struct.H256.html"},Object(i.mdx)("inlineCode",{parentName:"a"},"sp_core::H256"))," in your pallet\nto satisfy that trait requirement. "),Object(i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"A warning on using this trait:")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"From the ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/frame_support/traits/trait.Randomness.html"},"documentation"),": ",Object(i.mdx)("em",{parentName:"p"},'"This gives you something that approximates ',"[real randomness]",". At best, this will be\nrandomness which was hard to predict a long time ago, but that has become easy to predict recently."),'"'))),Object(i.mdx)("h3",{id:"2-create-a-nonce"},"2. Create a nonce"),Object(i.mdx)("p",null,"Use a nonce to use as a subject for the ",Object(i.mdx)("inlineCode",{parentName:"p"},"frame_support::traits::Randomness::random(subject: &[u8])")," method."),Object(i.mdx)("p",null,"There's two steps to including a nonce in your pallet:  "),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Create a ",Object(i.mdx)("inlineCode",{parentName:"strong"},"Nonce")," storage item.")," This could be of type ",Object(i.mdx)("inlineCode",{parentName:"li"},"u32")," or ",Object(i.mdx)("inlineCode",{parentName:"li"},"u64")," (no need for it to be larger)."),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Create a private nonce function.")," This will be used to increment the nonce each time it's used.")),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"increment_nonce()")," private function could be implemented in such a way that it returns the nonce as well as\nupdates it. Using this approach it would look like this:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"    fn get_and_increment_nonce() -> Vec<u8> {\n        let nonce = Nonce::get();\n        Nonce::put(nonce.wrapping_add(1));\n        nonce.encode()\n    }\n")),Object(i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"Learn more about ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/funty/trait.IsInteger.html#tymethod.wrapping_add"},Object(i.mdx)("inlineCode",{parentName:"a"},"wrapping_add"))," and ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/frame_support/dispatch/trait.Encode.html#method.encode"},Object(i.mdx)("inlineCode",{parentName:"a"},"encode()"))," in the Rust documentation. "))),Object(i.mdx)("h3",{id:"3-use-randomness-in-a-dispatchable"},"3. Use Randomness in a dispatchable"),Object(i.mdx)("p",null,"Using the nonce, you can call the ",Object(i.mdx)("inlineCode",{parentName:"p"},"random()")," method that ",Object(i.mdx)("inlineCode",{parentName:"p"},"Randomness")," exposes. The code snippet below is a made up example\nthat assumes relevant events and storage items have been implemented:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"        #[pallet::weight(100)]\n        pub fn create_unique(\n            origin: OriginFor<T>) \n            -> DispatchResultWithPostInfo {\n\n                // Account calling this dispatchable.\n                let sender = ensure_signed(origin)?;\n\n                // Random value.\n                let nonce = Self::get_and_increment_nonce();\n                let randomValue = T::MyRandomness::random(&nonce);\n\n                // Write the random value to storage.\n                <MyStorageItem<T>>::put(randomValue);\n\n                Self::deposit_event(Event::UniqueCreated(randomValue));\n            }\n")),Object(i.mdx)("h3",{id:"4-updating-your-pallets-runtime-implementation"},"4. Updating your pallet's runtime implementation"),Object(i.mdx)("p",null,"Having added a type to your pallet's configuration trait ",Object(i.mdx)("inlineCode",{parentName:"p"},"Config")," opens up the opportunity to further enhance the\nrandomness derived by the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Randomness")," trait, by using the ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_randomness_collective_flip/index.html"},"Randomness Collective Flip pallet"),"."),Object(i.mdx)("p",null,"Using this pallet alongside the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Randomness")," trait will significantly improve the entropy being processed by ",Object(i.mdx)("inlineCode",{parentName:"p"},"random()"),"."),Object(i.mdx)("p",null,"In ",Object(i.mdx)("inlineCode",{parentName:"p"},"runtime/lib.rs"),", assuming ",Object(i.mdx)("inlineCode",{parentName:"p"},"pallet_random_collective_flip")," is instantiated at ",Object(i.mdx)("inlineCode",{parentName:"p"},"RandomCollectiveFlip"),", specify your exposed\ntype:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"impl my_pallet::Config for Runtime{\n    type Event;\n    type MyRandomness = RandomCollectiveFlip;\n}\n\n")),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/master/frame/babe/src/randomness.rs"},"Randomness used in BABE")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/master/frame/lottery/src/lib.rs#L471"},"FRAME's Lottery pallet"))),Object(i.mdx)("h2",{id:"related-material"},"Related material"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Verifiable_random_function"},"Verifiable Random Functions"))))}m.isMDXComponent=!0}}]);