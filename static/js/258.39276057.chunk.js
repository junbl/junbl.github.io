"use strict";(self.webpackChunkjunbl_website=self.webpackChunkjunbl_website||[]).push([[258],{7921:(e,n,t)=>{t.d(n,{A:()=>b});var i=t(6446),l=t(8757),r=t(5865),s=t(8446),o=t(6485),a=t(579);function c(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{sx:{minHeight:"30px"}}),(0,a.jsx)(i.A,{component:"footer",sx:{display:"flex",flexDirection:"column",minHeight:"100px",backgroundColor:e=>e.palette.grey[800]},children:(0,a.jsx)(l.A,{maxWidth:"md",children:(0,a.jsxs)(r.A,{variant:"body2",align:"center",children:[(0,a.jsx)("br",{}),"This page contains content from ",(0,a.jsx)("b",{children:"Grimwild"})," by J.D. Maxwell, licensed under"," ",(0,a.jsxs)(s.A,{href:"https://creativecommons.org/licenses/by/4.0/legalcode.en",target:"_blank",rel:"noopener noreferrer",children:["CC-BY\xa0",(0,a.jsx)(o.A,{fontSize:"inherit"})]}),".",(0,a.jsx)("br",{}),"Check out"," ",(0,a.jsxs)(s.A,{href:"https://www.backerkit.com/c/projects/OddityPress/grimwild",target:"_blank",rel:"noopener noreferrer",children:["Grimwild\xa0on\xa0BackerKit\xa0",(0,a.jsx)(o.A,{fontSize:"inherit"})]})," ","for more information!"]})})})]})}var d=t(5263),x=t(7392),h=t(2167),u=t(9336),m=t(1485),g=t(1503),j=t(5043),p=t(8855),f=t(8348),A=t(2955);function b(e){let{title:n,children:t,back:l,info:r,infoDialog:s,grimwild:o=!0}=e;return document.title=n,(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d.A,{sx:{backgroundColor:A.T.gray},children:[l?(0,a.jsx)(x.A,{size:"large",edge:"start",href:l,children:(0,a.jsx)(p.A,{})}):null,(0,a.jsx)("h1",{style:{marginLeft:20},children:n}),(0,a.jsx)(i.A,{flexGrow:1}),r?(0,a.jsx)(h.A,{enterDelay:100,title:r,children:(0,a.jsx)(x.A,{size:"large",edge:"end",children:(0,a.jsx)(f.A,{})})}):null,s?(0,a.jsx)(y,{children:s}):null]}),(0,a.jsx)(u.A,{sx:{marginBottom:8}}),t,o?(0,a.jsx)(c,{}):null]})}function y(e){let{children:n}=e;const[t,i]=(0,j.useState)(!1),l=()=>i((e=>!e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.A,{open:t,onClose:e=>{l()},children:(0,a.jsx)(g.A,{children:n})}),(0,a.jsx)(x.A,{size:"large",edge:"end",onClick:l,children:(0,a.jsx)(f.A,{})})]})}},9285:(e,n,t)=>{t.d(n,{A:()=>L});var i=t(2110),l=t(6494),r=t(8903),s=t(1906),o=t(5865),a=t(7600),c=t(2167),d=t(7392),x=t(3521),h=t(7970),u=t(5795),m=t(9958),g=t(9650),j=t(3336),p=t(1806),f=t(3460),A=t(8076),b=t(2420),y=t(1533),S=t(579);const C=(0,y.A)((e=>({root:{},table:{}})));function v(e){let{table:n,selected:t,color:i,textColor:l}=e;const r=C();return(0,S.jsx)(g.A,{component:e=>(0,S.jsx)(j.A,{className:r.root,...e}),children:(0,S.jsx)(p.A,{size:"small",children:(0,S.jsx)(f.A,{children:n.map(((e,n)=>(0,S.jsx)(A.A,{sx:{"& td":{fontSize:{xs:"0.8rem",sm:"1rem"}}},children:e.map(((e,n)=>(0,S.jsx)(b.A,{className:r.table,sx:t&&t.includes(e)?{backgroundColor:i||(e=>e.palette.primary.main),color:l||(e=>e.palette.background.default)}:void 0,children:e},e+n)))},n)))})})})}var w=t(7455),k=t(6081),W=t(1462),O=t(852),T=t(2505),F=t(6164),z=t(5043),D=t(3536),N=t.n(D),B=t(2955);function E(e){return Math.floor(Math.random()*e)}function I(){return E(6)}function M(e){let{options:n,n:t=2,additionalOptions:x,separator:h=" ",buttons:u=!0,disableBackwards:m=!1,defaultOf:g=!1,defaultThe:j=!1,enableThe:p=j,enableOf:f=!0,enableSwap:A=!0,color:b,textColor:y}=e;const C=(0,z.useRef)(null),v=()=>{if(0==n.length||0==n[0].length)return[[],!1];let e=n.map(((e,n)=>({row:e,index:n})));m||(e=N().shuffle(e));const i=e.slice(0,t);let l=i[0].index>i[i.length-1].index;const r=0==i[i.length-1].index,s=i.map((e=>e.row[E(e.row.length)]));return!g&&l&&r&&!s[s.length-1].endsWith("ing")&&(l=!1,s.reverse()),l=g||l,[s,l,j||p&&l]},[O,D,I]=v(),[M,L]=(0,z.useState)(O),[G,H]=(0,z.useState)(D),[J,V]=(0,z.useState)(I),_=()=>x?E(x.length-1):0,[K,U]=(0,z.useState)(_()),X=x&&x[Number(K)].color,Y=X&&B.T[X],q=()=>{const[e,n,t]=v();L(e),H(n),V(t),U(_())};if((0,z.useEffect)(q,[n]),0==n.length||!n.some((e=>e.length>0)))return null;let Q=M;J&&(Q=[...Q],Q.splice(1,0,"the")),G&&(Q=[...Q],Q.splice(1,0,"of"));return(0,S.jsxs)(i.A,{sx:{border:"2px solid ".concat(Y),display:"flex",maxWidth:"600px",textAlign:"center"},children:[(0,S.jsx)(l.A,{sx:{marginTop:"10px"},children:(0,S.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,S.jsxs)(r.Ay,{container:!0,justifyContent:"center",alignItems:"center",rowSpacing:"5px",children:[n.map(((e,i)=>e.map((l=>{const o=M.indexOf(l),a=-1!=o;return(0,S.jsx)(r.Ay,{item:!0,xs:12/e.length,children:(0,S.jsx)(s.A,{variant:a?"contained":"outlined",onClick:()=>{((e,i,l,r,s)=>{const o=[...M];if(l)o.splice(i,1);else if(n.length==t)o[s]=e;else{let i=M.findIndex((e=>r.includes(e)));if(o.length>=t){let t=0;if(-1==i){let e=0;for(const[i,l]of M.map(((e,t)=>[n.findIndex((n=>n.includes(e))),t])))Math.abs(i-s)<=Math.abs(e-s)&&(e=i,t=l)}else t=i;o.splice(t,1,e)}else-1!==i?o.splice(i,1,e):o.splice(s,0,e)}L(o)})(l,o,a,e,i)},children:l})},l)})))),(0,S.jsx)(r.Ay,{item:!0,xs:12,margin:"10px",children:(0,S.jsx)(o.A,{variant:"h3",align:"center",sx:{minHeight:{xs:"120px",sm:"60px"}},children:Q.map(((e,n)=>(0,S.jsxs)(S.Fragment,{children:[n>0?(0,S.jsx)("b",{children:h}):null,e]})))})}),u?(0,S.jsxs)(r.Ay,{container:!0,item:!0,xs:12,spacing:"5px",justifyContent:"center",children:[A?(0,S.jsx)(r.Ay,{item:!0,children:(0,S.jsx)(s.A,{variant:"contained",startIcon:(0,S.jsx)(k.A,{}),onClick:()=>{L(M.toReversed())},children:"Swap"})}):null,f?(0,S.jsx)(r.Ay,{item:!0,children:(0,S.jsx)(s.A,{variant:"contained",startIcon:G?(0,S.jsx)(F.A,{}):(0,S.jsx)(T.A,{}),onClick:()=>{H((e=>!e))},children:"Of"})}):null,p?(0,S.jsx)(r.Ay,{item:!0,children:(0,S.jsx)(s.A,{variant:"contained",startIcon:J?(0,S.jsx)(F.A,{}):(0,S.jsx)(T.A,{}),onClick:()=>{V((e=>!e))},children:"the"})}):null,f&&A?(0,S.jsx)(r.Ay,{item:!0,children:(0,S.jsx)(s.A,{variant:"contained",startIcon:(0,S.jsx)(W.A,{}),onClick:()=>{L(M.toReversed()),H((e=>!e))},children:"Swap and Toggle Of"})}):null]}):null,null!=x&&null!=K&&(0,S.jsx)(r.Ay,{item:!0,xs:12,children:(0,S.jsx)(P,{options:x,selected:K,setSelected:U})})]})})}),(0,S.jsx)(a.A,{children:(0,S.jsx)(c.A,{title:"Select new options without rerolling on the tables",children:(0,S.jsx)(d.A,{onClick:()=>{R(C),q()},sx:{marginLeft:"auto"},children:(0,S.jsx)(w.A,{ref:C})})})})]})}function P(e){let{options:n,selected:t,setSelected:i}=e;const l=t.toString(),r=n[Number(t)].color;return(0,S.jsx)(x.A,{value:l,onChange:e=>i(e.target.value),autoWidth:!0,sx:{minWidth:"200px",marginTop:"20px",fontSize:"14pt",border:"2px solid ".concat(r&&B.T[r])},children:n.map(((e,n)=>(0,S.jsx)(h.A,{value:n,children:e.name},e.name)))})}function R(e){const n=e.current;n&&(n.classList.add("roll-dice"),setTimeout((()=>{n.classList.remove("roll-dice")}),400))}function L(e){let{tables:n,titles:t,n:o=2,additionalOptions:a,color:x,textColor:h,separator:g=" ",defaultOf:j=!1,defaultThe:p=!1,enableThe:f=p,enableOf:A=!0,buttons:b=!0,enableSwap:y=!0,disableBackwards:C=!1}=e;const k=(0,z.useRef)(null),[W,T]=(0,z.useState)(Array(n.length).fill([])),[F,D]=(0,z.useState)(!1),[B,E]=(0,z.useState)(""),P=(e,n,t)=>{const i=[],l=e[n][t],r=e[t][n];return i.push(l),l!=r&&i.push(r),i},L=N().debounce((()=>{if(F&&B.length>0){const e=N().chunk(B,2),t=[];for(const i in e){const l=e[i];2==l.length&&t.push(P(n[i],Number(l[0])-1,Number(l[1])-1))}T(t)}}),200);return(0,z.useEffect)(L,[B]),(0,S.jsx)(S.Fragment,{children:(0,S.jsx)("div",{style:{display:"flex",alignContent:"center"},children:(0,S.jsxs)(r.Ay,{container:!0,spacing:2,justifyContent:"center",children:[(0,S.jsx)(r.Ay,{item:!0,xs:12,children:(0,S.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[F?(0,S.jsx)(u.A,{variant:"filled",value:B,onChange:e=>{if(e.target.value.length<=2*n.length){const n=e.target.value.replaceAll(/[^1-6]/g,"");E(n)}},placeholder:"Type in your rolls, e.g. ".concat(N().range(1,2*n.length+1).join("")),sx:{minWidth:"270px"}}):(0,S.jsx)(s.A,{variant:"contained",size:"large",onClick:e=>{R(k);const t=[];for(const i in n)t.push(P(n[i],I(),I()));T(t)},startIcon:(0,S.jsx)(w.A,{ref:k}),sx:{minHeight:"50px",minWidth:"100px",fontSize:"20pt"},children:"Roll!"}),(0,S.jsx)(c.A,{title:"Swap to ".concat(F?"random":"manual input"," mode"),children:(0,S.jsx)(d.A,{onClick:()=>D((e=>!e)),edge:"start",sx:{marginLeft:"8px"},children:F?(0,S.jsx)(w.A,{}):(0,S.jsx)(O.A,{})})})]})}),(0,S.jsx)(r.Ay,{item:!0,xs:12,children:(0,S.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,S.jsx)(M,{options:W,n:o,additionalOptions:a,disableBackwards:C,separator:g,enableOf:A,defaultOf:j,enableThe:f,defaultThe:p,enableSwap:y,buttons:b,color:x,textColor:h})})}),n.map(((e,n)=>(0,S.jsx)(r.Ay,{item:!0,children:(0,S.jsx)("div",{style:{display:"flex",justifyContent:"center",maxWidth:"95vw",overflowX:"scroll"},children:(0,S.jsxs)(i.A,{sx:{display:"flex",justifyContent:"center"},children:[t&&void 0!=t[n]?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(m.A,{title:t[n]}),(0,S.jsx)("br",{})]}):null,(0,S.jsx)(l.A,{children:(0,S.jsx)(v,{table:e,selected:W[n],color:x,textColor:h})})]})})},n)))]})})})}},8258:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});const i=JSON.parse('[["Beacon","Servant","Vision","Sentinel","Ray","Poison"],["Ring","Crown","Disk","Web","Guide","Embers"],["Chains","Word","Fang","Gate","Wall","Dark"],["Eye","Aura","Gust","Whispers","Wings","Wood"],["Cascade","Shield","Swarm","Pillar","Claw","Dream"],["Bubble","Hand","Dance","Explosion","Mask","Rot"]]'),l=JSON.parse('[["Oil","Earth","Lore","Lightning","Ash","Thorn"],["Crystal","Air","Fire","Spirit","Acid","Vine"],["Slime","Fungus","Death","Stasis","Sound","Water"],["Light","Hex","Rot","Terror","Mind","Wine"],["Doom","Smoke","Sight","Water","Vermin","Wood"],["Pain","Energy","Feeling","Bone","Flesh","Worm"]]'),r=JSON.parse('[["Binding","Oozing","Shimmering","Shielding","Curious","Shadowy"],["Flaming","Slow","Wrathful","Petrifying","Hungry","Majestic"],["Charming","Silent","Dazzling","Piercing","Jovial","Frenzied"],["Cryptic","Withering","Primal","Screaming","Thunderous","Prismatic"],["Freezing","Seeping","Ferocious","Grasping","Venomous","Sickening"],["Unseen","Mesmerising","Expanding","Swift","Phantom","Terrible"]]'),s=JSON.parse('[{"name":"Abjuration","color":"cyan"},{"name":"Conjuration","color":"green"},{"name":"Divination","color":"white"},{"name":"Enchantment","color":"pink"},{"name":"Evocation","color":"red"},{"name":"Illusion","color":"purple"},{"name":"Necromancy","color":"teal"},{"name":"Transmutation","color":"yellow"}]');var o=t(9285),a=t(7921),c=t(579);function d(){return(0,c.jsx)(a.A,{title:"Spell Crucible",back:"/dice",children:(0,c.jsx)(o.A,{tables:[r,l,i],titles:["Style","Material","Form"],additionalOptions:s})})}}}]);
//# sourceMappingURL=258.39276057.chunk.js.map