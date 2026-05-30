/* ═══════════════════════════════════════════════════
   STRYDE — Main Script
═══════════════════════════════════════════════════ */

// ── DATA ──────────────────────────────────────────
const PRODUCTS = [
    { id: 1,  name: 'New Balance 550',         brand: 'New Balance', category: 'casual',  price: 130, oldPrice: null, badge: 'new',  img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', sizes: [38,39,40,41,42,43], desc: 'El 550 surgió en 1989 y dejó su huella en las canchas de baloncesto de la era. Ahora regresa con el mismo espíritu retro adaptado a los tiempos modernos. Suela de goma resistente, parte superior de cuero premium.' },
    { id: 2,  name: 'Adidas Samba OG',          brand: 'Adidas',     category: 'casual',  price: 200, oldPrice: null, badge: null,   img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80', sizes: [38,39,40,41,42,43,44], desc: 'El icónico Samba ha conquistado campos de fútbol y calles por igual desde los años 50. Cuero suave, suela de goma dentada clásica y la inconfundible franja de gamuza.' },
    { id: 3,  name: 'Nike Air Max 90',           brand: 'Nike',       category: 'running', price: 180, oldPrice: 220, badge: 'sale', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', sizes: [39,40,41,42,43,44], desc: 'Una leyenda del running que trasciende el deporte. La unidad Air en el talón ofrece amortiguación excepcional en cada zancada.' },
    { id: 4,  name: 'New Balance 2002R',         brand: 'New Balance', category: 'running', price: 155, oldPrice: null, badge: 'hot',  img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&q=80', sizes: [38,39,40,41,42,43,44,45], desc: 'Inspirado en el modelo de running de los 90, el 2002R combina tecnología ABZORB y ENCAP para una comodidad insuperable.' },
    { id: 5,  name: 'Puma Suede Classic',        brand: 'Puma',       category: 'casual',  price: 90,  oldPrice: null, badge: null,   img: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&q=80', sizes: [38,39,40,41,42,43], desc: 'Un clásico que nunca pasa de moda. La parte superior de gamuza premium y la suela de goma formMstrip hacen del Suede un calzado versátil para cualquier ocasión.' },
    { id: 6,  name: 'Reebok Club C 85',          brand: 'Reebok',     category: 'formal',  price: 85,  oldPrice: 110, badge: 'sale', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80', sizes: [39,40,41,42,43], desc: 'El Club C nació en las canchas de tenis y se convirtió en ícono del streetwear. Cuero limpio, suela de goma y detalles mínimos para un look siempre elegante.' },
    { id: 7,  name: 'Asics Gel-Nimbus 25',       brand: 'Asics',      category: 'running', price: 200, oldPrice: null, badge: 'new',  img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80', sizes: [40,41,42,43,44,45], desc: 'La amortiguación GEL de última generación absorbe el impacto y devuelve energía. Ideal para corredores de larga distancia que buscan máximo confort.' },
    { id: 8,  name: 'Vans Old Skool',            brand: 'Vans',       category: 'casual',  price: 75,  oldPrice: null, badge: null,   img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80', sizes: [38,39,40,41,42,43,44], desc: 'El primer calzado con el icónico Jazz Stripe. Canvas y gamuza de alta resistencia con forro de tela para comodidad todo el día.' },
    { id: 9,  name: 'Nike Zoom Pegasus 41',      brand: 'Nike',       category: 'running', price: 195, oldPrice: null, badge: 'new',  img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', sizes: [39,40,41,42,43,44], desc: 'El caballo de batalla del running Nike. React Foam para amortiguación receptiva y un ajuste que te hace sentir acompañado en cada kilómetro.' },
    { id: 10, name: 'Adidas Ultraboost 23',      brand: 'Adidas',     category: 'running', price: 250, oldPrice: 300, badge: 'sale', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80', sizes: [40,41,42,43,44,45], desc: 'Tecnología Boost para retorno de energía sin igual. La entresuela continental rubber garantiza agarre en cualquier superficie.' },
    { id: 11, name: 'Nike Air Force 1 (Mujer)',  brand: 'Nike',       category: 'mujer',   price: 120, oldPrice: null, badge: null,   img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', sizes: [35,36,37,38,39,40,41], desc: 'El Air Force 1 es un ícono de la cultura sneaker. En versión para mujer, ofrece el mismo estilo inconfundible con ajuste optimizado.' },
    { id: 12, name: 'Puma Cali Dream (Mujer)',   brand: 'Puma',       category: 'mujer',   price: 110, oldPrice: 135, badge: 'sale', img: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&q=80', sizes: [35,36,37,38,39,40], desc: 'Inspirado en el espíritu californiano libre. Cuero y gamuza premium, diseño chunky moderno y plataforma ligera.' },
    { id: 13, name: 'Skechers D\'Lites (Niños)', brand: 'Skechers',  category: 'infantil', price: 55,  oldPrice: null, badge: null,   img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80', sizes: [28,29,30,31,32,33,34], desc: 'Con luces LED intermitentes y suela Memory Foam, los D\'Lites son el calzado favorito de los pequeños aventureros.' },
    { id: 14, name: 'New Balance 990v5 Kids',    brand: 'New Balance', category: 'infantil', price: 70, oldPrice: null, badge: 'new',  img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&q=80', sizes: [28,29,30,31,32,33,34,35], desc: 'Construido en EE.UU., el 990v5 para niños ofrece la misma calidad premium que la versión adulto en tallas pediátricas.' },
    { id: 15, name: 'Oxford Premium Cuero',      brand: 'Clarks',     category: 'formal',  price: 160, oldPrice: null, badge: null,   img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80', sizes: [39,40,41,42,43,44], desc: 'Cuero de plena flor, suela de cuero y costura Goodyear Welt. El Oxford definitivo para ocasiones que exigen distinción.' },
    { id: 16, name: 'Adidas Stan Smith',         brand: 'Adidas',     category: 'formal',  price: 100, oldPrice: null, badge: null,   img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80', sizes: [38,39,40,41,42,43,44], desc: 'Nacido en las canchas, conquistó el mundo. Minimalista, versátil y eterno. El Stan Smith es la definición del calzado atemporal.' },
];

const CATEGORIES = [
    { id: 'running',  name: 'Running',  icon: '🏃', class: 'cat-running',         count: PRODUCTS.filter(p=>p.category==='running').length },
    { id: 'casual',   name: 'Casual',   icon: '👟', class: 'cat-casual',          count: PRODUCTS.filter(p=>p.category==='casual').length },
    { id: 'formal',   name: 'Formal',   icon: '👞', class: 'cat-formal',          count: PRODUCTS.filter(p=>p.category==='formal').length },
    { id: 'mujer',    name: 'Mujer',    icon: '✨', class: 'cat-deportivo-mujer', count: PRODUCTS.filter(p=>p.category==='mujer').length },
    { id: 'infantil', name: 'Niños',    icon: '⭐', class: 'cat-infantil',        count: PRODUCTS.filter(p=>p.category==='infantil').length },
];

const BRANDS = [...new Set(PRODUCTS.map(p => p.brand))];

// ── STATE ──────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('stryde_cart') || '[]');
let currentPage = 'home';
let filterCategory = 'all';
let filterBrand = 'all';
let filterMinPrice = 0;
let filterMaxPrice = 9999;
let searchQuery = '';
let productsPerPage = 8;
let currentProductsPage = 1;

// ── ROUTER ────────────────────────────────────────
function navigate(page, params = {}) {
    currentPage = page;
    window.scrollTo(0, 0);
    renderPage(page, params);
    updateNavActive(page);
}

function updateNavActive(page) {
    document.querySelectorAll('.nav-link-stryde').forEach(l => l.classList.remove('active'));
    const map = { home: 'nav-home', category: 'nav-cats', search: 'nav-cats', cart: 'nav-cart', checkout: 'nav-cart' };
    const el = document.getElementById(map[page]);
    if (el) el.classList.add('active');
}

// ── RENDER ENGINE ─────────────────────────────────
function renderPage(page, params) {
    const app = document.getElementById('app');
    switch(page) {
        case 'home':     app.innerHTML = renderHome();        break;
        case 'category': app.innerHTML = renderCategory(params); break;
        case 'search':   app.innerHTML = renderSearch(params);   break;
        case 'product':  app.innerHTML = renderProductDetail(params); break;
        case 'cart':     app.innerHTML = renderCart();        break;
        case 'checkout': app.innerHTML = renderCheckout();    break;
        default:         app.innerHTML = renderHome();
    }
    bindEvents();
}

// ── CART LOGIC ────────────────────────────────────
function addToCart(productId, size) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const key = `${productId}-${size}`;
    const existing = cart.find(i => i.key === key);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ key, productId, size, qty: 1, price: product.price });
    }
    saveCart();
    updateCartBadge();
    showToast(`${product.name} agregado al carrito 🛒`);
}

function removeFromCart(key) {
    cart = cart.filter(i => i.key !== key);
    saveCart();
    updateCartBadge();
    renderPage('cart', {});
}

function changeQty(key, delta) {
    const item = cart.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    saveCart();
    renderPage('cart', {});
}

function saveCart() { localStorage.setItem('stryde_cart', JSON.stringify(cart)); }

function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }

function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) badge.textContent = cartCount();
}

// ── TOAST ─────────────────────────────────────────
function showToast(msg, type = '') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast-stryde ${type}`;
    toast.innerHTML = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
}

// ── SEARCH DROPDOWN ───────────────────────────────
function handleSearchInput(q) {
    searchQuery = q.trim();
    const dropdown = document.getElementById('search-dropdown');
    if (!dropdown) return;
    if (searchQuery.length < 2) { dropdown.classList.remove('show'); return; }
    const results = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5);
    if (results.length === 0) { dropdown.classList.remove('show'); return; }
    dropdown.innerHTML = `
        <div class="search-dropdown-header">Resultados para "${searchQuery}"</div>
        ${results.map(p => `
            <div class="search-result-item" onclick="navigate('product', {id:${p.id}})">
                <img class="search-result-img" src="${p.img}" alt="${p.name}">
                <div>
                    <div class="search-result-name">${p.name}</div>
                    <div class="search-result-price">$${p.price}</div>
                </div>
            </div>
        `).join('')}
        <div class="search-dropdown-footer" onclick="navigate('search', {q:'${searchQuery}'})">
            Ver todos los resultados →
        </div>
    `;
    dropdown.classList.add('show');
}

function closeSearchDropdown() {
    setTimeout(() => {
        const d = document.getElementById('search-dropdown');
        if (d) d.classList.remove('show');
    }, 200);
}

// ── SIDEBAR HELPERS ───────────────────────────────
function renderSidebar(activeCategory = 'all', activeBrand = 'all') {
    return `
    <aside class="sidebar">
        <div class="sidebar-section">
            <div class="sidebar-title">Categorías</div>
            <div class="sidebar-link ${activeCategory==='all'?'active':''}" onclick="applyFilter('all','brand','${activeBrand}')">
                <span>Todos</span>
                <span class="sidebar-badge">${PRODUCTS.length}</span>
            </div>
            ${CATEGORIES.map(c => `
                <div class="sidebar-link ${activeCategory===c.id?'active':''}" onclick="applyFilter('${c.id}','brand','${activeBrand}')">
                    <span>${c.icon} ${c.name}</span>
                    <span class="sidebar-badge">${c.count}</span>
                </div>
            `).join('')}
        </div>

        <div class="sidebar-section">
            <div class="sidebar-title">Marcas</div>
            <div style="display:flex;flex-wrap:wrap;gap:.2rem">
                <span class="brand-chip ${activeBrand==='all'?'active':''}" onclick="applyFilter('${activeCategory}','brand','all')">Todas</span>
                ${BRANDS.map(b => `
                    <span class="brand-chip ${activeBrand===b?'active':''}" onclick="applyFilter('${activeCategory}','brand','${b}')">${b}</span>
                `).join('')}
            </div>
        </div>

        <div class="sidebar-section">
            <div class="sidebar-title">Precio</div>
            <div class="price-range-wrap">
                <div class="price-inputs">
                    <input type="number" class="price-input" id="price-min" placeholder="Mín" value="${filterMinPrice||''}" min="0">
                    <span class="price-sep">—</span>
                    <input type="number" class="price-input" id="price-max" placeholder="Máx" value="${filterMaxPrice===9999?'':filterMaxPrice}" min="0">
                </div>
                <button class="btn-filter" onclick="applyPriceFilter()">Filtrar</button>
            </div>
        </div>
    </aside>`;
}

function applyFilter(category, type, value) {
    filterCategory = category;
    if (type === 'brand') filterBrand = value;
    currentProductsPage = 1;
    navigate('category', { category });
}

function applyPriceFilter() {
    const min = parseFloat(document.getElementById('price-min')?.value || 0);
    const max = parseFloat(document.getElementById('price-max')?.value || 9999);
    filterMinPrice = isNaN(min) ? 0 : min;
    filterMaxPrice = isNaN(max) ? 9999 : max;
    currentProductsPage = 1;
    navigate('category', { category: filterCategory });
}

// ── PRODUCT CARD ──────────────────────────────────
function renderProductCard(p) {
    return `
    <div class="product-card" onclick="navigate('product',{id:${p.id}})">
        <div class="product-img-wrap">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge==='new'?'Nuevo':p.badge==='sale'?'Oferta':'Hot'}</span>` : ''}
        </div>
        <div class="product-body">
            <div class="product-brand">${p.brand}</div>
            <div class="product-name">${p.name}</div>
            <div class="product-footer">
                <div>
                    <span class="product-price">$${p.price}</span>
                    ${p.oldPrice ? `<span class="product-price-old">$${p.oldPrice}</span>` : ''}
                </div>
                <button class="btn-add-cart" onclick="event.stopPropagation(); quickAdd(${p.id})">
                    <i class="bi bi-bag-plus"></i>
                </button>
            </div>
        </div>
    </div>`;
}

function quickAdd(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const size = p.sizes[Math.floor(p.sizes.length / 2)];
    addToCart(id, size);
}

// ── HOME ──────────────────────────────────────────
function renderHome() {
    const featured = PRODUCTS.filter(p => p.badge).slice(0, 4);
    const recent = PRODUCTS.slice(0, 8);
    return `
    <div class="page-layout">
        ${renderSidebar('all', 'all')}
        <main class="main-content">

            <!-- HERO -->
            <section class="hero">
                <div class="hero-bg"></div>
                <div class="hero-content">
                    <span class="hero-eyebrow">Nueva Colección 2025</span>
                    <h1 class="hero-title">El paso que<br><span>te define</span></h1>
                    <p class="hero-subtitle">Descubrí las últimas tendencias en calzado deportivo, casual y formal. Calidad premium, estilo sin límites.</p>
                    <div class="hero-actions">
                        <button class="hero-cta" onclick="navigate('category',{category:'all'})">
                            <i class="bi bi-arrow-right"></i> Explorar
                        </button>
                        <button class="hero-cta-secondary" onclick="navigate('category',{category:'running'})">
                            Running
                        </button>
                    </div>
                </div>
                <div class="hero-stats">
                    <div>
                        <div class="hero-stat-number">30+</div>
                        <div class="hero-stat-label">Modelos</div>
                    </div>
                    <div class="hero-divider"></div>
                    <div>
                        <div class="hero-stat-number">6</div>
                        <div class="hero-stat-label">Marcas</div>
                    </div>
                    <div class="hero-divider"></div>
                    <div>
                        <div class="hero-stat-number">5</div>
                        <div class="hero-stat-label">Categorías</div>
                    </div>
                </div>
            </section>

            <!-- CATEGORÍAS -->
            <section class="section-categorias">
                <div class="section-header">
                    <h2 class="section-title">Cate<span>gorías</span></h2>
                    <span class="section-link" onclick="navigate('category',{category:'all'})">Ver todas →</span>
                </div>
                <div class="cat-grid">
                    ${CATEGORIES.map(c => `
                        <div class="cat-card ${c.class}" onclick="navigate('category',{category:'${c.id}'})">
                            <span class="cat-icon">${c.icon}</span>
                            <div class="cat-name">${c.name}</div>
                            <div class="cat-count">${c.count} modelos</div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- DESTACADOS -->
            <section class="section-productos">
                <div class="section-header">
                    <h2 class="section-title">Desta<span>cados</span></h2>
                    <span class="section-link" onclick="navigate('category',{category:'all'})">Ver todos →</span>
                </div>
                <div class="products-grid">
                    ${featured.map(renderProductCard).join('')}
                </div>
            </section>

            <!-- BANNER MID -->
            <div class="banner-mid">
                <div class="banner-mid-text">
                    <h2>Envío <span>GRATIS</span></h2>
                    <p>En compras mayores a $150 — Entrega en 48 hrs</p>
                </div>
                <div class="banner-mid-cta">
                    <button class="hero-cta" onclick="navigate('category',{category:'all'})">
                        Comprar ahora <i class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>

            <!-- ÚLTIMOS AGREGADOS -->
            <section class="section-productos">
                <div class="section-header">
                    <h2 class="section-title">Todos los <span>modelos</span></h2>
                    <span class="section-link" onclick="navigate('category',{category:'all'})">Ver todos →</span>
                </div>
                <div class="products-grid">
                    ${recent.map(renderProductCard).join('')}
                </div>
            </section>

            <!-- FEATURES -->
            <div class="features-grid">
                <div class="feature-card">
                    <span class="feature-icon">🚀</span>
                    <div class="feature-title">Envío Rápido</div>
                    <p class="feature-desc">Entrega en 24-48 horas en todo el país. Gratis en pedidos mayores a $150.</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">🔄</span>
                    <div class="feature-title">Cambios Fáciles</div>
                    <p class="feature-desc">30 días para cambios y devoluciones sin preguntas. Tu satisfacción es nuestra prioridad.</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">🛡️</span>
                    <div class="feature-title">Garantía</div>
                    <p class="feature-desc">Todos nuestros productos son 100% originales con garantía del fabricante.</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">💳</span>
                    <div class="feature-title">Pago Seguro</div>
                    <p class="feature-desc">Tarjeta, transferencia o contra entrega. Encriptación SSL en todas las transacciones.</p>
                </div>
            </div>

        </main>
    </div>`;
}

// ── CATEGORY / NAVIGATION ─────────────────────────
function renderCategory(params) {
    const cat = params.category || filterCategory || 'all';
    filterCategory = cat;

    let filtered = PRODUCTS.filter(p => {
        const matchCat = cat === 'all' || p.category === cat;
        const matchBrand = filterBrand === 'all' || p.brand === filterBrand;
        const matchPrice = p.price >= filterMinPrice && p.price <= filterMaxPrice;
        return matchCat && matchBrand && matchPrice;
    });

    const totalPages = Math.ceil(filtered.length / productsPerPage);
    const paged = filtered.slice((currentProductsPage-1)*productsPerPage, currentProductsPage*productsPerPage);
    const catName = cat === 'all' ? 'Todos' : CATEGORIES.find(c=>c.id===cat)?.name || cat;

    return `
    <div class="page-layout">
        ${renderSidebar(cat, filterBrand)}
        <main class="main-content">
            <nav class="breadcrumb-stryde">
                <a onclick="navigate('home')">Inicio</a>
                <span class="sep">›</span>
                <a onclick="navigate('category',{category:'all'})">Categorías</a>
                ${cat !== 'all' ? `<span class="sep">›</span><span class="current">${catName}</span>` : ''}
            </nav>
            <div class="section-header">
                <h2 class="section-title">${catName} <span>(${filtered.length})</span></h2>
                <span class="text-muted-stryde" style="font-size:.78rem">${filtered.length} resultado${filtered.length!==1?'s':''}</span>
            </div>
            ${paged.length > 0
                ? `<div class="products-grid">${paged.map(renderProductCard).join('')}</div>`
                : `<div style="text-align:center;padding:4rem;color:var(--gray)">No hay productos con estos filtros.</div>`
            }
            ${totalPages > 1 ? renderPagination(currentProductsPage, totalPages, cat) : ''}
        </main>
    </div>`;
}

function renderPagination(current, total, cat) {
    let btns = '';
    for (let i = 1; i <= total; i++) {
        btns += `<button class="page-btn ${i===current?'active':''}" onclick="goPage(${i},'${cat}')">${i}</button>`;
    }
    return `
    <div class="pagination-stryde">
        <button class="page-btn" onclick="goPage(${current-1},'${cat}')" ${current===1?'disabled':''}>
            <i class="bi bi-chevron-left"></i>
        </button>
        ${btns}
        <button class="page-btn" onclick="goPage(${current+1},'${cat}')" ${current===total?'disabled':''}>
            <i class="bi bi-chevron-right"></i>
        </button>
    </div>`;
}

function goPage(page, cat) {
    currentProductsPage = page;
    navigate('category', { category: cat });
}

// ── SEARCH ────────────────────────────────────────
function renderSearch(params) {
    const q = params.q || searchQuery || '';
    const results = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.brand.toLowerCase().includes(q.toLowerCase()) ||
        p.category.toLowerCase().includes(q.toLowerCase())
    );
    return `
    <div class="page-layout">
        ${renderSidebar('all', 'all')}
        <main class="main-content">
            <nav class="breadcrumb-stryde">
                <a onclick="navigate('home')">Inicio</a>
                <span class="sep">›</span>
                <span class="current">Búsqueda</span>
            </nav>
            <div class="section-header">
                <h2 class="section-title">Búsque<span>da</span></h2>
            </div>
            <div style="margin-bottom:2rem">
                <div style="position:relative;max-width:480px">
                    <input type="text" id="search-main" class="form-control" style="background:var(--card-bg);border:1.5px solid var(--border);border-radius:var(--radius);color:var(--white);font-family:var(--font-body);padding:.75rem 1rem;font-size:.95rem" placeholder="Buscar modelos, marcas..." value="${q}" oninput="searchMain(this.value)" onkeydown="if(event.key==='Enter') searchMain(this.value)">
                    <i class="bi bi-search" style="position:absolute;right:1rem;top:50%;transform:translateY(-50%);color:var(--gray)"></i>
                </div>
                ${q ? `<p style="margin-top:.75rem;font-size:.85rem;color:var(--gray)">${results.length} resultado${results.length!==1?'s':''} para "<strong style="color:var(--white)">${q}</strong>"</p>` : ''}
            </div>
            ${results.length > 0
                ? `<div class="products-grid">${results.map(renderProductCard).join('')}</div>`
                : q ? `<div style="text-align:center;padding:4rem;color:var(--gray)"><div style="font-size:3rem">🔍</div><p style="margin-top:1rem">Sin resultados para "${q}"</p></div>` : ''
            }
        </main>
    </div>`;
}

function searchMain(q) {
    searchQuery = q;
    navigate('search', { q });
}

// ── PRODUCT DETAIL ────────────────────────────────
function renderProductDetail(params) {
    const p = PRODUCTS.find(x => x.id === params.id);
    if (!p) return '<div style="padding:4rem;text-align:center;color:var(--gray)">Producto no encontrado.</div>';

    const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
    const cat = CATEGORIES.find(c => c.id === p.category);

    return `
    <div class="page-layout">
        ${renderSidebar(p.category, 'all')}
        <main class="main-content">
            <nav class="breadcrumb-stryde">
                <a onclick="navigate('home')">Inicio</a>
                <span class="sep">›</span>
                <a onclick="navigate('category',{category:'${p.category}'})">
                    ${cat?.name || p.category}
                </a>
                <span class="sep">›</span>
                <span class="current">${p.name}</span>
            </nav>

            <div class="row g-4 mb-5">
                <!-- Images -->
                <div class="col-md-6">
                    <div class="product-detail-img-wrap">
                        <img id="main-img" src="${p.img}" alt="${p.name}">
                    </div>
                    <div class="thumb-row">
                        <div class="thumb active" onclick="setThumb(this, '${p.img}')">
                            <img src="${p.img}" alt="">
                        </div>
                        <div class="thumb" onclick="setThumb(this, 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&q=80')">
                            <img src="https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&q=80" alt="">
                        </div>
                        <div class="thumb" onclick="setThumb(this, 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80')">
                            <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80" alt="">
                        </div>
                    </div>
                </div>

                <!-- Info -->
                <div class="col-md-6">
                    <div class="detail-brand">${p.brand}</div>
                    <h1 class="detail-title">${p.name}</h1>
                    <div class="detail-price">
                        $${p.price}
                        ${p.oldPrice ? `<span class="detail-price-old">$${p.oldPrice}</span>` : ''}
                    </div>

                    <div class="size-label">Talla — <span id="selected-size-label" style="color:var(--white)">Seleccionar</span></div>
                    <div class="size-grid">
                        ${p.sizes.map(s => `
                            <button class="size-btn" onclick="selectSize(this, ${p.id}, ${s})">${s}</button>
                        `).join('')}
                    </div>

                    <div style="display:flex;gap:.75rem;margin-bottom:2rem">
                        <button class="btn-primary-stryde" style="flex:1" id="btn-cart-detail" onclick="addToCartFromDetail(${p.id})">
                            <i class="bi bi-bag-plus me-2"></i>Agregar al carrito
                        </button>
                        <button class="btn-outline-stryde" onclick="navigate('cart')">
                            <i class="bi bi-cart3"></i>
                        </button>
                    </div>

                    <!-- Tabs -->
                    <div class="tabs-stryde">
                        <button class="tab-btn active" onclick="switchTab(this,'tab-desc')">Descripción</button>
                        <button class="tab-btn" onclick="switchTab(this,'tab-specs')">Especificaciones</button>
                        <button class="tab-btn" onclick="switchTab(this,'tab-reviews')">Reseñas</button>
                    </div>
                    <div id="tab-desc" class="tab-pane active">${p.desc}</div>
                    <div id="tab-specs" class="tab-pane">
                        <table style="width:100%;font-size:.85rem;color:rgba(245,242,238,.7)">
                            <tr><td style="padding:.4rem 0;color:var(--gray);width:40%">Marca</td><td>${p.brand}</td></tr>
                            <tr><td style="padding:.4rem 0;color:var(--gray)">Categoría</td><td>${cat?.name || p.category}</td></tr>
                            <tr><td style="padding:.4rem 0;color:var(--gray)">Tallas disponibles</td><td>${p.sizes.join(', ')}</td></tr>
                            <tr><td style="padding:.4rem 0;color:var(--gray)">Material</td><td>Cuero / Sintético premium</td></tr>
                            <tr><td style="padding:.4rem 0;color:var(--gray)">Suela</td><td>Goma vulcanizada</td></tr>
                        </table>
                    </div>
                    <div id="tab-reviews" class="tab-pane">
                        <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:1rem">
                            <span style="font-family:var(--font-display);font-size:2.5rem">4.7</span>
                            <div>
                                <div style="color:#f5a623;font-size:1rem">★★★★★</div>
                                <div style="font-size:.78rem;color:var(--gray)">24 reseñas</div>
                            </div>
                        </div>
                        <p>Gran calidad, muy cómodos desde el primer día. Totalmente recomendados.</p>
                    </div>

                    <!-- Accordion -->
                    <div class="accordion-stryde mt-3">
                        <div class="accordion-item">
                            <button class="accordion-trigger" onclick="toggleAccordion(this)">
                                Envío y devoluciones <span class="chevron"><i class="bi bi-chevron-down"></i></span>
                            </button>
                            <div class="accordion-body">
                                Envío gratis en compras mayores a $150. Entrega en 24-48 horas hábiles. Cambios y devoluciones gratis dentro de los 30 días de la compra.
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-trigger" onclick="toggleAccordion(this)">
                                Guía de tallas <span class="chevron"><i class="bi bi-chevron-down"></i></span>
                            </button>
                            <div class="accordion-body">
                                Recomendamos elegir tu talla habitual. Si estás entre dos tallas, selecciona la mayor. Todos nuestros productos están calibrados según el estándar europeo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- RELATED -->
            ${related.length > 0 ? `
            <div class="section-header">
                <h2 class="section-title">Productos <span>relacionados</span></h2>
            </div>
            <div class="products-grid">
                ${related.map(renderProductCard).join('')}
            </div>` : ''}
        </main>
    </div>`;
}

// ── CART PAGE ─────────────────────────────────────
function renderCart() {
    const total = cartTotal();
    const shipping = total >= 150 ? 0 : 12;

    return `
    <div class="page-layout">
        ${renderSidebar('all', 'all')}
        <main class="main-content">
            <nav class="breadcrumb-stryde">
                <a onclick="navigate('home')">Inicio</a>
                <span class="sep">›</span>
                <span class="current">Carrito de compras</span>
            </nav>
            <div class="section-header">
                <h2 class="section-title">Carre<span>to</span></h2>
                <span style="font-size:.78rem;color:var(--gray)">${cartCount()} artículo${cartCount()!==1?'s':''}</span>
            </div>

            <div class="row g-4">
                <div class="col-lg-8">
                    ${cart.length === 0
                        ? `<div style="text-align:center;padding:5rem;color:var(--gray)">
                            <div style="font-size:3.5rem">🛒</div>
                            <p style="margin-top:1rem;font-size:1rem">Tu carrito está vacío</p>
                            <button class="btn-primary-stryde mt-3" onclick="navigate('category',{category:'all'})">Explorar productos</button>
                           </div>`
                        : cart.map(item => {
                            const p = PRODUCTS.find(x => x.id === item.productId);
                            if (!p) return '';
                            return `
                            <div class="cart-item">
                                <div class="cart-item-img">
                                    <img src="${p.img}" alt="${p.name}">
                                </div>
                                <div class="cart-item-info">
                                    <div class="cart-item-brand">${p.brand}</div>
                                    <div class="cart-item-name">${p.name}</div>
                                    <div class="cart-item-size">Talla: ${item.size}</div>
                                </div>
                                <div class="qty-control">
                                    <button class="qty-btn" onclick="changeQty('${item.key}',-1)"><i class="bi bi-dash"></i></button>
                                    <span class="qty-num">${item.qty}</span>
                                    <button class="qty-btn" onclick="changeQty('${item.key}',1)"><i class="bi bi-plus"></i></button>
                                </div>
                                <div class="cart-item-price">$${(item.price * item.qty).toFixed(0)}</div>
                                <button class="btn-remove" onclick="removeFromCart('${item.key}')">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>`;
                          }).join('')
                    }
                </div>

                <div class="col-lg-4">
                    <div class="cart-summary">
                        <div class="summary-title">Resumen</div>
                        <div class="summary-row">
                            <span>Subtotal</span>
                            <span>$${total.toFixed(0)}</span>
                        </div>
                        <div class="summary-row">
                            <span>Envío</span>
                            <span class="${shipping===0?'value-accent':''}">${shipping===0?'GRATIS':'$'+shipping}</span>
                        </div>
                        <div class="summary-row total">
                            <span>Total</span>
                            <span>$${(total+shipping).toFixed(0)}</span>
                        </div>
                        ${cart.length > 0 ? `
                        <button class="btn-primary-stryde w-100 mt-3" onclick="navigate('checkout')">
                            Proceder al pago <i class="bi bi-arrow-right ms-1"></i>
                        </button>` : ''}
                        <button class="btn-outline-stryde w-100 mt-2" onclick="navigate('category',{category:'all'})">
                            Seguir comprando
                        </button>
                        ${total < 150 && total > 0 ? `
                        <p style="font-size:.75rem;color:var(--gray);text-align:center;margin-top:.75rem">
                            Agrega $${(150-total).toFixed(0)} más para envío gratis
                        </p>` : ''}
                    </div>
                </div>
            </div>
        </main>
    </div>`;
}

// ── CHECKOUT ──────────────────────────────────────
function renderCheckout() {
    const total = cartTotal();
    const shipping = total >= 150 ? 0 : 12;

    return `
    <div class="page-layout">
        ${renderSidebar('all','all')}
        <main class="main-content">
            <nav class="breadcrumb-stryde">
                <a onclick="navigate('home')">Inicio</a>
                <span class="sep">›</span>
                <a onclick="navigate('cart')">Carrito de compras</a>
                <span class="sep">›</span>
                <span class="current">Pago</span>
            </nav>
            <div class="section-header">
                <h2 class="section-title">Información de <span>pago</span></h2>
            </div>

            <div class="row g-4">
                <!-- FORM -->
                <div class="col-lg-7">
                    <div class="form-stryde">

                        <div class="section-divider">Datos personales</div>
                        <div class="row g-3 mb-4">
                            <div class="col-sm-6">
                                <label class="form-label">Nombre *</label>
                                <input type="text" class="form-control" placeholder="Juan">
                            </div>
                            <div class="col-sm-3">
                                <label class="form-label">Apellido 1 *</label>
                                <input type="text" class="form-control" placeholder="Pérez">
                            </div>
                            <div class="col-sm-3">
                                <label class="form-label">Apellido 2</label>
                                <input type="text" class="form-control" placeholder="García">
                            </div>
                            <div class="col-sm-8">
                                <label class="form-label">Correo electrónico *</label>
                                <input type="email" class="form-control" placeholder="juan@correo.com">
                            </div>
                            <div class="col-sm-4">
                                <label class="form-label">Teléfono</label>
                                <input type="tel" class="form-control" placeholder="+506 8888-0000">
                            </div>
                        </div>

                        <div class="section-divider">Dirección de entrega</div>
                        <div class="row g-3 mb-4">
                            <div class="col-12">
                                <label class="form-label">Dirección *</label>
                                <input type="text" class="form-control" placeholder="Calle, número, urbanización">
                            </div>
                            <div class="col-sm-6">
                                <label class="form-label">Provincia *</label>
                                <select class="form-select">
                                    <option value="">Seleccionar...</option>
                                    <option>San José</option>
                                    <option>Alajuela</option>
                                    <option>Heredia</option>
                                    <option>Cartago</option>
                                    <option>Limón</option>
                                    <option>Guanacaste</option>
                                    <option>Puntarenas</option>
                                </select>
                            </div>
                            <div class="col-sm-6">
                                <label class="form-label">Cantón *</label>
                                <input type="text" class="form-control" placeholder="Cantón">
                            </div>
                            <div class="col-12">
                                <label class="form-label">Referencias adicionales</label>
                                <input type="text" class="form-control" placeholder="Color de la casa, cerca del parque...">
                            </div>
                        </div>

                        <div class="section-divider">Método de pago</div>
                        <div class="payment-options mb-4">
                            <label class="payment-opt selected" id="pay-tarjeta">
                                <input type="radio" name="payment" value="tarjeta" checked onchange="selectPayment('tarjeta')">
                                <i class="bi bi-credit-card"></i> Tarjeta
                            </label>
                            <label class="payment-opt" id="pay-transferencia">
                                <input type="radio" name="payment" value="transferencia" onchange="selectPayment('transferencia')">
                                <i class="bi bi-bank"></i> Transferencia
                            </label>
                            <label class="payment-opt" id="pay-contra-entrega">
                                <input type="radio" name="payment" value="contra-entrega" onchange="selectPayment('contra-entrega')">
                                <i class="bi bi-cash"></i> Contra entrega
                            </label>
                        </div>

                        <!-- Card fields (visible by default) -->
                        <div id="card-fields" class="row g-3 mb-4">
                            <div class="col-12">
                                <label class="form-label">Número de tarjeta *</label>
                                <input type="text" class="form-control" placeholder="•••• •••• •••• ••••" maxlength="19" oninput="formatCard(this)">
                            </div>
                            <div class="col-sm-6">
                                <label class="form-label">Vencimiento *</label>
                                <input type="text" class="form-control" placeholder="MM/AA" maxlength="5" oninput="formatExp(this)">
                            </div>
                            <div class="col-sm-6">
                                <label class="form-label">CVV *</label>
                                <input type="text" class="form-control" placeholder="•••" maxlength="3">
                            </div>
                        </div>

                        <button class="btn-primary-stryde w-100" style="font-size:1rem;padding:1rem" onclick="placeOrder()">
                            <i class="bi bi-lock me-2"></i> Confirmar pedido — $${(total+shipping).toFixed(0)}
                        </button>
                    </div>
                </div>

                <!-- ORDER SUMMARY -->
                <div class="col-lg-5">
                    <div class="cart-summary">
                        <div class="summary-title">Tu pedido</div>
                        ${cart.map(item => {
                            const p = PRODUCTS.find(x => x.id === item.productId);
                            if (!p) return '';
                            return `
                            <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem;padding-bottom:.75rem;border-bottom:1px solid var(--border)">
                                <img src="${p.img}" style="width:52px;height:52px;object-fit:contain;background:#252525;border-radius:8px;padding:.3rem;flex-shrink:0">
                                <div style="flex:1;min-width:0">
                                    <div style="font-size:.82rem;font-weight:500">${p.name}</div>
                                    <div style="font-size:.72rem;color:var(--gray)">T.${item.size} × ${item.qty}</div>
                                </div>
                                <div style="font-family:var(--font-display);font-size:1.1rem">$${(item.price*item.qty).toFixed(0)}</div>
                            </div>`;
                        }).join('')}
                        <div class="summary-row">
                            <span>Subtotal</span>
                            <span>$${total.toFixed(0)}</span>
                        </div>
                        <div class="summary-row">
                            <span>Envío</span>
                            <span class="${shipping===0?'value-accent':''}">${shipping===0?'GRATIS':'$'+shipping}</span>
                        </div>
                        <div class="summary-row total">
                            <span>Total</span>
                            <span>$${(total+shipping).toFixed(0)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>`;
}

// ── FOOTER ────────────────────────────────────────
function renderFooter() {
    return `
    <footer class="footer-stryde">
        <div class="container-fluid px-4">
            <div class="row g-4 mb-2">
                <div class="col-md-4">
                    <div class="footer-brand">STR<span>Y</span>DE</div>
                    <p class="footer-tagline">El paso que te define.</p>
                    <p style="font-size:.82rem;color:rgba(245,242,238,.4);max-width:260px">Tu tienda de calzado premium. Todas las marcas líderes en un solo lugar.</p>
                </div>
                <div class="col-md-2">
                    <div class="footer-heading">Categorías</div>
                    ${CATEGORIES.map(c => `<a class="footer-link" onclick="navigate('category',{category:'${c.id}'})">${c.name}</a>`).join('')}
                </div>
                <div class="col-md-2">
                    <div class="footer-heading">Marcas</div>
                    ${BRANDS.slice(0,5).map(b => `<span class="footer-link">${b}</span>`).join('')}
                </div>
                <div class="col-md-2">
                    <div class="footer-heading">Ayuda</div>
                    <span class="footer-link">Envíos y entregas</span>
                    <span class="footer-link">Cambios y devoluciones</span>
                    <span class="footer-link">Guía de tallas</span>
                    <span class="footer-link">Preguntas frecuentes</span>
                </div>
                <div class="col-md-2">
                    <div class="footer-heading">Contacto</div>
                    <span class="footer-link"><i class="bi bi-envelope me-2"></i>soporte@stryde.com</span>
                    <span class="footer-link"><i class="bi bi-telephone me-2"></i>+506 2222-0000</span>
                    <span class="footer-link"><i class="bi bi-geo-alt me-2"></i>San José, Costa Rica</span>
                </div>
            </div>
            <div class="footer-bottom">
                <span class="footer-copy">© 2025 STRYDE — Todos los derechos reservados. Desarrollado por <strong>STRYDE Dev</strong></span>
                <div class="footer-socials">
                    <a class="social-btn" href="#"><i class="bi bi-instagram"></i></a>
                    <a class="social-btn" href="#"><i class="bi bi-facebook"></i></a>
                    <a class="social-btn" href="#"><i class="bi bi-tiktok"></i></a>
                    <a class="social-btn" href="#"><i class="bi bi-twitter-x"></i></a>
                </div>
            </div>
        </div>
    </footer>`;
}

// ── BIND EVENTS ───────────────────────────────────
function bindEvents() {
    updateCartBadge();
    // Close search dropdown on outside click
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('search-dropdown');
        const searchWrap = document.querySelector('.navbar-search');
        if (dropdown && searchWrap && !searchWrap.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    }, { once: true });
}

// ── DETAIL HELPERS ────────────────────────────────
let selectedSize = null;
let selectedProductId = null;

function selectSize(btn, productId, size) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = size;
    selectedProductId = productId;
    const label = document.getElementById('selected-size-label');
    if (label) label.textContent = size;
}

function addToCartFromDetail(productId) {
    if (!selectedSize) {
        showToast('Por favor seleccioná una talla', 'error');
        return;
    }
    addToCart(productId, selectedSize);
}

function setThumb(el, src) {
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    const main = document.getElementById('main-img');
    if (main) main.src = src;
}

function switchTab(btn, tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const pane = document.getElementById(tabId);
    if (pane) pane.classList.add('active');
}

function toggleAccordion(btn) {
    const body = btn.nextElementSibling;
    const isOpen = body.classList.contains('open');
    // Close all
    document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.accordion-trigger').forEach(t => t.classList.remove('open'));
    if (!isOpen) {
        body.classList.add('open');
        btn.classList.add('open');
    }
}

function selectPayment(method) {
    document.querySelectorAll('.payment-opt').forEach(o => o.classList.remove('selected'));
    const el = document.getElementById('pay-' + method);
    if (el) el.classList.add('selected');
    const cardFields = document.getElementById('card-fields');
    if (cardFields) cardFields.style.display = method === 'tarjeta' ? 'flex' : 'none';
}

function formatCard(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 16);
    input.value = v.replace(/(.{4})/g, '$1 ').trim();
}

function formatExp(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 4);
    if (v.length >= 3) v = v.substring(0,2) + '/' + v.substring(2);
    input.value = v;
}

function placeOrder() {
    if (cart.length === 0) { showToast('Tu carrito está vacío', 'error'); return; }
    cart = [];
    saveCart();
    updateCartBadge();
    showToast('¡Pedido confirmado! Gracias por tu compra 🎉', 'success');
    setTimeout(() => navigate('home'), 1500);
}

// ── INIT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Render footer
    document.getElementById('footer').innerHTML = renderFooter();
    // Render initial page
    navigate('home');
    // Navbar search
    const navSearch = document.getElementById('nav-search-input');
    if (navSearch) {
        navSearch.addEventListener('input', e => handleSearchInput(e.target.value));
        navSearch.addEventListener('focus', e => handleSearchInput(e.target.value));
        navSearch.addEventListener('blur', closeSearchDropdown);
        navSearch.addEventListener('keydown', e => {
            if (e.key === 'Enter' && navSearch.value.trim()) {
                navigate('search', { q: navSearch.value.trim() });
                const d = document.getElementById('search-dropdown');
                if (d) d.classList.remove('show');
            }
        });
    }
});