/* Look – product details page */
renderHeader({page:"pdp"});
const RUPEE=INR;
const p=byId(new URLSearchParams(location.search).get("id"))||PRODUCTS[0],c=p.colors[0],C=COLORS[c],st=stockOf(p,c),pi=priceInfo(p);
document.title=`${p.name} – Look`;
let size=null;
const VIEWS=[{o:"50% 20%",s:1,l:"Front"},{o:"50% 10%",s:1.9,l:"Face & top"},{o:"50% 58%",s:1.9,l:"Fabric detail"},{o:"50% 96%",s:1.9,l:"Bottom & shoes"}];
const CHART=[["2Y","2 yrs","92","52"],["3Y","3 yrs","98","54"],["4Y","4 yrs","104","56"],["5Y","5 yrs","110","58"],["6Y","6 yrs","116","60"],["8Y","8 yrs","128","64"]];
const heartSvg=`<svg width="20" height="19" viewBox="0 0 24 22" aria-hidden="true"><path d="M12 20s-9-5.5-9-12.2A5 5 0 0112 5a5 5 0 019 2.8C21 14.5 12 20 12 20z"/></svg>`;
const what=p.type==="Dress"?"dress":p.type==="Set"?"set":"outfit";
const bullets=[["Fabric",p.fabric],["Fit",p.fit],["Neckline / style",p.neck],["Type",p.type],["Wash care","Machine wash cold, gentle cycle"],["Origin","Made in India"]];
const REV=[["Aanya's mom","5","Soft fabric and the colours are exactly like the photos. My daughter refuses to take it off!"],["Rohan K.","4","Good stitching and true to size. Went one size up for room to grow."],["Meera S.","5","Washed three times and no fading. Worth the price."]];
const others=PRODUCTS.filter(x=>x.id!==p.id);
const gal=VIEWS.map((v,i)=>`<button class="gt" type="button" data-i="${i}" aria-label="View ${i+1}: ${v.l}" aria-current="${i===0}"><img src="${C.img}" alt="" style="transform:scale(${v.s});transform-origin:${v.o}"></button>`).join("");
const star=ICON.star;
const stars=n=>Array.from({length:5},(_,i)=>`<span class="${i<n?"on":""}">★</span>`).join("");
const dist=[[5,62],[4,25],[3,8],[2,3],[1,2]];
document.getElementById("main").innerHTML=`
<nav class="crumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="index.html">Kids</a><span>/</span><b>${esc(p.name)}</b></nav>
<div class="pdp">
 <section class="gal" aria-label="Product images">
  <div class="gthumbs">${gal}</div>
  <div class="gmain" id="gmain"><img id="gimg" src="${C.img}" alt="${esc(p.brand+" "+p.name+" in "+C.name)}" style="transform-origin:${VIEWS[0].o}">
   <span class="rate">${star}${p.rating.toFixed(1)}<span>${fmtK(p.reviews)}</span></span>
   <button class="heart pheart" id="wishTop" type="button" aria-pressed="${Store.isWish(p.id)}" aria-label="Add to wishlist"><span>${heartSvg}</span></button>
   <div class="gdots" id="gdots" aria-hidden="true">${VIEWS.map((_,i)=>`<i class="${i?"":"on"}"></i>`).join("")}</div></div>
 </section>
 <section class="buy-col">
  <p class="pbrand">${esc(p.brand)}</p><h1 class="ptitle">${esc(p.name)}</h1>
  <div class="prate"><span class="chip">${star}<b>${p.rating.toFixed(1)}</b><i></i>${fmtK(p.reviews)} ratings</span><button class="plink" type="button" id="hist">${ICON.trend}${esc(pi.short)}</button></div>
  <p class="pprice"><span class="now">${RUPEE(p.price)}</span><s>${RUPEE(p.mrp)}</s><em>${p.disc}% OFF</em></p><p class="tax">Inclusive of all taxes</p>
  <div class="offers"><b>Offers for you</b>
   <button type="button" class="offer" data-code="LOOK10">${ICON.tag}<span><u>LOOK10</u> · 10% off up to ₹300</span><em>Copy</em></button>
   <button type="button" class="offer" data-code="FIRST200">${ICON.tag}<span><u>FIRST200</u> · ₹200 off on ₹999+</span><em>Copy</em></button></div>
  <div class="psec"><div class="phead"><b>Colour</b><span>${C.name}</span></div><div class="pcol"><button type="button" aria-checked="true" role="radio" aria-label="${C.name}"><img src="${C.img}" alt=""></button></div></div>
  <div class="psec" id="sizeSec"><div class="phead"><b>Select size</b><button class="plink" type="button" id="chart">${sv('<rect x="3" y="8" width="18" height="8" rx="1.5"/><path d="M7 8v3M11 8v4M15 8v3M19 8v4"/>',16)}Size chart</button></div>
   <div class="sizes psz" role="radiogroup" aria-label="Size">${SIZES.map(s=>`<button class="size" role="radio" aria-checked="false" data-s="${s}" ${st[s]?"":"disabled"} aria-label="${s}${st[s]?(st[s]<=3?`, only ${st[s]} left`:""):", out of stock"}">${s}${st[s]&&st[s]<=3?`<small>${st[s]} left</small>`:""}</button>`).join("")}</div>
   <p class="phint" id="shint" aria-live="polite">Age-wise sizes · pick the one closest to your child's age.</p></div>
  <div class="buy" id="buy"><button class="cta big add" id="addBtn" type="button"><span class="lbl">Add to Cart</span></button>
   <button class="wbtn" id="wishBtn2" type="button" aria-pressed="${Store.isWish(p.id)}"><span class="hi">${heartSvg}</span><span class="wl">Wishlist</span></button></div>
  <div class="pdel"><b>${ICON.truck}Delivery</b><form id="pf" novalidate><label class="sr" for="pinp">Pincode</label><input id="pinp" inputmode="numeric" maxlength="6" placeholder="Enter pincode" value="${Store.get().pin}"><button type="submit">Check</button></form><p id="dres" aria-live="polite"></p></div>
  <ul class="trust"><li>${sv('<path d="M4 12a8 8 0 018-8 8 8 0 017 4M20 12a8 8 0 01-8 8 8 8 0 01-7-4"/><path d="M19 3v5h-5M5 21v-5h5"/>',20)}<span>7-day easy returns</span></li><li>${sv('<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>',20)}<span>Cash on delivery</span></li><li>${sv('<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',20)}<span>100% genuine</span></li></ul>
  <div class="acc">
   <details open><summary>Product details</summary><dl>${bullets.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl></details>
   <details><summary>Description</summary><p>A playful ${what} made for busy days. Soft ${esc(p.fabric.toLowerCase())} that's gentle on little skin, a ${esc(p.fit.toLowerCase())} fit for easy movement and stitching that holds up to play, school and everything in between.</p></details>
   <details><summary>Delivery &amp; returns</summary><p>Free delivery on orders above ₹999. Standard delivery in ${p.days}–${p.days+2} days. Return or exchange within 7 days of delivery if the tags are intact.</p></details>
   <details><summary>Ratings &amp; reviews</summary><div class="rev"><div class="rsum"><strong>${p.rating.toFixed(1)}</strong><span class="stars">${stars(Math.round(p.rating))}</span><small>${fmtK(p.reviews)} ratings</small></div>
    <div class="bars">${dist.map(([n,w])=>`<div><span>${n}★</span><i><b style="width:${w}%"></b></i><span>${w}%</span></div>`).join("")}</div></div>
    ${REV.map(([n,r,t])=>`<article class="rv"><div><b>${esc(n)}</b><span class="stars">${stars(+r)}</span></div><p>${esc(t)}</p><small>Verified buyer</small></article>`).join("")}</details>
  </div>
 </section>
</div>
<section class="more"><h2>You may also like</h2><div class="mrow">${others.map(o=>{const oc=COLORS[o.colors[0]];return`<a class="mcard" href="pdp.html?id=${o.id}"><span class="mi"><img src="${oc.img}" alt=""></span><b>${esc(o.brand)}</b><span>${esc(o.name)}</span><p><strong>${INR(o.price)}</strong> <s>${INR(o.mrp)}</s> <em>${o.disc}% off</em></p></a>`}).join("")}</div></section>`;

