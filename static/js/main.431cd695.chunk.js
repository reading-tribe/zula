(this["webpackJsonpzula-web-frontend"]=this["webpackJsonpzula-web-frontend"]||[]).push([[0],{555:function(e,t,n){},556:function(e,t,n){},694:function(e,t){},702:function(e,t){},704:function(e,t){},888:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(19),s=n.n(a),i=(n(555),n(174)),o=n(31),j=(n(556),n(557),n(47)),l=n(12),u=n(910),O=n(911),b=n(925),d=n(909),h=n(926),x=n(181),m=n(5);function f(){return Object(m.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(x.LinkContainer,{to:"/",children:Object(m.jsx)(b.a.Brand,{children:"Zula"})}),Object(m.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsxs)(h.a,{className:"me-auto",children:[Object(m.jsx)(x.LinkContainer,{to:"/account",children:Object(m.jsxs)(h.a.Link,{children:[Object(m.jsx)("small",{className:"text-muted",children:"(Customer)"})," Accounts"]})}),Object(m.jsx)(x.LinkContainer,{to:"/books",children:Object(m.jsxs)(h.a.Link,{children:[Object(m.jsx)("small",{className:"text-muted",children:"(Customer)"})," Books"]})}),Object(m.jsx)(x.LinkContainer,{to:"/new/translation",children:Object(m.jsxs)(h.a.Link,{children:[Object(m.jsx)("small",{className:"text-muted",children:"(Author)"})," New Translation"]})})]}),Object(m.jsx)(h.a,{children:Object(m.jsx)(b.a.Brand,{children:"The Reading Tribe"})})]})]})})}function p(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsx)("div",{className:"pt-3",children:Object(m.jsxs)(u.a,{className:"justify-content-md-center",children:[Object(m.jsx)(O.a,{}),Object(m.jsx)(O.a,{xs:9,className:"justify-content-md-center",children:e.content}),Object(m.jsx)(O.a,{})]})})]})}function _(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object({NODE_ENV:"production",PUBLIC_URL:"/zula",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL;return Object(c.useEffect)((function(){a&&fetch(a+"/users").then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.error(e)}))}),[]),Object(m.jsx)(p,{content:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Welcome to Zula"}),Object(m.jsx)("h2",{children:"The Reading Tribe"}),n?Object(m.jsx)("pre",{children:JSON.stringify(n,null,3)}):Object(m.jsx)(m.Fragment,{})]})})}var S=n(912);function T(e){return Object(m.jsxs)(O.a,{xs:9,md:4,children:[Object(m.jsx)(S.a,{width:"175vw",src:"https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",roundedCircle:!0}),Object(m.jsx)("p",{children:e.displayName})]})}function g(e){return Object(m.jsx)(d.a,{children:Object(m.jsx)(u.a,{className:"justify-content-md-center",children:e.subAccounts?e.subAccounts.map((function(e){return Object(m.jsx)(T,{displayName:e.displayName})})):Object(m.jsx)(m.Fragment,{})})})}function v(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object({NODE_ENV:"production",PUBLIC_URL:"/zula",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL;return Object(c.useEffect)((function(){a&&fetch(a+"/accounts").then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.error(e)}))}),[]),Object(m.jsx)(p,{content:Object(m.jsx)(m.Fragment,{children:n?Object(m.jsx)(m.Fragment,{children:n.items.map((function(e){return Object(m.jsx)(g,{subAccounts:e.subAccounts})}))}):Object(m.jsx)(m.Fragment,{})})})}var E=n(929),C=n(913),R=n(222),P=n.n(R);function A(e){return Object(m.jsxs)(E.a,{style:{width:"18rem"},children:[Object(m.jsx)(E.a.Img,{variant:"top",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqNLdCR0Zd0hDxETHEO1Ot442TQ0exOlPPOQ&usqp=CAU"}),Object(m.jsxs)(E.a.Body,{children:[Object(m.jsx)(E.a.Title,{children:e.bookTranslation.title}),Object(m.jsx)(E.a.Text,{children:e.bookTranslation.locale}),Object(m.jsx)(P.a,{to:"/read?id=".concat(e.bookId,"&locale=").concat(e.bookTranslation.locale),children:Object(m.jsx)(C.a,{className:"mx-1",variant:"link",children:"Read"})}),Object(m.jsx)(C.a,{className:"mx-1",variant:"primary",children:"Buy"})]})]})}function F(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object({NODE_ENV:"production",PUBLIC_URL:"/zula",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL;return Object(c.useEffect)((function(){a&&fetch(a+"/books").then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.error(e)}))}),[]),Object(m.jsx)(p,{content:Object(m.jsx)(m.Fragment,{children:n?n.items.map((function(e){return e.translations.map((function(t){return Object(m.jsx)(A,{bookId:e.id,bookTranslation:t})}))})):Object(m.jsx)(m.Fragment,{})})})}var N=n(122),k=n(927);function y(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),s=Object(l.a)(a,2),i=s[0],j=s[1],u=new URLSearchParams(Object(o.l)().search),O=u.get("id"),b=u.get("locale"),d=Object({NODE_ENV:"production",PUBLIC_URL:"/zula",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL;return Object(c.useEffect)((function(){d&&fetch(d+"/books/".concat(O)).then((function(e){return e.json()})).then((function(e){var t,n=e,c=Object(N.a)(n.translations);try{for(c.s();!(t=c.n()).done;){var a=t.value;if(a.locale===b){r(a);break}}}catch(s){c.e(s)}finally{c.f()}})).catch((function(e){return console.error(e)}))}),[O,b]),Object(m.jsx)(p,{content:Object(m.jsx)(m.Fragment,{children:n?Object(m.jsx)(k.a,{activeIndex:i,onSelect:function(e,t){j(e)},children:n.content.map((function(e){return Object(m.jsx)(k.a.Item,{children:Object(m.jsx)("img",{width:"100%",src:e.uri,alt:"First slide"})})}))}):Object(m.jsx)(m.Fragment,{})})})}var L=n(15),D=n(327),w={type:"object",properties:{locale:{type:"string",enum:["fr","de","en"]},title:{type:"string"},content:{type:"array",items:{type:"object",properties:{order:{type:"integer",minimum:0},uri:{type:"string"}}}}},required:["locale","title","content"]};function I(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(m.jsx)(p,{content:Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(L.JsonForms,{schema:w,data:n,renderers:D.materialRenderers,cells:D.materialCells,onChange:function(e){var t=e.data;console.log(t),r(t)}})})})}function U(){var e=Object(j.a)();return Object(m.jsx)(i.BrowserRouter,{history:e,children:Object(m.jsxs)(o.g,{children:[Object(m.jsx)(o.d,{path:"/books",children:Object(m.jsx)(F,{})}),Object(m.jsx)(o.d,{path:"/account",children:Object(m.jsx)(v,{})}),Object(m.jsx)(o.d,{path:"/read",children:Object(m.jsx)(y,{})}),Object(m.jsx)(o.d,{path:"/new/translation",children:Object(m.jsx)(I,{})}),Object(m.jsx)(o.d,{path:"/",children:Object(m.jsx)(_,{})})]})})}var H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,932)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root")),H()}},[[888,1,2]]]);
//# sourceMappingURL=main.431cd695.chunk.js.map