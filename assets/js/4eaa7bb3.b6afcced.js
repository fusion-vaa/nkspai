"use strict";(self.webpackChunkfusion_docs=self.webpackChunkfusion_docs||[]).push([[3070],{5928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=t(5893),s=t(1151);const o={sidebar_position:17},r="Hoppie ACARS Gate Assignment Service",a={id:"NKS/hoppie",title:"Hoppie ACARS Gate Assignment Service",description:"Description",source:"@site/docs/NKS/10-hoppie.md",sourceDirName:"NKS",slug:"/NKS/hoppie",permalink:"/sabre-nkspai/docs/NKS/hoppie",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"NKSSidebar",previous:{title:"Livery Review QRH",permalink:"/sabre-nkspai/docs/NKS/lvryqrh"}},d={},h=[{value:"Description",id:"description",level:3},{value:"Supported Add-ons",id:"supported-add-ons",level:3},{value:"Configuration",id:"configuration",level:3}];function l(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"hoppie-acars-gate-assignment-service",children:"Hoppie ACARS Gate Assignment Service"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["We utilize the ",(0,i.jsx)(n.a,{href:"https://www.hoppie.nl/acars/",children:(0,i.jsx)(n.strong,{children:"Hoppie ACARS service"})})," to send automated arrival messages to ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"vspirit"})})," flights with gate information for their destination. To receive these messages, you must either be using an aircraft add-on that is Hoppie compatible, or you must be using ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://www.hoppie.nl/acars/prg/acars-msfs/",children:"the standalone Hoppie ACARS client"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"At the time of this page\u2019s last update, the only add-ons to support this functionality are the FSLabs Airbus family for P3D, the Fenix A319/A320/A321 for MSFS, and the Leonardo MaddogX for P3D and MSFS."}),"\n",(0,i.jsxs)(n.p,{children:["We cannot control when the functionality will be added, if ever, to other add-ons in our fleet. If you wish to receive these messages without using one of the above add-ons, you will have to use ",(0,i.jsx)(n.a,{href:"https://www.hoppie.nl/acars/prg/acars-msfs/",children:(0,i.jsx)(n.strong,{children:"the standalone Hoppie ACARS Client"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Using the gate assigned to you via the service is not mandatory. The only gate-related PIREP requirement that we have is that a flight must start and end at a gate; we do not specify that it must start and end at a correct gate. This is entirely for your convenience so you don\u2019t have to find an appropriate arrival gate mid-flight and also to enhance realism."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"You must make sure that when you are configuring the MCDU/FMS/FMC/Standalone client for your flight that you enter the correct callsign. If you have booked NKS1234 in vAMSYS, you must have NKS1234 set as your flight number. If you do not, you will not receive messages."})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"supported-add-ons",children:"Supported Add-ons"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["CPDLC support via Hoppie is ",(0,i.jsx)(n.strong,{children:"NOT"})," the same thing and add-ons that ONLY have Hoppie CPDLC support will ",(0,i.jsx)(n.strong,{children:"NOT"})," receive our gate assignment messages. (e.g., Tolisss A3XXs)"]})}),"\n",(0,i.jsx)(n.p,{children:"This will only work natively for add-ons that support Hoppie ACARS free text/TELEX messages."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"As of September 2024, the following aircraft will receive these messages:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fenix A319/A320/A321 (MSFS)"}),"\n",(0,i.jsx)(n.li,{children:"FSLabs A319/A320/A321 (FSX, P3D)"}),"\n",(0,i.jsx)(n.li,{children:"Leonardo MaddogX (FSX, P3D, MSFS)"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Get a Log On Code for the Hoppie network ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://www.hoppie.nl/acars/system/register.html",children:"from here"}),"."]})]}),"\n",(0,i.jsxs)(n.li,{children:["If you are using the standalone Hoppie client, ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://www.hoppie.nl/acars/prg/acars-msfs/",children:"download it from here"})})," and follow the instructions provided there to set it up."]}),"\n",(0,i.jsx)(n.li,{children:"Configure your add-on per your add-on developer\u2019s instructions. This will be found in the documentation provided with your add-on; we did not provide your add-on so we cannot provide these instructions."}),"\n",(0,i.jsx)(n.li,{children:"Ensure when setting up your flight that you configure the FMC with flight numbers that match what you booked in vAMSYS. This means if you book NKS1234 in vAMSYS that you must have NKS1234 in your FMC as your flight number in order to receive the arrival messages."}),"\n",(0,i.jsx)(n.li,{children:"When your ground speed is greater than 250 knots and you are less than 225 nautical miles from your destination, you will receive the arrival message."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["For MaddogX users: ensure that you ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"DO NOT"})})," have \u201cUse auto white list\u201d enabled in the load manager, as this will prevent ACARS messages reaching you."]})}),"\n",(0,i.jsx)(n.hr,{})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);