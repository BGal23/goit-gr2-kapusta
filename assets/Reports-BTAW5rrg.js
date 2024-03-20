import{r as m,c as O,s as B,m as $,j as s,n as J,o as G,b,u as L,p as Z,L as A}from"./index-Bwk1z-d2.js";import{P as h,C as F}from"./Balance-CJ5Femsn.js";const W=e=>e.reports;const V=()=>{const[e,n]=m.useState(""),[t,r]=m.useState([]),[o,i]=m.useState("expense"),d=O(B),c=O($);m.useEffect(()=>{(async()=>{try{const g=await a(o,c,d+1,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMDg3MDI4MiwiZXhwIjoxNzExNDc1MDgyfQ.FF_Gif1IT1pbyeFnXnos_ThL8gGtAZ4fbi79dKyxlE4");r(g)}catch(x){console.error("Błąd pobierania danych z API:",x.message)}})()},[d,c,o]);const a=async(u,x,g,z)=>(console.log("Transaction type:",u),console.log("Month:",g),console.log("Year:",x),await J({transactionType:u,year:x,month:g,token:z})),l=u=>{const{value:x}=u.target;i(x)},N=u=>{n(u)};return s.jsxs("div",{children:[s.jsxs("select",{value:o,onChange:l,children:[s.jsx("option",{value:"expense",children:"Expense"}),s.jsx("option",{value:"income",children:"Income"})]}),s.jsx("ul",{children:t.map(u=>s.jsxs("li",{onClick:()=>N(u),className:`${u===e?"active":""}`,children:[s.jsxs("p",{children:[u.total,".00"]}),s.jsx("p",{children:u.categoryName})]},u.id))})]})},X={filteredData:[]},D=G({name:"reportsQuery",initialState:X,reducers:{filteredDataAction:(e,n)=>{e.filteredData=n.payload}}}),{filteredDataAction:T}=D.actions;D.reducer;const q="_list_108ju_1",K="_item_108ju_11",Q="_itemText_108ju_52",U="_itemExpenses_108ju_59",H="_itemIncome_108ju_66",ee="_box_108ju_73",te="_navText_108ju_90",p={list:q,item:K,itemText:Q,itemExpenses:U,itemIncome:H,box:ee,navText:te};var M={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},k=b.createContext&&b.createContext(M),ne=["attr","size","title"];function se(e,n){if(e==null)return{};var t=re(e,n),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function re(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y.apply(this,arguments)}function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?E(Object(t),!0).forEach(function(r){oe(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function oe(e,n,t){return n=ce(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ce(e){var n=ae(e,"string");return typeof n=="symbol"?n:String(n)}function ae(e,n){if(typeof e!="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function P(e){return e&&e.map((n,t)=>b.createElement(n.tag,I({key:t},n.attr),P(n.child)))}function S(e){return n=>b.createElement(ie,y({attr:I({},e.attr)},n),P(e.child))}function ie(e){var n=t=>{var{attr:r,size:o,title:i}=e,d=se(e,ne),c=o||t.size||"1em",a;return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),b.createElement("svg",y({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,d,{className:a,style:I(I({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&b.createElement("title",null,i),e.children)};return k!==void 0?b.createElement(k.Consumer,null,t=>n(t)):n(M)}function le(e){return S({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function de(e){return S({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}const ue="_box_183zs_1",me="_button_183zs_8",C={box:ue,button:me},_=({onButtonClick:e})=>{const n=t=>{const r=t.currentTarget.name;e(r),console.log(e)};return s.jsxs("div",{className:C.box,children:[s.jsx("button",{className:C.button,name:"decrement",onClick:n,children:s.jsx(le,{})}),s.jsx("button",{className:C.button,name:"increment",onClick:n,children:s.jsx(de,{})})]})};_.propTypes={onButtonClick:h.func.isRequired};const pe=()=>{var i,d;const[e,n]=m.useState("expenses"),t=O(W),r=L(),o=()=>{if(e==="expenses"){n("income"),r(T([]));return}n("expenses"),r(T([]))};return m.useEffect(()=>{(async()=>{try{const l=await Z({transactionType:e,token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMDg3MDI4MiwiZXhwIjoxNzExNDc1MDgyfQ.FF_Gif1IT1pbyeFnXnos_ThL8gGtAZ4fbi79dKyxlE4"});console.log("Expense categories:",l)}catch(a){console.error("Błąd pobierania kategorii z API:",a.message)}})()},[e]),s.jsxs("div",{children:[s.jsxs("ul",{className:p.list,children:[s.jsxs("li",{className:p.item,children:[s.jsx("p",{className:p.itemText,children:"Expenses:"}),s.jsxs("span",{className:p.itemExpenses,children:[((i=t==null?void 0:t.expenses)==null?void 0:i.expenseTotal)??0,".00"]})]}),s.jsxs("li",{className:p.item,children:[s.jsx("p",{className:p.itemText,children:"Income:"}),s.jsxs("span",{className:p.itemIncome,children:[((d=t==null?void 0:t.incomes)==null?void 0:d.incomeTotal)??0,".00"]})]})]}),s.jsxs("div",{className:p.box,children:[s.jsx(_,{onButtonClick:o,children:s.jsx("p",{className:p.navText,children:e})}),s.jsx(V,{})]})]})},R=new Date,j=["January","February","March","April","May","June","July","August","September","October","November","December"],xe=()=>R.getMonth(),he=()=>R.getFullYear(),be="_backdrop_1cjrp_1",fe="_calendarbox_1cjrp_10",je="_calendarItem_1cjrp_21",_e="_active_1cjrp_26",f={backdrop:be,calendarbox:fe,calendarItem:je,active:_e},Y=({onClose:e,currentMonth:n,currentYear:t,onChangeDate:r})=>{const o=c=>{const a=parseInt(c.currentTarget.textContent);r(a,n)},i=c=>{const a=c.currentTarget.textContent,l=j.indexOf(a);r(t,l)};m.useEffect(()=>{const c=a=>{a.code==="Escape"&&e()};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[e]);const d=c=>{c.target===c.currentTarget&&e()};return s.jsx("div",{onClick:d,className:f.backdrop,children:s.jsxs("div",{className:f.calendarbox,children:[s.jsx(_,{onButtonClick:o,children:s.jsx("p",{className:f.year,children:t})}),s.jsx("ul",{children:j.map(c=>s.jsx("p",{className:`${f.calendarItem} ${c===n?f.active:""}`,onClick:i,children:c},c))})]})})};Y.propTypes={onClose:h.func.isRequired,currentMonth:h.oneOfType([h.string,h.number]).isRequired,currentYear:h.number.isRequired,onChangeDate:h.func.isRequired};const ge="_periodbox_1se94_1",ve="_periodbutton_1se94_6",ye="_periodItem_1se94_16",w={periodbox:ge,periodbutton:ve,periodItem:ye},Ie=()=>{const[e,n]=m.useState(""),[t,r]=m.useState(""),[o,i]=m.useState(!1);m.useEffect(()=>((()=>{const l=xe();n(j[l]),r(he())})(),()=>{}),[]);const d=a=>{let l=j.indexOf(e);l=a?(l+1)%12:(l-1+12)%12;const N=a&&l===0?t+1:!a&&l===11?t-1:t;r(N),n(j[l])},c=()=>{i(a=>!a)};return s.jsxs("div",{className:w.periodbox,children:[s.jsx("p",{children:"Current period:"}),s.jsxs("div",{className:w.periodItem,children:[s.jsx(_,{onButtonClick:()=>d(!1)}),s.jsxs("button",{className:w.periodbutton,onClick:c,children:[e," ",t]}),s.jsx(_,{onButtonClick:()=>d(!0)}),o&&s.jsx(Y,{currentYear:t,currentMonth:e,onChangeDate:d,onClose:c})]})]})},Ne="_box_1jvsl_1",Ce="_mainContainer_1jvsl_5",we="_balance_1jvsl_10",v={box:Ne,mainContainer:Ce,balance:we},Oe=()=>s.jsx("main",{className:v.mainContainer,children:s.jsxs("div",{className:v.box,children:[s.jsx(A,{to:"/",children:"Go back"}),s.jsxs("div",{className:v.box,children:[s.jsx(Ie,{}),s.jsx("div",{className:v.balance,children:s.jsx(F,{})})]})]})}),Te="_box_14hda_1",ke={box:Te},Pe=()=>s.jsxs("div",{className:ke.box,children:[s.jsx(Oe,{}),s.jsx(pe,{})]});export{Pe as default};