/* gallery */
const gimg=$("#gimg"),gm=$("#gmain");let cur=0;
const show=i=>{cur=i;const v=VIEWS[i];gimg.style.transformOrigin=v.o;gimg.style.transform=`scale(${v.s})`;$$(".gt").forEach((b,k)=>b.setAttribute("aria-current",k===i));$$("#gdots i").forEach((d,k)=>d.classList.toggle("on",k===i))};
$$(".gt").forEach(b=>b.onclick=()=>show(+b.dataset.i));
const fine=matchMedia("(hover:hover) and (min-width:900px)");
gm.addEventListener("mousemove",e=>{if(!fine.matches)return;const r=gm.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*100,y=(e.clientY-r.top)/r.height*100;gimg.style.transformOrigin=`${x}% ${y}%`;gimg.style.transform=`scale(${VIEWS[cur].s*1.7})`});
gm.addEventListener("mouseleave",()=>show(cur));
{let x0=null;gm.addEventListener("touchstart",e=>x0=e.touches[0].clientX,{passive:true});gm.addEventListener("touchend",e=>{if(x0==null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40)show((cur+(d<0?1:VIEWS.length-1))%VIEWS.length);x0=null})}

/* sizes */
const sizeSec=$("#sizeSec"),hint=$("#shint");
$$(".psz .size").forEach(b=>b.onclick=()=>{size=b.dataset.s;$$(".psz .size").forEach(x=>x.setAttribute("aria-checked",x===b));sizeSec.classList.remove("err");
 hint.textContent=st[size]<=3?`Hurry – only ${st[size]} left in ${size}.`:`Size ${size} selected.`;hint.classList.toggle("low",st[size]<=3)});
