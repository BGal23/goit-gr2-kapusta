import{r as i,j as s}from"./index-CrCauBmH.js";const d="_modal_n8gkc_1",u="_closeIcon_n8gkc_15",_="_buttonContainer_n8gkc_28",x="_button_n8gkc_28",g="_yes_n8gkc_41",k="_no_n8gkc_46",e={modal:d,closeIcon:u,buttonContainer:_,button:x,yes:g,no:k},b="/goit-gr2-kapusta/assets/icons-BubcWnMm.svg",h=({isVisible:n,onYes:c,onNo:o})=>{const[l,a]=i.useState(null),r=()=>{a("yes"),c()},m=()=>{a("no"),o()};return n?s.jsxs("div",{className:e.modal,children:[s.jsx("svg",{className:e.closeIcon,onClick:o,children:s.jsx("use",{xlinkHref:`${b}#icon-close`})}),s.jsx("p",{children:"Are you sure?"}),s.jsxs("div",{className:e.buttonContainer,children:[s.jsx("button",{className:`${e.button} ${e.yes} ${l==="yes"?e.yes:""}`,onClick:r,children:"Yes"}),s.jsx("button",{className:`${e.button} ${e.no} ${l==="no"?e.no:""}`,onClick:m,children:"No"})]})]}):null},j="_modal_6oxfm_1",C="_triangle_6oxfm_11",f="_messageContainer_6oxfm_19",y="_messageTitle_6oxfm_26",N="_messageText_6oxfm_26",t={modal:j,triangle:C,messageContainer:f,messageTitle:y,messageText:N},$=({isVisible:n})=>n?s.jsxs("div",{className:t.modal,children:[s.jsx("div",{className:t.triangle}),s.jsxs("div",{className:t.messageContainer,children:[s.jsx("p",{className:t.messageTitle,children:"Hello! To get started, enter the current balance of your account!"}),s.jsx("p",{className:t.messageText,children:"You can't spend money until you have it :)"})]})]}):null,M=()=>{const[n]=i.useState(!0),[c,o]=i.useState(!0),l=()=>{o(!1)},a=()=>{o(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(h,{isVisible:c,onYes:l,onNo:a}),s.jsx($,{isVisible:n})]})};export{M as default};
