/* ═══════════════════════════════════════════════════════════════
   Federal Reserve Coin ($FRSC) — edit CONFIG only, nothing else.
   ═══════════════════════════════════════════════════════════════ */
const CONFIG = {
  // Paste the BEP-20 address here at launch. Leave as-is to show "TBA".
  contract: '',

  links: {
    swap:     'https://pancakeswap.finance/',            // PancakeSwap buy link
    chart:    'https://dexscreener.com/bsc',             // DexScreener / DexTools
    telegram: 'https://t.me/',                           // Telegram group
    x:        'https://x.com/'                           // X / Twitter
  }
};

/* ── apply config ─────────────────────────────────────────────── */
(() => {
  const ca = document.getElementById('ca');
  if (CONFIG.contract) ca.textContent = CONFIG.contract;

  document.querySelectorAll('[data-link]').forEach(a => {
    const key = a.dataset.link;
    let url = CONFIG.links[key];
    // once a contract exists, deep-link chart + swap straight to the token
    if (CONFIG.contract && key === 'chart') url = `https://dexscreener.com/bsc/${CONFIG.contract}`;
    if (CONFIG.contract && key === 'swap')  url = `https://pancakeswap.finance/?outputCurrency=${CONFIG.contract}`;
    if (!url) return;
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();

/* ── copy contract ────────────────────────────────────────────── */
document.getElementById('copyCa')?.addEventListener('click', async (e) => {
  const btn = e.currentTarget;
  const text = document.querySelector(btn.dataset.copy).textContent.trim();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const t = document.createElement('textarea');
    t.value = text; document.body.appendChild(t); t.select();
    document.execCommand('copy'); t.remove();
  }
  btn.textContent = 'Copied ✓';
  btn.classList.add('ok');
  setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('ok'); }, 1800);
});

/* ── sticky nav shadow ────────────────────────────────────────── */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 12);
onScroll();
addEventListener('scroll', onScroll, { passive: true });

/* ── mobile menu ──────────────────────────────────────────────── */
const burger = document.getElementById('burger');
const links = document.querySelector('.nav__links');
const setNavH = () => document.documentElement.style.setProperty('--navh', nav.offsetHeight + 'px');
setNavH();
addEventListener('resize', setNavH);

burger?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});
links?.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

/* ── scroll reveal ────────────────────────────────────────────── */
const items = document.querySelectorAll('.reveal');
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en, i) => {
      if (!en.isIntersecting) return;
      en.target.style.transitionDelay = Math.min(i * 70, 280) + 'ms';
      en.target.classList.add('in');
      io.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(el => io.observe(el));
  // safety net: if the observer never fires (hidden tab, odd engine), show everything
  setTimeout(() => {
    if (!document.querySelector('.reveal.in')) items.forEach(el => el.classList.add('in'));
  }, 1800);
} else {
  items.forEach(el => el.classList.add('in'));
}
