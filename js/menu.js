import { state, setState } from './state.js';
import { MENU_ITEMS } from './data.js';
import { dom, updateUI } from './ui.js';
import { currencyFormatter } from './utils.js';

export function renderMenu(searchTerm = '', addToCartCallback, openModalCallback) {
    dom.menuGrid.innerHTML = '';
    let filtered = state.currentCategory === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.category === state.currentCategory);

    if (searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        filtered = filtered.filter(item =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }

    if (filtered.length === 0) {
        dom.menuGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #666;">
            <h3>No juices found for "${searchTerm}"</h3>
            <p>Try searching for something else!</p>
        </div>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'juice-card';
        card.style.cursor = 'pointer';
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
            <div class="card-footer" style="margin-top:auto; display:flex; justify-content:space-between; align-items:center; padding-top:1rem;">
                <span class="price-tag" style="font-weight:800; font-size:1.4rem;">${currencyFormatter.format(item.price)}</span>
                <button class="add-btn">ADD</button>
            </div>`;

        // Click on Image or Card title opens Modal
        card.querySelector('.juice-img-container').onclick = (e) => {
            e.stopPropagation();
            openModalCallback(item);
        };

        card.querySelector('.add-btn').onclick = (e) => {
            e.stopPropagation();
            addToCartCallback(item.id);
        };

        dom.menuGrid.appendChild(card);
    });
}

export function initMenu(addToCartCallback, openModalCallback) {
    dom.menuSearch.addEventListener('input', (e) => {
        const term = e.target.value.trim();
        dom.clearSearch.style.display = term ? 'flex' : 'none';
        renderMenu(term, addToCartCallback, openModalCallback);
    });

    dom.clearSearch.addEventListener('click', () => {
        dom.menuSearch.value = '';
        dom.clearSearch.style.display = 'none';
        renderMenu('', addToCartCallback, openModalCallback);
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            setState({ currentCategory: btn.getAttribute('data-category') });
            renderMenu('', addToCartCallback, openModalCallback);
        });
    });
}
