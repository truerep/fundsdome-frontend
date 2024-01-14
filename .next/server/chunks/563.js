exports.id=563,exports.ids=[563],exports.modules={9666:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{p:()=>r.Z});var r=a(2013),n=t([r]);r=(n.then?(await n)():n)[0],i()}catch(t){i(t)}})},2013:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>l});var r=a(9648),n=a(1283),s=a(174),o=t([r,n]);[r,n]=o.then?(await o)():o;let d=async(t,e)=>{let a=new n.default;try{let i=await r.default.post(`${s.w.apiUrl}/users/login`,{username:t,password:e}),{token:n}=i.data;localStorage.setItem("token",n),a.set("auth_token",{token:n},{path:"/",domain:"fundsdome.com"});let o=a.get("auth_token",{domain:"fundsdome.com"});return console.log(o,"<--authToken from cookies"),n}catch(t){throw console.error("Authentication failed",t),t}},l=d;i()}catch(t){i(t)}})},1951:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(9648),n=a(174),s=t([r]);r=(s.then?(await s)():s)[0];let o=async t=>{try{let e=await r.default.get(`${n.w.apiUrl}/donations/group/${t}`,{});return e.data}catch(t){throw console.error("Failed to fetch data",t),t}},d=o;i()}catch(t){i(t)}})},8597:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{N:()=>r.Z});var r=a(1951),n=t([r]);r=(n.then?(await n)():n)[0],i()}catch(t){i(t)}})},404:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(9648),n=a(174),s=t([r]);r=(s.then?(await s)():s)[0];let o=async()=>{try{let t=await r.default.get(`${n.w.apiUrl}/events/all/1`,{});return t.data}catch(t){throw console.error("Failed to fetch data",t),t}},d=o;i()}catch(t){i(t)}})},153:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{I:()=>r.Z});var r=a(404),n=t([r]);r=(n.then?(await n)():n)[0],i()}catch(t){i(t)}})},4467:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(9648),n=a(174),s=t([r]);r=(s.then?(await s)():s)[0];let o=async(t=1)=>{try{let e=await r.default.get(`${n.w.apiUrl}/conversation/all/${t}`,{});return e.data}catch(t){throw console.error("Failed to fetch data",t),t}},d=o;i()}catch(t){i(t)}})},8968:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(9648),n=a(174),s=t([r]);r=(s.then?(await s)():s)[0];let o=async t=>{try{let e=await r.default.get(`${n.w.apiUrl}/conversation/slug/${t}`,{});return e.data}catch(t){throw console.error("Failed to fetch data",t),t}},d=o;i()}catch(t){i(t)}})},8303:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{F:()=>r.Z,M:()=>n.Z});var r=a(4467),n=a(8968),s=t([r,n]);[r,n]=s.then?(await s)():s,i()}catch(t){i(t)}})},6490:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Fb:()=>s.F,H4:()=>d.H,IP:()=>o.I,MC:()=>s.M,Nz:()=>l.N,bG:()=>n.b,pH:()=>r.p});var r=a(9666),n=a(5075),s=a(8303),o=a(153),d=a(6570),l=a(8597),c=t([r,n,s,o,d,l]);[r,n,s,o,d,l]=c.then?(await c)():c,i()}catch(t){i(t)}})},2154:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(9648),n=a(174),s=t([r]);r=(s.then?(await s)():s)[0];let o=async t=>{try{let e=await r.default.get(`${n.w.apiUrl}/posts/group/${t}/1/1`,{});return e.data}catch(t){throw console.error("Failed to fetch data",t),t}},d=o;i()}catch(t){i(t)}})},6570:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{H:()=>r.Z});var r=a(2154),n=t([r]);r=(n.then?(await n)():n)[0],i()}catch(t){i(t)}})},238:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>l});var r=a(9648),n=a(1283),s=a(174),o=t([r,n]);[r,n]=o.then?(await o)():o;let d=async()=>{let t=new n.default;try{let e=t.get("auth_token");if(e?.token){let t=await r.default.get(`${s.w.apiUrl}/users/user-info`,{headers:{Authorization:`Bearer ${e?.token}`}});return t.data}}catch(t){}},l=d;i()}catch(t){i(t)}})},5075:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{b:()=>r.Z});var r=a(238),n=t([r]);r=(n.then?(await n)():n)[0],i()}catch(t){i(t)}})},972:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>c});var r=a(997),n=a(6689),s=a(75),o=a(6490),d=t([s,o]);[s,o]=d.then?(await d)():d;let l=[],c=({groupsList:t})=>{let e=(0,n.useRef)(null),[a,i]=(0,n.useState)(!1);t?.groups.forEach(t=>{l.some(e=>e._id===t._id)||l.push(t)});let d=()=>{if(e.current){let t=e.current.getBoundingClientRect();return t.bottom<=window.innerHeight}return!1},c=async()=>{d()&&t?.currentPage!==t?.totalPages&&(i(!0),t=await (0,o.Fb)(t?.currentPage+1),t?.groups.forEach(t=>{l.some(e=>e._id===t._id)||l.push(t)}),i(!1))};return(0,n.useEffect)(()=>(window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}),[]),r.jsx(s.Z,{sectionRef:e,isLoading:a,groupsList:l})};i()}catch(t){i(t)}})},75:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>h});var r=a(997);a(6689);var n=a(7518),s=a.n(n),o=a(905),d=a(5293),l=t([d]);d=(l.then?(await l)():l)[0];let c=s().div`
	padding-bottom: 70px;
`,p=s()(o.W)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	padding: 70px 0;
`,h=({sectionRef:t,groupsList:e,isLoading:a})=>(0,r.jsxs)(c,{ref:t,children:[r.jsx(p,{children:e.length&&e.map(t=>r.jsx(d.x9,{groupData:t},t._id))}),a?r.jsx(d.aN,{}):""]});i()}catch(t){i(t)}})},2808:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>s});var r=a(972),n=t([r]);r=(n.then?(await n)():n)[0];let s=r.Z;i()}catch(t){i(t)}})},1987:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>o});var r=a(997);a(6689);var n=a(8655),s=t([n]);n=(s.then?(await s)():s)[0];let o=({eventsList:t})=>r.jsx(n.Z,{eventsList:t});i()}catch(t){i(t)}})},8655:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>p});var r=a(997);a(6689);var n=a(7518),s=a.n(n),o=a(905),d=a(5293),l=t([d]);d=(l.then?(await l)():l)[0];let c=s()(o.W)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	padding: 70px 0;
`,p=({eventsList:t})=>(0,r.jsxs)(c,{children:[t?.events.map(t=>r.jsx(d.cx,{eventData:t},t._id)),console.log(t,"<--eventsList")]});i()}catch(t){i(t)}})},1221:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>s});var r=a(1987),n=t([r]);r=(n.then?(await n)():n)[0];let s=r.Z;i()}catch(t){i(t)}})},8396:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>l});var r=a(997),n=a(6689),s=a(6490),o=a(3754),d=t([s]);s=(d.then?(await d)():d)[0];let l=()=>{let[t,e]=(0,n.useState)(""),[a,i]=(0,n.useState)(""),d=async()=>{try{let e=await (0,s.pH)(t,a);console.log("Token:",e)}catch(t){}};return r.jsx(o.Z,{username:t,setUsername:e,password:a,setPassword:i,handleLogin:d})};i()}catch(t){i(t)}})},3754:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var i=a(997);a(6689);var r=a(7518),n=a.n(r);let s=n().div`
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
`,o=({username:t,setUsername:e,password:a,setPassword:r,handleLogin:n})=>(0,i.jsxs)(s,{children:[i.jsx("input",{type:"text",placeholder:"Username",value:t,onChange:t=>e(t.target.value)}),i.jsx("input",{type:"password",placeholder:"Password",value:a,onChange:t=>r(t.target.value)}),i.jsx("button",{className:"btn-primary",onClick:n,children:"Login"})]})},7538:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>s});var r=a(8396),n=t([r]);r=(n.then?(await n)():n)[0];let s=r.Z;i()}catch(t){i(t)}})},8294:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>p});var r=a(997),n=a(6689),s=a(787),o=a(6490),d=a(8793),l=a(9481),c=t([o,d,l]);[o,d,l]=c.then?(await c)():c;let p=()=>{let t=(0,s.m)(),[e,a]=(0,n.useState)([]),[i,c]=(0,n.useState)(),[p,h]=(0,n.useState)(),[x,g]=(0,n.useState)({}),[u,m]=(0,n.useState)(!1),[f,v]=(0,n.useState)(!1),[b,y]=(0,n.useState)(!0),w=async t=>{let e=await (0,o.Nz)(t),i=e.reduce((t,e)=>t+e.targetAmount,0),r=e.reduce((t,e)=>t+e.currentAmount,0),n=parseInt(r/i*100);a(e),g({targetAmount:i,currentAmount:r,percentage:n})},j=async()=>{let t=await (0,l.O)();p&&t?window.open(`https://app.fundsdome.com/contribute?amount=${p}&donationId=${i}`,"_blank"):y(!0)};return(0,n.useEffect)(()=>{console.log(t?.chat?._id,"<--organizationData"),w(t?.chat?._id)},[]),r.jsx(d.Z,{donationTotal:x,donations:e,organizationData:t,showModal:u,setShowModal:m,showAmountModal:f,setShowAmountModal:v,donationId:i,setDonationId:c,donationAmount:p,setDonationAmount:h,showLoginModal:b,setShowLoginModal:y,handleDonation:j})};i()}catch(t){i(t)}})},8793:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>D});var r=a(997);a(6689);var n=a(7518),s=a.n(n),o=a(905),d=a(5293),l=t([d]);d=(l.then?(await l)():l)[0];let c=s()(o.W)`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    margin: 40px auto 60px;

    img {
        width: 100%;
    }
`,p=s().div`
    display: flex;
    align-items: center;
    padding: 26px;
`,h=s().div`
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
`,x=s().div`
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
`,g=s().div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
`,u=s().div`
    width: 320px;
