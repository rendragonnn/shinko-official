/* ===================================
   SHINKO OFFICIAL — Interactions & Cart
   =================================== */

/* ---------- Product Data Store ---------- */
const PRODUCTS = [
  {
    id: 'shadow-hoodie',
    name: 'SHADOW HOODIE',
    price: 1250000,
    priceDisplay: 'IDR 1.250.000',
    image: 'images/product-hoodie.png',
    category: 'Tops',
    sku: 'SNK-HD-001',
    material: '100% Premium Cotton Fleece',
    isNew: true,
    desc: 'The Shadow Hoodie defines the SHINKO silhouette — oversized, heavy-weight, and built for the streets. Features a relaxed drop-shoulder cut, ribbed cuffs, and tonal embroidered branding.'
  },
  {
    id: 'core-tee',
    name: 'CORE TEE',
    price: 450000,
    priceDisplay: 'IDR 450.000',
    image: 'images/product-tshirt.png',
    category: 'Tops',
    sku: 'SNK-TE-002',
    material: '220gsm Combed Cotton',
    isNew: true,
    desc: 'A wardrobe essential elevated. The Core Tee features a boxy fit, reinforced neck ribbing, and a subtle SHINKO woven label. Designed for layering or standalone wear.'
  },
  {
    id: 'tactical-cargo',
    name: 'TACTICAL CARGO',
    price: 980000,
    priceDisplay: 'IDR 980.000',
    image: 'images/product-cargo.png',
    category: 'Bottoms',
    sku: 'SNK-CG-003',
    material: 'Ripstop Nylon Blend',
    isNew: true,
    desc: 'Functional meets fashion. The Tactical Cargo features multi-pocket utility design, adjustable ankle cuffs, and a relaxed tapered fit that moves with you.'
  },
  {
    id: 'noir-bomber',
    name: 'NOIR BOMBER',
    price: 1680000,
    priceDisplay: 'IDR 1.680.000',
    image: 'images/product-bomber.png',
    category: 'Outerwear',
    sku: 'SNK-BM-004',
    material: 'Heavyweight Nylon Shell, Satin Lining',
    isNew: true,
    desc: 'The Noir Bomber is a SHINKO icon — minimal, powerful, timeless. Crafted with a structured shell, custom ribbed trim, and an interior satin finish.'
  },
  {
    id: 'core-cap',
    name: 'CORE CAP',
    price: 320000,
    priceDisplay: 'IDR 320.000',
    image: 'images/product-cap.png',
    category: 'Accessories',
    sku: 'SNK-CP-005',
    material: 'Structured Canvas',
    isNew: true,
    desc: 'The Core Cap completes the look. Features an embroidered SHINKO logo on the front panel, adjustable metal clasp closure, and pre-curved visor.'
  },
  {
    id: 'tactical-sling',
    name: 'TACTICAL SLING',
    price: 580000,
    priceDisplay: 'IDR 580.000',
    image: 'images/product-bag.png',
    category: 'Accessories',
    sku: 'SNK-BG-006',
    material: 'Ballistic Nylon',
    isNew: true,
    desc: 'Built for movement. The Tactical Sling features a padded crossbody strap, multiple zip compartments, and a magnetic front flap with SHINKO branding.'
  },
  {
    id: 'midnight-hoodie',
    name: 'MIDNIGHT HOODIE',
    price: 1350000,
    priceDisplay: 'IDR 1.350.000',
    image: 'images/product-hoodie.png',
    category: 'Tops',
    sku: 'SNK-HD-007',
    material: '100% Premium Cotton Fleece',
    isNew: false,
    desc: 'The Midnight Hoodie — a darker take on the SHINKO silhouette. Features an all-black construction with tonal embroidery and kangaroo pocket.'
  },
  {
    id: 'street-tee',
    name: 'STREET TEE',
    price: 480000,
    priceDisplay: 'IDR 480.000',
    image: 'images/product-tshirt.png',
    category: 'Tops',
    sku: 'SNK-TE-008',
    material: '220gsm Combed Cotton',
    isNew: false,
    desc: 'The Street Tee features a bold back graphic with the SHINKO manifesto. Boxy cut, drop shoulder, and premium feel.'
  },
  {
    id: 'stealth-jogger',
    name: 'STEALTH JOGGER',
    price: 850000,
    priceDisplay: 'IDR 850.000',
    image: 'images/product-cargo.png',
    category: 'Bottoms',
    sku: 'SNK-JG-009',
    material: 'French Terry Cotton Blend',
    isNew: false,
    desc: 'The Stealth Jogger merges comfort with edge. Tapered silhouette with hidden zip pockets, elastic cuffs, and a drawstring waist for the perfect fit.'
  },
  {
    id: 'phantom-jacket',
    name: 'PHANTOM JACKET',
    price: 1980000,
    priceDisplay: 'IDR 1.980.000',
    image: 'images/product-bomber.png',
    category: 'Outerwear',
    sku: 'SNK-JK-010',
    material: 'Water-Resistant Nylon, Mesh Lining',
    isNew: false,
    desc: 'The Phantom Jacket is engineered for the city. Lightweight, water-resistant shell with taped seams, concealed hood, and reflective SHINKO hit on the back.'
  },
  {
    id: 'essential-longsleeve',
    name: 'ESSENTIAL LONGSLEEVE',
    price: 520000,
    priceDisplay: 'IDR 520.000',
    image: 'images/product-tshirt.png',
    category: 'Tops',
    sku: 'SNK-LS-011',
    material: '200gsm Combed Cotton Jersey',
    isNew: false,
    desc: 'A layering staple. The Essential Longsleeve features a relaxed fit, extended cuffs with thumb holes, and subtle embroidered branding at the chest.'
  },
  {
    id: 'urban-beanie',
    name: 'URBAN BEANIE',
    price: 280000,
    priceDisplay: 'IDR 280.000',
    image: 'images/product-cap.png',
    category: 'Accessories',
    sku: 'SNK-BN-012',
    material: 'Ribbed Acrylic Knit',
    isNew: false,
    desc: 'The Urban Beanie is a cold-weather essential. Double-fold construction with woven SHINKO label. One size fits all.'
  },
  {
    id: 'cargo-shorts',
    name: 'CARGO SHORTS',
    price: 720000,
    priceDisplay: 'IDR 720.000',
    image: 'images/product-cargo.png',
    category: 'Bottoms',
    sku: 'SNK-SH-013',
    material: 'Ripstop Cotton Blend',
    isNew: false,
    desc: 'Summer-ready utility. The Cargo Shorts feature oversized pockets, a relaxed cut above the knee, and an adjustable belt loop system.'
  },
  {
    id: 'oversized-tee-v2',
    name: 'OVERSIZED TEE V2',
    price: 480000,
    priceDisplay: 'IDR 480.000',
    image: 'images/product-tshirt.png',
    category: 'Tops',
    sku: 'SNK-TE-014',
    material: '250gsm Heavyweight Cotton',
    isNew: false,
    desc: 'The V2 takes our oversized tee to the next level. Heavier weight, wider cut, and a raw-edge neckline for that deconstructed look.'
  },
  {
    id: 'crossbody-bag',
    name: 'CROSSBODY BAG',
    price: 650000,
    priceDisplay: 'IDR 650.000',
    image: 'images/product-bag.png',
    category: 'Accessories',
    sku: 'SNK-CB-015',
    material: '1000D Cordura Nylon',
    isNew: false,
    desc: 'Ultra-durable and minimal. The Crossbody Bag features a single-zip main compartment, internal organizer, and quick-release buckle strap.'
  },
  {
    id: 'shadow-hoodie-v2',
    name: 'SHADOW HOODIE V2',
    price: 1380000,
    priceDisplay: 'IDR 1.380.000',
    image: 'images/product-hoodie.png',
    category: 'Tops',
    sku: 'SNK-HD-016',
    material: '400gsm Heavyweight Cotton Fleece',
    isNew: false,
    desc: 'The evolution. Shadow Hoodie V2 features double-layered hood construction, oversized metal eyelets, and a reinforced kangaroo pocket with hidden zip.'
  },
  {
    id: 'utility-vest',
    name: 'UTILITY VEST',
    price: 1150000,
    priceDisplay: 'IDR 1.150.000',
    image: 'images/product-bomber.png',
    category: 'Outerwear',
    sku: 'SNK-VT-017',
    material: 'Quilted Nylon Shell',
    isNew: false,
    desc: 'Layer up. The Utility Vest features quilted padding, multiple front pockets, and a stand collar. Designed for transitional weather.'
  },
  {
    id: 'stealth-cap',
    name: 'STEALTH CAP',
    price: 350000,
    priceDisplay: 'IDR 350.000',
    image: 'images/product-cap.png',
    category: 'Accessories',
    sku: 'SNK-CP-018',
    material: 'Waxed Canvas',
    isNew: false,
    desc: 'Water-resistant waxed canvas cap with debossed SHINKO logo. Weathered finish for that lived-in look. Adjustable leather strap closure.'
  },
  {
    id: 'tech-pants',
    name: 'TECH PANTS',
    price: 1080000,
    priceDisplay: 'IDR 1.080.000',
    image: 'images/product-cargo.png',
    category: 'Bottoms',
    sku: 'SNK-TP-019',
    material: '4-Way Stretch Nylon',
    isNew: false,
    desc: 'Performance meets street. The Tech Pants feature articulated knees, zippered calf openings, and a water-resistant DWR finish for all-weather wear.'
  },
  {
    id: 'graphic-tee-rebellion',
    name: 'GRAPHIC TEE — REBELLION',
    price: 520000,
    priceDisplay: 'IDR 520.000',
    image: 'images/product-tshirt.png',
    category: 'Tops',
    sku: 'SNK-GT-020',
    material: '220gsm Combed Cotton',
    isNew: false,
    desc: 'Featuring the "REBELLION" graphic — a large-scale screen print across the back. Front left chest features a small SHINKO emblem. Boxy oversized fit.'
  }
];

