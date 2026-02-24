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
    // Reward Progress
    rewardProgressContainer: document.getElementById('rewardProgressContainer'),
    rewardProgressBar: document.getElementById('rewardProgressBar'),
    rewardProgressLabel: document.getElementById('rewardProgressLabel'),
    rewardProgressPercent: document.getElementById('rewardProgressPercent'),
    // Add to Cart
    modalAddToCart: document.getElementById('modalAddToCart')
};


export function showToast(msg, isCustom = false) {
    if (!dom.toast) return;
    dom.toastMsg.textContent = isCustom ? msg : `${msg} added to cart!`;
    dom.toast.classList.add('show');
    if (dom.header) dom.header.classList.add('peek');
    const cartIcon = document.querySelector('.cart-btn-circle');
    if (cartIcon) cartIcon.classList.add('animate-cart');

    setTimeout(() => {
        dom.toast.classList.remove('show');
        if (dom.header) dom.header.classList.remove('peek');
        if (cartIcon) cartIcon.classList.remove('animate-cart');
    }, 2500);
}

export function updateUI(COUPONS, applyCouponCallback, removeCouponCallback, updateQuantityCallback) {
    const totalQty = state.cart.reduce((acc, i) => acc + i.quantity, 0);
    if (dom.cartCount) dom.cartCount.textContent = totalQty;

    if (dom.cartItemsContainer) {
        dom.cartItemsContainer.innerHTML = '';
        state.cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.style.cssText = "display:flex; gap:15px; margin-bottom:1.2rem; align-items:center;";
            itemDiv.innerHTML = `
                <img src="${item.image}" style="width:55px; height:55px; border-radius:12px; object-fit:cover;">
                <div style="flex-grow:1;">
                    <div style="display:flex; justify-content:space-between; font-weight:700; font-size:0.95rem; color:var(--text-main);">
                        <span>${item.name}</span>
                        <span>${currencyFormatter.format(item.price * item.quantity)}</span>
                    </div>
                    <div style="display:flex; align-items:center; gap:12px; margin-top:5px;">
                        <button class="qty-minus" style="border:1.5px solid var(--border-color); background:none; width:26px; height:26px; cursor:pointer; border-radius:6px; font-weight:900; color:var(--text-main);">-</button>
                        <span style="font-weight:800; font-size:0.9rem; color:var(--text-main);">${item.quantity}</span>
                        <button class="qty-plus" style="border:1.5px solid var(--border-color); background:none; width:26px; height:26px; cursor:pointer; border-radius:6px; font-weight:900; color:var(--text-main);">+</button>
                    </div>
                </div>`;

            itemDiv.querySelector('.qty-minus').onclick = () => updateQuantityCallback(item.id, -1);
            itemDiv.querySelector('.qty-plus').onclick = () => updateQuantityCallback(item.id, 1);

            dom.cartItemsContainer.appendChild(itemDiv);
        });
    }

    const sub = state.cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);

    // Discount Logic
    let disc = 0;
    if (state.appliedPromo === "SUMMER20") disc = sub * 0.2;
    else if (state.appliedPromo === "BERRY10") disc = sub * 0.1;
    else if (state.appliedPromo === "FRESH5") disc = sub * 0.05;

    if (dom.subtotalAmount) dom.subtotalAmount.textContent = currencyFormatter.format(sub);
    if (dom.discountAmount) dom.discountAmount.textContent = `-${currencyFormatter.format(disc)}`;
    if (dom.totalAmount) dom.totalAmount.textContent = currencyFormatter.format(sub - disc);

    // Reward Progress Logic
    const nextRewardGoal = 500;
    const progress = Math.min((sub / nextRewardGoal) * 100, 100);
    if (dom.rewardProgressBar) {
        dom.rewardProgressBar.style.width = `${progress}%`;
        if (dom.rewardProgressPercent) dom.rewardProgressPercent.textContent = `${Math.round(progress)}%`;

        if (sub >= nextRewardGoal) {
            dom.rewardProgressLabel.textContent = "FREE DETOX SHOT UNLOCKED! 🍊";
            dom.rewardProgressLabel.style.color = "#10b981";
            dom.rewardProgressBar.style.background = "#10b981";
        } else {
            dom.rewardProgressLabel.textContent = `Add ₹${nextRewardGoal - sub} for a FREE Detox Shot!`;
            dom.rewardProgressLabel.style.color = "var(--text-muted)";
            dom.rewardProgressBar.style.background = "var(--primary)";
        }
    }

    // Render Coupons Section
    if (dom.couponsList) {
        dom.couponsList.innerHTML = '';
        const activeCoupon = COUPONS.find(c => c.code === state.appliedPromo);

        if (activeCoupon) {
            let savings = 0;
            if (activeCoupon.code === "SUMMER20") savings = sub * 0.2;
            else if (activeCoupon.code === "BERRY10") savings = sub * 0.1;
            else if (activeCoupon.code === "FRESH5") savings = sub * 0.05;

            dom.couponsContainer.style.background = `var(--bg-card)`;
            dom.couponsContainer.style.padding = '0.8rem';
            dom.couponsContainer.style.borderRadius = '12px';
            dom.couponsContainer.style.border = `1px solid var(--border-color)`;
            dom.couponsContainer.style.marginTop = '0.4rem';

            dom.couponsList.innerHTML = `
                <div style="display:flex; align-items:center; width:100%; gap:10px;">
                    <div style="background:${activeCoupon.color}; color:#000; width:38px; height:38px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                        <i data-lucide="ticket-percent" style="width:20px; height:20px;"></i>
                    </div>
                    <div style="flex-grow:1;">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                            <span style="font-weight:900; font-size:0.8rem; letter-spacing:0.5px; color:var(--text-main);">${activeCoupon.code}</span>
                            <button id="switchCouponBtn" style="background:none; border:none; color:var(--text-muted); font-size:0.7rem; text-decoration:underline; font-weight:700; cursor:pointer; padding:0;">Change code</button>
                        </div>
                        <div style="font-size:0.7rem; color:#10b981; font-weight:800; margin-top:1px;">
                            Saving ${currencyFormatter.format(savings)} on this order!
                        </div>
                    </div>
                </div>
            `;

            const switchBtn = document.getElementById('switchCouponBtn');
            if (switchBtn) switchBtn.onclick = () => removeCouponCallback();
            if (window.lucide) window.lucide.createIcons();
        } else {
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
                    border: 1px solid ${isEligible ? coupon.color : 'var(--border-color)'};
                    color: ${isEligible ? coupon.color : 'var(--text-muted)'};
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

    if (dom.modalItemImage) dom.modalItemImage.src = item.image;
    if (dom.modalItemName) dom.modalItemName.textContent = item.name;
    if (dom.modalItemPrice) dom.modalItemPrice.textContent = currencyFormatter.format(item.price);
    if (dom.modalItemDesc) dom.modalItemDesc.textContent = item.description;
    if (dom.modalItemBenefits) dom.modalItemBenefits.textContent = item.benefits || "Pure natural goodness in every sip.";

    if (dom.modalItemTags) dom.modalItemTags.innerHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    if (dom.modalItemIngredients) {
        dom.modalItemIngredients.innerHTML = (item.ingredients || ["Fresh Fruits", "Natural Sweetener"]).map(ing =>
            `<span class="ingredients-pill">${ing}</span>`
        ).join('');
    }

    if (dom.modalAddToCart) {
        dom.modalAddToCart.onclick = () => {
            addToCartCallback(item.id);
            dom.itemDetailModal.style.display = 'none';
        };
    }

    dom.itemDetailModal.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
}
