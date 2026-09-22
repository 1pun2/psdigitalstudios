/* PS Digital Studios – site engine. Content lives in data.js; you rarely need to edit this file. */
(function () {
  'use strict';
  const S = window.SITE;
  if (!S) { console.error('data.js did not load'); return; }

  const page = document.body.getAttribute('data-page') || 'home';
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const nl2br = (v) => esc(v).replace(/\n/g, '<br>');
  const waLink = (msg) => 'https://wa.me/' + S.contact.whatsappNumber + '?text=' + encodeURIComponent(msg || S.contact.whatsappMessage);

  /* ---------- Icons ---------- */
  const PATHS = {
    whatsapp: '<path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z"/><path d="M9 8.5c0 3.3 2.7 6 6 6l1.2-1.3-2-1-.9.7c-.9-.4-1.6-1.1-2-2l.7-.9-1-2L9 8.5z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
    monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M7 17L17 7M8 7h9v9"/>',
    star: '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z"/>',
    send: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    check: '<path d="M5 12l5 5 9-10"/>'
  };
  const icon = (name, extra) => '<svg class="ic ' + (extra || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (PATHS[name] || '') + '</svg>';

  /* ---------- Logo (inline so the colour follows the background) ---------- */
  const logo = (pColor) => '<svg class="logo" viewBox="0 0 104 68" aria-hidden="true"><path d="M12 60V8h20a15 15 0 0 1 0 30H12" fill="none" stroke="' + (pColor || '#fff') + '" stroke-width="11"/><path transform="translate(4 0)" d="M92 24C92 10 58 10 58 27c0 15 34 9 34 25 0 13-36 11-36 0" fill="none" stroke="#7375f6" stroke-width="10"/></svg>';

  /* ---------- Header & footer ---------- */
  const NAV = [
    ['home', 'index.html', 'Home'], ['services', 'services.html', 'Services'], ['plans', 'plans.html', 'Plans'], ['portfolio', 'portfolio.html', 'Portfolio'],
    ['reviews', 'reviews.html', 'Reviews'], ['about', 'about.html', 'About'], ['contact', 'contact.html', 'Contact'], ['chat', 'chat.html', 'Chat']
  ];

  function renderHeader() {
    const el = $('#site-header');
    if (!el) return;
    const links = NAV.map((n) => '<a href="' + n[1] + '"' + (n[0] === page ? ' aria-current="page"' : '') + '>' + n[2] + '</a>').join('');
    el.innerHTML =
      '<div class="wrap nav">' +
        '<a class="brand" href="index.html" aria-label="' + esc(S.brand.name) + ' home">' + logo('#fff') + '<span>' + esc(S.brand.name) + '</span></a>' +
        '<nav class="nav-links" id="nav-links" aria-label="Main">' + links + '</nav>' +
        '<div class="nav-actions">' +
          '<a class="btn btn-outline-light btn-sm nav-wa" href="' + waLink() + '" target="_blank" rel="noopener"><span class="wa-ic">' + icon('whatsapp') + '</span>Chat on WhatsApp</a>' +
          '<a class="icon-btn" href="' + esc(S.contact.instagramUrl) + '" target="_blank" rel="noopener" aria-label="Instagram">' + icon('instagram') + '</a>' +
          '<button class="icon-btn menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">' + icon('menu') + '</button>' +
        '</div>' +
      '</div>';
    const btn = $('.menu-btn', el), nav = $('#nav-links', el);
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.innerHTML = icon(open ? 'close' : 'menu');
    });
  }

  function renderFooter() {
    const el = $('#site-footer');
    if (!el) return;
    const c = S.contact;
    el.innerHTML =
      '<div class="wrap foot-grid">' +
        '<div class="foot-brand"><a class="brand" href="index.html">' + logo('#fff') + '<span>' + esc(S.brand.name) + '</span></a><p>' + esc(S.brand.tagline) + '</p></div>' +
        '<div><h3>Quick links</h3><ul class="foot-links">' + NAV.map((n) => '<li><a href="' + n[1] + '">' + n[2] + '</a></li>').join('') + '</ul></div>' +
        '<div><h3>Contact</h3><ul class="foot-contact">' +
          '<li>' + icon('whatsapp') + '<a href="' + waLink() + '" target="_blank" rel="noopener">' + esc(c.whatsappDisplay) + '</a></li>' +
          '<li>' + icon('instagram') + '<a href="' + esc(c.instagramUrl) + '" target="_blank" rel="noopener">' + esc(c.instagramHandle) + '</a></li>' +
          (c.email ? '<li>' + icon('mail') + '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a></li>' : '') +
        '</ul></div>' +
        '<div><h3>Let\'s work together</h3><p class="foot-note">Have a project in mind? Reach out and let\'s bring your vision to life.</p><a class="btn btn-outline-light btn-sm" href="' + waLink() + '" target="_blank" rel="noopener"><span class="wa-ic">' + icon('whatsapp') + '</span>Chat on WhatsApp</a></div>' +
      '</div>' +
      '<div class="foot-bar"><div class="wrap"><span>© ' + new Date().getFullYear() + ' ' + esc(S.brand.name) + '. All rights reserved.</span><span>Website by ' + esc(S.brand.name) + '</span></div></div>';
  }

  /* ---------- Website preview pictures (laptop / phone) ---------- */
  function screen(p) {
    const t = p.theme || {};
    const style = '--bg:' + esc(t.bg || '#222') + ';--fg:' + esc(t.fg || '#fff') + ';--ac:' + esc(t.accent || '#6366f1') + ';--onac:' + esc(t.onAccent || '#fff');
    return '<div class="scr" style="' + style + '"><div class="scr-nav"><b>' + esc(p.name) + '</b><span></span><span></span><span></span></div>' +
      '<div class="scr-body"><h4>' + esc(p.headline || p.name) + '</h4><span class="scr-btn">' + esc(p.button || 'Learn more') + '</span></div><div class="scr-art"></div></div>';
  }
  function laptop(p) {
    const inner = p.image ? '<img class="shot" src="' + esc(p.image) + '" alt="' + esc(p.name) + ' website screenshot" loading="lazy">' : screen(p);
    return '<div class="laptop"><div class="lid">' + inner + '</div><div class="base"></div></div>';
  }

  /* ---------- Content blocks ---------- */
  function projectCard(p) {
    const link = p.url
      ? '<a class="live" href="' + esc(p.url) + '" target="_blank" rel="noopener">View live ' + icon('external') + '</a>'
      : '<span class="live soon">Live link coming soon</span>';
    return '<article class="proj"><div class="thumb">' + laptop(p) + '</div><h3>' + esc(p.name) + '</h3><p class="cat">' + esc(p.category) + '</p>' +
      (p.description ? '<p class="desc">' + esc(p.description) + '</p>' : '') + link + '</article>';
  }
  function stars(n) {
    let out = '';
    for (let i = 1; i <= 5; i++) out += '<span class="' + (i <= n ? 'on' : 'off') + '">' + icon('star') + '</span>';
    return '<span class="stars" role="img" aria-label="' + n + ' out of 5 stars">' + out + '</span>';
  }

  const R = {
    'hero-copy': (el) => {
      const h = S.hero;
      el.innerHTML = '<p class="eyebrow">' + esc(h.eyebrow) + '</p><h1>' + esc(h.title1) + '<br><span class="acc">' + esc(h.accent) + '</span> ' + esc(h.title2) + '</h1><p class="hero-text">' + esc(h.text) + '</p>' +
        '<div class="btn-row"><a class="btn btn-primary" href="portfolio.html">View Our Work ' + icon('arrow') + '</a><a class="btn btn-ghost" href="contact.html">Get in Touch</a></div>';
    },
    'hero-visual': (el) => {
      const p = S.projects[S.hero.showcaseProject] || S.projects[0];
      if (!p) return;
      el.innerHTML = laptop(p) + '<div class="phone"><div class="phone-in">' + screen(p) + '</div></div><p class="hero-note">Website by ' + esc(S.brand.name) + '</p>';
    },
    'services-cards': (el) => {
      el.innerHTML = S.services.map((s) => '<article class="card svc"><span class="ico">' + icon(s.icon) + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.short) + '</p></article>').join('');
    },
    'services-full': (el) => {
      el.innerHTML = S.services.map((s) =>
        '<article class="card svc-full"><span class="ico">' + icon(s.icon) + '</span><div><h3>' + esc(s.title) + '</h3><p>' + esc(s.short) + '</p>' +
        '<ul class="ticks">' + (s.includes || []).map((i) => '<li>' + icon('check') + esc(i) + '</li>').join('') + '</ul>' +
        '<a class="btn btn-line btn-sm" href="' + waLink('Hi PS Digital Studios, I\'m interested in: ' + s.title) + '" target="_blank" rel="noopener">Ask about this</a></div></article>').join('');
    },
    'projects-home': (el) => { el.innerHTML = S.projects.slice(0, 5).map(projectCard).join(''); },
    'projects-all': (el) => {
      const cats = ['All'].concat(Array.from(new Set(S.projects.map((p) => p.category))));
      const bar = $('#filters');
      const draw = (cat) => {
        const list = cat === 'All' ? S.projects : S.projects.filter((p) => p.category === cat);
        el.innerHTML = list.length ? list.map(projectCard).join('') : '<p class="empty">No projects here yet.</p>';
      };
      if (bar) {
        bar.innerHTML = cats.map((c, i) => '<button type="button" class="chip' + (i === 0 ? ' active' : '') + '" data-cat="' + esc(c) + '" aria-pressed="' + (i === 0) + '">' + esc(c) + '</button>').join('');
        bar.addEventListener('click', (e) => {
          const b = e.target.closest('.chip'); if (!b) return;
          $$('.chip', bar).forEach((x) => { x.classList.toggle('active', x === b); x.setAttribute('aria-pressed', x === b); });
          draw(b.getAttribute('data-cat'));
        });
      }
      draw('All');
    },
    'reviews-list': (el) => {
      const items = (S.reviews && S.reviews.items) || [];
      if (!items.length) {
        el.innerHTML = '<div class="empty-card"><h3>No reviews yet</h3><p>Worked with us? Be the first to share your experience using the form.</p></div>';
        return;
      }
      const avg = items.reduce((a, r) => a + (Number(r.rating) || 0), 0) / items.length;
      el.innerHTML = '<div class="rev-sum">' + stars(Math.round(avg)) + '<strong>' + avg.toFixed(1) + '</strong><span>from ' + items.length + ' review' + (items.length > 1 ? 's' : '') + '</span></div>' +
        '<div class="rev-grid">' + items.map((r) =>
          '<figure class="card rev">' + stars(Number(r.rating) || 5) + '<blockquote>' + nl2br(r.text) + '</blockquote><figcaption><strong>' + esc(r.name) + '</strong>' +
          (r.business ? '<span>' + esc(r.business) + '</span>' : '') + (r.date ? '<span>' + esc(r.date) + '</span>' : '') + '</figcaption></figure>').join('') + '</div>';
    },
    'plans': (el) => {
      const pl = S.plans;
      el.innerHTML = pl.items.map((p) =>
        '<article class="card plan' + (p.featured ? ' featured' : '') + '">' +
          (p.badge ? '<span class="badge">' + esc(p.badge) + '</span>' : '') +
          '<h2>' + esc(p.name) + '</h2><p class="plan-tag">' + esc(p.tagline) + '</p>' +
          '<div class="price"><strong>' + esc(p.price) + '</strong><span>' + esc(p.priceNote) + '</span></div>' +
          '<ul class="ticks">' + p.features.map((f) => '<li>' + icon('check') + esc(f) + '</li>').join('') + '</ul>' +
          '<div class="maint"><span>Monthly maintenance and checks</span><strong>' + esc(p.maintenance) + ' <small>' + esc(p.maintenanceNote) + '</small></strong></div>' +
          '<a class="btn ' + (p.featured ? 'btn-primary' : 'btn-line') + '" href="' + waLink("Hi PS Digital Studios, I'm interested in the " + p.name + ' plan (' + p.price + ').') + '" target="_blank" rel="noopener">Choose this plan</a>' +
        '</article>').join('');
    },
    'plans-note': (el) => {
      const pl = S.plans;
      el.innerHTML = '<div class="card"><h3>' + esc(pl.maintenanceTitle) + '</h3><p>' + esc(pl.maintenanceText) + '</p></div>' +
        '<p class="plans-foot">' + esc(pl.note) + ' <a href="' + waLink() + '" target="_blank" rel="noopener">Message us on WhatsApp</a></p>';
    },
    'founder': (el) => {
      const f = S.founder;
      if (!f || !f.name) { el.hidden = true; return; }
      const photo = f.photo ? '<div class="founder-photo"><img src="' + esc(f.photo) + '" alt="Photo of ' + esc(f.name) + '" loading="lazy"></div>' : '';
      const more = (f.moreBio || []).map((p) => '<p>' + esc(p) + '</p>').join('');
      el.innerHTML =
        '<div class="founder-card">' + photo +
        '<div class="founder-body">' +
          '<h2>' + esc(f.name) + '</h2>' +
          (f.role ? '<p class="founder-role">' + esc(f.role) + '</p>' : '') +
          '<hr>' +
          '<p class="founder-bio">' + esc(f.shortBio) + '</p>' +
          (more ? '<div class="founder-more" hidden>' + more + '</div><button type="button" class="btn btn-line btn-sm founder-toggle">Show bio</button>' : '') +
          (f.quote ? '<p class="founder-quote">' + esc(f.quote) + '</p>' : '') +
        '</div></div>';
      const btn = $('.founder-toggle', el), more_ = $('.founder-more', el);
      if (btn) {
        btn.addEventListener('click', () => {
          const open = more_.hidden;
          more_.hidden = !open;
          btn.textContent = open ? 'Hide bio' : 'Show bio';
          btn.setAttribute('aria-expanded', open);
        });
        btn.setAttribute('aria-expanded', 'false');
      }
    },
    'about-text': (el) => {
      el.innerHTML = '<h2>' + esc(S.about.title) + '</h2>' + S.about.paragraphs.map((t) => '<p>' + esc(t) + '</p>').join('');
    },
    'about-points': (el) => {
      el.innerHTML = '<ul class="ticks big">' + S.about.points.map((t) => '<li>' + icon('check') + esc(t) + '</li>').join('') + '</ul>';
    },
    'process': (el) => {
      el.innerHTML = S.process.map((s, i) => '<li class="step"><span class="num">' + (i + 1) + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></li>').join('');
    },
    'contact-cards': (el) => {
      const c = S.contact;
      el.innerHTML =
        '<a class="card contact-card" href="' + waLink() + '" target="_blank" rel="noopener"><span class="ico wa">' + icon('whatsapp') + '</span><div><h3>WhatsApp</h3><p>' + esc(c.whatsappDisplay) + '</p><span class="live">Chat now ' + icon('external') + '</span></div></a>' +
        '<a class="card contact-card" href="' + esc(c.instagramUrl) + '" target="_blank" rel="noopener"><span class="ico">' + icon('instagram') + '</span><div><h3>Instagram</h3><p>' + esc(c.instagramHandle) + '</p><span class="live">Follow us ' + icon('external') + '</span></div></a>' +
        (c.email ? '<a class="card contact-card" href="mailto:' + esc(c.email) + '"><span class="ico">' + icon('mail') + '</span><div><h3>Email</h3><p>' + esc(c.email) + '</p><span class="live">Send an email ' + icon('external') + '</span></div></a>' : '');
    },
    'cta': (el) => {
      el.innerHTML = '<div class="cta"><span class="cta-ic">' + icon('send') + '</span><div class="cta-text"><h2>' + esc(S.cta.title) + '</h2><p>' + esc(S.cta.text) + '</p></div>' +
        '<div class="cta-btns"><a class="btn btn-wa" href="' + waLink() + '" target="_blank" rel="noopener">' + icon('whatsapp') + 'Chat on WhatsApp</a>' +
        '<a class="btn btn-outline-light" href="' + esc(S.contact.instagramUrl) + '" target="_blank" rel="noopener">' + icon('instagram') + 'Follow on Instagram</a></div></div>';
    },
    'chat': (el) => mountChat(el)
  };

  /* ---------- Chat assistant (works offline from data.js, no server needed) ---------- */
  function resolveHref(h) {
    if (h === '@whatsapp') return { href: waLink(), ext: true };
    if (h === '@instagram') return { href: S.contact.instagramUrl, ext: true };
    return { href: h, ext: /^https?:/.test(h) };
  }
  const norm = (s) => ' ' + s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim() + ' ';

  function answerFor(q) {
    const text = norm(q);
    let best = null, bestScore = 0;
    S.chatbot.answers.forEach((a) => {
      let score = 0;
      a.keywords.forEach((k) => {
        const kw = ' ' + k.toLowerCase() + ' ';
        const hit = k.length <= 3 ? text.indexOf(kw) !== -1 : text.indexOf(' ' + k.toLowerCase()) !== -1;
        if (hit) score += k.split(' ').length;
      });
      if (score > bestScore) { bestScore = score; best = a; }
    });
    return best ? { reply: best.reply, actions: best.actions } : { reply: S.chatbot.fallback, actions: S.chatbot.fallbackActions };
  }

  function mountChat(root) {
    if (root.dataset.ready) return;
    root.dataset.ready = '1';
    root.classList.add('chat-box');
    root.innerHTML = '<div class="chat-log" role="log" aria-live="polite" tabindex="0"></div><div class="chat-chips"></div>' +
      '<form class="chat-form"><input type="text" aria-label="Type your question" placeholder="Type your question…" autocomplete="off" maxlength="200"><button class="btn btn-primary" type="submit" aria-label="Send message">' + icon('send') + '</button></form>';
    const log = $('.chat-log', root), chips = $('.chat-chips', root), form = $('.chat-form', root), input = $('input', form);

    const scroll = () => { log.scrollTop = log.scrollHeight; };
    function add(who, text, actions) {
      const m = document.createElement('div');
      m.className = 'msg ' + who;
      m.innerHTML = '<span>' + nl2br(text) + '</span>' + (actions && actions.length
        ? '<div class="acts">' + actions.map((a) => { const r = resolveHref(a.href); return '<a class="btn btn-line btn-sm" href="' + esc(r.href) + '"' + (r.ext ? ' target="_blank" rel="noopener"' : '') + '>' + esc(a.label) + '</a>'; }).join('') + '</div>' : '');
      log.appendChild(m); scroll();
    }
    function ask(q) {
      q = q.trim(); if (!q) return;
      chips.hidden = true;
      add('me', q);
      const typing = document.createElement('div');
      typing.className = 'msg bot typing'; typing.innerHTML = '<i></i><i></i><i></i>'; typing.setAttribute('aria-label', 'Assistant is typing');
      log.appendChild(typing); scroll();
      setTimeout(() => { typing.remove(); const a = answerFor(q); add('bot', a.reply, a.actions); }, 550);
    }
    add('bot', S.chatbot.greeting);
    chips.innerHTML = S.chatbot.suggestions.map((s) => '<button type="button" class="chip">' + esc(s) + '</button>').join('');
    chips.addEventListener('click', (e) => { const b = e.target.closest('.chip'); if (b) ask(b.textContent); });
    form.addEventListener('submit', (e) => { e.preventDefault(); ask(input.value); input.value = ''; input.focus(); });
  }

  function renderWidget() {
    if (page === 'chat') return;
    const w = document.createElement('div');
    w.className = 'cw';
    w.innerHTML = '<button class="cw-fab" type="button" aria-expanded="false" aria-controls="cw-panel">' + icon('chat') + '<span>Ask us</span></button>' +
      '<section class="cw-panel" id="cw-panel" aria-label="Chat assistant" hidden><header><strong>' + esc(S.chatbot.name) + '</strong><button type="button" class="cw-close" aria-label="Close chat">' + icon('close') + '</button></header><div class="cw-body"></div></section>';
    document.body.appendChild(w);
    const fab = $('.cw-fab', w), panel = $('.cw-panel', w), body = $('.cw-body', w);
    const toggle = (open) => {
      panel.hidden = !open; fab.setAttribute('aria-expanded', open);
      if (open) { mountChat(body); const i = $('input', body); if (i) i.focus(); }
    };
    fab.addEventListener('click', () => toggle(panel.hidden));
    $('.cw-close', w).addEventListener('click', () => { toggle(false); fab.focus(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) { toggle(false); fab.focus(); } });
  }

  /* ---------- Review form ---------- */
  function setupReviewForm() {
    const form = $('#review-form');
    if (!form) return;
    const status = $('#review-status');
    const submit = $('button[type=submit]', form);
    const say = (html, kind) => { status.className = 'form-status ' + kind; status.innerHTML = html; status.focus(); };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form).entries());
      if (d._gotcha) return;                                   // spam trap
      if (!d.rating) { say('Please choose a star rating.', 'err'); return; }
      const summary = 'New review for ' + S.brand.name + '\nRating: ' + d.rating + '/5\nName: ' + d.name + '\nBusiness: ' + (d.business || '-') + '\n\n' + d.message;
      const ep = S.reviews && S.reviews.formEndpoint;
      submit.disabled = true;
      if (ep) {
        try {
          const res = await fetch(ep, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ name: d.name, business: d.business, rating: d.rating, message: d.message }) });
          if (!res.ok) throw new Error('bad status');
          form.reset();
          say('<strong>Thank you!</strong> Your review has been sent. It will appear on this page once we have approved it.', 'ok');
        } catch (err) {
          say('Sorry, your review could not be sent. <a href="' + waLink(summary) + '" target="_blank" rel="noopener">Send it on WhatsApp instead</a>.', 'err');
        }
      } else {
        window.open(waLink(summary), '_blank', 'noopener');
        say('<strong>Almost done!</strong> WhatsApp opened with your review typed in. Press send there to deliver it.', 'ok');
      }
      submit.disabled = false;
    });
  }

  /* ---------- Contact form → WhatsApp ---------- */
  function setupContactForm() {
    const form = $('#contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form).entries());
      const msg = 'Hi PS Digital Studios,\nMy name is ' + d.name + (d.business ? ' from ' + d.business : '') + '.\n\n' + d.message;
      window.open(waLink(msg), '_blank', 'noopener');
    });
  }

  /* ---------- Boot ---------- */
  renderHeader();
  renderFooter();
  $$('[data-render]').forEach((el) => { const fn = R[el.getAttribute('data-render')]; if (fn) fn(el); });
  $$('[data-icon-after]').forEach((el) => { el.insertAdjacentHTML('beforeend', ' ' + icon(el.getAttribute('data-icon-after'))); });
  $$('[data-wa]').forEach((el) => { el.href = waLink(); el.target = '_blank'; el.rel = 'noopener'; });
  setupReviewForm();
  setupContactForm();
  renderWidget();
})();