/* ---------- Lookbook Chapters Data ---------- */
const LOOKBOOK_CHAPTERS = [
  {
    id: 'urban-identity',
    chapter: '01',
    title: 'URBAN IDENTITY',
    subtitle: 'SS26 — CHAPTER 01',
    heroImage: 'images/lookbook-1.png',
    description: 'The city is our canvas. Urban Identity captures the raw energy of street culture — from dimly lit alleyways to rooftop silhouettes. This chapter explores how SHINKO pieces become extensions of personality in the urban landscape.',
    images: ['images/lookbook-1.png', 'images/product-hoodie.png', 'images/product-bomber.png', 'images/hero.png'],
    credits: 'Photography by SHINKO Creative Studio. Shot on location in Jakarta.'
  },
  {
    id: 'shadow-series',
    chapter: '02',
    title: 'SHADOW SERIES',
    subtitle: 'SS26 — CHAPTER 02',
    heroImage: 'images/lookbook-2.png',
    description: 'When light fades, identity sharpens. The Shadow Series is an exploration of darkness as a design principle — monochromatic tones, muted textures, and silhouettes that speak louder than color ever could.',
    images: ['images/lookbook-2.png', 'images/product-tshirt.png', 'images/product-cargo.png', 'images/brand-story-bg.png'],
    credits: 'Photography by SHINKO Creative Studio. Post-production by Studio Noir.'
  },
  {
    id: 'night-protocol',
    chapter: '03',
    title: 'NIGHT PROTOCOL',
    subtitle: 'SS26 — CHAPTER 03',
    heroImage: 'images/lookbook-3.png',
    description: 'The night belongs to those who refuse to rest. Night Protocol documents the after-hours energy — neon reflections, empty streets, and the quiet confidence of those who own the night.',
    images: ['images/lookbook-3.png', 'images/product-bag.png', 'images/product-cap.png', 'images/lookbook-1.png'],
    credits: 'Photography by SHINKO Creative Studio. Night session, Jakarta District 9.'
  },
  {
    id: 'street-culture',
    chapter: '04',
    title: 'STREET CULTURE',
    subtitle: 'SS26 — CHAPTER 04',
    heroImage: 'images/brand-story-bg.png',
    description: 'Culture is not consumed — it is lived. Street Culture captures the intersection of fashion, music, and movement. From skateparks to underground shows, SHINKO lives where culture breathes.',
    images: ['images/brand-story-bg.png', 'images/product-hoodie.png', 'images/lookbook-2.png', 'images/product-tshirt.png'],
    credits: 'Photography by SHINKO Creative Studio. Community collaboration.'
  },
  {
    id: 'the-campaign',
    chapter: '05',
    title: 'THE CAMPAIGN',
    subtitle: 'SS26 — CHAPTER 05',
    heroImage: 'images/hero.png',
    description: 'The SS26 Campaign is our definitive statement. Shot across three cities over two weeks, this chapter brings together every element of the SHINKO vision — identity, darkness, culture, and the relentless pursuit of authenticity.',
    images: ['images/hero.png', 'images/lookbook-3.png', 'images/product-bomber.png', 'images/lookbook-1.png'],
    credits: 'Photography by SHINKO Creative Studio. SS26 Global Campaign.'
  },
  {
    id: 'identity-redefined',
    chapter: '06',
    title: 'IDENTITY REDEFINED',
    subtitle: 'SS26 — CHAPTER 06',
    heroImage: 'images/lookbook-1.png',
    description: 'Who you are is not fixed — it evolves. Identity Redefined closes the SS26 story with a challenge: break your own rules, reinvent your style, and let your identity be a living, breathing thing.',
    images: ['images/lookbook-1.png', 'images/hero.png', 'images/brand-story-bg.png', 'images/lookbook-3.png'],
    credits: 'Photography by SHINKO Creative Studio. Final chapter, SS26.'
  }
];

