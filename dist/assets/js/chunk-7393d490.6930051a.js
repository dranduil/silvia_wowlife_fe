(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7393d490"],{"7b04":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n={class:"page-wrap"},a={class:"header-section has-header-main"},l={class:"banner-collection"},r={class:"container"},i={class:"row"},s={class:"col-xl-6 collection-mint"},d={class:"col-xl-6 collection-preview"};function b(e,t,c,b,m,j){var O=Object(o["resolveComponent"])("HeaderMain"),u=Object(o["resolveComponent"])("AuthorHero"),p=Object(o["resolveComponent"])("ButtonLink"),v=Object(o["resolveComponent"])("CollectionViewItems"),V=Object(o["resolveComponent"])("Footer");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[Object(o["createElementVNode"])("header",a,[Object(o["createVNode"])(O),Object(o["createVNode"])(u)]),Object(o["createElementVNode"])("section",l,[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(p,{link:e.collectionMintUrl,text:" Mint collection Now ",class:"btn btn-dark"},null,8,["link"])])]),Object(o["createElementVNode"])("div",d,[Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(p,{link:"/collections/view-detail/1",text:" View Detail of Collection ",class:"btn btn-dark"})])])])])]),Object(o["createVNode"])(v),Object(o["createVNode"])(V,{classname:"bg-dark on-dark"})])}var m=function(e){return Object(o["pushScopeId"])("data-v-37404c81"),e=e(),Object(o["popScopeId"])(),e},j={class:"author-section section-space"},O={class:"container"},u={class:"row"},p={class:"col-xl-12 ps-xl-4"},v={class:"author-items-wrap"},V=m((function(){return Object(o["createElementVNode"])("h3",null,"All Collection",-1)})),N=m((function(){return Object(o["createElementVNode"])("div",{class:"gap-2x"},null,-1)})),E={class:"row g-gs"},k={class:"card card-full"},w={class:"card-image"},f=["src"],h={class:"card-body p-4"},g={class:"card-title text-truncate mb-0"},x={class:"card-author mb-1 d-flex align-items-center"},C=m((function(){return Object(o["createElementVNode"])("span",{class:"me-1 card-author-by"},"By",-1)})),B={class:"custom-tooltip-wrap"},T={class:"custom-tooltip author-link"};function D(e,t,c,n,a,l){var r=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",j,[Object(o["createElementVNode"])("div",O,[Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("div",p,[Object(o["createElementVNode"])("div",v,[V,N,Object(o["createElementVNode"])("div",E,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.SectionData.productData.products,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"col-md-4",key:e.id},[Object(o["createElementVNode"])("div",k,[Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("img",{src:e.img,class:"card-img-top",alt:"art image"},null,8,f)]),Object(o["createElementVNode"])("div",h,[Object(o["createElementVNode"])("h5",g,Object(o["toDisplayString"])(e.title),1),Object(o["createElementVNode"])("div",x,[C,Object(o["createElementVNode"])("div",B,[Object(o["createElementVNode"])("span",T,Object(o["toDisplayString"])(e.author),1)])])]),Object(o["createVNode"])(r,{class:"details",to:{name:"ProductDetail",params:{id:e.id,title:e.title,imgLg:e.imgLg,metaText:e.metaText,metaTextTwo:e.metaTextTwo,metaTextThree:e.metaTextThree,content:e.content}}},null,8,["to"])])])})),128))])])])])])])}var S=c("b850"),y=c("0613"),I=Object(o["defineComponent"])({name:"ProfileSection",setup:function(){var e=Object(y["b"])(),t=e.getters.GetCollectionData;return{SectionData:S["a"],collection:t}}}),L=(c("ae92"),c("6b0d")),M=c.n(L);const F=M()(I,[["render",D],["__scopeId","data-v-37404c81"]]);var A=F,H=c("fc60"),J=c("6c02"),P=c("2a7c"),U=Object(o["defineComponent"])({name:"CollectionView",components:{CollectionViewItems:A,ButtonLink:P["a"]},setup:function(){var e=Object(J["c"])(),t=Object(y["b"])();t.dispatch(H["a"].FetchCollection,{id:e.params.id});var c="/mint-collection-id-"+e.params.id;return{collectionMintUrl:c}}});const _=M()(U,[["render",b]]);t["default"]=_},ae92:function(e,t,c){"use strict";c("cbc7")},cbc7:function(e,t,c){}}]);