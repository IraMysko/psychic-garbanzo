(this.webpackJsonpinsurance=this.webpackJsonpinsurance||[]).push([[0],{112:function(e,c,i){},114:function(e,c,i){},115:function(e,c,i){},116:function(e,c,i){},117:function(e,c,i){"use strict";i.r(c);var n=i(0),t=i.n(n),a=i(19),r=i.n(a),o=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,126)).then((function(c){var i=c.getCLS,n=c.getFID,t=c.getFCP,a=c.getLCP,r=c.getTTFB;i(e),n(e),t(e),a(e),r(e)}))},u=i(32),s=(i(107),i(47)),l=i(121),j=i(122),d=u.c,h=i(58),O=i(124),b=i(61),f=i(123),T="ADD_TO_CARD",v="REMOVE_FROM_CARD",m="VISIBLE_CART",A="RESET_CART",C=function(e){return{type:m,payload:e}},E=(i(88),i(7)),R=function(e){var c,i,t=e.id,a=e.onCancel,r=e.name,o=e.photo,l=e.coverage,j=(null===(c=d((function(e){return e.insurance.packages})).find((function(e){return e.id===t})))||void 0===c?void 0:c.risk)||1,v=Object(u.b)(),m=Object(s.a)(l,2),A=m[0],C=m[1],R=Object(n.useState)(A),p=Object(s.a)(R,2),x=p[0],N=p[1],g=Math.ceil(x*j);return Object(E.jsxs)(O.a,{title:r,visible:!0,onCancel:a,footer:Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(b.a,{onClick:a,children:"Cancel"}),Object(E.jsx)(b.a,{type:"primary",onClick:function(){v(function(e,c){return{type:T,payload:{id:e,coverage:c}}}(t,x)),a()},children:"Add to card"})]}),children:[Object(E.jsx)("img",{className:"module-img",src:o,alt:""}),Object(E.jsx)("p",{children:"Please, choose coverage"}),Object(E.jsx)(f.a,{marks:(i={},Object(h.a)(i,A,A),Object(h.a)(i,C,C),i),defaultValue:A,onAfterChange:function(e){N((function(c){return e}))},min:A,max:C}),Object(E.jsxs)("div",{children:["Price: ",g," uah"]})]})},p=(i(112),l.a.Meta),x=j.a.Title,N=function(){var e=d((function(e){return e.insurance.packages})),c=Object(n.useState)(null),i=Object(s.a)(c,2),t=i[0],a=i[1],r=function(e){return function(){a(e)}},o=function(){a(null)};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"catalogue-title",children:Object(E.jsx)(x,{level:1,children:"Choose your personal insurance"})}),Object(E.jsx)("div",{className:"catalogue",children:e.map((function(e){var c=e.id,i=e.name,n=e.photo,a=e.title,u=e.coverage;return Object(E.jsxs)("div",{className:"catalogue-card",children:[Object(E.jsx)(l.a,{style:{width:250},cover:Object(E.jsx)("img",{alt:"card",src:n}),onClick:r(i),children:Object(E.jsx)(p,{title:i,description:a})}),t===i&&Object(E.jsx)(R,{id:c,onCancel:o,name:i,photo:n,coverage:u})]},c)}))})]})},g=i(125),I=i(120),y=(i(114),j.a.Title),H=function(e){var c=e.id,i=e.coverage,n=d((function(e){return e.insurance.packages})).find((function(e){return e.id===c})),t=Object(u.b)();if(!n)return null;var a=Math.ceil(n.risk*i);return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{children:[Object(E.jsx)(y,{level:5,children:n.name}),Object(E.jsx)("img",{className:"module-img",src:n.photo,alt:""}),Object(E.jsxs)("div",{className:"cart-container",children:[Object(E.jsxs)("div",{children:["Price: ",a," uah"]}),Object(E.jsx)(b.a,{onClick:function(){t(function(e,c){return{type:v,payload:{id:e,coverage:c}}}(c,i))},children:"Delete"})]})]}),Object(E.jsx)(I.a,{})]})},V=function(e){var c=e.visible,i=e.onCancel,t=d((function(e){return e.insurance.cart})),a=d((function(e){return e.insurance.packages})),r=!t.length,o=Object(u.b)(),l=t.reduce((function(e,c){var i=a.find((function(e){return e.id===c.id}));return i?e+Math.ceil(i.risk*c.coverage):e}),0),j=Object(n.useState)(!1),h=Object(s.a)(j,2),f=h[0],T=h[1];return Object(E.jsxs)(E.Fragment,{children:[!f&&Object(E.jsx)(O.a,{title:"Cart",visible:c,onCancel:i,footer:[Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(b.a,{onClick:i,children:"Cancel"}),!r&&Object(E.jsx)(b.a,{type:"primary",onClick:function(){i(),T(!0),o({type:A})},children:"Confirm"})]})],children:r?Object(E.jsx)("div",{children:"Your cart is empty, check menu with our products to add appropriate insurance"}):Object(E.jsxs)("div",{children:[t.map((function(e){var c=e.id,i=e.coverage;return Object(E.jsx)(H,{id:c,coverage:i},c)})),Object(E.jsxs)("div",{children:["Modules in cart: ",t.length]}),Object(E.jsxs)("div",{children:["Total price: ",l," uah"]})]})}),f?Object(E.jsx)(O.a,{title:"Thanks",footer:null,visible:f,onCancel:function(){T(!1)},children:"order has been sent for processing"}):null]})},P=(i(115),function(){var e=d((function(e){return e.insurance.isOpen})),c=Object(u.b)(),i=Object(n.useCallback)((function(){c(C(!0))}),[c]),t=Object(n.useCallback)((function(){c(C(!1))}),[c]);return Object(E.jsxs)("div",{className:"header",children:[Object(E.jsx)("div",{className:"header-logo",children:"Your insurance"}),Object(E.jsx)(g.a,{className:"header-cart",onClick:i}),Object(E.jsx)(V,{visible:e,onCancel:t})]})}),z=(i(116),function(){return Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)(P,{}),Object(E.jsx)(N,{})]})});var M=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(z,{})})},Y=i(62),Q=i(93),F=i(95),G=i(38),J={packages:[{id:0,name:"Bike",photo:i.p+"static/media/ui-tw-idv.43b733a3.png",title:"check new conditions for insurance",risk:.3,coverage:[1,3e3]},{id:1,name:"Jewelry",photo:"data:image/png;base64,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",title:"check new conditions for insurance",risk:.5,coverage:[500,1e4]},{id:2,name:"Electronics",photo:i.p+"static/media/depositphotos_453703706-stock-illustration-electronic-insurance-hardware-digital-insurers.c9fc2da5.jpg",title:"check new conditions for insurance",risk:.35,coverage:[500,6e3]},{id:3,name:"Sports Equipment",photo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iMjdFQTY1OUM4NTlCMjdDRTNBMTlCMDJGQTRBQTE3QUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODYzNEYwODI0NERGMTFFOUIzOTFBNTYzNTEyNjlGQzgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODYzNEYwODE0NERGMTFFOUIzOTFBNTYzNTEyNjlGQzgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmYxYzQwODliLTQwMTQtZmM0YS1iMDIzLTUzNDg0OTIwZTQ2NSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmOGFkZThlLTdmNjItMmI0Ni04ZGUwLWI4ODYxOTY5YWJlYyIv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",title:"check new conditions for insurance",risk:.3,coverage:[1,2e4]}],cart:[],isOpen:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case T:return Object(G.a)(Object(G.a)({},e),{},{cart:[].concat(Object(F.a)(e.cart),[{id:c.payload.id,coverage:c.payload.coverage}])});case v:return Object(G.a)(Object(G.a)({},e),{},{cart:e.cart.filter((function(e){var i=e.id,n=e.coverage;return i!==c.payload.id||c.payload.coverage!==n}))});case m:return Object(G.a)(Object(G.a)({},e),{},{isOpen:c.payload});case A:return Object(G.a)(Object(G.a)({},e),{},{cart:[]});default:return e}},D=Object(Y.combineReducers)({insurance:k}),W=Object(Y.createStore)(D,Object(Q.composeWithDevTools)(Object(Y.applyMiddleware)()));r.a.render(Object(E.jsx)(t.a.StrictMode,{children:Object(E.jsx)(u.a,{store:W,children:Object(E.jsx)(M,{})})}),document.getElementById("root")),o()},88:function(e,c,i){}},[[117,1,2]]]);
//# sourceMappingURL=main.ca124008.chunk.js.map