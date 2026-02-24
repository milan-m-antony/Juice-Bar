import { COUPONS } from './js/data.js';
import { updateUI, dom, openItemModal, showToast } from './js/ui.js';
import { initMenu, renderMenu } from './js/menu.js';
import { initCart, addToCart, updateQuantity, applyCoupon, removeCoupon } from './js/cart.js';
import { initNavigation } from './js/navigation.js';

// Global helper for coupons
window.copyCoupon = (code) => {
    navigator.clipboard.writeText(code);
    showToast(`Coupon ${code} copied!`, true);
};

// Define the main update callback to be passed around
const mainUpdateUI = () => {
    updateUI(COUPONS,
        (code) => applyCoupon(code, mainUpdateUI),
        () => removeCoupon(mainUpdateUI),
        (id, change) => updateQuantity(id, change, mainUpdateUI)
    );
};

// Initialize Modules
function init() {
    const handleOpenModal = (item) => openItemModal(item, (id) => addToCart(id, mainUpdateUI));

    initMenu((id) => addToCart(id, mainUpdateUI), handleOpenModal);
    initCart(mainUpdateUI);
    initNavigation();

    // Modal Close Logic
    if (dom.closeItemModal) {
        dom.closeItemModal.onclick = () => dom.itemDetailModal.style.display = 'none';
    }
    window.onclick = (e) => {
        if (e.target === dom.itemDetailModal) dom.itemDetailModal.style.display = 'none';
        if (e.target === dom.successModal) dom.successModal.style.display = 'none';
    };

    // Initial Render
    renderMenu('', (id) => addToCart(id, mainUpdateUI), handleOpenModal);
    mainUpdateUI();

    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
