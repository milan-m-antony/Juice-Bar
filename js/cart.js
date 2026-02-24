import { state, setState } from './state.js';
import { MENU_ITEMS, COUPONS } from './data.js';
import { dom, showToast, updateUI } from './ui.js';
import { currencyFormatter } from './utils.js';

export function addToCart(id, updateUICallback) {
    const item = MENU_ITEMS.find(i => i.id === id);
    const existing = state.cart.find(i => i.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        state.cart.push({ ...item, quantity: 1 });
    }
    updateUICallback();
    showToast(item.name);
}

export function updateQuantity(id, change, updateUICallback) {
    const item = state.cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) {
        state.cart = state.cart.filter(i => i.id !== id);
    }
    updateUICallback();
}

export function applyCoupon(code, updateUICallback) {
    const sub = state.cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
    const coupon = COUPONS.find(c => c.code === code);

    if (coupon && sub < coupon.min) {
        dom.promoStatus.textContent = `Need ${currencyFormatter.format(coupon.min)} for this!`;
        dom.promoStatus.style.color = "#ef4444";
        return;
    }

    setState({ appliedPromo: code });
    dom.promoCodeInput.value = code;
    dom.promoStatus.textContent = "Coupon Applied!";
    dom.promoStatus.style.color = "#10b981";
    updateUICallback();
}

export function removeCoupon(updateUICallback) {
    setState({ appliedPromo: "" });
    dom.promoCodeInput.value = "";
    dom.promoStatus.textContent = "";
    updateUICallback();
}

export function initCart(updateUICallback) {
    dom.applyPromo.addEventListener('click', () => {
        const val = dom.promoCodeInput.value.toUpperCase();
        const coupon = COUPONS.find(c => c.code === val);
        if (coupon) {
            applyCoupon(val, updateUICallback);
        } else {
            dom.promoStatus.textContent = "Invalid Code";
            dom.promoStatus.style.color = "red";
        }
    });

    dom.checkoutBtn.addEventListener('click', () => {
        if (state.cart.length === 0) return;

        const randomId = Math.floor(Math.random() * 9000) + 1000;
        if (dom.invoiceId) dom.invoiceId.textContent = randomId;

        dom.finalBillItems.innerHTML = '';
        state.cart.forEach(item => {
            dom.finalBillItems.innerHTML += `
                <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-weight:500;">
                    <span style="color:#333;">${item.name} x ${item.quantity}</span>
                    <span style="font-weight:700;">${currencyFormatter.format(item.price * item.quantity)}</span>
                </div>`;
        });

        const sub = state.cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
        let disc = 0;
        if (state.appliedPromo === "SUMMER20") disc = sub * 0.2;
        else if (state.appliedPromo === "BERRY10") disc = sub * 0.1;
        else if (state.appliedPromo === "FRESH5") disc = sub * 0.05;
        else if (sub > 500) disc = sub * 0.05;

        if (disc > 0) {
            dom.finalBillItems.innerHTML += `
                <div style="display:flex; justify-content:space-between; margin-top:10px; padding-top:10px; border-top:1px dashed #eee; color:#ef4444; font-weight:600;">
                    <span>Discount Applied</span>
                    <span>-${currencyFormatter.format(disc)}</span>
                </div>`;
        }

        dom.finalGrandTotal.textContent = dom.totalAmount.textContent;
        dom.cartDrawer.style.right = '-100%';
        dom.successModal.style.display = 'flex';

        // Reset state
        state.cart = [];
        setState({ appliedPromo: "" });
        updateUICallback();
    });

    dom.cartToggle.addEventListener('click', () => dom.cartDrawer.style.right = '0');
    dom.closeCart.addEventListener('click', () => dom.cartDrawer.style.right = '-100%');
    dom.closeModal.addEventListener('click', () => dom.successModal.style.display = 'none');
}
