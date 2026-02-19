// Full FreshFusion Menu with Local Asset Paths
const MENU_ITEMS = [
    {
        id: 1, name: "Orange Juice", category: "Fresh Juices", price: 70,
        description: "100% Valencia oranges.",
        image: "assets/orange.jpg",
        tags: ["🍊 100% Natural", "Daily Fresh"]
    },
    {
        id: 2, name: "Sweet Lime (Mosambi)", category: "Fresh Juices", price: 65,
        description: "Classic refreshing citrus.",
        image: "assets/sweet-lime.jpg",
        tags: ["🍊 Freshly Made", "Hydrating"]
    },
    {
        id: 3, name: "Watermelon Juice", category: "Fresh Juices", price: 60,
        description: "Summer hydration in a bottle.",
        image: "assets/watermelon.jpg",
        tags: ["🍊 Hydrating", "No Added Sugar"]
    },
    {
        id: 4, name: "Pineapple Juice", category: "Fresh Juices", price: 75,
        description: "Tropical punch goodness.",
        image: "assets/pineapple.jpg",
        tags: ["🍊 Premium Quality", "🔥 Popular"]
    },
    {
        id: 5, name: "Pomegranate Juice", category: "Fresh Juices", price: 110,
        description: "Antioxidant powerhouse.",
        image: "assets/pomegranate.jpg",
        tags: ["⭐ Best Seller", "Healthy Choice"]
    },
    {
        id: 6, name: "Apple Juice", category: "Fresh Juices", price: 80,
        description: "Freshly pressed Fuji apples.",
        image: "assets/apple.jpg",
        tags: ["🍊 Healthy Choice", "🔥 Popular"]
    },
    {
        id: 7, name: "Mango Smoothie", category: "Smoothies", price: 90,
        description: "Alphonso seasonal delight.",
        image: "assets/mango.jpg",
        tags: ["🥭 Customer Favorite", "Freshly Made"]
    },
    {
        id: 8, name: "Strawberry Smoothie", category: "Smoothies", price: 110,
        description: "Berries and cream luxury.",
        image: "assets/strawberry.jpg",
        tags: ["⭐ Best Seller", "🥭 Premium Quality"]
    },
    {
        id: 9, name: "Banana Honey Smoothie", category: "Smoothies", price: 85,
        description: "Healthy honey banana mix.",
        image: "assets/banana.jpg",
        tags: ["🥭 Healthy Choice", "Made to Order"]
    },
    {
        id: 10, name: "Mixed Fruit Smoothie", category: "Smoothies", price: 120,
        description: "The best of everything.",
        image: "assets/mixed-fruit.jpg",
        tags: ["🥭 Customer Favorite", "🔥 Popular"]
    },
    {
        id: 11, name: "Blueberry Smoothie", category: "Smoothies", price: 130,
        description: "Rich wild blueberries.",
        image: "assets/blueberry.jpg",
        tags: ["🥭 Premium Quality", "No Added Sugar"]
    },
    {
        id: 12, name: "Lemon Mint Refresher", category: "Detox & Health", price: 60,
        description: "Deeply cooling zest.",
        image: "assets/lemon-mint.jpg",
        tags: ["🌿 Hydrating", "Freshly Made"]
    },
    {
        id: 13, name: "Carrot Beetroot Juice", category: "Detox & Health", price: 100,
        description: "Natural detox for health.",
        image: "assets/carrot-beet.jpg",
        tags: ["🌿 Healthy Choice", "Daily Fresh"]
    },
    {
        id: 14, name: "Green Detox", category: "Detox & Health", price: 140,
        description: "Ultimate green energy blend.",
        image: "assets/green-detox.jpg",
        tags: ["🌿 Healthy Choice", "⭐ Customer Favorite"]
    },
    {
        id: 15, name: "Kiwi Refresh", category: "Fresh Juices", price: 95,
        description: "Zesty green kiwi nectar.",
        image: "assets/kiwi.jpg",
        tags: ["🌿 Vitamin C Boost", "Daily Fresh"]
    },
    {
        id: 16, name: "Kiwi Green Smoothie", category: "Smoothies", price: 120,
        description: "Kiwi and spinach wellness.",
        image: "assets/kiwi-smoothie.jpg",
        tags: ["🥭 Detoxing", "Made to Order"]
    },
    {
        id: 17, name: "Strawberry Juice", category: "Fresh Juices", price: 85,
        description: "Pure chilled strawberry nectar.",
        image: "assets/strawberry-juice.jpg",
        tags: ["🍊 Seasonal", "Daily Fresh"]
    },
    {
        id: 18, name: "Mosambi Mint Cooler", category: "Fresh Juices", price: 75,
        description: "Fresh sweet lime with mint twist.",
        image: "assets/mosambi-mint.jpg",
        tags: ["🍊 Freshly Made", "🌿 Refreshing"]
    },
    {
        id: 19, name: "Pineapple Mint Juice", category: "Fresh Juices", price: 85,
        description: "Tropical mint refreshment.",
        image: "assets/pineapple-mint.jpg",
        tags: ["🍊 Premium Quality", "🌿 Refreshing"]
    },
    {
        id: 20, name: "Cranberry Juice", category: "Fresh Juices", price: 115,
        description: "Tangy antioxidant boost.",
        image: "assets/cranberry.jpg",
        tags: ["🍊 Healthy Choice", "🔥 Popular"]
    },
    {
        id: 21, name: "Tender Coconut Water", category: "Detox & Health", price: 50,
        description: "Pure natural hydration.",
        image: "assets/tender-coconut.jpg",
        tags: ["🌿 100% Natural", "Daily Fresh"]
    },
    {
        id: 22, name: "Chocolate Banana Smoothie", category: "Smoothies", price: 120,
        description: "Creamy banana cocoa blend.",
        image: "assets/choc-banana.jpg",
        tags: ["🥭 Customer Favorite", "Daily Fresh"]
    },
    {
        id: 23, name: "Peanut Butter Smoothie", category: "Smoothies", price: 140,
        description: "Protein-packed creamy delight.",
        image: "assets/peanut-butter.jpg",
        tags: ["🥭 Premium Quality", "Made to Order"]
    },
    {
        id: 24, name: "Avocado Smoothie", category: "Smoothies", price: 150,
        description: "Healthy creamy superfruit mix.",
        image: "assets/avocado.jpg",
        tags: ["⭐ Best Seller", "🥭 Premium Quality"]
    },
    {
        id: 25, name: "Ginger Lemon Shot", category: "Detox & Health", price: 40,
        description: "Immunity booster shot.",
        image: "assets/ginger-shot.jpg",
        tags: ["🌿 Healthy Choice", "Daily Fresh"]
    },
    {
        id: 26, name: "Spinach Apple Detox", category: "Detox & Health", price: 130,
        description: "Green fiber energy drink.",
        image: "assets/spinach-apple.jpg",
        tags: ["🌿 Healthy Choice", "No Added Sugar"]
    },
    {
        id: 27, name: "Cucumber Mint Cooler", category: "Detox & Health", price: 70,
        description: "Light and refreshing cleanse.",
        image: "assets/cucumber-mint.jpg",
        tags: ["🌿 Hydrating", "Freshly Made"]
    },
    {
        id: 28, name: "Aloe Vera Honey Drink", category: "Detox & Health", price: 150,
        description: "Natural digestion support.",
        image: "assets/aloe-honey.jpg",
        tags: ["⭐ Best Seller", "🌿 Healthy Choice"]
    }
];

