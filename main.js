/* ═══════════════════════════════════════════════════════════════
   Federal Reserve Coin — Research Portal
   Edit CONFIG only. Everything below it is wiring.
   ═══════════════════════════════════════════════════════════════ */
const CONFIG = {
  contract: '',                                  // BEP-20 address; empty = "TBA"
  links: {
    swap:     'https://pancakeswap.finance/',
    chart:    'https://dexscreener.com/bsc',
    telegram: 'https://t.me/',
    x:        'https://x.com/'
  }
};

/* ── config: contract + outbound links ────────────────────────── */
(() => {
  if (CONFIG.contract) {
    document.querySelectorAll('#contract-address').forEach(el => el.textContent = CONFIG.contract);
    document.querySelectorAll('.quick-facts tr').forEach(tr => {
      if (tr.querySelector('th')?.textContent.trim() === 'Contract') {
        tr.querySelector('td').textContent = CONFIG.contract.slice(0, 6) + '…' + CONFIG.contract.slice(-4);
      }
    });
  }
  document.querySelectorAll('[data-link]').forEach(a => {
    const key = a.dataset.link;
    let url = CONFIG.links[key];
    if (CONFIG.contract && key === 'chart') url = `https://dexscreener.com/bsc/${CONFIG.contract}`;
    if (CONFIG.contract && key === 'swap')  url = `https://pancakeswap.finance/?outputCurrency=${CONFIG.contract}`;
    if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; }
  });
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

/* ── copy contract ────────────────────────────────────────────── */
document.getElementById('copy-contract')?.addEventListener('click', async (e) => {
  const btn = e.currentTarget;
  const text = document.getElementById('contract-address').textContent.trim();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const t = document.createElement('textarea');
    t.value = text; document.body.appendChild(t); t.select();
    document.execCommand('copy'); t.remove();
  }
  const label = btn.textContent;
  btn.textContent = 'Copied';
  btn.classList.add('ok');
  setTimeout(() => { btn.textContent = label; btn.classList.remove('ok'); }, 1800);
});

/* ── scrollspy: primary nav + "On this page" ──────────────────── */
(() => {
  const sections = [...document.querySelectorAll('main section[id], main[id]')];
  const links = [...document.querySelectorAll('.main-nav a[href^="#"], .side-nav-list a[href^="#"]')];
  if (!sections.length || !links.length) return;

  const mark = (id) => links.forEach(a => a.classList.toggle('is-active', a.hash === '#' + id));

  const pick = () => {
    const probe = window.scrollY + 140;
    let current = sections[0].id;
    for (const s of sections) if (s.offsetTop <= probe) current = s.id;
    if (window.scrollY < 60) current = 'home';
    mark(current);
  };

  let queued = false;
  addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { pick(); queued = false; });
  }, { passive: true });
  pick();
})();

/* ── site search: highlight matches, dim the rest ─────────────── */
(() => {
  const form = document.querySelector('.header-search');
  const input = document.getElementById('q');
  const status = document.getElementById('search-status');
  if (!form || !input) return;

  const sections = [...document.querySelectorAll('main .section')];

  const clear = () => {
    document.querySelectorAll('mark.hit').forEach(m => {
      const t = document.createTextNode(m.textContent);
      m.replaceWith(t);
      t.parentNode?.normalize();
    });
    sections.forEach(s => s.classList.remove('dimmed'));
    if (status) status.textContent = '';
  };

  const highlight = (root, needle) => {
    let hits = 0;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const tag = n.parentElement?.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'MARK') return NodeFilter.FILTER_REJECT;
        return n.nodeValue.toLowerCase().includes(needle) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const targets = [];
    while (walker.nextNode()) targets.push(walker.currentNode);
    for (const node of targets) {
      const frag = document.createDocumentFragment();
      let rest = node.nodeValue, i;
      while ((i = rest.toLowerCase().indexOf(needle)) !== -1) {
        if (i) frag.appendChild(document.createTextNode(rest.slice(0, i)));
        const m = document.createElement('mark');
        m.className = 'hit';
        m.textContent = rest.slice(i, i + needle.length);
        frag.appendChild(m);
        rest = rest.slice(i + needle.length);
        hits++;
      }
      if (rest) frag.appendChild(document.createTextNode(rest));
      node.replaceWith(frag);
    }
    return hits;
  };

  const run = () => {
    clear();
    const needle = input.value.trim().toLowerCase();
    if (needle.length < 2) return;

    let total = 0, first = null;
    for (const s of sections) {
      const hits = highlight(s, needle);
      total += hits;
      if (hits) { if (!first) first = s; } else { s.classList.add('dimmed'); }
    }

    if (status) {
      status.textContent = total
        ? `${total} match${total > 1 ? 'es' : ''} in the archive`
        : 'No match in the archive';
    }
    if (first) first.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  form.addEventListener('submit', (e) => { e.preventDefault(); run(); });
  input.addEventListener('input', () => { if (!input.value.trim()) clear(); });
  input.addEventListener('keydown', (e) => { if (e.key === 'Escape') { input.value = ''; clear(); } });
})();
