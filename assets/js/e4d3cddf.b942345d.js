"use strict";(self.webpackChunkdocusaur=self.webpackChunkdocusaur||[]).push([[864],{6461:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var i=s(4848),r=s(8453);const n={sidebar_position:5},o="Best Practices",a={id:"best-practices",title:"Best Practices",description:"Below are a few best practices that apply to either implementation option. These best practices are a collection of suggestions from our API clients, some of whom process upwards of thousands of verifications through our API.",source:"@site/docs/best-practices.md",sourceDirName:".",slug:"/best-practices",permalink:"/best-practices",draft:!1,unlisted:!1,editUrl:"https://accredd.com/docs/best-practices.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Traditional Implementation",permalink:"/traditional-API"}},c={},d=[{value:"Accredited for 5 years",id:"accredited-for-5-years",level:3},{value:"Feedback for everyone",id:"feedback-for-everyone",level:3},{value:"Billing clients",id:"billing-clients",level:3},{value:"Getting status",id:"getting-status",level:3}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsx)(t.p,{children:"Below are a few best practices that apply to either implementation option. These best practices are a collection of suggestions from our API clients, some of whom process upwards of thousands of verifications through our API."}),"\n",(0,i.jsx)(t.h3,{id:"accredited-for-5-years",children:"Accredited for 5 years"}),"\n",(0,i.jsx)(t.p,{children:"The SEC made an ammendment in 2021 to the frequency in which issuers should reverify their investor's accreditation status. Prior to 2021, an investor's accreditation status was valid for a period of 90 days. This is why many verification vendors still have a 90-day expiration date on their accreditation letters."}),"\n",(0,i.jsx)(t.p,{children:"The updated guidance is that an investor's accreditation status is valid for a period of 5 years, so long as the investor is reinvesting with the same issuer. The issuer is encouraged to check in with investors on subsequent investments to ensure the investor's accreditation status has not changed. Accredd was the first verifier to adopt these changes."}),"\n",(0,i.jsx)(t.admonition,{title:"Expiration Dates",type:"tip",children:(0,i.jsx)(t.p,{children:"Our API status endpoint includes an expiration property that our clients use to keep track of this 5-year window for their end users."})}),"\n",(0,i.jsx)(t.h3,{id:"feedback-for-everyone",children:"Feedback for everyone"}),"\n",(0,i.jsx)(t.p,{children:"You likely have multiple stakeholders whether your website is a crowdfunding platform, a fund administrator, or an investor portal. Stakeholders may include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"end users (typically investors)"}),"\n",(0,i.jsx)(t.li,{children:"business user (typically issuers and their respective investor relations teams)"}),"\n",(0,i.jsx)(t.li,{children:"your own support team"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Sometimes the end user submits a picture of their dog instead of their income statement. Our API delivers specific feedback to help these end users resubmit successfully. Your platform can reduce support tickets by providing all stakeholders with visibility into the verification process: the current status for every investor and any feedback provided by our API."}),"\n",(0,i.jsx)(t.admonition,{title:"Feedback",type:"tip",children:(0,i.jsxs)(t.p,{children:["Display the current status to all users. If the end user fails their initial verification, display text from the ",(0,i.jsx)(t.code,{children:"feedback"})," property so users understand what's missing and how to resubmit for success."]})}),"\n",(0,i.jsx)(t.h3,{id:"billing-clients",children:"Billing clients"}),"\n",(0,i.jsx)(t.p,{children:"Most of our API customers upsell the accreditation service to their clients (issuers). They track every verification internally and tie the verification to a specific customer. Some our our customers will send a monthly invoice for this added service, while others will include it in another tier of services."}),"\n",(0,i.jsx)(t.admonition,{title:"Issuers",type:"tip",children:(0,i.jsxs)(t.p,{children:["Our API call has a property ",(0,i.jsx)(t.code,{children:"IssuerName"})," where you can pass the issuer name to us to display on the investor accreditation letter. You can also use this property to track and count how much submissions come through for any given client."]})}),"\n",(0,i.jsx)(t.h3,{id:"getting-status",children:"Getting status"}),"\n",(0,i.jsx)(t.p,{children:"We currently don't have a webhook to ping you when a status updates. It's best practice to run a chron job and call our API every hour within our 12 hour service-level agreement."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var i=s(6540);const r={},n=i.createContext(r);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);