$("#chart").onclick=()=>openSheet({title:"Size chart",html:`<table class="szt"><thead><tr><th>Size</th><th>Age</th><th>Height (cm)</th><th>Chest (cm)</th></tr></thead><tbody>${CHART.map(r=>`<tr>${r.map((x,i)=>i?`<td>${x}</td>`:`<th>${x}</th>`).join("")}</tr>`).join("")}</tbody></table><p class="hint">Between sizes? Go one size up for room to grow.</p>`});
$("#hist").onclick=()=>toast(pi.verdict);

/* add to cart: spinner → tick → image flies to cart → badge 1 → "Go to Cart" */
const addBtn=$("#addBtn"),calm=matchMedia("(prefers-reduced-motion:reduce)").matches;
const TICK='<svg class="tk" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const paint=()=>{if(Store.inBag(p.id,c)){addBtn.className="cta big bagged";addBtn.innerHTML=`<span class="lbl">Go to Cart ${sv('<path d="M5 12h14M13 6l6 6-6 6"/>',16)}</span>`;addBtn.dataset.go="1"}else{addBtn.className="cta big add";addBtn.innerHTML='<span class="lbl">Add to Cart</span>';delete addBtn.dataset.go}};
paint();document.addEventListener("store",()=>{if(!addBtn.classList.contains("busy"))paint()});
const fly=done=>{const src=gimg.getBoundingClientRect(),dst=$("#cartBtn").getBoundingClientRect();
 if(calm||!src.width){return done()}
 const f=document.createElement("img");f.src=C.img;f.className="flyimg";const w=Math.min(110,src.width*.4);Object.assign(f.style,{left:(src.left+src.width/2-w/2)+"px",top:(src.top+src.height/2-w*.65)+"px",width:w+"px",height:w*1.3+"px"});document.body.appendChild(f);
 const dx=dst.left+dst.width/2-(src.left+src.width/2),dy=dst.top+dst.height/2-(src.top+src.height/2);
 f.animate([{transform:"translate(0,0) scale(1) rotate(0)",opacity:1,offset:0},{transform:`translate(${dx*.5}px,${dy*.5-60}px) scale(.7) rotate(-8deg)`,opacity:1,offset:.55},{transform:`translate(${dx}px,${dy}px) scale(.1) rotate(10deg)`,opacity:.4,offset:1}],{duration:700,easing:"cubic-bezier(.5,0,.75,.4)"}).onfinish=()=>{f.remove();done()}};
