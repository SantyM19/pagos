(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[790],{6392:function(e,a,n){Promise.resolve().then(n.t.bind(n,7004,23)),Promise.resolve().then(n.bind(n,3319)),Promise.resolve().then(n.bind(n,9202))},9202:function(e,a,n){"use strict";n.d(a,{PSE:function(){return d}});var r=n(7437),t=n(2265),o=n(1743),s=n.n(o),c=n(5515),i=n.n(c),l=n(7890),_=n.n(l);let m=e=>{let{isOpen:a,onClose:n,transaction:t}=e;return a?(0,r.jsx)("div",{className:_().modalOverlay,children:(0,r.jsxs)("div",{className:_().modalContent,children:[(0,r.jsx)("div",{className:_().modalHeader,children:(0,r.jsx)("h3",{children:"Transacci\xf3n Exitosa"})}),(0,r.jsx)("p",{children:"El pago de su factura ha sido recibido exitosamente"}),(0,r.jsxs)("div",{className:_().modalBody,children:[(0,r.jsxs)("div",{className:_().transactionDetail,children:[(0,r.jsx)("span",{className:_().span,children:"Fecha"}),(0,r.jsx)("span",{className:_().spanBlack,children:t.date})]}),(0,r.jsxs)("div",{className:_().transactionDetail,children:[(0,r.jsx)("span",{className:_().span,children:"Valor"}),(0,r.jsx)("span",{className:_().spanBlack,children:t.amount})]}),(0,r.jsxs)("div",{className:_().transactionDetail,children:[(0,r.jsx)("span",{className:_().span,children:"ID pago"}),(0,r.jsx)("span",{className:_().spanBlack,children:t.paymentId})]}),(0,r.jsxs)("div",{className:_().transactionDetail,children:[(0,r.jsx)("span",{className:_().span,children:"Medio de pago"}),(0,r.jsx)("span",{className:_().spanBlack,children:t.paymentMethod})]}),(0,r.jsxs)("div",{className:_().transactionDetail,children:[(0,r.jsx)("span",{className:_().span,children:"Estado del pago"}),(0,r.jsx)("span",{className:_().approved,children:t.status})]}),(0,r.jsxs)("div",{className:_().transactionDetail,children:[(0,r.jsx)("span",{className:_().span,children:"ID de la solicitud"}),(0,r.jsx)("span",{className:_().spanBlack,children:t.requestId})]}),(0,r.jsxs)("div",{className:_().transactionDetail,children:[(0,r.jsx)("span",{className:_().span,children:"Correo"}),(0,r.jsx)("span",{className:_().spanBlack,children:t.email})]})]}),(0,r.jsx)("button",{onClick:n,className:_().closeButton,children:"Cerrar"})]})}):null},d=()=>{let[e,a]=(0,t.useState)({name:"",tipoDoc:"CC",document:"",cardNumber:"",expirationDate:"",email:"",confirmEmail:"",phone:"",termsAccepted:!1}),[n,o]=(0,t.useState)({name:!1,document:!1,cardNumber:!1,expirationDate:!1,email:!1,confirmEmail:!1,phone:!1,termsAccepted:!1}),[c,l]=(0,t.useState)(!1),_={date:"19 / 02 / 2023",amount:"$440.000",paymentId:"15252dfdd",paymentMethod:"PSE",status:"APROBADO",requestId:"125263asdsad",email:e.email},d=r=>{let{name:t,value:s,type:c,checked:i}=r.target;a({...e,[t]:"checkbox"===c?i:s}),o({...n,[t]:!1})},p=()=>{l(!0)};return(0,r.jsxs)("section",{className:s().Payment,children:[(0,r.jsx)("h3",{className:s().Payment__title,children:"Transferencia Interbancaria PSE"}),(0,r.jsxs)("form",{className:s().Payment__form,onSubmit:a=>{a.preventDefault();let r=!0,t={...n};e.termsAccepted||(t.termsAccepted=!0,r=!1,i().fire({title:"T\xe9rminos no aceptados",text:"Por favor, acepta los t\xe9rminos y condiciones.",icon:"warning",confirmButtonText:"Aceptar"})),e.email!==e.confirmEmail&&(t.confirmEmail=!0,r=!1,i().fire({title:"Error",text:"Los correos electr\xf3nicos no coinciden",icon:"error",confirmButtonText:"Aceptar"})),e.name||(t.name=!0,r=!1,i().fire({title:"Error",text:"Campo Nombre sin Informacion",icon:"error",confirmButtonText:"Aceptar"})),e.document||(t.document=!0,r=!1,i().fire({title:"Error",text:"Campo Documento sin informacion",icon:"error",confirmButtonText:"Aceptar"})),e.cardNumber||(t.cardNumber=!0,r=!1,i().fire({title:"Error",text:"Ingresa el numero de tarjeta",icon:"error",confirmButtonText:"Aceptar"})),e.expirationDate||(t.expirationDate=!0,r=!1,r=!1,i().fire({title:"Error",text:"Ingresa la fecha de expiracion de tu tarjeta",icon:"error",confirmButtonText:"Aceptar"})),e.email||(t.email=!0,r=!1,r=!1,i().fire({title:"Error",text:"Ingresa tu email",icon:"error",confirmButtonText:"Aceptar"})),e.phone||(t.phone=!0,r=!1,i().fire({title:"Error",text:"Ingresa tu numero de celular",icon:"error",confirmButtonText:"Aceptar"})),o(t),r&&(i().fire({title:"Enviando formulario...",text:"Por favor espera",allowOutsideClick:!1,didOpen:()=>{i().showLoading(null)}}),setTimeout(()=>{i().fire({title:"Formulario enviado",text:"Tu formulario ha sido enviado con \xe9xito.",icon:"success",confirmButtonText:"Aceptar"}),console.log("Form data:",e),p()},5e3))},children:[(0,r.jsxs)("div",{className:s().Payment__group,children:[(0,r.jsx)("label",{children:"Nombre completo"}),(0,r.jsx)("input",{type:"text",name:"name",value:e.name,onChange:d,placeholder:"Ingresar el nombre",className:n.name?s().Payment__group_errorInput:s().Payment__group_input})]}),(0,r.jsxs)("div",{className:s().Payment__group,children:[(0,r.jsx)("label",{children:"Documento"}),(0,r.jsxs)("div",{className:n.document?s().Payment__group_errorDocument:s().Payment__group_doc,children:[(0,r.jsxs)("select",{name:"tipoDoc",value:e.tipoDoc,onChange:d,className:s().Payment__group_doc_select,children:[(0,r.jsx)("option",{value:"CC",children:"CC"}),(0,r.jsx)("option",{value:"TI",children:"TI"})]}),(0,r.jsx)("input",{className:s().Payment__group_doc_num,type:"text",name:"document",value:e.document,onChange:d,placeholder:"N\xfamero de documento"})]})]}),(0,r.jsxs)("div",{className:s().Payment__group,children:[(0,r.jsx)("label",{children:"N\xfamero de la tarjeta"}),(0,r.jsx)("input",{type:"text",name:"cardNumber",value:e.cardNumber,onChange:d,placeholder:"Ingresar los d\xedgitos",className:n.cardNumber?s().Payment__group_errorInput:s().Payment__group_input})]}),(0,r.jsxs)("div",{className:s().Payment__group,children:[(0,r.jsx)("label",{children:"Fecha de vencimiento"}),(0,r.jsx)("input",{type:"text",name:"expirationDate",value:e.expirationDate,onChange:d,placeholder:"MM / AAAA",className:n.expirationDate?s().Payment__group_errorInput:s().Payment__group_input})]}),(0,r.jsxs)("div",{className:s().Payment__group,children:[(0,r.jsx)("label",{children:"Correo electr\xf3nico"}),(0,r.jsx)("input",{type:"email",name:"email",value:e.email,onChange:d,placeholder:"Ingresar el correo",className:n.email?s().Payment__group_errorInput:s().Payment__group_input})]}),(0,r.jsxs)("div",{className:s().Payment__group,children:[(0,r.jsx)("label",{children:"Confirmar correo electr\xf3nico"}),(0,r.jsx)("input",{type:"email",name:"confirmEmail",value:e.confirmEmail,onChange:d,placeholder:"Ingresar el correo",className:n.confirmEmail?s().Payment__group_errorInput:s().Payment__group_input})]}),(0,r.jsxs)("div",{className:s().Payment__group,children:[(0,r.jsx)("label",{children:"Celular"}),(0,r.jsxs)("div",{className:s().Payment__phone,children:[(0,r.jsx)("span",{children:"+57"}),(0,r.jsx)("input",{type:"text",name:"phone",value:e.phone,onChange:d,placeholder:"Ingresar d\xedgitos",className:n.phone?s().Payment__phone_errorPhone:s().Payment__phone_inputPhone})]})]}),(0,r.jsxs)("div",{className:s().Payment__checkbox,children:[(0,r.jsx)("input",{type:"checkbox",name:"termsAccepted",checked:e.termsAccepted,onChange:d,className:n.termsAccepted?s().errorCheckbox:s().Payment__group_input}),(0,r.jsx)("label",{children:"Acepto t\xe9rminos y condiciones y pol\xedticas de privacidad"})]}),(0,r.jsx)("button",{type:"submit",className:s().Payment__button,children:"Pagar"})]}),(0,r.jsx)(m,{isOpen:c,onClose:()=>{l(!1)},transaction:_})]})}},3319:function(e,a,n){"use strict";n.d(a,{Pago:function(){return i}});var r=n(7437),t=n(2265),o=n(9376),s=n(8324),c=n.n(s);let i=()=>{let[e,a]=(0,t.useState)([]),n=(0,o.useSearchParams)().get("data");(0,t.useEffect)(()=>{if(n&&"string"==typeof n)try{let e=JSON.parse(n);Array.isArray(e)?(console.log("Datos recibidos:",e),a(e)):console.error("Los datos no son un array")}catch(e){console.error("Error al parsear los datos:",e)}},[]);let s=e.reduce((e,a)=>e+a.payValue,0);return(0,r.jsxs)("section",{className:c().DescriptionP,children:[(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Operador"}),(0,r.jsx)("th",{children:"M\xe9todo de consulta"}),(0,r.jsx)("th",{children:"N\xfamero de consulta"}),(0,r.jsx)("th",{children:"Valor a pagar por factura"})]})}),(0,r.jsx)("tbody",{children:e.map((e,a)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.operator}),(0,r.jsx)("td",{children:e.method}),(0,r.jsx)("td",{children:e.value}),(0,r.jsxs)("td",{children:["$ ",e.payValue=5e4]})]},a))})]}),(0,r.jsxs)("div",{className:c().DescriptionP__total,children:[(0,r.jsx)("strong",{children:"Total a pagar: "})," $",s.toLocaleString("es-CO")," COP"]})]})}},7004:function(e){e.exports={Container:"Payment_Container__56OUl"}},7890:function(e){e.exports={modalOverlay:"Modal_modalOverlay___xizv",modalContent:"Modal_modalContent__xoX5s",modalHeader:"Modal_modalHeader__gf1fS",span:"Modal_span__n9AN_",spanBlack:"Modal_spanBlack__qaxLS",closeButton:"Modal_closeButton__svO5B",transactionDetail:"Modal_transactionDetail__J60F2",approved:"Modal_approved__7bm75"}},1743:function(e){e.exports={Payment:"PSE_Payment__8c_fq",Payment__title:"PSE_Payment__title__jpQyl",Payment__form:"PSE_Payment__form__crDOI",Payment__group:"PSE_Payment__group__M7sfa",Payment__group_errorInput:"PSE_Payment__group_errorInput__jQHJB",Payment__group_input:"PSE_Payment__group_input__Me6oJ",Payment__group_doc:"PSE_Payment__group_doc__TuZ_C",Payment__group_doc_select:"PSE_Payment__group_doc_select__jPRWx",Payment__group_doc_num:"PSE_Payment__group_doc_num__xErJ3",Payment__group_errorDocument:"PSE_Payment__group_errorDocument__Fcz3u",Payment__group_errorDocument_select:"PSE_Payment__group_errorDocument_select__UXm34",Payment__group_errorDocument_num:"PSE_Payment__group_errorDocument_num__9qFC_",Payment__phone:"PSE_Payment__phone__6yFiT",Payment__phone_inputPhone:"PSE_Payment__phone_inputPhone__dbzvs",Payment__phone_errorPhone:"PSE_Payment__phone_errorPhone__yigtH",Payment__checkbox:"PSE_Payment__checkbox__O40kD",Payment__button:"PSE_Payment__button__AgWtV",errorCheckbox:"PSE_errorCheckbox__fbnDM"}},8324:function(e){e.exports={DescriptionP:"Pago_DescriptionP__MIH2W",DescriptionP__actions:"Pago_DescriptionP__actions__85AHA",DescriptionP__add:"Pago_DescriptionP__add__Hc5_7",DescriptionP__pay:"Pago_DescriptionP__pay__9_SEY",DescriptionP__total:"Pago_DescriptionP__total__k8_Kh"}}},function(e){e.O(0,[2,222,971,117,744],function(){return e(e.s=6392)}),_N_E=e.O()}]);