// App State
let cart = [];
let appliedPromo = "";
let currentCategory = 'all';
let lastScrollY = window.scrollY;

// DOM
const menuGrid = document.getElementById('menuGrid');
const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartItemsContainer = document.getElementById('cartItems');
const subtotalAmount = document.getElementById('subtotalAmount');
const discountAmount = document.getElementById('discountAmount');
const totalAmount = document.getElementById('totalAmount');
const header = document.getElementById('mainHeader');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');
const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
const toast = document.getElementById('itemToast');
const toastMsg = document.getElementById('toastMessage');

const currencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', minimumFractionDigits: 0
});

// Render Menu
function renderMenu() {
    menuGrid.innerHTML = '';
    const filtered = currentCategory === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.category === currentCategory);

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'juice-card';
        const tagsHtml = item.tags.map(tag => {
            let colorClass = '';
            if (tag.includes('🍊')) colorClass = 'tag-juice';
            else if (tag.includes('🥭')) colorClass = 'tag-smoothie';
            else if (tag.includes('🌿')) colorClass = 'tag-detox';
            else if (tag.includes('⭐')) colorClass = 'tag-best';
            else if (tag.includes('🔥')) colorClass = 'tag-popular';
            return `<span class="tag ${colorClass}">${tag}</span>`;
        }).join('');

        card.innerHTML = `
            <div class="juice-img-container"><img src="${item.image}" class="juice-img" alt="${item.name}"></div>
            <div class="item-tags">${tagsHtml}</div>
            <h3 style="font-weight:700">${item.name}</h3>
            <p style="font-size:0.9rem; color:#666;">${item.description}</p>
            <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center; padding-top:1rem;">
                <span style="font-weight:800; font-size:1.4rem;">${currencyFormatter.format(item.price)}</span>
                <button class="add-btn" onclick="addToCart(${item.id})">ADD</button>
            </div>`;
        menuGrid.appendChild(card);
    });
}