`,m=s().a`
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
`,f=s().div``,v=s().div`
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
`,y=s().div`
	position: absolute;
    bottom: calc(100% + 13px);
    right: 0;
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.166;
    text-transform: capitalize;
    color: var(--cleenhearts-purple, #965995)
`,w=s().div`
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
`,j=s().div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    
    @media (min-width: 576px) {
        min-width: 450px;
    }
`,k=s().div`
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
`,Z=s().div`
    padding: 0 15px;
    flex: 1;
`,z=s().button`
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
`,F=s().div`
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
`,D=({donationTotal:t,organizationData:e,donations:a,donationId:i,setDonationId:n,donationAmount:s,setDonationAmount:o,showModal:l,setShowModal:D,showAmountModal:_,setShowAmountModal:$,showLoginModal:S,setShowLoginModal:C,handleDonation:M})=>(0,r.jsxs)(c,{children:[r.jsx("img",{src:e?.posts[0]?.image,alt:"organization-banner"}),(0,r.jsxs)(p,{children:[(0,r.jsxs)(h,{children:[r.jsx("img",{class:"logo",src:"https://pkstatic.imgix.net/media/companyprofile/331/onecause-logo.png",alt:"organization-logo"}),(0,r.jsxs)(x,{children:[r.jsx("h1",{children:e?.chat?.chatName}),(0,r.jsxs)("p",{children:[e?.chat?.users?.length," Members | ",e?.events?.length," Events Organized"]}),r.jsx("a",{href:"#",children:"Organization Info"})]})]}),(0,r.jsxs)(g,{children:[(0,r.jsxs)(u,{children:[r.jsx(f,{children:r.jsx(v,{children:r.jsx(b,{percentage:t?.percentage,children:(0,r.jsxs)(y,{children:[t?.percentage,"%"]})})})}),(0,r.jsxs)(w,{children:[(0,r.jsxs)("h5",{children:["Raised $",t?.currentAmount]}),(0,r.jsxs)("h5",{children:["Goal $",t?.targetAmount]})]})]}),r.jsx(m,{onClick:()=>D(!0),children:"Donate"})]})]}),r.jsx(d.u_,{showModal:l,setShowModal:D,children:r.jsx(j,{children:a.length&&a.map((t,e)=>(0,r.jsxs)(k,{children:[console.log(t),r.jsx("img",{src:t?.event?.thumbnail}),(0,r.jsxs)(Z,{children:[r.jsx("h4",{children:t?.event?.name}),(0,r.jsxs)(w,{children:[(0,r.jsxs)("h5",{children:["Raised $",t?.currentAmount]}),(0,r.jsxs)("h5",{children:["Goal $",t?.targetAmount]})]}),r.jsx(v,{className:"bar",children:r.jsx(b,{percentage:parseInt(t?.currentAmount/t?.targetAmount*100)})})]}),r.jsx(z,{onClick:()=>{n(t._id),$(!0)},children:"Donate"})]},t._id))})}),r.jsx(d.u_,{showModal:_,setShowModal:$,children:(0,r.jsxs)(F,{children:[r.jsx("input",{type:"text",value:s,onChange:t=>o(t.target.value),placeholder:"Enter Amount USD $"}),r.jsx(z,{onClick:()=>M(),children:"Donate"})]})}),r.jsx(d.u_,{showModal:S,setShowModal:C,children:r.jsx(d._A,{setShowLoginModal:C})})]});i()}catch(t){i(t)}})},3087:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>s});var r=a(8294),n=t([r]);r=(n.then?(await n)():n)[0];let s=r.Z;i()}catch(t){i(t)}})},8148:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>o});var r=a(997);a(6689);var n=a(8153),s=t([n]);n=(s.then?(await s)():s)[0];let o=()=>r.jsx(n.Z,{});i()}catch(t){i(t)}})},8153:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>p});var r=a(997);a(6689);var n=a(7518),s=a.n(n),o=a(905),d=a(8732),l=t([d]);d=(l.then?(await l)():l)[0];let c=s()(o.W)`
    display: flex;
    gap: 55px;
    margin-bottom: 60px;
`,p=()=>(0,r.jsxs)(c,{children:[r.jsx(d.V,{}),r.jsx(d.z,{})]});i()}catch(t){i(t)}})},2717:(t,e,a)=>{"use strict";a.d(e,{Z:()=>w});var i=a(997);a(6689);var r=a(7518),n=a.n(r),s=a(787);let o=t=>{console.log(t,"<---");let e=new Date(t?.date),a=e.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),i=t?.time.replace(/(\d{2}):(\d{2})/,(t,e,a)=>{let i=parseInt(e,10);return`${i%12||12}:${a}${i<12?"AM":"PM"}`}),r=new Date,n=`${e>r?"Starts":"Ended"} ${i}, ${a}`;return n},d=n().div`
    border-radius: 5px;
    border: 1px solid #9F85F7;
    background: #FAF9FC;
    overflow: hidden;
    display: flex;
    margin-bottom: 19px;
`,l=n().div`
    width: 100px;
    flex-shrink: 0;
`,c=n().img`
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
`,g=n().div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
`,u=n().p`

