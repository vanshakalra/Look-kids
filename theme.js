(()=>{
const REDUCE=matchMedia("(prefers-reduced-motion:reduce)").matches;
const FACE=`<svg viewBox="146 44 388 286" fill="none" stroke="currentColor" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="M170 255C150 130 230 95 340 95c110 0 190 35 170 160"/><path d="M206 130L186 60l76 42M474 130l20-70-76 42"/><g class="eye"><circle cx="255" cy="250" r="60"/><g class="pu"><circle cx="257" cy="250" r="19" fill="currentColor" stroke="none"/><circle cx="264" cy="243" r="6" fill="#EAF5FB" stroke="none"/></g></g><g class="eye"><circle cx="425" cy="250" r="60"/><g class="pu"><circle cx="427" cy="250" r="19" fill="currentColor" stroke="none"/><circle cx="434" cy="243" r="6" fill="#EAF5FB" stroke="none"/></g></g><path d="M327 222h26l-13 28z" fill="#F7B731" stroke="#F7B731" stroke-width="6"/></svg>`;
const MARK=`<svg viewBox="58 44 596 286" fill="none" stroke="currentColor" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" focusable="false" role="img" aria-label="Look"><path d="M80 110v200h70"/><path d="M170 255C150 130 230 95 340 95c110 0 190 35 170 160"/><path d="M206 130L186 60l76 42M474 130l20-70-76 42"/><g class="eye"><circle cx="255" cy="250" r="60"/><g class="pu"><circle cx="257" cy="250" r="19" fill="currentColor" stroke="none"/><circle cx="264" cy="243" r="6" fill="#EAF5FB" stroke="none"/></g></g><g class="eye"><circle cx="425" cy="250" r="60"/><g class="pu"><circle cx="427" cy="250" r="19" fill="currentColor" stroke="none"/><circle cx="434" cy="243" r="6" fill="#EAF5FB" stroke="none"/></g></g><path d="M327 222h26l-13 28z" fill="#F7B731" stroke="#F7B731" stroke-width="6"/><path d="M560 110v200M562 240l66-60M588 226l44 84"/></svg>`;
const EYES=(c="")=>`<span class="eyes owl ${c}" aria-hidden="true">${FACE}</span>`;
const LOGO=`<span class="klogo eyes owl follow">${MARK}</span>`;
const MENU=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`;
const STAR=(c,s,r,x)=>`<svg class="st" style="${x};width:${s}px;height:${s}px;transform:rotate(${r}deg);color:${c}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5l3 7.2 7.6.6-5.8 5 1.8 7.5L12 17.7 5.4 21.8l1.8-7.5-5.8-5 7.6-.6z"/></svg>`;
const L=(w,cols)=>[...w].map((ch,i)=>`<b style="--c:${cols[i%cols.length]}">${ch}</b>`).join("");
const SLIDES=[
`<a class="kb-s" href="#main" aria-label="1 of 2: Kids collection, boys and girls. Shop now"><img src="assets/banner-1.jpg" alt="Kids collection for boys and girls: a girl in a yellow dress and a boy in denim dungarees. Shop now"></a>`,
`<a class="kb-s" href="#main" aria-label="2 of 2: Summer sale, new summer works are great deals"><img src="assets/banner-2.jpg" alt="Summer sale: two boys in colour-block tees and sunglasses. New summer works are great deals" loading="lazy"></a>`];
const COPY=[[/Your bag is empty/g,"Hmm… nothing in here yet"],[/Nothing matches/g,"We can't spot that one"],[/Start shopping/g,"Let's go shopping"]];
const walk=r=>{const w=document.createTreeWalker(r,NodeFilter.SHOW_TEXT,{acceptNode:n=>/SCRIPT|STYLE|TEXTAREA/.test(n.parentNode.nodeName)?2:1});let n;while(n=w.nextNode()){let v=n.nodeValue,o=v;COPY.forEach(([a,b])=>v=v.replace(a,b));if(v!==o)n.nodeValue=v}};
const setup=()=>{
 const top=document.getElementById("top");if(!top||top.dataset.k)return;top.dataset.k=1;
 document.querySelectorAll(".logo").forEach(l=>{l.innerHTML=LOGO});
 const hl=document.createElement("div");hl.className="hl";
 hl.innerHTML=`<button type="button" id="kMenu" aria-label="Open menu" aria-haspopup="dialog">${MENU}</button>`;
 const s=document.getElementById("srchBtn");if(s)hl.appendChild(s);top.prepend(hl);
 document.body.insertAdjacentHTML("beforeend",`<div class="kdr" id="kdr"><div class="kdr-bg"></div><aside class="kdr-p" role="dialog" aria-modal="true" aria-label="Menu"><button class="kdr-x" type="button" aria-label="Close menu">×</button><a class="logo" href="index.html" aria-label="LOOK home">${LOGO}</a>
  <a href="index.html">Boys</a><a href="#" data-k="Girls">Girls</a><a href="#" data-k="Babies">Babies</a><a href="#" data-k="Toys">Toys</a><hr><a class="sm" href="cart.html">My bag</a><a class="sm" href="group.html">Family bag</a><a class="sm" href="login.html">Login / Sign up</a></aside></div>`);
 const dr=document.getElementById("kdr"),btn=document.getElementById("kMenu");
 const open=()=>{dr.classList.add("on");dr.querySelector(".kdr-x").focus()},close=()=>{dr.classList.remove("on");btn.focus()};
 btn.onclick=open;dr.querySelector(".kdr-bg").onclick=close;dr.querySelector(".kdr-x").onclick=close;
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&dr.classList.contains("on"))close()});
 dr.querySelectorAll("[data-k]").forEach(a=>a.onclick=e=>{e.preventDefault();close();if(window.toast)toast(a.dataset.k+" collection is coming soon")});
};
const banner=()=>{
 const rows=document.querySelector(".rows");if(!rows||document.querySelector(".kban"))return;
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
const run=()=>{setup();cards();banner();empties();document.querySelectorAll("input[type=search]").forEach(x=>x.placeholder="Search kids' outfits, brands…");walk(document.body)};
run();new MutationObserver(run).observe(document.body,{childList:true,subtree:true});
/* owl pupils follow the pointer */
document.addEventListener("pointermove",e=>{document.querySelectorAll(".eyes.follow:not(.scan):not(.load):not(.happy)").forEach(g=>{g.querySelectorAll(".pu").forEach(p=>{const r=p.parentNode.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),a=Math.atan2(dy,dx),d=Math.min(26,Math.hypot(dx,dy)/8);p.style.transform=`translate(${(Math.cos(a)*d).toFixed(2)}px,${(Math.sin(a)*d).toFixed(2)}px)`})})},{passive:true});
/* logo eyes cheer when something is added (cart / wishlist change) */
let tm;document.addEventListener("store",()=>{document.querySelectorAll(".top .eyes").forEach(g=>{g.classList.add("happy");g.classList.remove("follow")});clearTimeout(tm);tm=setTimeout(()=>document.querySelectorAll(".top .eyes").forEach(g=>{g.classList.remove("happy");g.classList.add("follow")}),1300)});
/* loading owl: first visit of a session, and between pages */
let navFlag=false;try{navFlag=sessionStorage.getItem("look-nav")==="1";sessionStorage.removeItem("look-nav")}catch(e){}
try{const first=!sessionStorage.getItem("look-kids6-splash");if(first||navFlag){sessionStorage.setItem("look-kids6-splash","1");
 const sp=document.createElement("div");sp.className="ksplash";sp.setAttribute("role","status");sp.innerHTML=`${EYES("big load")}<p>${first&&!navFlag?"Finding something fun to wear…":"Just a moment…"}</p>`;document.body.appendChild(sp);
 const t0=performance.now(),min=REDUCE?200:(first&&!navFlag?1100:650),end=()=>setTimeout(()=>{sp.classList.add("out");setTimeout(()=>sp.remove(),400)},Math.max(0,min-(performance.now()-t0)));
 document.readyState==="complete"?end():addEventListener("load",end)}}catch(e){}
/* leaving a page: owl appears straight away so the hand-over feels continuous */
addEventListener("beforeunload",()=>{try{sessionStorage.setItem("look-nav","1")}catch(e){}if(!document.querySelector(".ksplash"))window.kLoading(true,"Just a moment…")});
addEventListener("pageshow",e=>{if(e.persisted)document.querySelectorAll(".ksplash").forEach(x=>x.remove())});
window.kLoading=(on,msg)=>{let sp=document.querySelector(".ksplash.manual");if(on&&!sp){sp=document.createElement("div");sp.className="ksplash manual";sp.setAttribute("role","status");sp.innerHTML=`${EYES("big load")}<p>${msg||"One moment…"}</p>`;document.body.appendChild(sp)}else if(!on&&sp){sp.classList.add("out");setTimeout(()=>sp.remove(),400)}};

/* product card -> details page */
document.addEventListener("click",e=>{const c=e.target.closest(".card[data-id]");if(!c||e.target.closest("button,a,.sw,.dots"))return;location.href="pdp.html?id="+c.dataset.id});
})();