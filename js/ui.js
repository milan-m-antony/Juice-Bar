import { state } from './state.js';
import { currencyFormatter } from './utils.js';

// DOM Selections
export const dom = {
    menuGrid: document.getElementById('menuGrid'),
    cartCount: document.getElementById('cartCount'),
    cartDrawer: document.getElementById('cartDrawer'),
    cartItemsContainer: document.getElementById('cartItems'),
    subtotalAmount: document.getElementById('subtotalAmount'),
    discountAmount: document.getElementById('discountAmount'),
    totalAmount: document.getElementById('totalAmount'),
    header: document.getElementById('mainHeader'),
    sections: document.querySelectorAll('section'),
    navItems: document.querySelectorAll('.nav-item'),
    bottomNavItems: document.querySelectorAll('.bottom-nav-item'),
    toast: document.getElementById('itemToast'),
    toastMsg: document.getElementById('toastMessage'),
    menuSearch: document.getElementById('menuSearch'),
    clearSearch: document.getElementById('clearSearch'),
    promoCodeInput: document.getElementById('promoCode'),
    applyPromo: document.getElementById('applyPromo'),
    promoStatus: document.getElementById('promoStatus'),
    couponsContainer: document.getElementById('availableCoupons'),
    couponsList: document.getElementById('couponsList'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    invoiceId: document.getElementById('invoiceId'),
    finalBillItems: document.getElementById('finalBillItems'),
    finalGrandTotal: document.getElementById('finalGrandTotal'),
    successModal: document.getElementById('successModal'),
    cartToggle: document.getElementById('cartToggle'),
    closeCart: document.getElementById('closeCart'),
    closeModal: document.getElementById('closeModal'),
    // Item Detail Modal
    itemDetailModal: document.getElementById('itemDetailModal'),
    closeItemModal: document.getElementById('closeItemModal'),
    modalItemImage: document.getElementById('modalItemImage'),
    modalItemName: document.getElementById('modalItemName'),
    modalItemPrice: document.getElementById('modalItemPrice'),
    modalItemTags: document.getElementById('modalItemTags'),
    modalItemDesc: document.getElementById('modalItemDesc'),
    modalItemIngredients: document.getElementById('modalItemIngredients'),
    modalItemBenefits: document.getElementById('modalItemBenefits'),
    modalAddToCart: document.getElementById('modalAddToCart')
};

export function showToast(msg, isCustom = false) {
    if (!dom.toast) return;
    dom.toastMsg.textContent = isCustom ? msg : `${msg} added to cart!`;
    dom.toast.classList.add('show');
    dom.header.classList.add('peek');
    const cartIcon = document.querySelector('.cart-btn-circle');
    if (cartIcon) cartIcon.classList.add('animate-cart');

    setTimeout(() => {
        dom.toast.classList.remove('show');
        dom.header.classList.remove('peek');
        if (cartIcon) cartIcon.classList.remove('animate-cart');
    }, 2500);
}

// Global updateUI function (defined later to avoid circular dependency, but we can export it)
// Instead let's define it here since it's UI related.
export function updateUI(COUPONS, applyCouponCallback, removeCouponCallback, updateQuantityCallback) {
    const totalQty = state.cart.reduce((acc, i) => acc + i.quantity, 0);
    dom.cartCount.textContent = totalQty;

    dom.cartItemsContainer.innerHTML = '';
    state.cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.style.cssText = "display:flex; gap:15px; margin-bottom:1.2rem; align-items:center;";
        itemDiv.innerHTML = `
            <img src="${item.image}" style="width:55px; height:55px; border-radius:12px; object-fit:cover;">
            <div style="flex-grow:1;">
                <div style="display:flex; justify-content:space-between; font-weight:700; font-size:0.95rem;">
                    <span>${item.name}</span>
                    <span>${currencyFormatter.format(item.price * item.quantity)}</span>
                </div>
                <div style="display:flex; align-items:center; gap:12px; margin-top:5px;">
                    <button class="qty-minus" style="border:1.5px solid #eee; background:none; width:26px; height:26px; cursor:pointer; border-radius:6px; font-weight:900;">-</button>
                    <span style="font-weight:800; font-size:0.9rem;">${item.quantity}</span>
                    <button class="qty-plus" style="border:1.5px solid #eee; background:none; width:26px; height:26px; cursor:pointer; border-radius:6px; font-weight:900;">+</button>
                </div>
            </div>`;

        itemDiv.querySelector('.qty-minus').onclick = () => updateQuantityCallback(item.id, -1);
        itemDiv.querySelector('.qty-plus').onclick = () => updateQuantityCallback(item.id, 1);

        dom.cartItemsContainer.appendChild(itemDiv);
    });

    const sub = state.cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);

    // Improved Discount Logic
    let disc = 0;
    if (state.appliedPromo === "SUMMER20") disc = sub * 0.2;
    else if (state.appliedPromo === "BERRY10") disc = sub * 0.1;
    else if (state.appliedPromo === "FRESH5") disc = sub * 0.05;
    else if (sub > 500) disc = sub * 0.05; // Automatic fallback

    dom.subtotalAmount.textContent = currencyFormatter.format(sub);
    dom.discountAmount.textContent = `-${currencyFormatter.format(disc)}`;
    dom.totalAmount.textContent = currencyFormatter.format(sub - disc);

    // Render Coupons Section
    if (dom.couponsList) {
        dom.couponsList.innerHTML = '';
        const activeCoupon = COUPONS.find(c => c.code === state.appliedPromo);

        if (activeCoupon) {
            // Updated Savings Calculation for Display
            let savings = 0;
            if (activeCoupon.code === "SUMMER20") savings = sub * 0.2;
            else if (activeCoupon.code === "BERRY10") savings = sub * 0.1;
            else if (activeCoupon.code === "FRESH5") savings = sub * 0.05;

            // Show Applied Coupon Card (Ticket Style)
            dom.couponsContainer.style.background = `rgba(0,0,0,0.03)`;
            dom.couponsContainer.style.padding = '1rem';
            dom.couponsContainer.style.borderRadius = '15px';
            dom.couponsContainer.style.border = `1px solid #eee`;
            dom.couponsContainer.style.marginTop = '0.5rem';

            dom.couponsList.innerHTML = `
                <div style="display:flex; align-items:center; width:100%; gap:12px;">
                    <div style="background:${activeCoupon.color}; color:#000; width:45px; height:45px; border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                        <i data-lucide="ticket-percent" style="width:24px; height:24px;"></i>
                    </div>
                    <div style="flex-grow:1;">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                            <span style="font-weight:900; font-size:0.85rem; letter-spacing:0.5px;">${activeCoupon.code}</span>
                            <button id="switchCouponBtn" style="background:none; border:none; color:#666; font-size:0.75rem; text-decoration:underline; font-weight:700; cursor:pointer; padding:0;">Change code</button>
                        </div>
                        <div style="font-size:0.75rem; color:#10b981; font-weight:800; margin-top:2px;">
                            Saving ${currencyFormatter.format(savings)} on this order!
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('switchCouponBtn').onclick = () => removeCouponCallback();
            if (window.lucide) window.lucide.createIcons();
        } else {
            // Show Selection List
            dom.couponsContainer.style.background = 'transparent';
            dom.couponsContainer.style.padding = '0';
            dom.couponsContainer.style.border = 'none';
            dom.couponsContainer.style.marginTop = '0.5rem';

            COUPONS.forEach(coupon => {
                const isEligible = sub >= coupon.min;
                const btn = document.createElement('button');
                btn.className = 'coupon-pill';
                btn.disabled = !isEligible;
                btn.innerHTML = `<strong style="font-size:0.75rem; letter-spacing:0.5px;">${coupon.code}</strong>`;

                btn.style.cssText = `
                    background: ${coupon.color}${isEligible ? '15' : '05'};
                    border: 1px solid ${isEligible ? coupon.color : '#eee'};
                    color: ${isEligible ? coupon.color : '#999'};
                    padding: 8px 4px;
                    border-radius: 8px;
                    cursor: ${isEligible ? 'pointer' : 'not-allowed'};
                    flex: 1 1 calc(33.33% - 8px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: 0.2s;
                    opacity: ${isEligible ? '1' : '0.6'};
                    min-width: 0;
                `;

                if (isEligible) btn.onclick = () => applyCouponCallback(coupon.code);
                dom.couponsList.appendChild(btn);
            });
        }
    }
}

export function openItemModal(item, addToCartCallback) {
    if (!dom.itemDetailModal) return;

    dom.modalItemImage.src = item.image;
    dom.modalItemName.textContent = item.name;
    dom.modalItemPrice.textContent = currencyFormatter.format(item.price);
    dom.modalItemDesc.textContent = item.description;
    dom.modalItemBenefits.textContent = item.benefits || "Pure natural goodness in every sip.";

    // Tags
    dom.modalItemTags.innerHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Ingredients
    dom.modalItemIngredients.innerHTML = (item.ingredients || ["Fresh Fruits", "Natural Sweetener"]).map(ing =>
        `<span class="ingredients-pill">${ing}</span>`
    ).join('');

    dom.modalItemModal = dom.modalAddToCart.onclick = () => {
        addToCartCallback(item.id);
        dom.itemDetailModal.style.display = 'none';
    };

    dom.itemDetailModal.style.display = 'flex';

    // Refresh Icons inside modal
    if (window.lucide) window.lucide.createIcons();
}
