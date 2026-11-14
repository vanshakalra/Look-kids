(()=>{
const REDUCE=matchMedia("(prefers-reduced-motion:reduce)").matches;
const FACE=`<svg viewBox="146 44 388 286" fill="none" stroke="currentColor" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="M170 255C150 130 230 95 340 95c110 0 190 35 170 160"/><path d="M206 130L186 60l76 42M474 130l20-70-76 42"/><g class="eye"><circle cx="255" cy="250" r="60"/><g class="pu"><circle cx="257" cy="250" r="19" fill="currentColor" stroke="none"/><circle cx="264" cy="243" r="6" fill="#EAF5FB" stroke="none"/></g></g><g class="eye"><circle cx="425" cy="250" r="60"/><g class="pu"><circle cx="427" cy="250" r="19" fill="currentColor" stroke="none"/><circle cx="434" cy="243" r="6" fill="#EAF5FB" stroke="none"/></g></g><path d="M327 222h26l-13 28z" fill="#F7B731" stroke="#F7B731" stroke-width="6"/></svg>`;
const MARK=`<svg viewBox="58 44 596 286" fill="none" stroke="currentColor" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" focusable="false" role="img" aria-label="Look"><path d="M80 110v200h70"/><path d="M170 255C150 130 230 95 340 95c110 0 190 35 170 160"/><path d="M206 130L186 60l76 42M474 130l20-70-76 42"/><g class="eye"><circle cx="255" cy="250" r="60"/><g class="pu"><circle cx="257" cy="250" r="19" fill="currentColor" stroke="none"/><circle cx="264" cy="243" r="6" fill="#EAF5FB" stroke="none"/></g></g><g class="eye"><circle cx="425" cy="250" r="60"/><g class="pu"><circle cx="427" cy="250" r="19" fill="currentColor" stroke="none"/><circle cx="434" cy="243" r="6" fill="#EAF5FB" stroke="none"/></g></g><path d="M327 222h26l-13 28z" fill="#F7B731" stroke="#F7B731" stroke-width="6"/><path d="M560 110v200M562 240l66-60M588 226l44 84"/></svg>`;
const EYES=(c="")=>`<span class="eyes owl ${c}" aria-hidden="true">${FACE}</span>`;
const LOGO=`<span class="klogo eyes owl follow">${MARK}</span>`;
const MENU=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`;
const STAR=(c,s,r,x)=>`<svg class="st" style="${x};width:${s}px;height:${s}px;transform:rotate(${r}deg);color:${c}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5l3 7.2 7.6.6-5.8 5 1.8 7.5L12 17.7 5.4 21.8l1.8-7.5-5.8-5 7.6-.6z"/></svg>`;
const L=(w,cols)=>[...w].map((ch,i)=>`<b style="--c:${cols[i%cols.length]}">${ch}</b>`).join("");
const SL=(cls,href,lab,small,h,p,btn,imgs)=>`<a class="kb-s kd ${cls}" href="${href}" aria-label="${lab}"><div class="kd-t"><small>${small}</small><h2>${h}</h2><p>${p}</p><span class="kd-b">${btn}</span></div><div class="kd-a">${imgs.map(s=>`<img src="${s}" alt="" loading="lazy">`).join("")}</div></a>`;
const IMG=(href,lab,src,alt,pos)=>`<a class="kb-s" href="${href}" aria-label="${lab}"><img src="${src}" alt="${alt}" style="object-position:${pos}"></a>`;
const SLIDES=[
IMG("shop.html?cat=Clothing","New arrivals. Shop clothing","assets/b-arrivals.jpg","The world is ours – new arrivals. Four children holding hands in colourful sweatshirts and denim.","24% 50%"),
IMG("shop.html?deal=40","Children's Day, enjoy up to 70 percent off, 14th to 16th November. Shop now","assets/b-childrens.jpg","Children's Day: enjoy up to 70% off, 14th to 16th November. Shop now.","42% 50%"),
IMG("shop.html?cat=Toys","Bringing joy to every play. Shop toys","assets/b-toys.jpg","Bringing joy to every play – toys, gifts and a plush teddy bear.","30% 50%"),
SL("kd-care","shop.html?cat=Personal%20care","Bath time, buy 2 get 1 free on personal care","BATH TIME","Buy 2, get 1 free<br>on personal care","Gentle wash, lotion &amp; sun care","Shop personal care",["assets/ph-wash.jpg","assets/ph-lotion.jpg","assets/ph-balm.jpg"])];
const COPY=[[/Your bag is empty/g,"Hmm… nothing in here yet"],[/Nothing matches/g,"We can't spot that one"],[/Start shopping/g,"Let's go shopping"]];
const walk=r=>{const w=document.createTreeWalker(r,NodeFilter.SHOW_TEXT,{acceptNode:n=>/SCRIPT|STYLE|TEXTAREA/.test(n.parentNode.nodeName)?2:1});let n;while(n=w.nextNode()){let v=n.nodeValue,o=v;COPY.forEach(([a,b])=>v=v.replace(a,b));if(v!==o)n.nodeValue=v}};
const TREE=[["Clothing","Clothing",[["All clothing",""],["Polo sets","Polo sets"],["Dungarees","Dungarees"],["Dresses","Dresses"],["Denim sets","Denim sets"]]],["Toys & Games","Toys",[["All toys",""],["Learning toys","Learning toys"],["Soft toys","Soft toys"],["Pretend play","Pretend play"],["Pull toys","Pull toys"]]],["Personal care","Personal care",[["All personal care",""],["Bath & body","Bath & body"],["Baby care","Baby care"]]],["Gifts","Gifts",[["All gifts",""],["Gift sets","Gift sets"]]],["Accessories","Accessories",[["All accessories",""],["Bags","Bags"],["Caps","Caps"]]]];
const q=s=>encodeURIComponent(s);
const MQ=["Free delivery on orders above ₹999","Flat 50% off on summer styles","Extra ₹200 off on your first order · code FIRST200","Cash on delivery available","7-day easy returns &amp; exchange","Child-safe, thoughtfully curated products"];
const marquee=()=>{if(document.querySelector(".mq"))return;const row=MQ.map(m=>`<span>${m}</span>`).join("");document.body.insertAdjacentHTML("afterbegin",`<div class="mq" role="region" aria-label="Offers and delivery information"><div class="mq-t"><div class="mq-r">${row}</div><div class="mq-r" aria-hidden="true">${row}</div></div></div>`)};
const DNAV=`<nav class="dnav" aria-label="Primary"><div class="dd"><button type="button" class="dl" aria-haspopup="true" aria-expanded="false">Clothing<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button><div class="dm"><a href="shop.html?cat=Clothing&g=boys">Boys</a><a href="shop.html?cat=Clothing&g=girls">Girls</a><hr><a href="shop.html?cat=Clothing">All clothing</a><a href="shop.html?cat=Clothing&style=Dresses">Dresses</a><a href="shop.html?cat=Clothing&style=Dungarees">Dungarees</a></div></div><a class="dl" href="shop.html?cat=Toys">Toys</a><a class="dl" href="shop.html?cat=Personal%20care">Personal care</a><a class="dl" href="shop.html?cat=Accessories">Accessories</a><a class="dl sale" href="shop.html?deal=40">Sale</a></nav>`;
const DRAWER=`<nav class="dn" aria-label="Shop by category">${TREE.map(([l,c,subs],i)=>`<div class="dg"><button type="button" class="dh" aria-expanded="false" aria-controls="dg${i}">${l}<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button><div class="dp" id="dg${i}" hidden>${subs.map(([sl,sv])=>`<a href="shop.html?cat=${q(c)}${sv?"&style="+q(sv):""}">${sl}</a>`).join("")}</div></div>`).join("")}<a class="dh flat" href="shop.html?deal=40">Offers &amp; deals<em>%</em></a><a class="dh flat" href="shop.html">Shop all</a></nav><hr><a class="sm" href="cart.html">My cart</a><a class="sm" href="group.html">Family bag</a><a class="sm" href="login.html">Login / Sign up</a>`;
const setup=()=>{
 const top=document.getElementById("top");if(!top||top.dataset.k)return;top.dataset.k=1;
 document.querySelectorAll(".logo").forEach(l=>{l.innerHTML=LOGO});
 top.querySelector(".logo")?.insertAdjacentHTML("afterend",DNAV);const dd=top.querySelector(".dd"),db=dd.querySelector("button");db.onclick=()=>{const on=db.getAttribute("aria-expanded")!=="true";db.setAttribute("aria-expanded",on)};dd.addEventListener("focusout",e=>{if(!dd.contains(e.relatedTarget))db.setAttribute("aria-expanded",false)});document.addEventListener("click",e=>{if(!dd.contains(e.target))db.setAttribute("aria-expanded",false)});document.addEventListener("keydown",e=>{if(e.key==="Escape"){db.setAttribute("aria-expanded",false)}});
 const hl=document.createElement("div");hl.className="hl";
 hl.innerHTML=`<button type="button" id="kMenu" aria-label="Open menu" aria-haspopup="dialog">${MENU}</button>`;
 const s=document.getElementById("srchBtn");if(s)hl.appendChild(s);top.prepend(hl);
 document.body.insertAdjacentHTML("beforeend",`<div class="kdr" id="kdr"><div class="kdr-bg"></div><aside class="kdr-p" role="dialog" aria-modal="true" aria-label="Menu"><button class="kdr-x" type="button" aria-label="Close menu">×</button><a class="logo" href="index.html" aria-label="LOOK home">${LOGO}</a>
${DRAWER}</aside></div>`);
 const dr=document.getElementById("kdr"),btn=document.getElementById("kMenu");
 const open=()=>{dr.classList.add("on");dr.querySelector(".kdr-x").focus()},close=()=>{dr.classList.remove("on");btn.focus()};
 btn.onclick=open;dr.querySelector(".kdr-bg").onclick=close;dr.querySelector(".kdr-x").onclick=close;
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&dr.classList.contains("on"))close()});
 dr.querySelectorAll(".dh[aria-controls]").forEach(b=>b.onclick=()=>{const p=document.getElementById(b.getAttribute("aria-controls")),on=b.getAttribute("aria-expanded")!=="true";dr.querySelectorAll(".dh[aria-controls]").forEach(x=>{x.setAttribute("aria-expanded",x===b&&on);document.getElementById(x.getAttribute("aria-controls")).hidden=!(x===b&&on)})});
};
const banner=()=>{
 const rows=document.getElementById("kban-slot");if(!rows||document.querySelector(".kban"))return;
 rows.insertAdjacentHTML("beforebegin",`<section class="kban" aria-roledescription="carousel" aria-label="Featured"><div class="kb-track" id="kbt">${SLIDES.join("")}</div>
  <button class="kb-arr p" type="button" aria-label="Previous banner">‹</button><button class="kb-arr n" type="button" aria-label="Next banner">›</button>
  <div class="kb-dots">${SLIDES.map((_,i)=>`<button type="button" aria-label="Banner ${i+1}"></button>`).join("")}</div></section>`);
 const t=document.getElementById("kbt"),dots=[...document.querySelectorAll(".kb-dots button")];let i=0,hold=false;
 const go=n=>{i=(n+SLIDES.length)%SLIDES.length;t.scrollTo({left:i*t.clientWidth,behavior:REDUCE?"auto":"smooth"})};
 const sync=()=>{i=Math.round(t.scrollLeft/t.clientWidth);dots.forEach((d,k)=>d.setAttribute("aria-current",k===i))};
 t.addEventListener("scroll",sync,{passive:true});sync();dots.forEach((d,k)=>d.onclick=()=>go(k));
 document.querySelector(".kb-arr.p").onclick=()=>go(i-1);document.querySelector(".kb-arr.n").onclick=()=>go(i+1);
 const kb=document.querySelector(".kban");["pointerenter","focusin","touchstart"].forEach(e=>kb.addEventListener(e,()=>hold=true,{passive:true}));["pointerleave","focusout"].forEach(e=>kb.addEventListener(e,()=>hold=false));
 if(!REDUCE)setInterval(()=>{if(!hold&&!document.hidden)go(i+1)},6000);
};
const empties=()=>{
 document.querySelectorAll(".emptyc svg,.empty svg").forEach(s=>{if(s.closest("button,a,.ebox"))return;
  const t=s.parentNode.textContent;const mood=/empty|matches|nothing/i.test(t)?"scan":"follow";
  const d=document.createElement("div");d.className="ebox";d.innerHTML=(mood==="scan"?'<span class="q" aria-hidden="true">?</span>':"")+EYES("big "+mood+" follow");s.replaceWith(d)})};
const cards=()=>document.querySelectorAll(".card[data-id]:not([data-pl])").forEach(c=>{c.dataset.pl=1;const n=c.querySelector(".name");if(n)n.innerHTML=`<a class="pl" href="pdp.html?id=${c.dataset.id}">${n.innerHTML}</a>`});
const catbar=()=>{const n=document.getElementById("catbar");if(!n||n.dataset.k)return;n.dataset.k=1;const cur=new URLSearchParams(location.search).get("cat")||"";n.innerHTML=[["All",""],...CATS.map(c=>[c[0]==="Toys"?"Toys & Games":c[0],c[0]])].map(([l,v])=>`<a href="shop.html${v?"?cat="+encodeURIComponent(v):""}"${cur===v?' aria-current="true"':""}>${l}</a>`).join("")};
const run=()=>{marquee();setup();catbar();cards();banner();empties();document.querySelectorAll("input[type=search]").forEach(x=>x.placeholder="Search kids' outfits, brands…");walk(document.body)};
run();new MutationObserver(run).observe(document.body,{childList:true,subtree:true});
/* owl pupils follow the pointer */
document.addEventListener("pointermove",e=>{document.querySelectorAll(".eyes.follow:not(.scan):not(.load):not(.happy)").forEach(g=>{g.querySelectorAll(".pu").forEach(p=>{const r=p.parentNode.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),a=Math.atan2(dy,dx),d=Math.min(26,Math.hypot(dx,dy)/8);p.style.transform=`translate(${(Math.cos(a)*d).toFixed(2)}px,${(Math.sin(a)*d).toFixed(2)}px)`})})},{passive:true});
/* logo eyes cheer when something is added (cart / wishlist change) */
let tm;document.addEventListener("store",()=>{document.querySelectorAll(".top .eyes").forEach(g=>{g.classList.add("happy");g.classList.remove("follow")});clearTimeout(tm);tm=setTimeout(()=>document.querySelectorAll(".top .eyes").forEach(g=>{g.classList.remove("happy");g.classList.add("follow")}),1300)});
/* loading owl: first visit of a session, and between pages */
let navFlag=false;try{navFlag=sessionStorage.getItem("look-nav")==="1";sessionStorage.removeItem("look-nav")}catch(e){}
try{const first=!sessionStorage.getItem("look-kids6-splash");if(first||navFlag){sessionStorage.setItem("look-kids6-splash","1");
 const sp=document.createElement("div");sp.className="ksplash";sp.setAttribute("role","status");sp.innerHTML=`${EYES("big load")}<p>${first&&!navFlag?"Finding something fun…":"Just a moment…"}</p>`;document.body.appendChild(sp);
 const t0=performance.now(),min=REDUCE?200:(first&&!navFlag?1100:650),end=()=>setTimeout(()=>{sp.classList.add("out");setTimeout(()=>sp.remove(),400)},Math.max(0,min-(performance.now()-t0)));
 document.readyState==="complete"?end():addEventListener("load",end)}}catch(e){}
/* leaving a page: owl appears straight away so the hand-over feels continuous */
addEventListener("beforeunload",()=>{try{sessionStorage.setItem("look-nav","1")}catch(e){}if(!document.querySelector(".ksplash"))window.kLoading(true,"Just a moment…")});
addEventListener("pageshow",e=>{if(e.persisted)document.querySelectorAll(".ksplash").forEach(x=>x.remove())});
window.kLoading=(on,msg)=>{let sp=document.querySelector(".ksplash.manual");if(on&&!sp){sp=document.createElement("div");sp.className="ksplash manual";sp.setAttribute("role","status");sp.innerHTML=`${EYES("big load")}<p>${msg||"One moment…"}</p>`;document.body.appendChild(sp)}else if(!on&&sp){sp.classList.add("out");setTimeout(()=>sp.remove(),400)}};

/* product card -> details page */
document.addEventListener("click",e=>{const c=e.target.closest(".card[data-id]");if(!c||e.target.closest("button,a,.sw,.dots"))return;location.href="pdp.html?id="+c.dataset.id});
})();
/* header wishlist: from any page except the shop page, open the wishlist view */
document.addEventListener("click",e=>{const b=e.target.closest("#wishBtn");if(b&&!/shop\.html$/.test(location.pathname))location.href="shop.html?wish=1"});
