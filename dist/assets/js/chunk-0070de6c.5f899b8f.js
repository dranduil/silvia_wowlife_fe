(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0070de6c"],{"49cc":function(e,t,c){"use strict";var a=c("7a23"),r={class:"container"},n={class:"hero-content text-center py-0"},o={"aria-label":"breadcrumb"},s={class:"breadcrumb breadcrumb-s1 justify-content-center mt-3 mb-0"},l={class:"breadcrumb-item"},b=Object(a["createTextVNode"])("Home");function i(e,t,c,i,d,m){var u=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])(["hero-wrap sub-header",c.classnameTwo])},[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("h1",{class:Object(a["normalizeClass"])(c.classname)},Object(a["toDisplayString"])(c.title),3),Object(a["createElementVNode"])("nav",o,[Object(a["createElementVNode"])("ol",s,[Object(a["createElementVNode"])("li",l,[Object(a["createVNode"])(u,{to:"/"},{default:Object(a["withCtx"])((function(){return[b]})),_:1})]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.lists,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{class:"breadcrumb-item",key:t},Object(a["toDisplayString"])(e.title),1)})),128))])])])])],2)}var d={name:"HeroFour",props:["title","lists","classname","classnameTwo"]},m=c("6b0d"),u=c.n(m);const j=u()(d,[["render",i]]);t["a"]=j},"9c42":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),r={class:"page-wrap"},n={class:"header-section has-header-main"};function o(e,t,c,o,s,l){var b=Object(a["resolveComponent"])("HeaderMain"),i=Object(a["resolveComponent"])("HeroFour"),d=Object(a["resolveComponent"])("RankingSection"),m=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,[Object(a["createElementVNode"])("header",n,[Object(a["createVNode"])(b),Object(a["createVNode"])(i,{classname:"hero-title",title:s.SectionData.breadcrumbData.breadcrumbListThree.title,lists:s.SectionData.breadcrumbData.breadcrumbListThree.navList},null,8,["title","lists"])]),Object(a["createVNode"])(d),Object(a["createVNode"])(m,{classname:"bg-dark on-dark"})])}var s=c("07a4"),l=c("49cc"),b={name:"Ranking",components:{HeroFour:l["a"]},data:function(){return{SectionData:s["a"]}}},i=c("6b0d"),d=c.n(i);const m=d()(b,[["render",o]]);t["default"]=m}}]);