`,m=n().p`

`,f=({eventName:t,event:e,thumbnail:a})=>(0,i.jsxs)(d,{children:[i.jsx(l,{children:i.jsx(c,{src:a,alt:"event-icon",className:"event-icon"})}),(0,i.jsxs)(p,{children:[i.jsx(h,{children:t}),i.jsx(x,{children:o(e)}),(0,i.jsxs)(g,{children:[i.jsx(u,{children:"$ 4500 / $ 6000"}),i.jsx(m,{children:"350 Contributions"})]})]})]}),v=()=>{let t=(0,s.m)();return t?.events.map(t=>i.jsx(f,{eventName:t?.name,event:t,thumbnail:t?.thumbnail||""},t._id))},b=n().div`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
    padding: 18px 27px;
    flex: 1;
    height: fit-content;
    flex-shrink: 0;
    position: sticky;
    top: 30px;
`,y=()=>i.jsx(b,{children:i.jsx(v,{})}),w=()=>i.jsx(y,{})},3185:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>c});var r=a(997),n=a(6689),s=a(787),o=a(6490),d=a(5615),l=t([o,d]);[o,d]=l.then?(await l)():l;let c=()=>{let t=(0,s.m)(),[e,a]=(0,n.useState)(!1),i=async()=>{let e=await (0,o.bG)();e?._id===t?.chat?.groupAdmin?._id&&a(!0),console.log(e)};return(0,n.useEffect)(()=>{i()},[]),r.jsx(d.Z,{isAdmin:e,organizationData:t})};i()}catch(t){i(t)}})},5615:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>c});var r=a(997);a(6689);var n=a(7518),s=a.n(n),o=a(8532),d=t([o]);o=(d.then?(await d)():d)[0];let l=s().div`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
    width: 700px;
    flex-shrink: 0;
    height: fit-content;
