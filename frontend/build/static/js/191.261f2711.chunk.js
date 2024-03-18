"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[191],{3999:(e,t,a)=>{a.d(t,{Z:()=>r});a(2791);var n=a(1087),s=a(184);const r=e=>e.href?(0,s.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,s.jsx)(n.rU,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,s.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},7212:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(2791),s=a(3999),r=a(184);const l=e=>{const[t,a]=(0,n.useState)(),[l,i]=(0,n.useState)(),[o,c]=(0,n.useState)(!1),d=(0,n.useRef)();(0,n.useEffect)((()=>{if(!t)return;const e=new FileReader;e.onload=()=>{i(e.result)},e.readAsDataURL(t)}),[t]);return(0,r.jsxs)("div",{className:"form-control",children:[(0,r.jsx)("input",{id:e.id,ref:d,style:{display:"none"},type:"file",accept:".png,.jpg,.jpeg",onChange:t=>{let n,s=o;t.target.files&&1===t.target.files.length?(n=t.target.files[0],a(n),c(!0),s=!0):(c(!1),s=!1),e.onInput(e.id,n,s)}}),(0,r.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,r.jsxs)("div",{className:"image-upload__preview",children:[l&&(0,r.jsx)("img",{src:l,alt:"Preview"}),!l&&(0,r.jsx)("p",{children:"Please pick an image."})]}),(0,r.jsx)(s.Z,{type:"button",onClick:()=>{d.current.click()},children:"Upload"})]}),!o&&(0,r.jsx)("p",{children:e.errorText})]})}},916:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(2791),s=a(1595),r=a(184);const l=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:(0,s.Gu)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}},i=e=>{const[t,a]=(0,n.useReducer)(l,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),{id:s,onInput:i}=e,{value:o,isValid:c}=t;(0,n.useEffect)((()=>{i(s,o,c)}),[s,o,c,i]);const d=t=>{a({type:"CHANGE",val:t.target.value,validators:e.validators})},u=()=>{a({type:"TOUCH"})},p="input"===e.element?(0,r.jsx)("input",{id:e.id,name:e.name,type:e.type,placeholder:e.placeholder,onChange:d,onBlur:u,value:t.value}):(0,r.jsx)("textarea",{id:e.id,name:e.name,rows:e.rows||3,onChange:d,onBlur:u,value:t.value});return(0,r.jsxs)("div",{className:"form-control ".concat(!t.isValid&&t.isTouched&&"form-control--invalid"),children:[(0,r.jsx)("label",{htmlFor:e.id,children:e.label}),p,!t.isValid&&t.isTouched&&(0,r.jsx)("p",{children:e.errorText})]})}},3373:(e,t,a)=>{a.d(t,{Z:()=>s});a(2791);var n=a(184);const s=e=>(0,n.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})},5434:(e,t,a)=>{a.d(t,{Z:()=>l});a(2791);var n=a(2921),s=a(3999),r=a(184);const l=e=>(0,r.jsx)(n.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,r.jsx)(s.Z,{onClick:e.onClear,children:"Okay"}),children:(0,r.jsx)("p",{children:e.error})})},2921:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(2791),s=a(4164),r=a(8189),l=a(9422),i=a(184);const o=e=>{const t=(0,i.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,i.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,i.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,i.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return s.createPortal(t,document.getElementById("modal-hook"))},c=e=>(0,i.jsxs)(n.Fragment,{children:[e.show&&(0,i.jsx)(l.Z,{onClick:e.onCancel}),(0,i.jsx)(r.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,i.jsx)(o,{...e})})]})},5094:(e,t,a)=>{a.d(t,{c:()=>r});var n=a(2791);const s=(e,t)=>{switch(t.type){case"INPUT_CHANGE":let a=!0;for(const n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:a};case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},r=(e,t)=>{const[a,r]=(0,n.useReducer)(s,{inputs:e,isValid:t});return[a,(0,n.useCallback)(((e,t,a)=>{r({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),(0,n.useCallback)(((e,t)=>{r({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},9508:(e,t,a)=>{a.d(t,{x:()=>s});var n=a(2791);const s=()=>{const[e,t]=(0,n.useState)(!1),[a,s]=(0,n.useState)(),r=(0,n.useRef)([]),l=(0,n.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const i=new AbortController;r.current.push(i);try{const s=await fetch(e,{method:a,body:n,headers:l,signal:i.signal}),o=await s.json();if(r.current=r.current.filter((e=>e!==i)),!s.ok)throw new Error(o.message);return t(!1),o}catch(o){throw console.log(o),s(o.message),t(!1),o}}),[]);return(0,n.useEffect)((()=>()=>{r.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:a,sendRequest:l,clearError:()=>{s(null)}}}},1595:(e,t,a)=>{a.d(t,{CP:()=>o,Gu:()=>d,Ox:()=>c,hg:()=>i});const n="REQUIRE",s="MINLENGTH",r="MAXLENGTH",l="EMAIL",i=()=>({type:n}),o=e=>({type:s,val:e}),c=()=>({type:l}),d=(e,t)=>{let a=!0;for(const i of t)i.type===n&&(a=a&&e.trim().length>0),i.type===s&&(a=a&&e.trim().length>=i.val),i.type===r&&(a=a&&e.trim().length<=i.val),"MIN"===i.type&&(a=a&&+e>=i.val),"MAX"===i.type&&(a=a&&+e<=i.val),i.type===l&&(a=a&&/^\S+@\S+\.\S+$/.test(e));return a}},4191:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(2791),s=a(3373),r=a(916),l=a(3999),i=a(5434),o=a(9895),c=a(7212),d=a(1595),u=a(5094),p=a(9508),h=a(3108),m=a(184);const v=()=>{const e=(0,n.useContext)(h.V),[t,a]=(0,n.useState)(!0),{isLoading:v,error:x,sendRequest:g,clearError:f}=(0,p.x)(),[j,y,b]=(0,u.c)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1);return(0,m.jsxs)(n.Fragment,{children:[(0,m.jsx)(i.Z,{error:x,onClear:f}),(0,m.jsxs)(s.Z,{className:"authentication",children:[v&&(0,m.jsx)(o.Z,{asOverlay:!0}),(0,m.jsx)("h2",{children:"Login Required"}),(0,m.jsx)("hr",{}),(0,m.jsxs)("form",{onSubmit:async a=>{if(a.preventDefault(),console.log(j),t)try{const t=await g("http://localhost:5000/api/users/login","POST",JSON.stringify({email:j.inputs.email.value,password:j.inputs.password.value}),{"Content-Type":"application/json"});e.login(t.userId,t.token)}catch(n){}else try{const t=new FormData;t.append("email",j.inputs.email.value),t.append("name",j.inputs.name.value),t.append("password",j.inputs.password.value),t.append("image",j.inputs.image.value);const a=await g("http://localhost:5000/api/users/signup","POST",t);e.login(a.userId,a.token)}catch(n){}},children:[!t&&(0,m.jsx)(r.Z,{element:"input",id:"name",type:"text",label:"Your Name",validators:[(0,d.hg)()],errorText:"Please enter a name.",onInput:y}),!t&&(0,m.jsx)(c.Z,{center:!0,id:"image",onInput:y,errorText:"Please provide an image."}),(0,m.jsx)(r.Z,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[(0,d.Ox)()],errorText:"Please enter a valid email address.",onInput:y}),(0,m.jsx)(r.Z,{element:"input",id:"password",type:"password",label:"Password",validators:[(0,d.CP)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:y}),(0,m.jsx)(l.Z,{type:"submit",disabled:!j.isValid,children:t?"LOGIN":"SIGNUP"})]}),(0,m.jsx)(l.Z,{inverse:!0,onClick:()=>{t?b({...j.inputs,name:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1):b({...j.inputs,name:void 0,image:void 0},j.inputs.email.isValid&&j.inputs.password.isValid),a((e=>!e))},children:t?"SIGNUP":"LOGIN"})]})]})}}}]);
//# sourceMappingURL=191.261f2711.chunk.js.map