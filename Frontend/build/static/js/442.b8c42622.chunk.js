"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[442],{442:function(e,n,s){s.r(n),s.d(n,{default:function(){return m}});var t,r=s(9439),a=s(2791),l=s(6907),o=s(2619),i=s(7689),u=s(6516),d=s(3360),c=s(168),h=s(6444).ZP.div(t||(t=(0,c.Z)(["\n  max-width: 600px;\n"]))),p=s(5762),x=s(184),m=function(){var e=(0,a.useContext)(o.y),n=e.state,s=e.dispatch,t=n.userInfo,c=n.cart.shippingAddress,m=(0,a.useState)(c.fullName||""),Z=(0,r.Z)(m,2),f=Z[0],j=Z[1],C=(0,a.useState)(c.address||""),g=(0,r.Z)(C,2),v=g[0],y=g[1],b=(0,a.useState)(c.city||""),N=(0,r.Z)(b,2),S=N[0],I=N[1],q=(0,a.useState)(c.postalCode||""),A=(0,r.Z)(q,2),G=A[0],L=A[1],P=(0,a.useState)(c.country||""),k=(0,r.Z)(P,2),E=k[0],w=k[1],D=(0,i.s0)();(0,a.useEffect)((function(){t||D("/signin?redirect=/shipping")}),[t,D]);return(0,x.jsxs)("div",{children:[(0,x.jsx)(l.ql,{children:(0,x.jsx)("title",{children:"Sihpping Address"})}),(0,x.jsx)(p.Z,{step1:!0,step2:!0}),(0,x.jsxs)(h,{className:"container small-container",children:[(0,x.jsx)("h1",{className:"my-3",children:"Shipping Address"}),(0,x.jsxs)(u.Z,{onSubmit:function(e){e.preventDefault(),s({type:"SAVE_SHIPPING_ADDRESS",payload:{fullName:f,address:v,city:S,postalCode:G,country:E}}),localStorage.setItem("shippingAddress",JSON.stringify({fullName:f,address:v,city:S,postalCode:G,country:E})),D("/payament")},children:[(0,x.jsxs)(u.Z.Group,{className:"mb-3",controlId:"fullName",children:[(0,x.jsx)(u.Z.Label,{children:"Nome completo"}),(0,x.jsx)(u.Z.Control,{required:!0,value:f,onChange:function(e){return j(e.target.value)}})]}),(0,x.jsxs)(u.Z.Group,{className:"mb-3",controlId:"address",children:[(0,x.jsx)(u.Z.Label,{children:"Endere\xe7o"}),(0,x.jsx)(u.Z.Control,{required:!0,value:v,onChange:function(e){return y(e.target.value)}})]}),(0,x.jsxs)(u.Z.Group,{className:"mb-3",controlId:"city",children:[(0,x.jsx)(u.Z.Label,{children:"Cidade"}),(0,x.jsx)(u.Z.Control,{required:!0,value:S,onChange:function(e){return I(e.target.value)}})]}),(0,x.jsxs)(u.Z.Group,{className:"mb-3",controlId:"postalCode",children:[(0,x.jsx)(u.Z.Label,{children:"Postal code"}),(0,x.jsx)(u.Z.Control,{required:!0,value:G,onChange:function(e){return L(e.target.value)}})]}),(0,x.jsxs)(u.Z.Group,{className:"mb-3",controlId:"country",children:[(0,x.jsx)(u.Z.Label,{children:"P\xe1is"}),(0,x.jsx)(u.Z.Control,{required:!0,value:E,onChange:function(e){return w(e.target.value)}})]}),(0,x.jsx)(d.Z,{type:"submit",children:"Continuar"})]})]})]})}}}]);
//# sourceMappingURL=442.b8c42622.chunk.js.map