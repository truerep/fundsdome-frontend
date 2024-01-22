exports.id=563,exports.ids=[563],exports.modules={9666:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{p:()=>r.Z});var r=a(2013),n=t([r]);r=(n.then?(await n)():n)[0],i()}catch(t){i(t)}})},2013:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>c});var r=a(9648),n=a(1283),o=a(174),s=t([r,n]);[r,n]=s.then?(await s)():s;let d=async(t,e)=>{let a=new n.default;try{let i=await r.default.post(`${o.w.apiUrl}/users/login`,{username:t,password:e}),{token:n}=i.data;localStorage.setItem("token",n),a.set("auth_token",{token:n},{path:"/",domain:"fundsdome.com"});let s=a.get("auth_token",{domain:"fundsdome.com"});return console.log(s,"<--authToken from cookies"),n}catch(t){throw console.error("Authentication failed",t),t}},c=d;i()}catch(t){i(t)}})},1773:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(9648),n=a(174),o=t([r]);r=(o.then?(await o)():o)[0];let s=async t=>{try{let e=await r.default.get(`${n.w.apiUrl}/donations/event/${t}`,{});return e.data}catch(t){throw console.error("Failed to fetch data",t),t}},d=s;i()}catch(t){i(t)}})},1951:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(9648),n=a(174),o=t([r]);r=(o.then?(await o)():o)[0];let s=async t=>{try{let e=await r.default.get(`${n.w.apiUrl}/donations/group/${t}`,{});return e.data}catch(t){throw console.error("Failed to fetch data",t),t}},d=s;i()}catch(t){i(t)}})},8597:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{N:()=>r.Z,h:()=>n.Z});var r=a(1951),n=a(1773),o=t([r,n]);[r,n]=o.then?(await o)():o,i()}catch(t){i(t)}})},404:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(9648),n=a(174),o=t([r]);r=(o.then?(await o)():o)[0];let s=async()=>{try{let t=await r.default.get(`${n.w.apiUrl}/events/all/1`,{});return t.data}catch(t){throw console.error("Failed to fetch data",t),t}},d=s;i()}catch(t){i(t)}})},153:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{I:()=>r.Z});var r=a(404),n=t([r]);r=(n.then?(await n)():n)[0],i()}catch(t){i(t)}})},4467:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(9648),n=a(174),o=t([r]);r=(o.then?(await o)():o)[0];let s=async(t=1)=>{try{let e=await r.default.get(`${n.w.apiUrl}/conversation/all/${t}`,{});return e.data}catch(t){throw console.error("Failed to fetch data",t),t}},d=s;i()}catch(t){i(t)}})},8968:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(9648),n=a(174),o=t([r]);r=(o.then?(await o)():o)[0];let s=async t=>{try{let e=await r.default.get(`${n.w.apiUrl}/conversation/slug/${t}`,{});return e.data}catch(t){throw console.error("Failed to fetch data",t),t}},d=s;i()}catch(t){i(t)}})},8303:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{F:()=>r.Z,M:()=>n.Z});var r=a(4467),n=a(8968),o=t([r,n]);[r,n]=o.then?(await o)():o,i()}catch(t){i(t)}})},6490:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Fb:()=>o.F,H4:()=>d.H,IP:()=>s.I,MC:()=>o.M,Nz:()=>c.N,bG:()=>n.b,hz:()=>c.h,pH:()=>r.p});var r=a(9666),n=a(5075),o=a(8303),s=a(153),d=a(6570),c=a(8597),l=t([r,n,o,s,d,c]);[r,n,o,s,d,c]=l.then?(await l)():l,i()}catch(t){i(t)}})},2154:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(9648),n=a(174),o=t([r]);r=(o.then?(await o)():o)[0];let s=async t=>{try{let e=await r.default.get(`${n.w.apiUrl}/posts/group/${t}/1/1`,{});return e.data}catch(t){throw console.error("Failed to fetch data",t),t}},d=s;i()}catch(t){i(t)}})},6570:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{H:()=>r.Z});var r=a(2154),n=t([r]);r=(n.then?(await n)():n)[0],i()}catch(t){i(t)}})},238:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>c});var r=a(9648),n=a(1283),o=a(174),s=t([r,n]);[r,n]=s.then?(await s)():s;let d=async()=>{let t=new n.default;try{let e=t.get("auth_token");if(e?.token){let t=await r.default.get(`${o.w.apiUrl}/users/user-info`,{headers:{Authorization:`Bearer ${e?.token}`}});return t.data}}catch(t){}},c=d;i()}catch(t){i(t)}})},5075:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{b:()=>r.Z});var r=a(238),n=t([r]);r=(n.then?(await n)():n)[0],i()}catch(t){i(t)}})},972:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>l});var r=a(997),n=a(6689),o=a(75),s=a(6490),d=t([o,s]);[o,s]=d.then?(await d)():d;let c=[],l=({groupsList:t})=>{let e=(0,n.useRef)(null),[a,i]=(0,n.useState)(!1);t?.groups.forEach(t=>{c.some(e=>e._id===t._id)||c.push(t)});let d=()=>{if(e.current){let t=e.current.getBoundingClientRect();return t.bottom<=window.innerHeight}return!1},l=async()=>{d()&&t?.currentPage!==t?.totalPages&&(i(!0),t=await (0,s.Fb)(t?.currentPage+1),t?.groups.forEach(t=>{c.some(e=>e._id===t._id)||c.push(t)}),i(!1))};return(0,n.useEffect)(()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}),[]),r.jsx(o.Z,{sectionRef:e,isLoading:a,groupsList:c})};i()}catch(t){i(t)}})},75:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>h});var r=a(997);a(6689);var n=a(7518),o=a.n(n),s=a(905),d=a(5293),c=t([d]);d=(c.then?(await c)():c)[0];let l=o().div`
	padding-bottom: 70px;
`,p=o()(s.W)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	padding: 70px 0;
`,h=({sectionRef:t,groupsList:e,isLoading:a})=>(0,r.jsxs)(l,{ref:t,children:[r.jsx(p,{children:e.length&&e.map(t=>r.jsx(d.x9,{groupData:t},t._id))}),a?r.jsx(d.aN,{}):""]});i()}catch(t){i(t)}})},2808:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>o});var r=a(972),n=t([r]);r=(n.then?(await n)():n)[0];let o=r.Z;i()}catch(t){i(t)}})},1987:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>s});var r=a(997);a(6689);var n=a(8655),o=t([n]);n=(o.then?(await o)():o)[0];let s=({eventsList:t})=>r.jsx(n.Z,{eventsList:t});i()}catch(t){i(t)}})},8655:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>p});var r=a(997);a(6689);var n=a(7518),o=a.n(n),s=a(905),d=a(5293),c=t([d]);d=(c.then?(await c)():c)[0];let l=o()(s.W)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	padding: 70px 0;
`,p=({eventsList:t})=>(0,r.jsxs)(l,{children:[t?.events.map(t=>r.jsx(d.cx,{eventData:t},t._id)),console.log(t,"<--eventsList")]});i()}catch(t){i(t)}})},1221:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>o});var r=a(1987),n=t([r]);r=(n.then?(await n)():n)[0];let o=r.Z;i()}catch(t){i(t)}})},8396:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>c});var r=a(997),n=a(6689),o=a(6490),s=a(3754),d=t([o]);o=(d.then?(await d)():d)[0];let c=()=>{let[t,e]=(0,n.useState)(""),[a,i]=(0,n.useState)(""),d=async()=>{try{let e=await (0,o.pH)(t,a);console.log("Token:",e)}catch(t){}};return r.jsx(s.Z,{username:t,setUsername:e,password:a,setPassword:i,handleLogin:d})};i()}catch(t){i(t)}})},3754:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});var i=a(997);a(6689);var r=a(7518),n=a.n(r);let o=n().div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid lightgray;
  max-width: 450px;
  border-radius: 10px;

  button {
    width: fit-content;
    margin-left: auto;
  }