// UI Updates
function updateUI() {
    cartCount.textContent = cart.reduce((acc, i) => acc + i.quantity, 0);
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        cartItemsContainer.innerHTML += `
            <div style="display:flex; gap:15px; margin-bottom:1.5rem; align-items:center;">
                <img src="${item.image}" style="width:60px; height:60px; border-radius:12px; object-fit:cover;">
                <div style="flex-grow:1;">
                    <div style="display:flex; justify-content:space-between; font-weight:700;">
                        <span>${item.name}</span>
                        <span>${currencyFormatter.format(item.price * item.quantity)}</span>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px; margin-top:5px;">
                        <button onclick="updateQuantity(${item.id}, -1)" style="border:1px solid #000; background:none; width:28px; height:28px; cursor:pointer; border-radius:8px;">-</button>
                        <span style="font-weight:700;">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" style="border:1px solid #000; background:none; width:28px; height:28px; cursor:pointer; border-radius:8px;">+</button>
                    </div>
                </div>
            </div>`;
    });

    const sub = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
    let disc = appliedPromo === "SUMMER20" ? sub * 0.2 : (appliedPromo === "BERRY10" ? sub * 0.1 : (sub > 500 ? sub * 0.05 : 0));
    subtotalAmount.textContent = currencyFormatter.format(sub);
    discountAmount.textContent = `-${currencyFormatter.format(disc)}`;
    totalAmount.textContent = currencyFormatter.format(sub - disc);
}

// Interactive Feedback
function showToast(name) {
    if (!toast) return;
    toastMsg.textContent = `${name} added to cart!`;
    toast.classList.add('show');
    header.classList.add('peek');
    const cartIcon = document.querySelector('.cart-btn-circle');
    if (cartIcon) cartIcon.classList.add('animate-cart');

    setTimeout(() => {
        toast.classList.remove('show');
        header.classList.remove('peek');
        if (cartIcon) cartIcon.classList.remove('animate-cart');
    }, 2500);
}

function addToCart(id) {
    const item = MENU_ITEMS.find(i => i.id === id);
    const existing = cart.find(i => i.id === id);
    if (existing) existing.quantity++; else cart.push({ ...item, quantity: 1 });
    updateUI();
    showToast(item.name);
}

// Navigation Logic
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (window.innerWidth > 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) header.classList.add('hidden');
        else header.classList.remove('hidden');
    }
    lastScrollY = currentScrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        const id = section.getAttribute('id');
        if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
            [navItems, bottomNavItems].forEach(navSet => {
                navSet.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(id)) link.classList.add('active');
                });
            });
        }
    });
});

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
    updateUI();
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderMenu();
    });
});

document.getElementById('applyPromo').addEventListener('click', () => {
    const val = document.getElementById('promoCode').value.toUpperCase();
    if (val === "SUMMER20" || val === "BERRY10") {
        appliedPromo = val;
        document.getElementById('promoStatus').textContent = "Applied!";
        document.getElementById('promoStatus').style.color = "green";
        updateUI();
    }
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) return;
    const randomId = Math.floor(Math.random() * 9000) + 1000;
    const invIdElem = document.getElementById('invoiceId');
    if (invIdElem) invIdElem.textContent = randomId;

    document.getElementById('finalBillItems').innerHTML = '';
    cart.forEach(item => {
        document.getElementById('finalBillItems').innerHTML += `
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-weight:500;">
                <span style="color:#333;">${item.name} x ${item.quantity}</span>
                <span style="font-weight:700;">${currencyFormatter.format(item.price * item.quantity)}</span>
            </div>`;
    });

    const sub = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
    let disc = appliedPromo === "SUMMER20" ? sub * 0.2 : (appliedPromo === "BERRY10" ? sub * 0.1 : (sub > 500 ? sub * 0.05 : 0));

    if (disc > 0) {
        document.getElementById('finalBillItems').innerHTML += `
            <div style="display:flex; justify-content:space-between; margin-top:10px; padding-top:10px; border-top:1px dashed #eee; color:#ef4444; font-weight:600;">
                <span>Discount Applied</span>
                <span>-${currencyFormatter.format(disc)}</span>
            </div>`;
    }

    document.getElementById('finalGrandTotal').textContent = totalAmount.textContent;
    cartDrawer.style.right = '-100%';
    document.getElementById('successModal').style.display = 'flex';
    cart = []; appliedPromo = ""; updateUI();
});

document.getElementById('cartToggle').addEventListener('click', () => cartDrawer.style.right = '0');
document.getElementById('closeCart').addEventListener('click', () => cartDrawer.style.right = '-100%');
document.getElementById('closeModal').addEventListener('click', () => document.getElementById('successModal').style.display = 'none');

renderMenu();
updateUI();
lucide.createIcons();
