"use strict";(self.webpackChunkjunbl_website=self.webpackChunkjunbl_website||[]).push([[987],{7921:(e,n,t)=>{t.d(n,{A:()=>b});var i=t(6446),l=t(8757),r=t(5865),s=t(8446),o=t(6485),a=t(579);function c(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{sx:{minHeight:"30px"}}),(0,a.jsx)(i.A,{component:"footer",sx:{display:"flex",flexDirection:"column",minHeight:"100px",backgroundColor:e=>e.palette.grey[800]},children:(0,a.jsx)(l.A,{maxWidth:"md",children:(0,a.jsxs)(r.A,{variant:"body2",align:"center",children:[(0,a.jsx)("br",{}),"This page contains content from ",(0,a.jsx)("b",{children:"Grimwild"})," by J.D. Maxwell, licensed under"," ",(0,a.jsxs)(s.A,{href:"https://creativecommons.org/licenses/by/4.0/legalcode.en",target:"_blank",rel:"noopener noreferrer",children:["CC-BY\xa0",(0,a.jsx)(o.A,{fontSize:"inherit"})]}),".",(0,a.jsx)("br",{}),"Check out"," ",(0,a.jsxs)(s.A,{href:"https://www.backerkit.com/c/projects/OddityPress/grimwild",target:"_blank",rel:"noopener noreferrer",children:["Grimwild\xa0on\xa0BackerKit\xa0",(0,a.jsx)(o.A,{fontSize:"inherit"})]})," ","for more information!"]})})})]})}var d=t(5263),h=t(7392),x=t(2167),u=t(9336),f=t(1485),m=t(1503),j=t(5043),p=t(8855),g=t(8348),A=t(2955);function b(e){let{title:n,children:t,back:l,info:r,infoDialog:s,grimwild:o=!0}=e;return document.title=n,(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d.A,{sx:{backgroundColor:A.T.gray},children:[l?(0,a.jsx)(h.A,{size:"large",edge:"start",href:l,children:(0,a.jsx)(p.A,{})}):null,(0,a.jsx)("h1",{style:{marginLeft:20},children:n}),(0,a.jsx)(i.A,{flexGrow:1}),r?(0,a.jsx)(x.A,{enterDelay:100,title:r,children:(0,a.jsx)(h.A,{size:"large",edge:"end",children:(0,a.jsx)(g.A,{})})}):null,s?(0,a.jsx)(y,{children:s}):null]}),(0,a.jsx)(u.A,{sx:{marginBottom:8}}),t,o?(0,a.jsx)(c,{}):null]})}function y(e){let{children:n}=e;const[t,i]=(0,j.useState)(!1),l=()=>i((e=>!e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.A,{open:t,onClose:e=>{l()},children:(0,a.jsx)(m.A,{children:n})}),(0,a.jsx)(h.A,{size:"large",edge:"end",onClick:l,children:(0,a.jsx)(g.A,{})})]})}},9285:(e,n,t)=>{t.d(n,{A:()=>_});var i=t(2110),l=t(6494),r=t(8903),s=t(1906),o=t(5865),a=t(7600),c=t(2167),d=t(7392),h=t(3521),x=t(7970),u=t(5795),f=t(9958),m=t(9650),j=t(3336),p=t(1806),g=t(3460),A=t(8076),b=t(2420),y=t(1533),w=t(579);const v=(0,y.A)((e=>({root:{},table:{}})));function k(e){let{table:n,selected:t,color:i,textColor:l}=e;const r=v();return(0,w.jsx)(m.A,{component:e=>(0,w.jsx)(j.A,{className:r.root,...e}),children:(0,w.jsx)(p.A,{size:"small",children:(0,w.jsx)(g.A,{children:n.map(((e,n)=>(0,w.jsx)(A.A,{sx:{"& td":{fontSize:{xs:"0.8rem",sm:"1rem"}}},children:e.map(((e,n)=>(0,w.jsx)(b.A,{className:r.table,sx:t&&t.includes(e)?{backgroundColor:i||(e=>e.palette.primary.main),color:l||(e=>e.palette.background.default)}:void 0,children:e},e+n)))},n)))})})})}var C=t(7455),S=t(6081),O=t(1462),T=t(852),W=t(2505),z=t(6164),I=t(5043),B=t(3536),N=t.n(B),F=t(2955);function L(e){return Math.floor(Math.random()*e)}function M(){return L(6)}function R(e){let{options:n,n:t=2,additionalOptions:h,buttons:x=!0,disableBackwards:u=!1,defaultOf:f=!1,oneWord:m=!1,defaultThe:j=!1,enableThe:p=j,enableOf:g=!0,enableSwap:A=!0,color:b,textColor:y}=e;const v=(0,I.useRef)(null),k=()=>{if(0==n.length||0==n[0].length)return[[],!1];let e=n.map(((e,n)=>({row:e,index:n})));u||(e=N().shuffle(e));const i=e.slice(0,t);let l=i[0].index>i[i.length-1].index;const r=0==i[i.length-1].index,s=i.map((e=>e.row[L(e.row.length)]));return!f&&l&&r&&!s[s.length-1].endsWith("ing")&&(l=!1,s.reverse()),l=f||l,[s,l,j||p&&l]},[T,B,M]=k(),[R,_]=(0,I.useState)(T),[G,E]=(0,I.useState)(B),[J,q]=(0,I.useState)(M),K=()=>h?L(h.length-1):0,[P,X]=(0,I.useState)(K()),Y=h&&h[Number(P)].color,Q=Y&&F.T[Y],U=()=>{const[e,n,t]=k();_(e),E(n),q(t),X(K())};if((0,I.useEffect)(U,[n]),0==n.length||!n.some((e=>e.length>0)))return null;let V=R;J&&(V=[...V],V.splice(1,0,"the")),G&&(V=[...V],V.splice(1,0,"of"));return(0,w.jsxs)(i.A,{sx:{border:"2px solid ".concat(Q),display:"flex",maxWidth:"600px",textAlign:"center"},children:[(0,w.jsx)(l.A,{sx:{marginTop:"10px"},children:(0,w.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,w.jsxs)(r.Ay,{container:!0,justifyContent:"center",alignItems:"center",rowSpacing:"5px",children:[n.map(((e,i)=>e.map((l=>{const o=R.indexOf(l),a=-1!=o;return(0,w.jsx)(r.Ay,{item:!0,xs:12/e.length,children:(0,w.jsx)(s.A,{variant:a?"contained":"outlined",onClick:()=>{((e,i,l,r,s)=>{const o=[...R];if(l)o.splice(i,1);else if(n.length==t)o[s]=e;else{let i=R.findIndex((e=>r.includes(e)));if(o.length>=t){let t=0;if(-1==i){let e=0;for(const[i,l]of R.map(((e,t)=>[n.findIndex((n=>n.includes(e))),t])))Math.abs(i-s)<=Math.abs(e-s)&&(e=i,t=l)}else t=i;o.splice(t,1,e)}else-1!==i?o.splice(i,1,e):o.splice(s,0,e)}_(o)})(l,o,a,e,i)},children:l})},l)})))),(0,w.jsx)(r.Ay,{item:!0,xs:12,margin:"10px",children:(0,w.jsx)(o.A,{variant:"h3",align:"center",sx:{minHeight:{xs:"120px",sm:"60px"}},children:V.join(m?"":" ")})}),x?(0,w.jsxs)(r.Ay,{container:!0,item:!0,xs:12,spacing:"5px",justifyContent:"center",children:[A?(0,w.jsx)(r.Ay,{item:!0,children:(0,w.jsx)(s.A,{variant:"contained",startIcon:(0,w.jsx)(S.A,{}),onClick:()=>{_(R.toReversed())},children:"Swap"})}):null,g?(0,w.jsx)(r.Ay,{item:!0,children:(0,w.jsx)(s.A,{variant:"contained",startIcon:G?(0,w.jsx)(z.A,{}):(0,w.jsx)(W.A,{}),onClick:()=>{E((e=>!e))},children:"Of"})}):null,p?(0,w.jsx)(r.Ay,{item:!0,children:(0,w.jsx)(s.A,{variant:"contained",startIcon:J?(0,w.jsx)(z.A,{}):(0,w.jsx)(W.A,{}),onClick:()=>{q((e=>!e))},children:"the"})}):null,g&&A?(0,w.jsx)(r.Ay,{item:!0,children:(0,w.jsx)(s.A,{variant:"contained",startIcon:(0,w.jsx)(O.A,{}),onClick:()=>{_(R.toReversed()),E((e=>!e))},children:"Swap and Toggle Of"})}):null]}):null,null!=h&&null!=P&&(0,w.jsx)(r.Ay,{item:!0,xs:12,children:(0,w.jsx)(D,{options:h,selected:P,setSelected:X})})]})})}),(0,w.jsx)(a.A,{children:(0,w.jsx)(c.A,{title:"Select new options without rerolling on the tables",children:(0,w.jsx)(d.A,{onClick:()=>{H(v),U()},sx:{marginLeft:"auto"},children:(0,w.jsx)(C.A,{ref:v})})})})]})}function D(e){let{options:n,selected:t,setSelected:i}=e;const l=t.toString(),r=n[Number(t)].color;return(0,w.jsx)(h.A,{value:l,onChange:e=>i(e.target.value),autoWidth:!0,sx:{minWidth:"200px",marginTop:"20px",fontSize:"14pt",border:"2px solid ".concat(r&&F.T[r])},children:n.map(((e,n)=>(0,w.jsx)(x.A,{value:n,children:e.name},e.name)))})}function H(e){const n=e.current;n&&(n.classList.add("roll-dice"),setTimeout((()=>{n.classList.remove("roll-dice")}),400))}function _(e){let{tables:n,titles:t,n:o=2,additionalOptions:a,color:h,textColor:x,oneWord:m=!1,defaultOf:j=!1,defaultThe:p=!1,enableThe:g=p,enableOf:A=!0,buttons:b=!0,enableSwap:y=!0,disableBackwards:v=!1}=e;const S=(0,I.useRef)(null),[O,W]=(0,I.useState)(Array(n.length).fill([])),[z,B]=(0,I.useState)(!1),[F,L]=(0,I.useState)(""),D=(e,n,t)=>{const i=[],l=e[n][t],r=e[t][n];return i.push(l),l!=r&&i.push(r),i},_=N().debounce((()=>{if(z&&F.length>0){const e=N().chunk(F,2),t=[];for(const i in e){const l=e[i];2==l.length&&t.push(D(n[i],Number(l[0])-1,Number(l[1])-1))}W(t)}}),200);return(0,I.useEffect)(_,[F]),(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("div",{style:{display:"flex",alignContent:"center"},children:(0,w.jsxs)(r.Ay,{container:!0,spacing:2,justifyContent:"center",children:[(0,w.jsx)(r.Ay,{item:!0,xs:12,children:(0,w.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[z?(0,w.jsx)(u.A,{variant:"filled",value:F,onChange:e=>{if(e.target.value.length<=2*n.length){const n=e.target.value.replaceAll(/[^1-6]/g,"");L(n)}},placeholder:"Type in your rolls, e.g. ".concat(N().range(1,2*n.length+1).join("")),sx:{minWidth:"270px"}}):(0,w.jsx)(s.A,{variant:"contained",size:"large",onClick:e=>{H(S);const t=[];for(const i in n)t.push(D(n[i],M(),M()));W(t)},startIcon:(0,w.jsx)(C.A,{ref:S}),sx:{minHeight:"50px",minWidth:"100px",fontSize:"20pt"},children:"Roll!"}),(0,w.jsx)(c.A,{title:"Swap to ".concat(z?"random":"manual input"," mode"),children:(0,w.jsx)(d.A,{onClick:()=>B((e=>!e)),edge:"start",sx:{marginLeft:"8px"},children:z?(0,w.jsx)(C.A,{}):(0,w.jsx)(T.A,{})})})]})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,children:(0,w.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,w.jsx)(R,{options:O,n:o,additionalOptions:a,disableBackwards:v,oneWord:m,enableOf:A,defaultOf:j,enableThe:g,defaultThe:p,enableSwap:y,buttons:b,color:h,textColor:x})})}),n.map(((e,n)=>(0,w.jsx)(r.Ay,{item:!0,children:(0,w.jsx)("div",{style:{display:"flex",justifyContent:"center",maxWidth:"95vw",overflowX:"scroll"},children:(0,w.jsxs)(i.A,{sx:{display:"flex",justifyContent:"center"},children:[t&&void 0!=t[n]?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f.A,{title:t[n]}),(0,w.jsx)("br",{})]}):null,(0,w.jsx)(l.A,{children:(0,w.jsx)(k,{table:e,selected:O[n],color:h,textColor:x})})]})})},n)))]})})})}},8987:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const i=JSON.parse('[["etched with words of loss","found in your first dungeon","with a note etched into it","carved with lover\u2019s initials","marked by secret society","stolen from your first job"],["gift from a lost love","marred with blade nicks","stitched with parent\u2019s pattern","stained with coal from a mine","marked for each village visited","embedded with an arrow"],["telling why you can\u2019t return","made from rare material","covered in burn marks","with a faded family crest","with hidden compartment","peace offering gift"],["given by your father","with a scratched out insignia","torn by an animal attack","burned in a campfire","notched each time it saved you","belonged to a gambler"],["stolen from a family member","picked up during a storm","stamped with employer\'s logo","with a best friend\'s initials","worn from long usage","patched many times"],["taken off a dead body","marked from a lucky escape","gift from a childhood mentor","scratched from fierce battle","inscribed with book quote","with directions to a special place"]]');var l=t(9285),r=t(7921),s=t(579);function o(){return(0,s.jsx)(r.A,{title:"Weapon Origin Crucible",back:"/dice",children:(0,s.jsx)(l.A,{disableBackwards:!0,buttons:!1,tables:[i]})})}}}]);
//# sourceMappingURL=987.b15791b4.chunk.js.map