`,s=({username:t,setUsername:e,password:a,setPassword:r,handleLogin:n})=>(0,i.jsxs)(o,{children:[i.jsx("input",{type:"text",placeholder:"Username",value:t,onChange:t=>e(t.target.value)}),i.jsx("input",{type:"password",placeholder:"Password",value:a,onChange:t=>r(t.target.value)}),i.jsx("button",{className:"btn-primary",onClick:n,children:"Login"})]})},7538:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>o});var r=a(8396),n=t([r]);r=(n.then?(await n)():n)[0];let o=r.Z;i()}catch(t){i(t)}})},8294:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>p});var r=a(997),n=a(6689),o=a(787),s=a(6490),d=a(8793),c=a(9481),l=t([s,d,c]);[s,d,c]=l.then?(await l)():l;let p=()=>{let t=(0,o.m)(),[e,a]=(0,n.useState)([]),[i,l]=(0,n.useState)(),[p,h]=(0,n.useState)(),[x,u]=(0,n.useState)({}),[g,m]=(0,n.useState)(!1),[f,b]=(0,n.useState)(!1),[v,y]=(0,n.useState)(!1),w=async t=>{let e=await (0,s.Nz)(t),i=e.reduce((t,e)=>t+e.targetAmount,0),r=e.reduce((t,e)=>t+e.currentAmount,0),n=parseInt(r/i*100);a(e),u({targetAmount:i,currentAmount:r,percentage:n,_id:e._id})},j=async()=>{let t=await (0,c.O)();p&&t?window.open(`https://app.fundsdome.com/contribute?amount=${p}&donationId=${i}`,"_blank"):y(!0)};return(0,n.useEffect)(()=>{console.log(t?.chat?._id,"<--organizationData"),w(t?.chat?._id)},[]),r.jsx(d.Z,{donationTotal:x,donations:e,organizationData:t,showModal:g,setShowModal:m,showAmountModal:f,setShowAmountModal:b,donationId:i,setDonationId:l,donationAmount:p,setDonationAmount:h,showLoginModal:v,setShowLoginModal:y,handleDonation:j})};i()}catch(t){i(t)}})},8793:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>S});var r=a(997);a(6689);var n=a(7518),o=a.n(n),s=a(905),d=a(5293),c=t([d]);d=(c.then?(await c)():c)[0];let l=o()(s.W)`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    margin: 40px auto 60px;

    img {
        width: 100%;
    }
`,p=o().div`
    display: flex;
    align-items: center;
    padding: 26px;
`,h=o().div`
    display: flex;
    align-items: center;

    img.logo {
        height: 110px;
        width: 110px;
        object-fit: cover;
        border-radius: 100%;
        flex-shrink: 0;
        margin-right: 12px;
    }
`,x=o().div`
    h1 {
        font-family: Martel;
        font-size: 32px;
        font-weight: 400;
        text-transform: capitalize;
    }

    p {
        color: #7D7D7D;
    }

    a {
        padding: 10px 0;
        display: block;
        color: #001AFF;
        text-decoration: none;
    }
