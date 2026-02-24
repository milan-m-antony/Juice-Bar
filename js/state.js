export let state = {
    cart: [],
    appliedPromo: "",
    currentCategory: 'all',
    lastScrollY: window.scrollY
};

export const setState = (newState) => {
    state = { ...state, ...newState };
};
