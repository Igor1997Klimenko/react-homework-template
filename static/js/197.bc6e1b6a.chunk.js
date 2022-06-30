"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[197],{3594:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var a=n(885),s=n(2791),r={blockform:"ContactForm_blockform__7wifA",LabelForm:"ContactForm_LabelForm__PQTCj",NamesForm:"ContactForm_NamesForm__sU3Tn",ButtonsContact:"ContactForm_ButtonsContact__4ym86",InputForm:"ContactForm_InputForm__yTwDU"},o=n(5273),c=n(5582),i=n(4039),u=n(6140),l=n(8380),m=n(6151),_=n(184),d=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],d=t[1],f=(0,s.useState)(""),p=(0,a.Z)(f,2),h=p[0],x=p[1],C=(0,c.wY)().data,b=(0,c.Tn)(),j=(0,a.Z)(b,2),g=j[0],v=j[1].isLoading,Z=(0,s.useState)(!1),I=(0,a.Z)(Z,2),k=I[0],F=I[1];(0,s.useEffect)((function(){F(""===n||""===h)}),[n,h]);var N=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":d(a);break;case"number":x(a);break;default:return}},P=function(){return C.find((function(e){return e.name.toUpperCase()===n.toUpperCase()||e.number===h}))};return(0,_.jsxs)("form",{noValidate:!0,className:r.forma,onSubmit:function(e){e.preventDefault(),P()?u.ZP.success("".concat(n," is already in contacts"),{style:{border:"1px solid red",padding:"16px",color:"red"},iconTheme:{primary:"red",secondary:"#FFFAEE"}}):(g({name:n,number:h,id:(0,o.nanoid)()}),d(""),x(""),u.ZP.success("Contact added!"))},children:[(0,_.jsxs)("div",{className:r.blockform,children:[(0,_.jsx)(l.Z,{className:r.InputForm,id:"outlined-basic",label:"Name",variant:"outlined",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:N}),(0,_.jsx)(l.Z,{className:r.InputForm,id:"outlined-basic",label:"Telephone",variant:"outlined",type:"number",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:h,onChange:N})]}),(0,_.jsx)(m.Z,{disabled:k,type:"submit",variant:"outlined",children:v?(0,_.jsx)(i.W0,{color:"#00BFFF",height:20,width:20}):"Add contact"}),(0,_.jsx)(u.x7,{position:"top-center"})]})},f=(0,s.memo)(d),p="Filter_LabelForm__5FURR",h="Filter_NamesForm__NVh6x",x="Filter_InputName__WwURk",C=n(806),b=n(5048),j=n(7078),g=function(){var e=(0,b.I0)();return(0,_.jsxs)("label",{className:p,children:[(0,_.jsx)("span",{className:h,children:"Find contacts by name"}),(0,_.jsx)(j.Z,{className:x,color:"success",type:"text",name:"filter",placeholder:"filter contacts",onChange:function(t){e((0,C.pe)(t.currentTarget.value))}})]})},v=n(5861),Z=n(7757),I=n.n(Z),k="ContactListItem_ButtonsContact__nYGHx",F="ContactListItem_NumberContacts__P3EA2",N="ContactListItem_IconsDelete__39UkZ",P="ContactListItem_IconsRemove__oLgqX",L="ContactListItem_EditButton__MvSK+",y="ContactListItem_EditIcon__I2pD9",w="ContactListItem_ButtonDone__cCAMZ",T="ContactListItem_IconDone__fJvs3",E="ContactListItem_DefaultInput__dG43Z",B="ContactListItem_DroupContent__91i1u",A="ContactListItem_Backdroup__J9yck",z="ContactListItem_InputModal__Ce1Xt",R="ContactListItem_editModal__L46+7",S="ContactListItem_EditDelete__J-9z5",D=n(7247),U=n(9579),W=n(1286),X=(n(9323),n(1428)),q=n(9823),M=n(3400),Y=n(1469),G=function(e){var t=e.id,n=e.name,r=e.number,o=(0,c._e)(),i=(0,a.Z)(o,1)[0],l=(0,c.zr)(),m=(0,a.Z)(l,2),d=m[0],f=m[1].isLoading,p=(0,s.useState)(null),h=(0,a.Z)(p,2),x=h[0],C=h[1],b=(0,s.useState)(n),j=(0,a.Z)(b,2),g=j[0],Z=j[1],G=(0,s.useState)(r),J=(0,a.Z)(G,2),H=J[0],V=J[1],K=(0,s.useState)(!1),Q=(0,a.Z)(K,2),$=Q[0],O=Q[1],ee=(0,s.useState)(!1),te=(0,a.Z)(ee,2),ne=te[0],ae=te[1];(0,s.useEffect)((function(){ae(!(!g||!H))}),[g,H]);var se=function(e){27===e.keyCode&&re()};(0,s.useEffect)((function(){return window.addEventListener("keydown",se),function(){window.removeEventListener("keydown",se)}}),[se]);var re=function(e){O(!$),C(e)},oe=function(){C(null)},ce=function(){var e=(0,v.Z)(I().mark((function e(t){return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:u.ZP.error("Contact delete!");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=(0,v.Z)(I().mark((function e(n){return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),C(null),!g||!H){e.next=5;break}return e.next=5,i({id:t,name:g,number:H});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("span",{className:F,children:[n,": ",r]}),x?(0,_.jsx)("div",{onClick:function(e){e.target===e.currentTarget&&oe()},className:A,children:(0,_.jsx)("form",{onSubmit:ie,children:(0,_.jsxs)("div",{className:B,children:[(0,_.jsxs)("div",{className:E,children:[(0,_.jsx)("input",{className:z,type:"text",value:g||"",onChange:function(e){return Z(e.target.value)}}),(0,_.jsx)("input",{className:z,type:"number",value:H||"",onChange:function(e){return V(e.target.value)}})]}),(0,_.jsx)("button",{disabled:!ne,className:w,type:"submit",children:(0,_.jsx)(X.Z,{className:T})}),(0,_.jsx)("button",{type:"button",onClick:oe,className:R,children:(0,_.jsx)(q.Z,{})})]})})}):(0,_.jsxs)("div",{className:S,children:[(0,_.jsx)("button",{onClick:function(){return re(t)},className:L,type:"button",children:(0,_.jsx)(Y.Z,{title:"Edit",children:(0,_.jsx)(M.Z,{size:"small",children:(0,_.jsx)(W.Z,{fontSize:"small",className:y})})})}),(0,_.jsx)("button",{className:k,type:"button",onClick:function(){return ce(t)},children:f?(0,_.jsx)(Y.Z,{title:"Delete",children:(0,_.jsx)(M.Z,{size:"small",children:(0,_.jsx)(U.Z,{fontSize:"small",className:P})})}):(0,_.jsx)(Y.Z,{title:"Delete",children:(0,_.jsx)(M.Z,{size:"small",children:(0,_.jsx)(D.Z,{fontSize:"small",className:N})})})})]})]})},J="ContactList_ContactList__TIBqY",H="ContactList_ItemContacts__nXX0G",V=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())}))},K=function(){var e=(0,c.wY)().data,t=(0,b.v9)((function(e){return e.contacts.filter}));return(0,_.jsx)("ul",{className:J,children:e&&V(e,t).map((function(e){var t=e.id,n=e.name,a=e.number;return(0,_.jsx)("li",{className:H,children:(0,_.jsx)(G,{id:t,name:n,number:a})},t)}))})},Q=n(4569),$=n.n(Q),O=(0,o.createAction)("contacts/fetchTodosRequest"),ee=(0,o.createAction)("contacts/fetchTodosSuccess"),te=(0,o.createAction)("contacts/fetchTodosError"),ne={fetchContacts:function(){return function(){var e=(0,v.Z)(I().mark((function e(t){var n,a;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(O()),e.prev=1,e.next=4,$().get("/contacts");case 4:n=e.sent,a=n.data,t(ee(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(te(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}},ae=ne,se=n(58),re=n(6057),oe=function(){var e=(0,b.I0)();return(0,s.useEffect)((function(){e(ae.fetchContacts())}),[e]),(0,_.jsxs)("div",{className:se.Z.Forms,children:[(0,_.jsxs)("h1",{className:se.Z.PhoneBook,children:[(0,_.jsx)(re.Z,{}),"Phonebook"]}),(0,_.jsx)(f,{}),(0,_.jsx)("h2",{className:se.Z.Contacts,children:"Contacts"}),(0,_.jsx)(g,{}),(0,_.jsx)(K,{})]})}},58:function(e,t){t.Z={HomePhone:"Pages_HomePhone__4bjw-",PersonWelcom:"Pages_PersonWelcom__0ePYp",Forms:"Pages_Forms__yR4cF",PhoneBook:"Pages_PhoneBook__ebPAg",Contacts:"Pages_Contacts__9kmGg",FormRegister:"Pages_FormRegister__kD0WT",InputRegister:"Pages_InputRegister__C6zst",InputPosition:"Pages_InputPosition__UB-ip",InputEidth:"Pages_InputEidth__j6D1I",RegisterText:"Pages_RegisterText__xRyZW",TextProject:"Pages_TextProject__08Xwh",BackLogin:"Pages_BackLogin__h8bbX",ButtRegis:"Pages_ButtRegis__CATAz",ErrorType:"Pages_ErrorType__cngzF"}}}]);
//# sourceMappingURL=197.bc6e1b6a.chunk.js.map