`,u=o().div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
`,g=o().div`
    width: 320px;
`,m=o().a`
    display: inline-block;
    background-color: #9F85F7;
    padding: 12px 22px;
    border-radius: 10px;
    font-family: "Quicksand", sans-serif;
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    margin-top: -15px;
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
    }
`,f=o().div``,b=o().div`
	width: 100%;
    height: 7px;
    border: 1px solid #965995;
    border-radius: 10px;
    position: relative;
`,v=o().div`
	position: relative;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #965995;
    transition: all 1500ms linear;
    border-radius: 10px;
    width: ${t=>t.percentage}%;
    z-index: 1;	

	&::after {
		content: "";
		width: 8px;
		height: 8px;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-50%, -50%);
		z-index: 11;
	}

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		right: -1px;
		transform: translateY(-50%);
		background-color: #965995;
		border: 0;
		height: 18px;
		width: 18px;
		border-radius: 50%;
		z-index: 11;
	}
`,y=o().div`
	position: absolute;
    bottom: calc(100% + 13px);
    right: 0;
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.166;
    text-transform: capitalize;
    color: var(--cleenhearts-purple, #965995)
`,w=o().div`
	margin-top: 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;	

	h5 {
		font-size: 12px;
		color: #351C42;
		font-weight: 500;
		line-height: 14px;
		text-transform: capitalize;
		margin-bottom: 0;
		font-family: "Quicksand", sans-serif;
	}
`,j=o().div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    
    @media (min-width: 576px) {
        min-width: 450px;
    }
`,k=o().div`
    display: flex;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 15px;
    }

    .bar {
        margin-top: 5px;
        transform: scaleY(0.6);

        & > div::after, & > div::before {
            content: unset;
        }
    }

    h4 {
        font-size: 15px;
        font-weight: 400;
    }

    img {
        height: 60px;
        width: 80px;
        object-fit: cover;
        border-radius: 5px;
    }
`,Z=o().div`
    padding: 0 15px;
    flex: 1;
`,z=o().button`
    margin-left: auto;
    display: inline-block;
    background-color: #fff;
    padding: 9px 18px;
    border-radius: 10px;
    font-family: "Quicksand", sans-serif;
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #9F85F7;
    color: #9F85F7;

    &:hover {
        background-color: #9F85F7;
        color: #fff;
    }
`,F=o().div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    max-width: 220px;

    input {
        border-radius: 10px;
        padding: 10px;
        width: calc(100% - 20px);
        border: 1px solid #965995;
        outline: 0;
    }

    button {
        margin-top: 20px;
    }
`,S=({donationTotal:t,organizationData:e,donations:a,donationId:i,setDonationId:n,donationAmount:o,setDonationAmount:s,showModal:c,setShowModal:S,showAmountModal:D,setShowAmountModal:$,showLoginModal:_,setShowLoginModal:M,handleDonation:A})=>(0,r.jsxs)(l,{children:[r.jsx("img",{src:e?.posts[0]?.image,alt:"organization-banner"}),(0,r.jsxs)(p,{children:[(0,r.jsxs)(h,{children:[r.jsx("img",{class:"logo",src:"https://pkstatic.imgix.net/media/companyprofile/331/onecause-logo.png",alt:"organization-logo"}),(0,r.jsxs)(x,{children:[r.jsx("h1",{children:e?.chat?.chatName}),(0,r.jsxs)("p",{children:[e?.chat?.users?.length," Members | ",e?.events?.length," Events Organized"]}),r.jsx("a",{href:"#",children:"Organization Info"})]})]}),(0,r.jsxs)(u,{children:[(0,r.jsxs)(g,{children:[r.jsx(f,{children:r.jsx(b,{children:r.jsx(v,{percentage:t?.percentage,children:(0,r.jsxs)(y,{children:[t?.percentage,"%"]})})})}),(0,r.jsxs)(w,{children:[(0,r.jsxs)("h5",{children:["Raised $",t?.currentAmount]}),(0,r.jsxs)("h5",{children:["Goal $",t?.targetAmount]})]})]}),r.jsx(m,{onClick:()=>S(!0),children:"Donate"})]})]}),r.jsx(d.u_,{showModal:c,setShowModal:S,children:r.jsx(j,{children:a.length&&a.map((t,e)=>(0,r.jsxs)(k,{children:[console.log(t),r.jsx("img",{src:t?.event?.thumbnail}),(0,r.jsxs)(Z,{children:[r.jsx("h4",{children:t?.event?.name}),(0,r.jsxs)(w,{children:[(0,r.jsxs)("h5",{children:["Raised $",t?.currentAmount]}),(0,r.jsxs)("h5",{children:["Goal $",t?.targetAmount]})]}),r.jsx(b,{className:"bar",children:r.jsx(v,{percentage:parseInt(t?.currentAmount/t?.targetAmount*100)})})]}),r.jsx(z,{onClick:()=>{n(t._id),$(!0)},children:"Donate"})]},t._id))})}),r.jsx(d.u_,{showModal:D,setShowModal:$,children:(0,r.jsxs)(F,{children:[r.jsx("input",{type:"text",value:o,onChange:t=>s(t.target.value),placeholder:"Enter Amount USD $"}),r.jsx(z,{onClick:()=>A(),children:"Donate"})]})}),r.jsx(d.u_,{showModal:_,setShowModal:M,children:r.jsx(d._A,{setShowLoginModal:M})})]});i()}catch(t){i(t)}})},3087:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>o});var r=a(8294),n=t([r]);r=(n.then?(await n)():n)[0];let o=r.Z;i()}catch(t){i(t)}})},8148:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>s});var r=a(997);a(6689);var n=a(8153),o=t([n]);n=(o.then?(await o)():o)[0];let s=()=>r.jsx(n.Z,{});i()}catch(t){i(t)}})},8153:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>p});var r=a(997);a(6689);var n=a(7518),o=a.n(n),s=a(905),d=a(8732),c=t([d]);d=(c.then?(await c)():c)[0];let l=o()(s.W)`
    display: flex;
    gap: 55px;
    margin-bottom: 60px;
`,p=()=>(0,r.jsxs)(l,{children:[r.jsx(d.V,{}),r.jsx(d.z,{})]});i()}catch(t){i(t)}})},2717:(t,e,a)=>{"use strict";a.d(e,{Z:()=>w});var i=a(997);a(6689);var r=a(7518),n=a.n(r),o=a(787);let s=t=>{console.log(t,"<---");let e=new Date(t?.date),a=e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),i=t?.time.replace(/(\d{2}):(\d{2})/,(t,e,a)=>{let i=parseInt(e,10);return`${i%12||12}:${a}${i<12?"AM":"PM"}`}),r=new Date,n=`${e>r?"Starts":"Ended"} ${i}, ${a}`;return n},d=n().div`
    border-radius: 5px;
    border: 1px solid #9F85F7;
    background: #FAF9FC;
    overflow: hidden;
    display: flex;
    margin-bottom: 19px;
`,c=n().div`
    width: 100px;
    flex-shrink: 0;
`,l=n().img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`,p=n().div`
    padding: 11px 14px 13px;
    color: #7D7D7D;
    font-family: Inter;
    font-size: 15px;
    flex: 1;
