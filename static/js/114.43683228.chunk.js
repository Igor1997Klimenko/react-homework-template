"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{5114:function(t,n,e){e.r(n),e.d(n,{default:function(){return Tn}});var r=e(885),a=e(2791),o={blockform:"ContactForm_blockform__J-oij",LabelForm:"ContactForm_LabelForm__0CPEA",NamesForm:"ContactForm_NamesForm__CIAg1",ButtonsContact:"ContactForm_ButtonsContact__NHo-C",InputForm:"ContactForm_InputForm__IUXia"},i=e(5273),s=e(8990),c=e(4039),u=e(4942),l={data:""},d=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||l},f=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,p=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,v=function t(n,e){var r="",a="",o="",i=function(i){var c=n[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":a+="f"==i[1]?t(c,i):i+"{"+t(c,"k"==i[1]?"":e)+"}":"object"==typeof c?a+=t(c,e?e.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=t.p?t.p(i,c):i+":"+c+";"),s=i};for(var s in n)i(s);return r+(e&&o?e+"{"+o+"}":o)+a},h={},_=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},g=function(t,n,e,r,a){var o=_(t),i=h[o]||(h[o]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(o));if(!h[i]){var s=o!==t?t:function(t){for(var n,e,r=[{}];n=f.exec(t.replace(p,""));)n[4]?r.shift():n[3]?(e=n[3].replace(m," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(m," ").trim();return r[0]}(t);h[i]=v(a?(0,u.Z)({},"@keyframes "+i,s):s,e?"":"."+i)}return function(t,n,e){-1==n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(h[i],n,r),i},x=function(t,n,e){return t.reduce((function(t,r,a){var o=n[a];if(o&&o.call){var i=o(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;o=s?"."+s:i&&"object"==typeof i?i.props?"":v(i,""):!1===i?"":i}return t+r+(null==o?"":o)}),"")};function b(t){var n=this||{},e=t.call?t(n.p):t;return g(e.unshift?e.raw?x(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,d(n.target),n.g,n.o,n.k)}b.bind({g:1});var y,T,E,j=b.bind({k:1});function A(t,n){var e=this||{};return function(){var r=arguments;function a(o,i){var s=Object.assign({},o),c=s.className||a.className;e.p=Object.assign({theme:T&&T()},s),e.o=/ *go\d+/.test(c),s.className=b.apply(e,r)+(c?" "+c:""),n&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),E&&u[0]&&E(s),y(u,s)}return n?n(a):a}}function C(){return C=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},C.apply(this,arguments)}function S(t,n){return n||(n=t.slice(0)),t.raw=n,t}var w,I=function(t,n){return function(t){return"function"===typeof t}(t)?t(n):t},P=function(){var t=0;return function(){return(++t).toString()}}(),N=function(){var t=void 0;return function(){if(void 0===t&&"undefined"!==typeof window){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}();!function(t){t[t.ADD_TOAST=0]="ADD_TOAST",t[t.UPDATE_TOAST=1]="UPDATE_TOAST",t[t.UPSERT_TOAST=2]="UPSERT_TOAST",t[t.DISMISS_TOAST=3]="DISMISS_TOAST",t[t.REMOVE_TOAST=4]="REMOVE_TOAST",t[t.START_PAUSE=5]="START_PAUSE",t[t.END_PAUSE=6]="END_PAUSE"}(w||(w={}));var Z=new Map,O=function(t){if(!Z.has(t)){var n=setTimeout((function(){Z.delete(t),L({type:w.REMOVE_TOAST,toastId:t})}),1e3);Z.set(t,n)}},D=function t(n,e){switch(e.type){case w.ADD_TOAST:return C({},n,{toasts:[e.toast].concat(n.toasts).slice(0,20)});case w.UPDATE_TOAST:return e.toast.id&&function(t){var n=Z.get(t);n&&clearTimeout(n)}(e.toast.id),C({},n,{toasts:n.toasts.map((function(t){return t.id===e.toast.id?C({},t,e.toast):t}))});case w.UPSERT_TOAST:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:w.UPDATE_TOAST,toast:r}):t(n,{type:w.ADD_TOAST,toast:r});case w.DISMISS_TOAST:var a=e.toastId;return a?O(a):n.toasts.forEach((function(t){O(t.id)})),C({},n,{toasts:n.toasts.map((function(t){return t.id===a||void 0===a?C({},t,{visible:!1}):t}))});case w.REMOVE_TOAST:return void 0===e.toastId?C({},n,{toasts:[]}):C({},n,{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case w.START_PAUSE:return C({},n,{pausedAt:e.time});case w.END_PAUSE:var o=e.time-(n.pausedAt||0);return C({},n,{pausedAt:void 0,toasts:n.toasts.map((function(t){return C({},t,{pauseDuration:t.pauseDuration+o})}))})}},k=[],F={toasts:[],pausedAt:void 0},L=function(t){F=D(F,t),k.forEach((function(t){t(F)}))},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M=function(t){return function(n,e){var r=function(t,n,e){return void 0===n&&(n="blank"),C({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e,{id:(null==e?void 0:e.id)||P()})}(n,t,e);return L({type:w.UPSERT_TOAST,toast:r}),r.id}},R=function(t,n){return M("blank")(t,n)};R.error=M("error"),R.success=M("success"),R.loading=M("loading"),R.custom=M("custom"),R.dismiss=function(t){L({type:w.DISMISS_TOAST,toastId:t})},R.remove=function(t){return L({type:w.REMOVE_TOAST,toastId:t})},R.promise=function(t,n,e){var r=R.loading(n.loading,C({},e,null==e?void 0:e.loading));return t.then((function(t){return R.success(I(n.success,t),C({id:r},e,null==e?void 0:e.success)),t})).catch((function(t){R.error(I(n.error,t),C({id:r},e,null==e?void 0:e.error))})),t};var U=function(t){var n=function(t){void 0===t&&(t={});var n=(0,a.useState)(F),e=n[0],r=n[1];(0,a.useEffect)((function(){return k.push(r),function(){var t=k.indexOf(r);t>-1&&k.splice(t,1)}}),[e]);var o=e.toasts.map((function(n){var e,r,a;return C({},t,t[n.type],n,{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==(r=t)?void 0:r.duration)||z[n.type],style:C({},t.style,null==(a=t[n.type])?void 0:a.style,n.style)})}));return C({},e,{toasts:o})}(t),e=n.toasts,r=n.pausedAt;(0,a.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return R.dismiss(n.id)}),e);n.visible&&R.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var o=(0,a.useMemo)((function(){return{startPause:function(){L({type:w.START_PAUSE,time:Date.now()})},endPause:function(){r&&L({type:w.END_PAUSE,time:Date.now()})},updateHeight:function(t,n){return L({type:w.UPDATE_TOAST,toast:{id:t,height:n}})},calculateOffset:function(t,n){var r,a=n||{},o=a.reverseOrder,i=void 0!==o&&o,s=a.gutter,c=void 0===s?8:s,u=a.defaultPosition,l=e.filter((function(n){return(n.position||u)===(t.position||u)&&n.height})),d=l.findIndex((function(n){return n.id===t.id})),f=l.filter((function(t,n){return n<d&&t.visible})).length,p=(r=l.filter((function(t){return t.visible}))).slice.apply(r,i?[f+1]:[0,f]).reduce((function(t,n){return t+(n.height||0)+c}),0);return p}}}),[e,r]);return{toasts:e,handlers:o}};function B(){var t=S(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return B=function(){return t},t}function H(){var t=S(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return H=function(){return t},t}function V(){var t=S(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return V=function(){return t},t}function W(){var t=S(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return W=function(){return t},t}var q=j(W()),Y=j(V()),G=j(H()),J=A("div")(B(),(function(t){return t.primary||"#ff4b4b"}),q,Y,(function(t){return t.secondary||"#fff"}),G);function Q(){var t=S(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return Q=function(){return t},t}function $(){var t=S(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return $=function(){return t},t}var X=j($()),K=A("div")(Q(),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),X);function tt(){var t=S(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return tt=function(){return t},t}function nt(){var t=S(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return nt=function(){return t},t}function et(){var t=S(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return et=function(){return t},t}var rt=j(et()),at=j(nt()),ot=A("div")(tt(),(function(t){return t.primary||"#61d345"}),rt,at,(function(t){return t.secondary||"#fff"}));function it(){var t=S(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return it=function(){return t},t}function st(){var t=S(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return st=function(){return t},t}function ct(){var t=S(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return ct=function(){return t},t}function ut(){var t=S(["\n  position: absolute;\n"]);return ut=function(){return t},t}var lt=A("div")(ut()),dt=A("div")(ct()),ft=j(st()),pt=A("div")(it(),ft),mt=function(t){var n=t.toast,e=n.icon,r=n.type,o=n.iconTheme;return void 0!==e?"string"===typeof e?(0,a.createElement)(pt,null,e):e:"blank"===r?null:(0,a.createElement)(dt,null,(0,a.createElement)(K,Object.assign({},o)),"loading"!==r&&(0,a.createElement)(lt,null,"error"===r?(0,a.createElement)(J,Object.assign({},o)):(0,a.createElement)(ot,Object.assign({},o))))};function vt(){var t=S(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);return vt=function(){return t},t}function ht(){var t=S(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return ht=function(){return t},t}var _t=function(t){return"\n0% {transform: translate3d(0,"+-200*t+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},gt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*t+"%,-1px) scale(.6); opacity:0;}\n"},xt=A("div",a.forwardRef)(ht()),bt=A("div")(vt()),yt=(0,a.memo)((function(t){var n=t.toast,e=t.position,r=t.style,o=t.children,i=null!=n&&n.height?function(t,n){var e=t.includes("top")?1:-1,r=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[_t(e),gt(e)],a=r[1];return{animation:n?j(r[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":j(a)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(n.position||e||"top-center",n.visible):{opacity:0},s=(0,a.createElement)(mt,{toast:n}),c=(0,a.createElement)(bt,Object.assign({},n.ariaProps),I(n.message,n));return(0,a.createElement)(xt,{className:n.className,style:C({},i,r,n.style)},"function"===typeof o?o({icon:s,message:c}):(0,a.createElement)(a.Fragment,null,s,c))}));function Tt(){var t=S(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return Tt=function(){return t},t}!function(t,n,e,r){v.p=n,y=t,T=e,E=r}(a.createElement);var Et=b(Tt()),jt=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,o=t.toastOptions,i=t.gutter,s=t.children,c=t.containerStyle,u=t.containerClassName,l=U(o),d=l.toasts,f=l.handlers;return(0,a.createElement)("div",{style:C({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},c),className:u,onMouseEnter:f.startPause,onMouseLeave:f.endPause},d.map((function(t){var e,o=t.position||r,c=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return C({left:0,right:0,display:"flex",position:"absolute",transition:N()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+n*(e?1:-1)+"px)"},r,a)}(o,f.calculateOffset(t,{reverseOrder:n,gutter:i,defaultPosition:r})),u=t.height?void 0:(e=function(n){f.updateHeight(t.id,n.height)},function(t){t&&setTimeout((function(){var n=t.getBoundingClientRect();e(n)}))});return(0,a.createElement)("div",{ref:u,className:t.visible?Et:"",key:t.id,style:c},"custom"===t.type?I(t.message,t):s?s(t):(0,a.createElement)(yt,{toast:t,position:o}))})))},At=R,Ct=e(7997),St=e(2996),wt=e(184),It=function(){var t=(0,a.useState)(""),n=(0,r.Z)(t,2),e=n[0],u=n[1],l=(0,a.useState)(""),d=(0,r.Z)(l,2),f=d[0],p=d[1],m=(0,s.wY)().data,v=(0,s.Tn)(),h=(0,r.Z)(v,2),_=h[0],g=h[1].isLoading,x=(0,a.useState)(!1),b=(0,r.Z)(x,2),y=b[0],T=b[1];(0,a.useEffect)((function(){T(""===e||""===f)}),[e,f]);var E=function(t){var n=t.target,e=n.name,r=n.value;switch(e){case"name":u(r);break;case"phone":p(r);break;default:return}},j=function(){return m.find((function(t){return t.name.toUpperCase()===e.toUpperCase()||t.phone===f}))};return(0,wt.jsxs)("form",{className:o.forma,onSubmit:function(t){t.preventDefault(),j()?At.success("".concat(e," is already in contacts"),{style:{border:"1px solid red",padding:"16px",color:"red"},iconTheme:{primary:"red",secondary:"#FFFAEE"}}):(_({name:e,phone:f,id:(0,i.nanoid)()}),u(""),p(""),At.success("Contact added!"))},children:[(0,wt.jsxs)("div",{className:o.blockform,children:[(0,wt.jsx)(Ct.Z,{className:o.InputForm,id:"outlined-basic",label:"Name",variant:"outlined",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:E}),(0,wt.jsx)(Ct.Z,{className:o.InputForm,id:"outlined-basic",label:"Telephone",variant:"outlined",type:"number",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:f,onChange:E})]}),(0,wt.jsx)(St.Z,{disabled:y,type:"submit",variant:"outlined",children:g?(0,wt.jsx)(c.W0,{color:"#00BFFF",height:20,width:20}):"Add contact"}),(0,wt.jsx)(jt,{position:"top-center"})]})},Pt=(0,a.memo)(It),Nt="Filter_LabelForm__efyu5",Zt="Filter_NamesForm__FDEqS",Ot="Filter_InputName__GhJHk",Dt=e(806),kt=e(5048),Ft=e(7078),Lt=function(){var t=(0,kt.I0)();return(0,wt.jsxs)("label",{className:Nt,children:[(0,wt.jsx)("span",{className:Zt,children:"Find contacts by name"}),(0,wt.jsx)(Ft.Z,{className:Ot,type:"text",name:"filter",placeholder:"filter contacts",onChange:function(n){t((0,Dt.pe)(n.currentTarget.value))}})]})},zt=e(1413),Mt=e(5861),Rt=e(7757),Ut=e.n(Rt),Bt="ContactListItem_ButtonsContact__T5E7W",Ht="ContactListItem_NumberContacts__cU46Z",Vt="ContactListItem_IconsDelete__HIems",Wt="ContactListItem_IconsRemove__Od-Ht",qt="ContactListItem_EditButton__wgQA7",Yt="ContactListItem_EditIcon__ItWNL",Gt="ContactListItem_ButtonDone__gYeF+",Jt="ContactListItem_IconDone__rGg89",Qt="ContactListItem_DefaultInput__LRQwg",$t="ContactListItem_DroupContent__c8dGF",Xt="ContactListItem_Backdroup__UBbsp",Kt="ContactListItem_InputModal__9smDe",tn="ContactListItem_editModal__spZB5",nn="ContactListItem_EditDelete__wl245",en=e(7247),rn=e(9579),an=e(1286),on=e(1428),sn=e(9823),cn=function(t){var n=t.id,e=t.name,o=t.phone,i=(0,s._e)(),c=(0,r.Z)(i,1)[0],l=(0,s.zr)(),d=(0,r.Z)(l,2),f=d[0],p=d[1].isLoading,m=(0,s.wY)().data,v=(0,a.useState)(null),h=(0,r.Z)(v,2),_=h[0],g=h[1],x=(0,a.useState)(!1),b=(0,r.Z)(x,2),y=b[0],T=b[1],E=(0,a.useState)(m),j=(0,r.Z)(E,2),A=j[0],C=j[1],S=function(){var t=(0,Mt.Z)(Ut().mark((function t(n){return Ut().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(n);case 2:At.error("Contact delete!");case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();(0,a.useEffect)((function(){T(!!n)}),[n,m]);var w=function(t){var n=t.target,e=n.name,r=n.value;C((0,zt.Z)((0,zt.Z)({},A),{},(0,u.Z)({},e,r)))};return(0,wt.jsxs)(wt.Fragment,{children:[(0,wt.jsxs)("span",{className:Ht,children:[e,": ",o]}),y&&_===n?(0,wt.jsx)("div",{className:Xt,children:(0,wt.jsx)("form",{name:"updateTask",onSubmit:function(t){t.preventDefault(),g(null);var r={name:e,phone:o,completed:!1,id:n};console.log("first",r),c(r)},children:(0,wt.jsxs)("div",{className:$t,children:[(0,wt.jsxs)("div",{className:Qt,children:[(0,wt.jsx)("input",{className:Kt,type:"text",defaultValue:e||"",onChange:w}),(0,wt.jsx)("input",{className:Kt,type:"text",defaultValue:o||"",onChange:w})]}),(0,wt.jsx)("button",{className:Gt,type:"submit",children:(0,wt.jsx)(on.Z,{className:Jt})}),(0,wt.jsx)("button",{type:"button",onClick:function(){g(null)},className:tn,children:(0,wt.jsx)(sn.Z,{})})]})})}):(0,wt.jsxs)("div",{className:nn,children:[(0,wt.jsx)("button",{onClick:function(){g(n)},className:qt,type:"button",children:(0,wt.jsx)(an.Z,{className:Yt})}),(0,wt.jsx)("button",{className:Bt,type:"button",onClick:function(){return S(n)},children:p?(0,wt.jsx)(rn.Z,{className:Wt}):(0,wt.jsx)(en.Z,{className:Vt})})]})]})},un="ContactList_ContactList__YHv65",ln="ContactList_ItemContacts__3wyzz",dn=function(t,n){return t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase().trim())}))},fn=function(){var t=(0,s.wY)().data,n=(0,kt.v9)((function(t){return t.contacts.filter}));return(0,wt.jsx)("ul",{className:un,children:t&&dn(t,n).map((function(t){var n=t.id,e=t.name,r=t.phone;return(0,wt.jsx)("li",{className:ln,children:(0,wt.jsx)(cn,{id:n,name:e,phone:r})},n)}))})},pn=e(4569),mn=e.n(pn),vn=(0,i.createAction)("contacts/fetchTodosRequest"),hn=(0,i.createAction)("contacts/fetchTodosSuccess"),_n=(0,i.createAction)("contacts/fetchTodosError"),gn={fetchContacts:function(){return function(){var t=(0,Mt.Z)(Ut().mark((function t(n){var e,r;return Ut().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(vn()),t.prev=1,t.next=4,mn().get("/contacts");case 4:e=t.sent,r=e.data,n(hn(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(_n(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(n){return t.apply(this,arguments)}}()}},xn=gn,bn=e(58),yn=e(6057),Tn=function(){var t=(0,kt.I0)();return(0,a.useEffect)((function(){t(xn.fetchContacts())}),[t]),(0,wt.jsxs)("div",{className:bn.Z.Forms,children:[(0,wt.jsxs)("h1",{className:bn.Z.PhoneBook,children:[(0,wt.jsx)(yn.Z,{}),"Phonebook"]}),(0,wt.jsx)(Pt,{}),(0,wt.jsx)("h2",{className:bn.Z.Contacts,children:"Contacts"}),(0,wt.jsx)(Lt,{}),(0,wt.jsx)(fn,{})]})}},9579:function(t,n,e){var r=e(5318);n.Z=void 0;var a=r(e(5649)),o=e(184),i=(0,a.default)([(0,o.jsx)("path",{d:"M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68c1.12 2.36 3.53 4 6.32 4 3.87 0 7-3.13 7-7s-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},"0"),(0,o.jsx)("path",{d:"M16.5 12H15v5l3.6 2.1.8-1.2-2.9-1.7z"},"1")],"AutoDelete");n.Z=i},9823:function(t,n,e){var r=e(5318);n.Z=void 0;var a=r(e(5649)),o=e(184),i=(0,a.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=i},7247:function(t,n,e){var r=e(5318);n.Z=void 0;var a=r(e(5649)),o=e(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i},1428:function(t,n,e){var r=e(5318);n.Z=void 0;var a=r(e(5649)),o=e(184),i=(0,a.default)((0,o.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");n.Z=i},1286:function(t,n,e){var r=e(5318);n.Z=void 0;var a=r(e(5649)),o=e(184),i=(0,a.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=i},6057:function(t,n,e){var r=e(5318);n.Z=void 0;var a=r(e(5649)),o=e(184),i=(0,a.default)((0,o.jsx)("path",{d:"M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"}),"PhoneIphone");n.Z=i},58:function(t,n){n.Z={HomePhone:"Pages_HomePhone__PuBZU",PersonWelcom:"Pages_PersonWelcom__kj6jA",Forms:"Pages_Forms__Zetjy",PhoneBook:"Pages_PhoneBook__SunJn",Contacts:"Pages_Contacts__6dFg4",FormRegister:"Pages_FormRegister__H0b0y",InputRegister:"Pages_InputRegister__6e1NZ",InputEidth:"Pages_InputEidth__UgHGW",RegisterText:"Pages_RegisterText__rWR6q",TextProject:"Pages_TextProject__NeVHf",BackLogin:"Pages_BackLogin__M+WI8",ButtRegis:"Pages_ButtRegis__6nkTt",ErrorType:"Pages_ErrorType__HOyOB"}}}]);
//# sourceMappingURL=114.43683228.chunk.js.map