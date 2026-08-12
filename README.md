# Federal Reserve Coin ($FRSC) — website

Static site (no build step, no dependencies). BNB Chain theme, rebuilt from the original
2014 `federalreservecoin.org` layout.

```
frsc/
├─ index.html          # the whole page
├─ styles.css          # BNB gold / near-black theme
├─ app.js              # CONFIG (links + contract), copy button, menu, scroll reveal
├─ server.mjs          # tiny local preview server (node only)
└─ assets/frsc-seal.svg
```

## Run locally

```bash
node frsc/server.mjs
```

Then open http://localhost:4321

## Before launch — edit these

**1. `app.js` → `CONFIG`** (the only file you need to touch):

```js
const CONFIG = {
  contract: '',                                  // paste the BEP-20 address → CA box + chart/swap deep links
  links: {
    swap:     'https://pancakeswap.finance/',
    chart:    'https://dexscreener.com/bsc',
    telegram: 'https://t.me/',
    x:        'https://x.com/'
  }
};
```

Once `contract` is set, the chart and buy buttons auto-point to
`dexscreener.com/bsc/<CA>` and `pancakeswap.finance/?outputCurrency=<CA>`.

**2. Supply numbers** — `index.html`, the Tokenomics section (`1,000,000,000` and the
90 / 5 / 5 legend). If you change the split, update the ring in `styles.css`:
circumference is `477.5`, so `x%` → `stroke-dasharray: 477.5*x/100 477.5` with each
following ring offset by the sum of the previous ones.

**3. Logo** — `assets/frsc-seal.png` is the official Federal Reserve seal, background
removed (transparent), 720x720. To swap it, keep the same filename or update the 5
references in `index.html` (og:image, favicon, nav, hero, footer).

## Deploy

Any static host — drag the `frsc/` folder into Netlify/Vercel/Cloudflare Pages, or push it
to a GitHub repo and turn on Pages. `server.mjs` is only for local preview and can be left
out of the upload.

## Content notes

- The lore section links to the public Bitcointalk sources (launch thread, `btcpay86`
  post history, the blockchain.info reply) and to the Wayback capture of the original site.
- The claims are framed as community research, and the footer carries an explicit
  no-affiliation + not-financial-advice disclaimer — keep it there.