`,h=n().h3`
    color: #000;
    font-size: 19px;
    font-weight: 400;
    line-height: normal;
`,x=n().p`
    padding: 7px 0 9px;
`,u=n().div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
`,g=n().p`

`,m=n().p`

`,f=({eventName:t,event:e,thumbnail:a})=>(0,i.jsxs)(d,{children:[i.jsx(c,{children:i.jsx(l,{src:a,alt:"event-icon",className:"event-icon"})}),(0,i.jsxs)(p,{children:[i.jsx(h,{children:t}),i.jsx(x,{children:s(e)}),(0,i.jsxs)(u,{children:[i.jsx(g,{children:"$ 4500 / $ 6000"}),i.jsx(m,{children:"350 Contributions"})]})]})]}),b=()=>{let t=(0,o.m)();return t?.events.map(t=>i.jsx(f,{eventName:t?.name,event:t,thumbnail:t?.thumbnail||""},t._id))},v=n().div`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
    padding: 18px 27px;
    flex: 1;
    height: fit-content;
    flex-shrink: 0;
    position: sticky;
    top: 30px;
`,y=()=>i.jsx(v,{children:i.jsx(b,{})}),w=()=>i.jsx(y,{})},3185:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>l});var r=a(997),n=a(6689),o=a(787),s=a(6490),d=a(5615),c=t([s,d]);[s,d]=c.then?(await c)():c;let l=()=>{let t=(0,o.m)(),[e,a]=(0,n.useState)(!1),i=async()=>{let e=await (0,s.bG)();e?._id===t?.chat?.groupAdmin?._id&&a(!0),console.log(e)};return(0,n.useEffect)(()=>{i()},[]),r.jsx(d.Z,{isAdmin:e,organizationData:t})};i()}catch(t){i(t)}})},5615:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>l});var r=a(997);a(6689);var n=a(7518),o=a.n(n),s=a(8532),d=t([s]);s=(d.then?(await d)():d)[0];let c=o().div`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
    width: 700px;
    flex-shrink: 0;
    height: fit-content;
`,l=({isAdmin:t,organizationData:e})=>r.jsx(r.Fragment,{children:r.jsx(c,{children:e?.posts.map(t=>r.jsx(s.YS,{organizationName:e?.chat?.chatName,timeStamp:t?.createdAt,description:t?.description,imageUrl:t?.image},t?._id))})});i()}catch(t){i(t)}})},5007:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>o});var r=a(3185),n=t([r]);r=(n.then?(await n)():n)[0];let o=r.Z;i()}catch(t){i(t)}})},8732:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{V:()=>r.Z,z:()=>n.Z});var r=a(5007),n=a(2717),o=t([r]);r=(o.then?(await o)():o)[0],i()}catch(t){i(t)}})},7075:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>o});var r=a(8148),n=t([r]);r=(n.then?(await n)():n)[0];let o=r.Z;i()}catch(t){i(t)}})},6108:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{F:()=>n.Z,j:()=>r.Z});var r=a(3087),n=a(7075),o=t([r,n]);[r,n]=o.then?(await o)():o,i()}catch(t){i(t)}})},754:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>c});var r=a(997),n=a(6689),o=a(6490),s=a(6291),d=t([o]);o=(d.then?(await d)():d)[0];let c=({groupData:t})=>{let[e,a]=(0,n.useState)("https://i.stack.imgur.com/IA7jp.gif"),[i,d]=(0,n.useState)({}),c=async t=>{let e=await (0,o.H4)(t);e?.posts?.length?a(e.posts[0].image):a("https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg")},l=async t=>{let e=await (0,o.Nz)(t),a=e.reduce((t,e)=>t+e.targetAmount,0),i=e.reduce((t,e)=>t+e.currentAmount,0),r=parseInt(i/a*100);d({targetAmount:a,currentAmount:i,percentage:r})};return t?._id&&c(t?._id),(0,n.useEffect)(()=>{l(t?._id)},[t]),r.jsx(s.Z,{groupData:t,campaignBanner:e,donationTotal:i})};i()}catch(t){i(t)}})},6291:(t,e,a)=>{"use strict";a.d(e,{Z:()=>w});var i=a(997),r=a(1664),n=a.n(r);a(6689);var o=a(7518),s=a.n(o);let d=s().div`
	a {
		text-decoration: none;
	}
`,c=s().div`
	padding: 22px;
	position: relative;
	background-color: #EFECE7;
	border-radius: 20px;
	background-image: url("https://truerep.github.io/fundsdome-ui/assets/images/backgrounds/donation-bg-1-1.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	border-radius: 20px;
	color: #351C42;
	text-decoration: none;
`,l=s().div`
	height: 220px;
	position: relative;
`,p=s().div`
	padding: 38px 20px 11px;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(50%);
	width: calc(100% - 80px);
	background-color: #fff;
	border-radius: 10px;
`,h=s().img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 20px;
`,x=s().div`
	padding-top: 65px;
`,u=s().h3`
	font-size: 22px;
	line-height: 1.5;
	letter-spacing: -0.66px;
	text-transform: capitalize;
	margin-bottom: 15px;
	font-family: Quicksand, sans-serif;
`,g=s().p`
	font-family: "DM Sans", sans-serif;
	font-size: 16px;
	color: #757277;
	font-weight: 400;
	line-height: 1.75;
`,m=s().div``,f=s().div`
	width: 100%;
    height: 7px;
    border: 1px solid #965995;
    border-radius: 10px;
    position: relative;
`,b=s().div`
	position: relative;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #965995;
    transition: all 1500ms linear;
    border-radius: 10px;
    width: ${t=>t.percentage}%;
    z-index: 1;	

	&::after {
		content: "";
		width: 8px;
		height: 8px;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-50%, -50%);
		z-index: 11;
	}

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		right: -1px;
		transform: translateY(-50%);
		background-color: #965995;
		border: 0;
		height: 18px;
		width: 18px;
		border-radius: 50%;
		z-index: 11;
	}
