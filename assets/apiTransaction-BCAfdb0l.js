import{j as e,u as b,i as g,s as h,a as m,A as v,t as N,N as j,e as i}from"./index-A9Q64IW7.js";const f="_modal_1ivrc_11",y="_triangle_1ivrc_23",I="_messageContainer_1ivrc_31",C="_messageTitle_1ivrc_38",B="_messageText_1ivrc_39",c={modal:f,triangle:y,messageContainer:I,messageTitle:C,messageText:B},T=()=>e.jsxs("div",{className:c.modal,children:[e.jsx("div",{className:c.triangle}),e.jsxs("div",{className:c.messageContainer,children:[e.jsx("p",{className:c.messageTitle,children:"Hello! To get started, enter the current balance of your account!"}),e.jsx("p",{className:c.messageText,children:"You can't spend money until you have it :)"})]})]}),w="_container_1cbex_11",M="_name_1cbex_23",A="_box_1cbex_33",z="_parent_1cbex_40",L="_balanceBox_1cbex_44",Z="_balance_1cbex_44",k="_confirm_1cbex_78",O="_currency_1cbex_98",a={container:w,name:M,box:A,parent:z,balanceBox:L,balance:Z,confirm:k,currency:O},U=()=>{const t=b(),s=g(h),[n,o]=m.useState(""),[r,l]=m.useState(!1),x=_=>{o(_.target.value)},d=()=>(t(N(n)),l(!r)),u=()=>{if(n<0)return o(s.balance.toFixed(2)),j.Notify.failure("Balance must be a positive number - not updated.",{position:"center-top",timeout:8e3});l(!r)},p=()=>{o(s.balance.toFixed(2)),l(!r)};return e.jsxs(e.Fragment,{children:[e.jsx(v,{isOpen:r,closeModal:p,actionConfirm:d,text:"Are you sure?"}),e.jsxs("div",{className:a.container,children:[e.jsx("label",{className:a.name,children:"Balance: "}),e.jsxs("div",{className:a.box,children:[e.jsxs("div",{className:a.balanceBox,children:[n===0&&e.jsx("div",{className:a.parent,children:e.jsx(T,{})}),e.jsx("input",{className:a.balance,id:"balance",type:"number",value:n,onChange:x,placeholder:s.balance.toFixed(2),min:"0"}),e.jsx("span",{className:a.currency,children:"UAH"})]}),e.jsx("button",{onClick:u,className:a.confirm,children:"Confirm"})]})]})]})},V="data:image/svg+xml,%3csvg%20width='18'%20height='12'%20viewBox='0%200%2018%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%205H3.83L7.41%201.41L6%200L0%206L6%2012L7.41%2010.59L3.83%207H18V5Z'%20fill='%23FF751D'/%3e%3c/svg%3e",E="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMTIxMTUwNSwiZXhwIjoxNzExODE2MzA1fQ.L0zPdzEVZO5dowzEX8OzZs0_TayKxytmv61X1Y5mfng";i.defaults.baseURL="https://kapusta-backend-827563b0830f.herokuapp.com/";const $=async({type:t,year:s,month:n})=>(await i.get(`/api/reports/${t}/${s}/${n}`)).data,H=async({type:t})=>(await i.get(`/api/reports/${t}`,{headers:{Authorization:`Bearer ${E}`}})).data;export{U as B,V as a,$ as b,H as g};
