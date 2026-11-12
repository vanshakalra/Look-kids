# Look – Kids (static prototype)

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Deploy
1. Create a GitHub repo and upload everything in this folder to the repo root (`index.html` must be at the top level).
2. On vercel.com choose **Add New → Project**, import the repo, leave Framework Preset as **Other**, leave Build Command and Output Directory empty, and click **Deploy**.

(Or run it locally: `npx serve .` and open the printed address.)

## Pages
- `index.html` – banner carousel + product listing, filters, sort, wishlist view
- `pdp.html?id=1…5` – product details
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

## Edit products
`common.js` → `COLORS` (images) and `PRODUCTS` (names, prices, ratings). Product photos live in `assets/`.

## Notes
Prototype data only (prices, ratings, reviews, stock, coupons). Cart, wishlist and login are stored in the browser's localStorage. Fonts load from Google Fonts, so an internet connection is needed for the intended typography.