`,v=s().div`
	position: absolute;
    bottom: calc(100% + 13px);
    right: 0;
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.166;
    text-transform: capitalize;
    color: var(--cleenhearts-purple, #965995)
`,y=s().div`
	margin-top: 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;	

	h5 {
		font-size: 12px;
		color: #351C42;
		font-weight: 500;
		line-height: 14px;
		text-transform: capitalize;
		margin-bottom: 0;
		font-family: "Quicksand", sans-serif;
	}
`,w=({groupData:t,campaignBanner:e,donationTotal:a})=>i.jsx(d,{children:i.jsx(n(),{href:`/${t?.slug}`,children:(0,i.jsxs)(c,{children:[(0,i.jsxs)(l,{children:[i.jsx(h,{src:e}),a?.targetAmount?(0,i.jsxs)(p,{children:[i.jsx(m,{children:i.jsx(f,{children:i.jsx(b,{percentage:a?.percentage,children:(0,i.jsxs)(v,{children:[a?.percentage,"%"]})})})}),(0,i.jsxs)(y,{children:[(0,i.jsxs)("h5",{children:["Raised $",a?.currentAmount]}),(0,i.jsxs)("h5",{children:["Goal $",a?.targetAmount]})]})]}):""]}),(0,i.jsxs)(x,{children:[i.jsx(u,{children:t?.chatName}),i.jsx(g,{children:t?.description})]})]})})})},7862:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>o});var r=a(754),n=t([r]);r=(n.then?(await n)():n)[0];let o=r.Z;i()}catch(t){i(t)}})},6001:(t,e,a)=>{"use strict";a(997),a(6689);var i=a(7518),r=a.n(i);r().div`
  padding: 22px 26px;
  margin-bottom: 45px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
  width: 100%;
`,r().div`
  display: flex;
`,r().img`
  height: 45px;
  width: 45px;
  border-radius: 100%;
`,r().textarea`
`},6006:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>l});var r=a(997),n=a(6689),o=a(6490),s=a(9478),d=a(9481),c=t([o,s,d]);[o,s,d]=c.then?(await c)():c;let l=({eventData:t})=>{let[e,a]=(0,n.useState)({}),[i,c]=(0,n.useState)(),[l,p]=(0,n.useState)(),[h,x]=(0,n.useState)(!1),[u,g]=(0,n.useState)(!1),m=async t=>{let e=await (0,o.hz)(t),i=e.reduce((t,e)=>t+e.targetAmount,0),r=e.reduce((t,e)=>t+e.currentAmount,0),n=parseInt(r/i*100);a({targetAmount:i,currentAmount:r,percentage:n})};(0,n.useEffect)(()=>{m(t?._id)},[t]);let f=async()=>{let t=await (0,d.O)();l&&t?window.open(`https://app.fundsdome.com/contribute?amount=${l}&donationId=${i}`,"_blank"):g(!0)};return r.jsx(s.Z,{donationTotal:e,eventData:t,showAmountModal:h,setShowAmountModal:x,donationAmount:l,showLoginModal:u,setShowLoginModal:g,setDonationId:c,setDonationAmount:p,handleDonation:f})};i()}catch(t){i(t)}})},9478:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>D});var r=a(997);a(6689);var n=a(7518),o=a.n(n),s=a(4847),d=a(8852),c=t([d]);d=(c.then?(await c)():c)[0];let l=o().div`
	position: relative;
	border-radius: 20px;
	overflow: hidden;
	display: flex;
	flex-direction: column;

	&:nth-child(even) {
		& > div:nth-child(1) {
			order: 1;

			div {
				top: unset;
				bottom: 30px;
			}
		}

		& > div:nth-child(2) {
			border-radius: 20px 20px 0 0;
			border-bottom: none;
			border-top: 1px solid #D7D3CB;
		}
	}
`,p=o().div`
	height: 366px;
	position: relative;
`,h=o().img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`,x=o().div`
	position: absolute;
	left: 0;
	top: 30px;
	z-index: 1;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`,u=o().div`
	padding: 0 19px 0 30px;
    line-height: 36px;
    display: inline-block;
    border-radius: 0px 100px 100px 0px;
    background-color: #965995;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
`,g=o().div`
	padding: 0 31px 0 13px;
    line-height: 36px;
    display: inline-block;
    border-radius: 100px 0px 0px 100px;
    background-color: var(--cleenhearts-secondary, #F6D469);
    font-size: 16px;
    font-weight: 700;
    color: var(--cleenhearts-base, #351C42);
    text-transform: uppercase;
`,m=o().div`
	position: relative;
	border: 1px solid #D7D3CB;
	border-top: none;
	padding: 31px 30px 29px;
	border-radius: 0 0 20px 20px;
`,f=o().h3`
	text-transform: capitalize;
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 22px;
	font-family: "Quicksand", sans-serif;
    color: #351C42;
`,b=o().ul`
	margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px 0;

	li {
		font-family: "DM Sans", sans-serif;
		text-transform: capitalize;
		color: #351C42;
		position: relative;

		&:nth-child(2) {
			margin-left: 20px;
			padding-left: 20px;

			&::before {
				content: "";
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				width: 1px;
				height: 41px;
				background-color: #D7D3CB;
			}
		}
	}

	h5 {
		font-family: "DM Sans", sans-serif;
		color: #351C42;
		font-size: 16px;
		line-height: 1.75;
		margin-bottom: 0;
		text-transform: capitalize;
	}
`,v=o().div`
	display: flex;
	align-items: center;
	gap: 5px;
	margin-top: 30px;
	border-top: 1px solid #D7D3CB;
`,y=o().button`
    margin-left: auto;
    display: inline-block;
    background-color: #fff;
    padding: 9px 18px;
    border-radius: 10px;
    font-family: "Quicksand", sans-serif;
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #9F85F7;
    color: #9F85F7;
	transform: translateY(7px);

    &:hover {
        background-color: #9F85F7;
        color: #fff;
    }
`,w=o().div`
	padding: 45px 20px 0;
	flex: 1;
`,j=o().div``,k=o().div`
	width: 100%;
    height: 7px;
    border: 1px solid #965995;
    border-radius: 10px;
    position: relative;
`,Z=o().div`
	position: relative;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #965995;
    transition: all 1500ms linear;
    border-radius: 10px;
    width: ${t=>t.percentage}%;
    z-index: 1;	

	&::after {
		content: "";
		width: 8px;
		height: 8px;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-50%, -50%);
		z-index: 11;
	}

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		right: -1px;
		transform: translateY(-50%);
		background-color: #965995;
		border: 0;
		height: 18px;
		width: 18px;
		border-radius: 50%;
		z-index: 11;
	}
`,z=o().div`
	position: absolute;
    bottom: calc(100% + 13px);
    right: 0;
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.166;
    text-transform: capitalize;
    color: var(--cleenhearts-purple, #965995)
`,F=o().div`
	margin-top: 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;	

	h5 {
		font-size: 12px;
		color: #351C42;
		font-weight: 500;
		line-height: 14px;
		text-transform: capitalize;
		margin-bottom: 0;
		font-family: "Quicksand", sans-serif;
	}
`,S=o().div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    max-width: 220px;

    input {
        border-radius: 10px;
        padding: 10px;
        width: calc(100% - 20px);
        border: 1px solid #965995;
        outline: 0;
    }

    button {
        margin-top: 20px;
    }
`,D=({donationTotal:t,eventData:e,showAmountModal:a,setShowAmountModal:i,donationAmount:n,showLoginModal:o,setShowLoginModal:c,setDonationId:D,setDonationAmount:$,handleDonation:_})=>(0,r.jsxs)(l,{children:[console.log(t,"<---donto"),(0,r.jsxs)(p,{children:[r.jsx(h,{src:e?.thumbnail}),(0,r.jsxs)(x,{children:[(0,r.jsxs)(u,{children:[r.jsx("span",{class:"event-card-grid__time__icon fa fa-clock"}),"10:00 aM - 2.00 PM"]}),r.jsx(g,{children:"03 Sep"})]})]}),(0,r.jsxs)(m,{children:[r.jsx(f,{children:e?.name||"Unnamed"}),(0,r.jsxs)(b,{children:[(0,r.jsxs)("li",{children:[r.jsx("h5",{class:"event-card-grid__meta__title",children:"Organizer"}),e?.chatId?.chatName]}),(0,r.jsxs)("li",{children:[(0,r.jsxs)("h5",{class:"event-card-grid__meta__title",children:[r.jsx("span",{class:"icon-location"})," Venue"]}),"Remote | Virtual"]})]}),t?.targetAmount?(0,r.jsxs)(v,{children:[(0,r.jsxs)(w,{children:[r.jsx(j,{children:r.jsx(k,{children:r.jsx(Z,{percentage:t?.percentage,children:(0,r.jsxs)(z,{children:[t?.percentage,"%"]})})})}),(0,r.jsxs)(F,{children:[(0,r.jsxs)("h5",{children:["Raised $",t?.currentAmount]}),(0,r.jsxs)("h5",{children:["Goal $",t?.targetAmount]})]})]}),r.jsx(y,{onClick:()=>{D(t._id),i(!0)},children:"Donate"})]}):""]}),r.jsx(s.Z,{showModal:a,setShowModal:i,children:(0,r.jsxs)(S,{children:[r.jsx("input",{type:"text",value:n,onChange:t=>$(t.target.value),placeholder:"Enter Amount USD $"}),r.jsx(y,{onClick:()=>_(),children:"Donate"})]})}),r.jsx(s.Z,{showModal:o,setShowModal:c,children:r.jsx(d.Z,{setShowLoginModal:c})})]});i()}catch(t){i(t)}})},4125:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>o});var r=a(6006),n=t([r]);r=(n.then?(await n)():n)[0];let o=r.Z;i()}catch(t){i(t)}})},9632:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var i=a(997);a(6689),a(1664);var r=a(7518),n=a.n(r);let o=n().div`
    text-align: center;
    padding: 25px 20px;
    font-size: 14px;
    font-weight: 600;
    color: #351C42;
    line-height: 1.5;
    font-family: "DM Sans", sans-serif;
    background-color: #F6D469;
    position: relative;
    z-index: 1;
`,s=n().div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url("https://truerep.github.io/fundsdome-ui/assets/images/backgrounds/footer-bottom-bg-1-2.png");
    mix-blend-mode: multiply;
`,d=()=>(0,i.jsxs)(o,{children:[i.jsx(s,{}),"\xa9 Copyright 2024 FundsDome All Rights Reserved."]}),c=()=>i.jsx(d,{})},6106:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>l});var r=a(997),n=a(6689),o=a(1163),s=a(9481),d=a(2558),c=t([s,d]);[s,d]=c.then?(await c)():c;let l=()=>{let t=(0,o.useRouter)(),[e,a]=(0,n.useState)(!1),[i,c]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{(0,s.O)().then(t=>{a(t)})},[i]),r.jsx(d.Z,{router:t,isAuthenticated:e,showLoginModal:i,setShowLoginModal:c})};i()}catch(t){i(t)}})},2558:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>m});var r=a(997);a(6689);var n=a(1664),o=a.n(n),s=a(7518),d=a.n(s),c=a(4847),l=a(8852),p=t([l]);l=(p.then?(await p)():p)[0];let h=d().div`
    padding: 0 20px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
`,x=d().img`
    height: 70px;
`,u=d().ul`
    list-style: none;
    display: flex;
    align-items: center;
`,g=d().li`
    a {
        display: block;
        padding: 40px 20px;
        color: #351C42;
        font-size: 15px;
        font-weight: 500;

        &:hover, &.active {
            color: #F6D469;
        }

        &.btn-primary {
            color: #fff;
            padding: 15px 25px;
            margin: 0 10px;
        }
    }
`,m=({router:t,isAuthenticated:e,showLoginModal:a,setShowLoginModal:i})=>(0,r.jsxs)(h,{children:[r.jsx(x,{src:"https://ik.imagekit.io/sahildhingra/fundsdome-logo.jpeg?updatedAt=1705766654348",alt:"fundsdome-logo"}),(0,r.jsxs)(u,{children:[r.jsx(g,{children:r.jsx(o(),{href:"/",className:"/"===t.pathname?"active":"",children:"Home"})}),r.jsx(g,{children:r.jsx(o(),{href:"/campaigns",className:"/campaigns"===t.pathname?"active":"",children:"Campaigns"})}),r.jsx(g,{children:r.jsx(o(),{href:"/events",className:"/events"===t.pathname?"active":"",children:"Events"})}),r.jsx(g,{children:r.jsx(o(),{href:"https://app.fundsdome.com/video-chat",className:"btn-primary btn-outlined",children:"Dashboard"})}),!e&&r.jsx(g,{children:r.jsx("a",{className:"btn-primary",onClick:()=>i(!0),children:"LogIn"})})]}),r.jsx(c.Z,{showModal:a,setShowModal:i,children:r.jsx(l.Z,{setShowLoginModal:i,redirectUrl:"https://app.fundsdome.com/video-chat"})})]});i()}catch(t){i(t)}})},7834:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>o});var r=a(6106),n=t([r]);r=(n.then?(await n)():n)[0];let o=r.Z;i()}catch(t){i(t)}})},7402:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});var i=a(997);a(6689);var r=a(7518),n=a.n(r);let o=n().div`
    text-align: center;
    margin-top: -100px;
    img {
        height: 200px;
    }
`,s=()=>i.jsx(o,{children:i.jsx("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*Gvgic29bgoiGVLmI6AVbUg.gif",alt:"loading..."})})},1405:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>c});var r=a(997),n=a(6689),o=a(6490),s=a(4385),d=t([o]);o=(d.then?(await d)():d)[0];let c=({setShowLoginModal:t,redirectUrl:e})=>{let[a,i]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),l=async()=>{try{let i=await (0,o.pH)(a,d);i&&e&&(window.location=e,t(!1)),t(!1)}catch(t){}};return r.jsx(s.Z,{username:a,setUsername:i,password:d,setPassword:c,handleLogin:l})};i()}catch(t){i(t)}})},4385:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var i=a(997);a(6689);var r=a(7518),n=a.n(r);let o=n().div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px 25px;
  border: 1px solid lightgray;
  max-width: 450px;
  border-radius: 10px;
  background: #fff;
  min-width: 320px;

  button {
    width: fit-content;
    margin-left: auto;
  }
