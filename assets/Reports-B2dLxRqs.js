import{g as J,l as O,j as e,r as i,b as I,s as B,m as Y,n as L,u as $,o as q,L as F}from"./index-DyUb9rJE.js";import{r as f}from"./react-responsive-CEtNZfkB.js";import{a as A,B as Z}from"./arrow-m0EialHy.js";var C={exports:{}},W="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",X=W,U=X;function w(){}function k(){}k.resetWarningCache=w;var G=function(){function t(r,d,p,l,o,a){if(a!==U){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}t.isRequired=t;function n(){return t}var c={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:k,resetWarningCache:w};return c.PropTypes=c,c};C.exports=G();var Q=C.exports;const h=J(Q),V={filteredData:[]},M=O({name:"reportsQuery",initialState:V,reducers:{filteredDataAction:(t,n)=>{t.filteredData=n.payload}}}),{filteredDataAction:H}=M.actions;M.reducer;const K="_list_ezdgx_1",ee="_item_ezdgx_11",te="_itemText_ezdgx_50",se="_itemExpenses_ezdgx_58",ne="_itemIncome_ezdgx_65",oe="_box_ezdgx_72",ce="_navText_ezdgx_91",m={list:K,item:ee,itemText:te,itemExpenses:se,itemIncome:ne,box:oe,navText:ce},ae="_box_zq9jx_1",re="_button_zq9jx_8",N={box:ae,button:re},u=({onButtonClick:t,icon:n})=>{const c=r=>{const d=r.currentTarget.name;t(d),console.log(t)};return e.jsx("div",{className:N.box,children:e.jsx("button",{className:N.button,name:"decrement",onClick:c,children:e.jsx("img",{src:n,alt:""})})})};u.propTypes={onButtonClick:h.func.isRequired};const E=({transactionType:t})=>{const[n,c]=i.useState(""),[r,d]=i.useState([]),p=I(B),l=I(Y);i.useEffect(()=>{(async()=>{try{const b=await o(t,l,p+1,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMDkzMjk2NCwiZXhwIjoxNzExNTM3NzY0fQ.Xf8oOxwtX-tiLZ2Pvv33qcXCkSAs-JJgEsM8Jyzxqqc");d(b)}catch(x){console.error("Błąd pobierania danych z API:",x.message)}})()},[p,l,t]);const o=async(s,x,b,P)=>{try{return(await L({transactionType:s,year:x,month:b,token:P})).data}catch(v){throw new Error("Błąd pobierania danych z API: "+v.message)}},a=s=>{c(s)};return e.jsx("div",{children:e.jsx("ul",{children:r.map(s=>e.jsxs("li",{onClick:()=>a(s),className:`${s===n?"active":""}`,children:[e.jsx("p",{children:s.category}),e.jsx("svg",{width:"56",height:"56",className:s.iconName===n?"active":"",children:e.jsx("use",{href:`${s.categoryImageUrl}#${s.iconName}`})}),e.jsxs("p",{children:[s.total," UAH"]})]},s.id))})})};E.propTypes={transactionType:h.bool.isRequired};const R="data:image/svg+xml,%3csvg%20width='7'%20height='12'%20viewBox='0%200%207%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%201L5%206L1%2011'%20stroke='%23FF751D'%20stroke-width='2'/%3e%3c/svg%3e",S="data:image/svg+xml,%3csvg%20width='7'%20height='12'%20viewBox='0%200%207%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%201L2%206L6%2011'%20stroke='%23FF751D'%20stroke-width='2'/%3e%3c/svg%3e",ie=()=>{const[t,n]=i.useState(!0),[c,r]=i.useState(0),[d,p]=i.useState(0),l=$(),o=()=>{n(!t),l(H([]))};return i.useEffect(()=>{(async()=>{try{const s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMDkzMjk2NCwiZXhwIjoxNzExNTM3NzY0fQ.Xf8oOxwtX-tiLZ2Pvv33qcXCkSAs-JJgEsM8Jyzxqqc",{expenseTotal:x}=await q({transactionType:t,token:s});t?r(x):p(x)}catch(s){console.error("Błąd pobierania danych z API:",s.message)}})()},[t]),e.jsxs("div",{children:[e.jsxs("ul",{className:m.list,children:[e.jsxs("li",{className:m.item,children:[e.jsx("p",{className:m.itemText,children:"Expense:"}),e.jsxs("span",{className:m.itemExpenses,children:[c,".00"]})]}),e.jsxs("li",{className:m.item,children:[e.jsx("p",{className:m.itemText,children:"Income:"}),e.jsxs("span",{className:m.itemIncome,children:[d,".00"]})]})]}),e.jsxs("div",{className:m.box,children:[e.jsx(u,{icon:S,onButtonClick:o}),e.jsx("p",{className:m.navText,children:t?"Expense":"Income"}),e.jsx(u,{icon:R,onButtonClick:o}),e.jsx(E,{transactionType:t})]})]})},D=new Date,j=["January","February","March","April","May","June","July","August","September","October","November","December"],le=()=>D.getMonth(),de=()=>D.getFullYear(),pe="_backdrop_1cjrp_1",xe="_calendarbox_1cjrp_10",me="_calendarItem_1cjrp_21",he="_active_1cjrp_26",_={backdrop:pe,calendarbox:xe,calendarItem:me,active:he},z=({onClose:t,currentMonth:n,currentYear:c,onChangeDate:r})=>{const d=o=>{const a=parseInt(o.currentTarget.textContent);r(a,n)},p=o=>{const a=o.currentTarget.textContent,s=j.indexOf(a);r(c,s)};i.useEffect(()=>{const o=a=>{a.code==="Escape"&&t()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[t]);const l=o=>{o.target===o.currentTarget&&t()};return e.jsx("div",{onClick:l,className:_.backdrop,children:e.jsxs("div",{className:_.calendarbox,children:[e.jsx(u,{onButtonClick:d,children:e.jsx("p",{className:_.year,children:c})}),e.jsx("ul",{children:j.map(o=>e.jsx("p",{className:`${_.calendarItem} ${o===n?_.active:""}`,onClick:p,children:o},o))})]})})};z.propTypes={onClose:h.func.isRequired,currentMonth:h.oneOfType([h.string,h.number]).isRequired,currentYear:h.number.isRequired,onChangeDate:h.func.isRequired};const ue="_periodbox_ehpv3_11",_e="_periodbutton_ehpv3_25",ge="_periodItem_ehpv3_37",y={periodbox:ue,periodbutton:_e,periodItem:ge},T=()=>{const[t,n]=i.useState(""),[c,r]=i.useState(""),[d,p]=i.useState(!1);i.useEffect(()=>((()=>{const s=le();n(j[s]),r(de())})(),()=>{}),[]);const l=a=>{let s=j.indexOf(t);s=a?(s+1)%12:(s-1+12)%12;const x=a&&s===0?c+1:!a&&s===11?c-1:c;r(x),n(j[s])},o=()=>{p(a=>!a)};return e.jsxs("div",{className:y.periodbox,children:[e.jsx("p",{children:"Current period:"}),e.jsxs("div",{className:y.periodItem,children:[e.jsx(u,{icon:S,onButtonClick:()=>l(!1)}),e.jsxs("button",{className:y.periodbutton,onClick:o,children:[t," ",c]}),e.jsx(u,{icon:R,onButtonClick:()=>l(!0)}),d&&e.jsx(z,{currentYear:c,currentMonth:t,onChangeDate:l,onClose:o})]})]})},je="_box_1btgv_11",be="_mainContainer_1btgv_26",ye="_balance_1btgv_31",ve="_title_1btgv_44",Ie="_amount_1btgv_56",fe="_text_1btgv_67",g={box:je,mainContainer:be,balance:ye,title:ve,amount:Ie,text:fe},Ne=({balance:t})=>{const n=f.useMediaQuery({maxWidth:768}),c=f.useMediaQuery({minWidth:1280}),r=e.jsx(e.Fragment,{children:e.jsxs("div",{className:g.balance,children:[e.jsx("p",{className:g.title,children:"Balance:"}),e.jsxs("div",{className:g.amount,children:[t,e.jsx("span",{children:"UTH"})]})]})});return e.jsxs("div",{className:g.box,children:[e.jsxs(F,{to:"/",children:[e.jsx("img",{src:A,alt:""}),!n&&e.jsx("span",{className:g.text,children:"Main page"})]}),e.jsx(e.Fragment,{children:n?e.jsxs(e.Fragment,{children:[e.jsx(T,{}),r]}):e.jsxs(e.Fragment,{children:[c?e.jsx(Z,{}):r,e.jsx(T,{})]})})]})},Te={},Me=()=>e.jsxs("div",{className:Te.box,children:[e.jsx(Ne,{}),e.jsx(ie,{})]});export{Me as default};