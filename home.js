/* Look – landing page v3: marquee + header (theme.js), banner, bestsellers, top categories, brand story, footer */
renderHeader({page:"home"});
const heart=`<svg width="18" height="17" viewBox="0 0 24 22" aria-hidden="true"><path d="M12 20s-9-5.5-9-12.2A5 5 0 0112 5a5 5 0 019 2.8C21 14.5 12 20 12 20z"/></svg>`;
const img=p=>COLORS[p.colors[0]].img;
const tile=p=>{const w=Store.isWish(p.id);return`<article class="xt" data-id="${p.id}">
 <a class="xm" href="pdp.html?id=${p.id}" aria-label="${esc(p.name)}"><img src="${img(p)}" alt="" loading="lazy"><em class="xd">${p.disc}% OFF</em><span class="xr">${ICON.star}${p.rating.toFixed(1)}<i></i>${fmtK(p.reviews)}</span></a>
 <button class="heart xw" type="button" aria-pressed="${w}" aria-label="${w?"Remove from":"Add to"} wishlist: ${esc(p.name)}" data-w="${p.id}"><span>${heart}</span></button>
 <a class="xi" href="pdp.html?id=${p.id}"><small>${esc(p.brand)}</small><b>${esc(p.name)}</b><span class="xp"><strong>${INR(p.price)}</strong><s>${INR(p.mrp)}</s></span></a></article>`};
const best=[...PRODUCTS].sort((a,b)=>b.reviews*b.rating-a.reviews*a.rating).slice(0,10);
const TOP=[["Dresses","assets/k4.jpg","shop.html?cat=Clothing&style=Dresses","#ffe3ec",""],["Shorts & sets","assets/k2.jpg","shop.html?cat=Clothing&style=Polo%20sets","#fff0a8",""],["Dungarees","assets/k3.jpg","shop.html?cat=Clothing&style=Dungarees","#dcecfb",""],["Denim sets","assets/k5.jpg","shop.html?cat=Clothing&style=Denim%20sets","#e6ddff",""],["Toys & games","assets/ph-fruit.jpg","shop.html?cat=Toys","#f3f1ed",""],["Soft toys","assets/ph-bunny.jpg","shop.html?cat=Toys&style=Soft%20toys","#f3f1ed",""],["Bath & body","assets/ph-wash.jpg","shop.html?cat=Personal%20care","#f3f1ed",""],["Baby care","assets/ph-balm.jpg","shop.html?cat=Personal%20care&style=Baby%20care","#f3f1ed",""],["Bags","assets/ph-elephantbag.jpg","shop.html?cat=Accessories&style=Bags","#f3f1ed",""],["Caps","assets/ph-frogcap.jpg","shop.html?cat=Accessories&style=Caps","#f3f1ed",""]];
const arrows=`<button class="car-arr p" type="button" aria-label="Previous">‹</button><button class="car-arr n" type="button" aria-label="Next">›</button>`;
const svi=(d,s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
document.getElementById("main").innerHTML=`
<section class="hc hsec" aria-labelledby="hs"><div class="sec-h"><div><h2 id="hs">Season's bestsellers</h2><p>The pieces everyone's picking this season</p></div><a class="seeall" href="shop.html?sort=rate">See all</a></div>
 <div class="car"><div class="hrow" tabindex="0" aria-label="Season's bestsellers">${best.map(tile).join("")}</div>${arrows}</div></section>
<section class="hc hsec" aria-labelledby="hcat"><div class="sec-h"><div><h2 id="hcat">Top categories</h2><p>Dresses, shorts, toys, bath time and more</p></div><a class="seeall" href="shop.html">View all</a></div>
 <div class="car"><div class="crow" tabindex="0" aria-label="Top categories">${TOP.map(([l,i,h,bg,pad])=>`<a class="cc" href="${h}" style="--bg:${bg}"><span class="cim ${pad}"><img src="${i}" alt="" loading="lazy"></span><b>${l}</b><span>Shop now ›</span></a>`).join("")}</div>${arrows}</div></section>
<section class="hc"><div class="story"><div><small>ABOUT LOOK</small><h2>Beautifully, thoughtfully curated for little ones</h2><p>Look brings together everyday clothes, toys, bath-time essentials and gifts that are gentle on kids and kind on parents. Every piece is picked for comfort, safety and the kind of colour that makes a day brighter.</p><a class="seeall" href="shop.html">Start exploring</a></div>
 <ul><li><i>${svi('<path d="M12 21s-8-4.5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 6.5-8 11-8 11z"/>')}</i><div><b>Soft on skin</b><span>Natural, breathable fabrics and plant-based care.</span></div></li>
 <li><i>${svi('<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>')}</i><div><b>Child-safe, always</b><span>Non-toxic paints and tested toys for every age.</span></div></li>
 <li><i>${svi('<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 8v12M3 13h18M8 8a2.5 2.5 0 110-5c2 0 4 2 4 5M16 8a2.5 2.5 0 100-5c-2 0-4 2-4 5"/>')}</i><div><b>Made for gifting</b><span>Ready-to-give boxes for birthdays and festivals.</span></div></li></ul></div></section>
<footer class="hf"><div class="hc"><div class="hfg">
 <div class="hfb"><img src="assets/look-logo.svg" alt="Look" height="34"><p>Fashion, toys, gifts and care for little ones. Thoughtfully picked, joyfully delivered.</p></div>
 <div><h3>Shop</h3><a href="shop.html?cat=Clothing&g=boys">Boys</a><a href="shop.html?cat=Clothing&g=girls">Girls</a><a href="shop.html?cat=Toys">Toys</a><a href="shop.html?cat=Personal%20care">Personal care</a><a href="shop.html?cat=Accessories">Accessories</a><a href="shop.html?deal=40">Sale</a></div>
 <div><h3>Help</h3><a href="#">Track order</a><a href="#">Returns &amp; exchange</a><a href="#">Shipping</a><a href="#">Contact us</a></div>
 <div><h3>Company</h3><a href="group.html">Family bag</a><a href="#">About Look</a><a href="#">Terms</a><a href="#">Privacy</a></div></div>
 <p class="hfc">© 2026 Look. Demo store · prices and products are samples.</p></div></footer>`;
/* carousel arrows */
document.querySelectorAll(".car").forEach(c=>{const r=c.querySelector(".hrow,.crow");const step=()=>r.clientWidth*.8;c.querySelector(".p").onclick=()=>r.scrollBy({left:-step()});c.querySelector(".n").onclick=()=>r.scrollBy({left:step()})});
/* wishlist hearts */
document.addEventListener("click",e=>{const b=e.target.closest(".xw");if(!b)return;const on=Store.toggleWish(b.dataset.w);document.querySelectorAll(`.xw[data-w="${b.dataset.w}"]`).forEach(x=>{x.setAttribute("aria-pressed",on);x.classList.remove("pop");void x.offsetWidth;x.classList.add("pop")});toast(on?"Added to your wishlist":"Removed from wishlist");say(on?"Added to wishlist":"Removed from wishlist")});
addEventListener("load",()=>{const o=document.querySelector(".storyo");if(o&&typeof EYES!=="undefined")o.innerHTML=EYES("follow")});