`,s=n().div`
  display: flex;
  align-items: center;

  & > button {
    flex: 1;
    border-radius: 5px; 

    &.inactive {
        background-color: transparent;
        color: #000;
    }
  }
`,d=({username:t,setUsername:e,password:a,setPassword:r,handleLogin:n})=>(0,i.jsxs)(o,{children:[(0,i.jsxs)(s,{children:[i.jsx("button",{className:"btn-primary",children:"Log In"}),i.jsx("button",{className:"btn-primary inactive",children:"Sign Up"})]}),i.jsx("input",{type:"text",placeholder:"Username",value:t,onChange:t=>e(t.target.value)}),i.jsx("input",{type:"password",placeholder:"Password",value:a,onChange:t=>r(t.target.value)}),i.jsx("button",{className:"btn-primary",onClick:n,children:"Login"})]})},8852:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>o});var r=a(1405),n=t([r]);r=(n.then?(await n)():n)[0];let o=r.Z;i()}catch(t){i(t)}})},4847:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var i=a(997);a(6689);var r=a(7518),n=a.n(r);let o=n().div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  &.toggled {
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
    pointer-events: all;
  }
`,s=n().div`
  transform: translateY(100%);
  transition: all 0.3s ease-in-out;
  position: relative;

  &.toggled {
    transform: translateY(0);
  }
`,d=n().button`
  position: absolute;
  right: 0;
  top: 0;
  height: 25px;
  width: 25px;
  border-radius: 100px;
  padding: 6px;
  background: #9F85F7;
  border: 0;
  outline: 0;
  transform: translate(50%, -50%);
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`,c=({showModal:t,setShowModal:e,children:a})=>i.jsx(o,{className:t&&"toggled",children:(0,i.jsxs)(s,{className:t&&"toggled",children:[i.jsx(d,{onClick:()=>e(!1),children:i.jsx("img",{src:"https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close",alt:"close"})}),a]})})},959:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var i=a(997);a(6689);var r=a(7518),n=a.n(r);n().div`
  color: #464646;
  padding: 3px 0;
  font-size: 15px;

  &.reply {
    padding-left: 15px;
  }

  a {
    color: #000;
    text-decoration: none;
    margin-right: 10px;
  }
`,n().div`
  display: flex;
  border: 1px solid #9F85F7;
  border-radius: 6px;
  margin-top: 15px;

  input {
    flex: 1;
    padding: 8px 14px;
    color: #000;
    font-size: 15px;
    outline: 0;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #9F85F7;
      font-size: 15px;
    }
  }

  button {
    background: #9F85F7;
    border: 0;
    outline: 0;
    padding: 0 8px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    cursor: pointer;

    img {
      height: 17px;
    }
  }
`,n().div`
  padding: 5px 0;
`;let o=t=>{let e=new Date,a=new Date(t),i=Math.floor((e-a)/1e3),r=Math.floor(i/60),n=Math.floor(r/60),o=Math.floor(n/24);return o>0?`${o} ${1===o?"day":"days"} ago`:n>0?`${n} ${1===n?"hour":"hours"} ago`:r>0?`${r} ${1===r?"minute":"minutes"} ago`:`${i} ${1===i?"second":"seconds"} ago`},s=n().div`
    padding: 22px 26px;
    border-bottom: 1px solid #F5F1FC;

    &:last-child {
        border-bottom: 0;
    }
`,d=n().div`
    display: flex;
    align-items: center;

    img {
        height: 45px;
        width: 45px;
        object-fit: cover;
        border-radius: 100%;
        flex-shrink: 0;
        margin-right: 9px;
    }

    h2 {
        color: #000;
        font-size: 16px;
        font-weight: 400;
    }

    p {
        margin-top: 4px;
        color: #7D7D7D;
        font-size: 12px;
    }
`,c=n().div`
    p {
        margin-top: 15px;
        color: #464646;
    }

    img {
        width: 100%;
        margin-top: 15px;
        border-radius: 5px;
    }
`;n().div`
    display: flex;
    align-items: center;
    gap: 35px;
    padding: 5px 0;
`,n().button`
    display: flex;
    align-items: center;
    flex-shring: 0;
    color: #7D7D7D;
    font-size: 14px;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 5px 0;
    cursor: pointer;

    img {
        height: 14px;
        margin-right: 7px;
    }
`,n().div`

`;let l=({organizationName:t,timeStamp:e,description:a,imageUrl:r})=>(0,i.jsxs)(s,{children:[(0,i.jsxs)(d,{children:[i.jsx("img",{class:"logo",src:"https://pkstatic.imgix.net/media/companyprofile/331/onecause-logo.png",alt:"organization-logo"}),(0,i.jsxs)("div",{children:[i.jsx("h2",{children:t}),(0,i.jsxs)("p",{children:[" ",o(e)]})]})]}),(0,i.jsxs)(c,{children:[i.jsx("p",{children:a}),r?i.jsx("img",{src:r,alt:"post-image"}):""]})]}),p=({organizationName:t,timeStamp:e,description:a,imageUrl:r})=>i.jsx(l,{organizationName:t,timeStamp:e,description:a,imageUrl:r})},905:(t,e,a)=>{"use strict";a.d(e,{W:()=>n});var i=a(7518),r=a.n(i);let n=r().div`
    max-width: 1200px;
    margin: 0 auto;
`},5293:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{$_:()=>n.Z,YS:()=>o.Z,_A:()=>p.Z,aN:()=>c.Z,cx:()=>d.Z,h4:()=>r.Z,u_:()=>l.Z,x9:()=>s.Z});var r=a(7834),n=a(9632),o=a(959);a(6001);var s=a(7862),d=a(4125),c=a(7402),l=a(4847),p=a(8852),h=t([r,s,d,p]);[r,s,d,p]=h.then?(await h)():h,i()}catch(t){i(t)}})},8532:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{$_:()=>r.$_,FE:()=>o.F,YS:()=>r.YS,h4:()=>r.h4,iP:()=>s.Z,jL:()=>o.j,m3:()=>n.Z,zW:()=>d.Z});var r=a(5293),n=a(7538),o=a(6108),s=a(2808),d=a(1221),c=t([r,n,o,s,d]);[r,n,o,s,d]=c.then?(await c)():c,i()}catch(t){i(t)}})},787:(t,e,a)=>{"use strict";a.d(e,{f:()=>o,m:()=>s});var i=a(997),r=a(6689);let n=(0,r.createContext)(),o=({children:t,data:e})=>i.jsx(n.Provider,{value:e,children:t}),s=()=>(0,r.useContext)(n)},174:(t,e,a)=>{"use strict";a.d(e,{w:()=>i});let i={apiUrl:"https://app.fundsdome.com"}},9597:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var i=a(997);a(6764);var r=a(6238),n=a.n(r);function o({Component:t,pageProps:e}){return(0,i.jsxs)(i.Fragment,{children:[i.jsx(n(),{height:2,color:"#9F85F7",shadow:"0 0 10px #9F85F7,0 0 5px #9F85F7",showSpinner:!1}),i.jsx(t,{...e})]})}},4003:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>Document});var i=a(997),r=a(6859);function Document(){return(0,i.jsxs)(r.Html,{lang:"en",children:[i.jsx(r.Head,{}),(0,i.jsxs)("body",{children:[i.jsx(r.Main,{}),i.jsx(r.NextScript,{})]})]})}},8353:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(6490),n=a(1283),o=t([r,n]);[r,n]=o.then?(await o)():o;let s=async()=>{let t=new n.default,e=t.get("auth_token",{domain:"fundsdome.com"});console.log(e,"<--authToken from cookies");let a=await (0,r.bG)();return console.log(a,"<--isAuthenticaed"),!!a?._id},d=s;i()}catch(t){i(t)}})},9481:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{O:()=>r.Z});var r=a(8353),n=t([r]);r=(n.then?(await n)():n)[0],i()}catch(t){i(t)}})},6764:()=>{}};