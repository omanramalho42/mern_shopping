"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[407],{1407:function(e,r,t){t.r(r);var n=t(4165),i=t(5861),s=t(9439),d=t(1413),a=t(3263),c=t(2791),l=t(3360),o=t(6907),h=t(7689),u=t(2597),x=t(2619),p=t(4193),j=t(184),f=function(e,r){switch(r.type){case"FETCH_REQUEST":return(0,d.Z)((0,d.Z)({},e),{},{loading:!0});case"FETCH_SUCCESS":return(0,d.Z)((0,d.Z)({},e),{},{loading:!1,orders:r.payload});case"FETCH_FAIL":return(0,d.Z)((0,d.Z)({},e),{},{loading:!1,error:r.payload});default:return e}};r.default=function(){var e=(0,h.s0)(),r=(0,c.useContext)(x.y).state.userInfo,t=(0,c.useReducer)(f,{loading:!0,error:""}),d=(0,s.Z)(t,2),E=d[0],C=E.loading,T=E.error,v=E.orders,y=d[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y({type:"FETCH_REQUEST"}),e.prev=1,e.next=4,a.Z.get("http://localhost:3001/api/orders/mine",{headers:{authorization:"Bearer ".concat(r.token)}});case 4:t=e.sent,i=t.data,y({type:"FETCH_SUCCESS",payload:i}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),y({type:"FETCH_FAIL",payload:(0,p.b)(e.t0)});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,j.jsxs)("div",{children:[(0,j.jsx)(o.ql,{children:(0,j.jsx)("title",{children:"Hist\xf3rico de pedidos"})}),(0,j.jsx)("h1",{children:"Hist\xf3rico de pedidos"}),C?(0,j.jsx)(u.pH,{}):T?(0,j.jsx)(u._p,{variant:"danger",children:T}):(0,j.jsxs)("table",{className:"table",children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"ID"}),(0,j.jsx)("th",{children:"DATA"}),(0,j.jsx)("th",{children:"TOTAL"}),(0,j.jsx)("th",{children:"PAGAMENTO"}),(0,j.jsx)("th",{children:"ENTREGA"}),(0,j.jsx)("th",{children:"ACTIONS"})]})}),(0,j.jsx)("tbody",{children:v.map((function(r){return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:r._id}),(0,j.jsx)("td",{children:r.createdAt.substring(0,10)}),(0,j.jsx)("td",{children:r.totalPrice.toFixed(2)}),(0,j.jsx)("td",{children:r.isPaid?"Sim":"N\xe3o"}),(0,j.jsx)("td",{children:r.isDelivered?r.deliveredAt.substring(0,10):"No"}),(0,j.jsx)("td",{children:(0,j.jsx)(l.Z,{type:"button",variant:"light",onClick:function(){e("/order/".concat(r._id))},children:"Detalhes"})})]},r._id)}))})]})]})}}}]);
//# sourceMappingURL=407.60e21ff7.chunk.js.map