# Look – Kids (static prototype)

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Deploy
1. Create a GitHub repo and upload everything in this folder to the repo root (`index.html` must be at the top level).
2. On vercel.com choose **Add New → Project**, import the repo, leave Framework Preset as **Other**, leave Build Command and Output Directory empty, and click **Deploy**.

(Or run it locally: `npx serve .` and open the printed address.)

## Pages
- `index.html` – landing page: offers marquee, header with Clothing dropdown, full-width banner carousel, Season's bestsellers, Top categories, brand story, footer
- `shop.html` – product listing for every category, with filters, sort and wishlist view. Deep links: `?cat=Toys`, `?cat=Clothing&g=girls`, `?cat=Personal%20care&style=Baby%20care`, `?deal=40`, `?sort=rate`
- `pdp.html?id=1…19` – product details (clothing gets size chart + age sizes; toys, care and gifts get pack/size options)
- `cart.html` – cart, coupons, place order
- `login.html` – mobile + OTP login (demo OTP: **1234**)
- `group.html` – group bag

## Micro-interactions
- Owl logo: pupils follow the cursor, blinks, tilts on hover, squints happily when you add to cart or wishlist
- Page loader: owl with circling pupils on first visit and between pages
- Empty cart / empty wishlist / no results: owl looking around with a floating "?"
- Add to cart: spinner → tick → thumbnail flies to the cart icon → badge updates → button becomes "Go to Cart"
- Wishlist: heart pop + sparkle burst
- All motion is switched off for visitors who prefer reduced motion

## Edit content
- Products: `common.js` → `COLORS` (images) and `PRODUCTS` (names, prices, ratings, category, sizes). Product photos live in `assets/`.
- Banners: `theme.js` → `SLIDES`. Banner images are `assets/b-*.jpg`; keep them about 3:1 wide.
- Marquee text: `theme.js` → `MQ`. Header menu: `theme.js` → `DNAV` (desktop) and `TREE` (mobile menu).
- Colours: `theme.css` → `:root` (text `#2A2A2A`, CTA `#FFD83D`, logo `#2F5D8A`).

## Placeholder artwork
Several banner and product photos are reference images that show other brands' names (Ed-a-Mamma, Hamleys). Replace them with Look's own artwork before publishing.

## Notes
Prototype data only (prices, ratings, reviews, stock, coupons). Cart, wishlist and login are stored in the browser's localStorage. Fonts load from Google Fonts, so an internet connection is needed for the intended typography.