`,c=({isAdmin:t,organizationData:e})=>r.jsx(r.Fragment,{children:r.jsx(l,{children:e?.posts.map(t=>r.jsx(o.YS,{organizationName:e?.chat?.chatName,timeStamp:t?.createdAt,description:t?.description,imageUrl:t?.image},t?._id))})});i()}catch(t){i(t)}})},5007:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>s});var r=a(3185),n=t([r]);r=(n.then?(await n)():n)[0];let s=r.Z;i()}catch(t){i(t)}})},8732:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{V:()=>r.Z,z:()=>n.Z});var r=a(5007),n=a(2717),s=t([r]);r=(s.then?(await s)():s)[0],i()}catch(t){i(t)}})},7075:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>s});var r=a(8148),n=t([r]);r=(n.then?(await n)():n)[0];let s=r.Z;i()}catch(t){i(t)}})},6108:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{F:()=>n.Z,j:()=>r.Z});var r=a(3087),n=a(7075),s=t([r,n]);[r,n]=s.then?(await s)():s,i()}catch(t){i(t)}})},754:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>l});var r=a(997),n=a(6689),s=a(6490),o=a(6291),d=t([s]);s=(d.then?(await d)():d)[0];let l=({groupData:t})=>{let[e,a]=(0,n.useState)("https://i.stack.imgur.com/IA7jp.gif"),i=async t=>{let e=await (0,s.H4)(t);e?.posts?.length?a(e.posts[0].image):a("https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg")};return t?._id&&i(t?._id),r.jsx(o.Z,{groupData:t,campaignBanner:e})};i()}catch(t){i(t)}})},6291:(t,e,a)=>{"use strict";a.d(e,{Z:()=>w});var i=a(997),r=a(1664),n=a.n(r);a(6689);var s=a(7518),o=a.n(s);let d=o().div`
	a {
		text-decoration: none;
	}