addBtn.onclick=()=>{
 if(addBtn.dataset.go)return location.href="cart.html";
 if(addBtn.classList.contains("busy"))return;
 if(!size){sizeSec.classList.remove("err");void sizeSec.offsetWidth;sizeSec.classList.add("err");hint.textContent="Please select a size to add to cart.";hint.classList.add("low");sizeSec.scrollIntoView({block:"center",behavior:calm?"auto":"smooth"});return}
 addBtn.classList.add("busy");addBtn.innerHTML='<span class="spin" aria-hidden="true"></span><span class="lbl">Adding…</span>';
 setTimeout(()=>{addBtn.classList.add("ok");addBtn.innerHTML=TICK+'<span class="lbl">Added</span>';
  fly(()=>{Store.add(p.id,c,size);say("Added to cart, size "+size);setTimeout(()=>{addBtn.classList.remove("busy","ok");addBtn.classList.add("morph");paint();setTimeout(()=>addBtn.classList.remove("morph"),500)},380)})},calm?100:480)};

/* wishlist: heart pop + burst */
const burst=el=>{if(calm)return;const r=el.getBoundingClientRect();for(let i=0;i<8;i++){const s=document.createElement("i");s.className="spark";s.style.left=r.left+r.width/2+"px";s.style.top=r.top+r.height/2+"px";const a=i/8*Math.PI*2,d=26+Math.random()*10;document.body.appendChild(s);
 s.animate([{transform:"translate(-50%,-50%) scale(1)",opacity:1},{transform:`translate(calc(-50% + ${Math.cos(a)*d}px),calc(-50% + ${Math.sin(a)*d}px)) scale(.2)`,opacity:0}],{duration:520,easing:"ease-out"}).onfinish=()=>s.remove()}};
const wish=e=>{const on=Store.toggleWish(p.id);[$("#wishTop"),$("#wishBtn2")].forEach(b=>{b.setAttribute("aria-pressed",on);b.classList.remove("pop");void b.offsetWidth;b.classList.add("pop")});
 $("#wishBtn2 .wl").textContent=on?"Wishlisted":"Wishlist";if(on)burst($("#wishBtn2 .hi"));toast(on?"Added to your wishlist":"Removed from wishlist");say(on?"Added to wishlist":"Removed from wishlist")};
$("#wishTop").onclick=wish;$("#wishBtn2").onclick=wish;$("#wishBtn2 .wl").textContent=Store.isWish(p.id)?"Wishlisted":"Wishlist";

/* offers + pincode */
$$(".offer").forEach(b=>b.onclick=()=>{try{navigator.clipboard.writeText(b.dataset.code)}catch{}b.querySelector("em").textContent="Copied";setTimeout(()=>b.querySelector("em").textContent="Copy",1500);toast(b.dataset.code+" copied – apply it in your cart")});
const dres=$("#dres"),pinInp=$("#pinp");
const dshow=pin=>{dres.className="";dres.innerHTML=`Delivery by <b>${deliverBy(p.days,pin)}</b> to ${cityOf(pin)} ${pin}`};
dshow(Store.get().pin);
$("#pf").onsubmit=e=>{e.preventDefault();const v=pinInp.value.trim();if(!/^[1-9]\d{5}$/.test(v)){dres.className="bad";dres.textContent="Enter a valid 6-digit pincode.";return}Store.setPin(v);dshow(v)};
