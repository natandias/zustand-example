(this["webpackJsonpzustand-test"]=this["webpackJsonpzustand-test"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(20),a=n.n(r),i=(n(28),n(29),n(7)),j=n(10),u=n(2),o=(n(30),n(1));var d=function(){var e=Object(u.f)().pathname;return console.log("selectedRoute",e),Object(o.jsxs)("div",{className:"sidebarContainer",children:[Object(o.jsx)("header",{className:"title",children:Object(o.jsx)("h2",{children:"Menus"})}),Object(o.jsxs)("main",{className:"menus",children:[Object(o.jsx)(j.b,{to:"/",className:"/"===e?"selectedMenu":"",children:"Listagem"}),Object(o.jsx)(j.b,{to:"/form",className:"/form"===e?"selectedMenu":"",children:"Cadastro"})]})]})};n(37);var l=function(e){return Object(o.jsxs)("div",{className:"mainContainer",children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"pageContent",children:e.children})]})},b=n(12),h=n(23),O=n(22),x=Object(O.a)((function(e){return{state:{users:[{id:1,name:"Teste1",phone:"3899323"}]},actions:{addUser:function(t){return e((function(e){return{state:Object(i.a)(Object(i.a)({},e.state),{},{users:[].concat(Object(h.a)(e.state.users),[Object(i.a)(Object(i.a)({},t),{},{id:e.state.users.length+1})])})}}))},deleteUser:function(t){return e((function(e){return{state:Object(i.a)(Object(i.a)({},e.state),{},{users:e.state.users.filter((function(e){return e.id!==t}))})}}))}}}}));n(39);var f=function(e){var t=Object(c.useState)(),n=Object(b.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(),i=Object(b.a)(a,2),j=i[0],u=i[1],d=x((function(e){return e.actions.addUser}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"Cadastro de Usu\xe1rios"}),Object(o.jsxs)("form",{className:"userForm",onSubmit:function(t){t.preventDefault(),d({name:s,phone:j}),r(""),u(""),alert("Cadastrado com sucesso!"),e.history.push("/")},children:[Object(o.jsx)("input",{type:"text",placeholder:"Nome",value:s,onChange:function(e){return r(e.target.value)}}),Object(o.jsx)("input",{type:"text",placeholder:"Telefone",value:j,onChange:function(e){return u(e.target.value)}}),Object(o.jsx)("button",{type:"submit",className:"submitBtn",children:"Cadastrar"})]})]})};n(40);var m=function(){var e=x((function(e){return e.state.users})),t=x((function(e){return e.actions.deleteUser}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"Listagem de Usu\xe1rios"}),Object(o.jsxs)("table",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Id"}),Object(o.jsx)("th",{children:"Nome"}),Object(o.jsx)("th",{children:"Telefone"}),Object(o.jsx)("th",{children:"A\xe7\xf5es"})]}),e.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.id}),Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.phone}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{onClick:function(){return n=e.id,void t(n);var n},children:"Deletar usu\xe1rio"})})]})}))]})]})};function p(){return Object(o.jsx)(j.a,{basename:"/zustand-example",children:Object(o.jsx)(l,{children:Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{path:"/form",render:function(e){return Object(o.jsx)(f,Object(i.a)({},e))}}),Object(o.jsx)(u.a,{path:"/",exact:!0,render:function(e){return Object(o.jsx)(m,Object(i.a)({},e))}})]})})})}var v=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(p,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),g()}},[[41,1,2]]]);
//# sourceMappingURL=main.68530558.chunk.js.map