`,l=o().div`
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
`,c=o().div`
	height: 220px;
	position: relative;
`,p=o().div`
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
`,h=o().img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 20px;
`,x=o().div`
	padding-top: 65px;
`,g=o().h3`
	font-size: 22px;
	line-height: 1.5;
	letter-spacing: -0.66px;
	text-transform: capitalize;
	margin-bottom: 15px;
	font-family: Quicksand, sans-serif;
`,u=o().p`
	font-family: "DM Sans", sans-serif;
	font-size: 16px;
	color: #757277;
	font-weight: 400;
	line-height: 1.75;
`,m=o().div``,f=o().div`
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
    width: 90%;
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
`,b=o().div`
	position: absolute;
    bottom: calc(100% + 13px);
    right: 0;
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.166;
    text-transform: capitalize;
    color: var(--cleenhearts-purple, #965995)
`,y=o().div`
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
`,w=({groupData:t,campaignBanner:e})=>i.jsx(d,{children:i.jsx(n(),{href:`/${t?.slug}`,children:(0,i.jsxs)(l,{children:[(0,i.jsxs)(c,{children:[i.jsx(h,{src:e}),(0,i.jsxs)(p,{children:[i.jsx(m,{children:i.jsx(f,{children:i.jsx(v,{children:i.jsx(b,{children:"90%"})})})}),(0,i.jsxs)(y,{children:[i.jsx("h5",{children:"Raised $80,050"}),i.jsx("h5",{children:"Goal $90,000"})]})]})]}),(0,i.jsxs)(x,{children:[i.jsx(g,{children:t?.chatName}),i.jsx(u,{children:t?.description})]})]})})})},7862:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>s});var r=a(754),n=t([r]);r=(n.then?(await n)():n)[0];let s=r.Z;i()}catch(t){i(t)}})},6001:(t,e,a)=>{"use strict";a(997),a(6689);var i=a(7518),r=a.n(i);r().div`
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
`},218:(t,e,a)=>{"use strict";a.d(e,{Z:()=>m});var i=a(997);a(6689);var r=a(7518),n=a.n(r);let s=n().div`
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
`,o=n().div`
	height: 366px;
	position: relative;
`,d=n().img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`,l=n().div`
	position: absolute;
	left: 0;
	top: 30px;
	z-index: 1;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`,c=n().div`
	padding: 0 19px 0 30px;
    line-height: 36px;
    display: inline-block;
    border-radius: 0px 100px 100px 0px;
    background-color: #965995;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
`,p=n().div`
	padding: 0 31px 0 13px;
    line-height: 36px;
    display: inline-block;
    border-radius: 100px 0px 0px 100px;
    background-color: var(--cleenhearts-secondary, #F6D469);
    font-size: 16px;
    font-weight: 700;
    color: var(--cleenhearts-base, #351C42);
    text-transform: uppercase;
`,h=n().div`
	position: relative;
	border: 1px solid #D7D3CB;
	border-top: none;
	padding: 31px 30px 29px;
	border-radius: 0 0 20px 20px;
`,x=n().h3`
	text-transform: capitalize;
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 30px;
	font-family: "Quicksand", sans-serif;
    color: #351C42;
`,g=n().ul`
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
`,u=({eventData:t})=>(0,i.jsxs)(s,{children:[(0,i.jsxs)(o,{children:[i.jsx(d,{src:t?.thumbnail}),(0,i.jsxs)(l,{children:[(0,i.jsxs)(c,{children:[i.jsx("span",{class:"event-card-grid__time__icon fa fa-clock"}),"10:00 aM - 2.00 PM"]}),i.jsx(p,{children:"03 Sep"})]})]}),(0,i.jsxs)(h,{children:[i.jsx(x,{children:t?.name||"Unnamed"}),(0,i.jsxs)(g,{children:[(0,i.jsxs)("li",{children:[i.jsx("h5",{class:"event-card-grid__meta__title",children:"Organizer"}),"Ashton Porter"]}),(0,i.jsxs)("li",{children:[(0,i.jsxs)("h5",{class:"event-card-grid__meta__title",children:[i.jsx("span",{class:"icon-location"})," Venue"]}),"350 5th AveNew York, NY 10118"]})]})]})]}),m=({eventData:t})=>i.jsx(u,{eventData:t})},9632:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var i=a(997);a(6689),a(1664);var r=a(7518),n=a.n(r);let s=n().div`
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
`,o=n().div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url("https://truerep.github.io/fundsdome-ui/assets/images/backgrounds/footer-bottom-bg-1-2.png");
    mix-blend-mode: multiply;
`,d=()=>(0,i.jsxs)(s,{children:[i.jsx(o,{}),"\xa9 Copyright 2024 FundsDome All Rights Reserved."]}),l=()=>i.jsx(d,{})},5050:(t,e,a)=>{"use strict";a.d(e,{Z:()=>x});var i=a(997);a(6689);var r=a(1664),n=a.n(r),s=a(7518),o=a.n(s);let d=o().div`
    padding: 0 20px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
`,l=o().img`
    height: 50px;
`,c=o().ul`
    list-style: none;
    display: flex;
`,p=o().li`
    a {
        display: block;
        padding: 40px 20px;
        color: #351C42;
        font-size: 15px;
        font-weight: 500;

        &:hover {
            color: #F6D469;
        }
    }
`,h=()=>(0,i.jsxs)(d,{children:[i.jsx(l,{src:"https://www.goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png",alt:"fundsdome-logo"}),(0,i.jsxs)(c,{children:[i.jsx(p,{children:i.jsx(n(),{href:"/",children:"Home"})}),i.jsx(p,{children:i.jsx(n(),{href:"/campaigns",children:"Campaigns"})}),i.jsx(p,{children:i.jsx(n(),{href:"/events",children:"Events"})})]})]}),x=()=>i.jsx(h,{})},7402:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var i=a(997);a(6689);var r=a(7518),n=a.n(r);let s=n().div`
    text-align: center;
    margin-top: -100px;
    img {
        height: 200px;
    }
`,o=()=>i.jsx(s,{children:i.jsx("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*Gvgic29bgoiGVLmI6AVbUg.gif",alt:"loading..."})})},1405:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>l});var r=a(997),n=a(6689),s=a(6490),o=a(4385),d=t([s]);s=(d.then?(await d)():d)[0];let l=({setShowLoginModal:t})=>{let[e,a]=(0,n.useState)(""),[i,d]=(0,n.useState)(""),l=async()=>{try{await (0,s.pH)(e,i),t(!1)}catch(t){}};return r.jsx(o.Z,{username:e,setUsername:a,password:i,setPassword:d,handleLogin:l})};i()}catch(t){i(t)}})},4385:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var i=a(997);a(6689);var r=a(7518),n=a.n(r);let s=n().div`
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
`,o=n().div`
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
`,d=({username:t,setUsername:e,password:a,setPassword:r,handleLogin:n})=>(0,i.jsxs)(s,{children:[(0,i.jsxs)(o,{children:[i.jsx("button",{className:"btn-primary",children:"Log In"}),i.jsx("button",{className:"btn-primary inactive",children:"Sign Up"})]}),i.jsx("input",{type:"text",placeholder:"Username",value:t,onChange:t=>e(t.target.value)}),i.jsx("input",{type:"password",placeholder:"Password",value:a,onChange:t=>r(t.target.value)}),i.jsx("button",{className:"btn-primary",onClick:n,children:"Login"})]})},8852:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>s});var r=a(1405),n=t([r]);r=(n.then?(await n)():n)[0];let s=r.Z;i()}catch(t){i(t)}})},4847:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var i=a(997);a(6689);var r=a(7518),n=a.n(r);let s=n().div`
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
`,o=n().div`
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
`,l=({showModal:t,setShowModal:e,children:a})=>i.jsx(s,{className:t&&"toggled",children:(0,i.jsxs)(o,{className:t&&"toggled",children:[i.jsx(d,{onClick:()=>e(!1),children:i.jsx("img",{src:"https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close",alt:"close"})}),a]})})},959:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var i=a(997);a(6689);var r=a(7518),n=a.n(r);n().div`
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
`;let s=t=>{let e=new Date,a=new Date(t),i=Math.floor((e-a)/1e3),r=Math.floor(i/60),n=Math.floor(r/60),s=Math.floor(n/24);return s>0?`${s} ${1===s?"day":"days"} ago`:n>0?`${n} ${1===n?"hour":"hours"} ago`:r>0?`${r} ${1===r?"minute":"minutes"} ago`:`${i} ${1===i?"second":"seconds"} ago`},o=n().div`
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
`,l=n().div`
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

`;let c=({organizationName:t,timeStamp:e,description:a,imageUrl:r})=>(0,i.jsxs)(o,{children:[(0,i.jsxs)(d,{children:[i.jsx("img",{class:"logo",src:"https://pkstatic.imgix.net/media/companyprofile/331/onecause-logo.png",alt:"organization-logo"}),(0,i.jsxs)("div",{children:[i.jsx("h2",{children:t}),(0,i.jsxs)("p",{children:[" ",s(e)]})]})]}),(0,i.jsxs)(l,{children:[i.jsx("p",{children:a}),r?i.jsx("img",{src:r,alt:"post-image"}):""]})]}),p=({organizationName:t,timeStamp:e,description:a,imageUrl:r})=>i.jsx(c,{organizationName:t,timeStamp:e,description:a,imageUrl:r})},905:(t,e,a)=>{"use strict";a.d(e,{W:()=>n});var i=a(7518),r=a.n(i);let n=r().div`
    max-width: 1200px;
    margin: 0 auto;
`},5293:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{$_:()=>n.Z,YS:()=>s.Z,_A:()=>p.Z,aN:()=>l.Z,cx:()=>d.Z,h4:()=>r.Z,u_:()=>c.Z,x9:()=>o.Z});var r=a(5050),n=a(9632),s=a(959);a(6001);var o=a(7862),d=a(218),l=a(7402),c=a(4847),p=a(8852),h=t([o,p]);[o,p]=h.then?(await h)():h,i()}catch(t){i(t)}})},8532:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{$_:()=>r.$_,FE:()=>s.F,YS:()=>r.YS,h4:()=>r.h4,iP:()=>o.Z,jL:()=>s.j,m3:()=>n.Z,zW:()=>d.Z});var r=a(5293),n=a(7538),s=a(6108),o=a(2808),d=a(1221),l=t([r,n,s,o,d]);[r,n,s,o,d]=l.then?(await l)():l,i()}catch(t){i(t)}})},787:(t,e,a)=>{"use strict";a.d(e,{f:()=>s,m:()=>o});var i=a(997),r=a(6689);let n=(0,r.createContext)(),s=({children:t,data:e})=>i.jsx(n.Provider,{value:e,children:t}),o=()=>(0,r.useContext)(n)},174:(t,e,a)=>{"use strict";a.d(e,{w:()=>i});let i={apiUrl:"https://app.fundsdome.com"}},9597:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var i=a(997);function r({Component:t,pageProps:e}){return i.jsx(t,{...e})}a(6764)},4003:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>Document});var i=a(997),r=a(6859);function Document(){return(0,i.jsxs)(r.Html,{lang:"en",children:[i.jsx(r.Head,{}),(0,i.jsxs)("body",{children:[i.jsx(r.Main,{}),i.jsx(r.NextScript,{})]})]})}},8353:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{Z:()=>d});var r=a(6490),n=a(1283),s=t([r,n]);[r,n]=s.then?(await s)():s;let o=async()=>{let t=new n.default,e=t.get("auth_token",{domain:"fundsdome.com"});console.log(e,"<--authToken from cookies");let a=await (0,r.bG)();return console.log(a,"<--isAuthenticaed"),!!a?._id},d=o;i()}catch(t){i(t)}})},9481:(t,e,a)=>{"use strict";a.a(t,async(t,i)=>{try{a.d(e,{O:()=>r.Z});var r=a(8353),n=t([r]);r=(n.then?(await n)():n)[0],i()}catch(t){i(t)}})},6764:()=>{}};