/* ---------- Cart Helpers (localStorage) ---------- */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('shinko_cart')) || [];
  } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('shinko_cart', JSON.stringify(cart));
}
function addToCart(productId, size) {
  const cart = getCart();
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, size: size, qty: 1 });
  }
  saveCart(cart);
  updateCartBadge();
}
function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(i => !(i.id === productId && i.size === size));
  saveCart(cart);
  updateCartBadge();
}
function updateCartQty(productId, size, newQty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId && i.size === size);
  if (item) {
    if (newQty <= 0) {
      removeFromCart(productId, size);
      return;
    }
    item.qty = newQty;
    saveCart(cart);
    updateCartBadge();
  }
}
function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}
function formatPrice(num) {
  return 'IDR ' + num.toLocaleString('id-ID');
}
function updateCartBadge() {
  const badges = document.querySelectorAll('#cart-badge');
  const count = getCartCount();
  badges.forEach(badge => {
    badge.textContent = count;
    if (count > 0) {
      badge.classList.add('visible');
    } else {
      badge.classList.remove('visible');
    }
  });
}

/* ===================================
   DOM READY
   =================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Update Cart Badge on Load ---------- */
  updateCartBadge();

  /* ---------- Page Transition ---------- */
  const pageTransition = document.getElementById('page-transition');
  if (pageTransition) {
    pageTransition.classList.add('page-transition--active');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        pageTransition.classList.remove('page-transition--active');
      });
    });
  }

  // Intercept internal links for smooth page transition
  document.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    const isInternal = !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('javascript');
    if (isInternal && pageTransition) {
      e.preventDefault();
      pageTransition.classList.add('page-transition--active');
      setTimeout(() => { window.location.href = href; }, 400);
    }
  });

  /* ---------- Page Loader ---------- */
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.innerHTML = '<span class="loader__text">SHINKO</span>';
  document.body.prepend(loader);
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('loader--hidden'), 600);
    setTimeout(() => loader.remove(), 1200);
  });

  /* ---------- Hero Reveal Delays ---------- */
  document.querySelectorAll('.reveal-text').forEach(el => {
    const delay = el.dataset.delay || 0;
    el.style.animationDelay = `${parseInt(delay) + 400}ms`;
  });

  /* ---------- Navbar Scroll ---------- */
  const nav = document.getElementById('main-nav');
  const hasHero = document.querySelector('.hero');
  if (hasHero && nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }, { passive: true });
  }

  /* ---------- Mobile Menu ---------- */
  const burger = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  let menuOpen = false;
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('mobile-menu--open', menuOpen);
      burger.classList.toggle('active', menuOpen);
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuOpen = false;
        mobileMenu.classList.remove('mobile-menu--open');
        burger.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Scroll-Reveal (Intersection Observer) ---------- */
  const revealSelectors = '.scroll-reveal, .scroll-reveal--left, .scroll-reveal--right, .scroll-reveal--scale';
  const revealElements = document.querySelectorAll(revealSelectors);
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, parseInt(delay));
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });
  revealElements.forEach(el => revealObserver.observe(el));

  /* ---------- Parallax ---------- */
  const parallaxBgs = document.querySelectorAll('.parallax-bg img');
  const parallaxImgs = document.querySelectorAll('.parallax-img');
  function handleParallax() {
    parallaxBgs.forEach(img => {
      const section = img.closest('.story') || img.closest('section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      img.style.transform = `translateY(${rect.top * 0.15}px)`;
    });
    parallaxImgs.forEach(img => {
      const item = img.closest('.lookbook__item');
      if (!item) return;
      const rect = item.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (rect.top - viewH) / (viewH + rect.height);
      img.style.transform = `translateY(${progress * 30}px) scale(1.08)`;
    });
  }
  window.addEventListener('scroll', handleParallax, { passive: true });

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- Newsletter Form ---------- */
  const form = document.getElementById('newsletter-form');
  const msgEl = document.getElementById('newsletter-msg');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      if (email) {
        msgEl.textContent = 'WELCOME TO THE COMMUNITY.';
        msgEl.style.color = '#FFFFFF';
        form.reset();
        setTimeout(() => { msgEl.textContent = ''; }, 4000);
      }
    });
  }

  /* ---------- Featured: Drag to Scroll ---------- */
  const scrollContainer = document.querySelector('.featured__scroll-container');
  if (scrollContainer) {
    let isDown = false, startX, scrollLeft;
    scrollContainer.addEventListener('mousedown', e => {
      isDown = true;
      scrollContainer.style.cursor = 'grabbing';
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });
    scrollContainer.addEventListener('mouseleave', () => { isDown = false; scrollContainer.style.cursor = 'grab'; });
    scrollContainer.addEventListener('mouseup', () => { isDown = false; scrollContainer.style.cursor = 'grab'; });
    scrollContainer.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      scrollContainer.scrollLeft = scrollLeft - (x - startX) * 1.5;
    });
    scrollContainer.style.cursor = 'grab';
  }

  /* =========================================
     COLLECTION PAGE — Render All Products
     ========================================= */
  const browseGrid = document.getElementById('browse-grid');
  if (browseGrid) {
    PRODUCTS.forEach((product, index) => {
      const card = document.createElement('a');
      card.href = `product.html?id=${product.id}`;
      card.className = 'product-card scroll-reveal';
      card.dataset.delay = (index % 4) * 120;
      card.innerHTML = `
        <div class="product-card__image">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </div>
        <div class="product-card__info">
          <h3>${product.name}</h3>
          <p>${product.priceDisplay}</p>
        </div>
      `;
      browseGrid.appendChild(card);
    });
    browseGrid.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));
  }

  /* =========================================
     NEW ARRIVAL PAGE — Render New Products
     ========================================= */
  const newArrivalGrid = document.getElementById('new-arrival-grid');
  if (newArrivalGrid) {
    const newProducts = PRODUCTS.filter(p => p.isNew);
    newProducts.forEach((product, index) => {
      const card = document.createElement('a');
      card.href = `product.html?id=${product.id}`;
      card.className = 'product-card scroll-reveal';
      card.dataset.delay = (index % 4) * 120;
      card.innerHTML = `
        <div class="product-card__image">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </div>
        <div class="product-card__info">
          <h3>${product.name}</h3>
          <p>${product.priceDisplay}</p>
        </div>
      `;
      newArrivalGrid.appendChild(card);
    });
    newArrivalGrid.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));
  }

  /* =========================================
     LOOKBOOK PAGE — Render Chapters Grid
     ========================================= */
  const lookbookGrid = document.getElementById('lookbook-grid');
  if (lookbookGrid) {
    LOOKBOOK_CHAPTERS.forEach((ch, index) => {
      const isFullWidth = index === 0 || index === 3; // first and fourth are full-width
      const item = document.createElement('a');
      item.href = `lookbook-detail.html?id=${ch.id}`;
      item.className = `lookbook-page__item${isFullWidth ? ' lookbook-page__item--full' : ''} ${index % 2 === 0 ? 'scroll-reveal--scale' : (index % 2 === 1 ? 'scroll-reveal--left' : 'scroll-reveal--right')}`;
      item.dataset.delay = (index % 3) * 150;
      item.innerHTML = `
        <img src="${ch.heroImage}" alt="${ch.title}" loading="lazy" />
        <div class="lookbook-page__caption">
          <span class="lookbook-page__chapter">CHAPTER ${ch.chapter}</span>
          <h3>${ch.title}</h3>
          <p>${ch.subtitle}</p>
        </div>
      `;
      lookbookGrid.appendChild(item);
    });
    lookbookGrid.querySelectorAll('.scroll-reveal--scale, .scroll-reveal--left, .scroll-reveal--right').forEach(el => revealObserver.observe(el));
  }

  /* =========================================
     LOOKBOOK DETAIL PAGE — Render Chapter
     ========================================= */
  const lookbookDetailPage = document.querySelector('.lookbook-detail-page');
  if (lookbookDetailPage) {
    const params = new URLSearchParams(window.location.search);
    const chapterId = params.get('id');
    const chapter = LOOKBOOK_CHAPTERS.find(c => c.id === chapterId);

    if (chapter) {
      document.title = `${chapter.title} — SHINKO OFFICIAL Lookbook`;
      document.getElementById('lb-hero-img').src = chapter.heroImage;
      document.getElementById('lb-hero-img').alt = chapter.title;
      document.getElementById('lb-chapter-num').textContent = `CHAPTER ${chapter.chapter}`;
      document.getElementById('lb-title').textContent = chapter.title;
      document.getElementById('lb-subtitle').textContent = chapter.subtitle;
      document.getElementById('lb-description').textContent = chapter.description;
      document.getElementById('lb-credits').textContent = chapter.credits;
      document.getElementById('breadcrumb-chapter').textContent = chapter.title;

      // Render gallery
      const gallery = document.getElementById('lb-gallery');
      if (gallery) {
        chapter.images.forEach((img, idx) => {
          const item = document.createElement('div');
          item.className = `lookbook-detail__gallery-item${idx === 0 ? ' lookbook-detail__gallery-item--full' : ''} scroll-reveal--scale`;
          item.dataset.delay = idx * 150;
          item.innerHTML = `<img src="${img}" alt="${chapter.title} — Image ${idx + 1}" loading="lazy" />`;
          gallery.appendChild(item);
        });
        gallery.querySelectorAll('.scroll-reveal--scale').forEach(el => revealObserver.observe(el));
      }

      // Chapter navigation (prev/next)
      const currentIdx = LOOKBOOK_CHAPTERS.findIndex(c => c.id === chapterId);
      const prevBtn = document.getElementById('lb-prev');
      const nextBtn = document.getElementById('lb-next');
      if (prevBtn) {
        if (currentIdx > 0) {
          const prev = LOOKBOOK_CHAPTERS[currentIdx - 1];
          prevBtn.href = `lookbook-detail.html?id=${prev.id}`;
          prevBtn.querySelector('.chapter-nav__title').textContent = prev.title;
        } else {
          prevBtn.style.visibility = 'hidden';
        }
      }
      if (nextBtn) {
        if (currentIdx < LOOKBOOK_CHAPTERS.length - 1) {
          const next = LOOKBOOK_CHAPTERS[currentIdx + 1];
          nextBtn.href = `lookbook-detail.html?id=${next.id}`;
          nextBtn.querySelector('.chapter-nav__title').textContent = next.title;
        } else {
          nextBtn.style.visibility = 'hidden';
        }
      }
    } else {
      window.location.href = 'lookbook.html';
    }
  }

  /* =========================================
     PRODUCT PAGE — Render Product Detail
     ========================================= */
  const productPage = document.querySelector('.product-page');
  if (productPage) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = PRODUCTS.find(p => p.id === productId);

    if (product) {
      document.title = `${product.name} — SHINKO OFFICIAL`;
      document.getElementById('product-img').src = product.image;
      document.getElementById('product-img').alt = product.name;
      document.getElementById('product-name').textContent = product.name;
      document.getElementById('product-price').textContent = product.priceDisplay;
      document.getElementById('product-desc').textContent = product.desc;
      document.getElementById('breadcrumb-name').textContent = product.name;
      document.getElementById('product-sku').textContent = product.sku;
      document.getElementById('product-category').textContent = product.category;
      document.getElementById('product-material').textContent = product.material;

      // Size selector
      const sizeButtons = document.querySelectorAll('.size-btn');
      sizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          sizeButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });

      // Add to cart
      const addToCartBtn = document.getElementById('add-to-cart');
      if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
          const selectedSize = document.querySelector('.size-btn.active');
          if (!selectedSize) {
            addToCartBtn.querySelector('span').textContent = 'SELECT A SIZE';
            setTimeout(() => { addToCartBtn.querySelector('span').textContent = 'ADD TO CART'; }, 2000);
            return;
          }
          addToCart(product.id, selectedSize.dataset.size);
          addToCartBtn.querySelector('span').textContent = 'ADDED ✓';
          addToCartBtn.style.pointerEvents = 'none';
          setTimeout(() => {
            addToCartBtn.querySelector('span').textContent = 'ADD TO CART';
            addToCartBtn.style.pointerEvents = '';
          }, 2500);
        });
      }
    } else {
      window.location.href = 'collection.html';
    }
  }

  /* =========================================
     CART PAGE — Render Cart
     ========================================= */
  const cartPage = document.querySelector('.cart-page');
  if (cartPage) {
    renderCart();
  }

  function renderCart() {
    const cart = getCart();
    const emptyEl = document.getElementById('cart-empty');
    const contentEl = document.getElementById('cart-content');
    const itemsEl = document.getElementById('cart-items');

    if (!emptyEl || !contentEl || !itemsEl) return;

    if (cart.length === 0) {
      emptyEl.style.display = 'block';
      contentEl.style.display = 'none';
      return;
    }

    emptyEl.style.display = 'none';
    contentEl.style.display = 'grid';
    itemsEl.innerHTML = '';

    cart.forEach(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return;

      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="cart-item__image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="cart-item__details">
          <span class="cart-item__name">${product.name}</span>
          <span class="cart-item__size">SIZE: ${item.size}</span>
          <span class="cart-item__price">${product.priceDisplay}</span>
        </div>
        <div class="cart-item__actions">
          <div class="cart-item__qty">
            <button class="qty-minus" data-id="${item.id}" data-size="${item.size}">−</button>
            <span>${item.qty}</span>
            <button class="qty-plus" data-id="${item.id}" data-size="${item.size}">+</button>
          </div>
          <button class="cart-item__remove" data-id="${item.id}" data-size="${item.size}">REMOVE</button>
        </div>
      `;
      itemsEl.appendChild(row);
    });

    // Update totals
    const total = getCartTotal();
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');
    if (subtotalEl) subtotalEl.textContent = formatPrice(total);
    if (totalEl) totalEl.textContent = formatPrice(total);

    // Quantity buttons
    itemsEl.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const size = btn.dataset.size;
        const cartItem = getCart().find(i => i.id === id && i.size === size);
        if (cartItem) {
          updateCartQty(id, size, cartItem.qty - 1);
          renderCart();
        }
      });
    });
    itemsEl.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const size = btn.dataset.size;
        const cartItem = getCart().find(i => i.id === id && i.size === size);
        if (cartItem) {
          updateCartQty(id, size, cartItem.qty + 1);
          renderCart();
        }
      });
    });
    itemsEl.querySelectorAll('.cart-item__remove').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(btn.dataset.id, btn.dataset.size);
        renderCart();
      });
    });

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        checkoutBtn.querySelector('span').textContent = 'PROCESSING...';
        setTimeout(() => {
          checkoutBtn.querySelector('span').textContent = 'ORDER CONFIRMED ✓';
          setTimeout(() => {
            localStorage.removeItem('shinko_cart');
            updateCartBadge();
            renderCart();
          }, 2000);
        }, 1500);
      });
    }
  }

  /* =========================================
     ★ WOW — PARTICLE CANVAS SYSTEM ★
     ========================================= */
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = Math.random() * -0.4 - 0.1;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.fadeSpeed = Math.random() * 0.003 + 0.001;
      this.pulsePhase = Math.random() * Math.PI * 2;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.pulsePhase += 0.02;
      const pulse = Math.sin(this.pulsePhase) * 0.2 + 0.8;
      this.currentOpacity = this.opacity * pulse;
      if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
        this.reset();
        this.y = canvas.height + 10;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 42, 42, ${this.currentOpacity})`;
      ctx.fill();
    }
  }

  // Create particles
  const particleCount = Math.min(60, Math.floor(window.innerWidth / 25));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 42, 42, ${0.04 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  /* =========================================
     ★ WOW — 3D TILT ON PRODUCT CARDS ★
     ========================================= */
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      card.classList.add('tilt-active');
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.classList.remove('tilt-active');
    });
  });

  /* =========================================
     ★ WOW — SCROLL PROGRESS BAR ★
     ========================================= */
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.width = '100%';
  document.body.prepend(progressBar);
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollTop / scrollHeight;
    progressBar.style.transform = `scaleX(${progress})`;
  }, { passive: true });

  /* =========================================
     ★ WOW — SMOOTH CURSOR GLOW (LERP) ★
     ========================================= */
  if (window.matchMedia('(pointer: fine)').matches) {
    const existingGlow = document.querySelector('.cursor-glow');
    if (existingGlow) existingGlow.remove();

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let glowX = -500, glowY = -500;
    let targetX = -500, targetY = -500;

    document.addEventListener('mousemove', e => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function lerpGlow() {
      glowX += (targetX - glowX) * 0.08;
      glowY += (targetY - glowY) * 0.08;
      glow.style.left = glowX + 'px';
      glow.style.top = glowY + 'px';
      requestAnimationFrame(lerpGlow);
    }
    lerpGlow();
  }

  /* =========================================
     ★ WOW — MAGNETIC BUTTONS ★
     ========================================= */
  document.querySelectorAll('.hero__cta, .btn-magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  /* =========================================
     ★ WOW — HERO TITLE SPLIT TEXT ★
     ========================================= */
  document.querySelectorAll('.hero__title .reveal-text').forEach(el => {
    const text = el.textContent;
    if (!text || text.length > 30) return;
    el.innerHTML = '';
    el.style.opacity = 1;
    el.style.transform = 'none';
    el.style.clipPath = 'none';
    el.style.animation = 'none';
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'split-char';
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = `${600 + i * 50}ms`;
      el.appendChild(span);
    });
  });

  /* =========================================
     ★ WOW — FLOATING DOTS ON HERO ★
     ========================================= */
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    for (let i = 0; i < 12; i++) {
      const dot = document.createElement('div');
      dot.className = 'floating-dot';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.bottom = `${Math.random() * 30}%`;
      dot.style.animationDelay = `${Math.random() * 6}s`;
      dot.style.animationDuration = `${4 + Math.random() * 4}s`;
      heroSection.appendChild(dot);
    }
  }

  /* =========================================
     ★ WOW — GLITCH TEXT DATA ATTRIBUTES ★
     ========================================= */
  document.querySelectorAll('.statement__text').forEach(el => {
    el.classList.add('glitch-hover');
    el.dataset.text = el.textContent;
  });

  /* =========================================
     ★ WOW — SHIMMER SWEEP ON SECTIONS ★
     ========================================= */
  document.querySelectorAll('.section, .browse-hero, .lookbook-detail__hero, .story-hero').forEach(el => {
    el.classList.add('shimmer-sweep');
  });

  /* =========================================
     ★ WOW — IMAGE REVEAL ANIMATION ★
     ========================================= */
  const imgRevealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, parseInt(delay));
        imgRevealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.lookbook-page__item, .lookbook-detail__gallery-item').forEach((el, i) => {
    el.classList.add('img-reveal');
    el.dataset.delay = i * 200;
    imgRevealObserver.observe(el);
  });

  /* =========================================
     ★ WOW — NAV LOGO GLITCH ON HOVER ★
     ========================================= */
  const navLogo = document.querySelector('.nav__logo');
  if (navLogo) {
    navLogo.classList.add('glitch-hover');
    navLogo.dataset.text = navLogo.textContent;
  }

});
