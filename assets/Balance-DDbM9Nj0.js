import{r as s,j as a}from"./index-DiSEfdBQ.js";const o="_container_am0p2_1",l="_name_am0p2_13",r="_box_am0p2_22",m="_balanceBox_am0p2_29",i="_balance_am0p2_29",t="_confirm_am0p2_58",n={container:o,name:l,box:r,balanceBox:m,balance:i,confirm:t},b=()=>{const[c]=s.useState(1e5),e=()=>{console.log(`Your balance: ${c} UAH is confirmed`)};return a.jsxs("div",{className:n.container,children:[a.jsx("label",{className:n.name,children:"Balance: "}),a.jsxs("div",{className:n.box,children:[a.jsxs("div",{className:n.balanceBox,children:[a.jsx("input",{className:n.balance,id:"balance",type:"number",placeholder:"00.00",min:"0"}),a.jsx("span",{className:n.currency,children:"UAH"})]}),a.jsx("button",{onClick:e,className:n.confirm,children:"Confirm"})]})]})};export{b as B};