# Federal Reserve Coin ($FRSC) — Historical Case File

Static site, no build step, no dependencies. Institutional research-portal design
(off-white / olive / gold), deployed as a Render Static Site.

```
index.html                  # the whole page
css/styles.css              # institutional design system
js/main.js                  # copy-contract button + nav scrollspy
assets/seal.png             # seal used on the page
assets/seal-original.png    # untouched source of the seal
archive/v1-current/         # earlier version, reachable at /archive/v1-current/
server.mjs                  # local preview only (not needed on Render)
```

## Run locally

```bash
node frsc/server.mjs
```

Then open http://localhost:4321

## Before launch — what to edit

**Contract address** — `index.html`, the contract box (search for `contract-address`).
Two spots, same value:

```html
<code id="contract-address">0xYourAddress</code>
<button ... id="copy-contract" data-copy="0xYourAddress">Copy</button>
```

**Social / trading links** — `index.html`, search for `t.me` and `x.com` in the topbar
and footer, plus any PancakeSwap / DexScreener links you want to add.

## Deploy (Render)

Already wired to GitHub: `nyanmusk9-ops/frsc-site`, branch `main`.

- Render → **Static Site** → repo `frsc-site`
- Build Command: *(empty)*
- Publish Directory: `.`

To update the live site:

```bash
cd "C:\Users\usuario\Desktop\BUNDLE\frsc"; git add -A; git commit -m "update"; git push
```

Render redeploys automatically in ~30 s.

## Content notes

- Claims about btcpay86 / CZ are framed as community research and link to the public
  Bitcointalk sources; the footer carries the no-affiliation + DYOR disclaimer. Keep it.
