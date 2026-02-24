import { state, setState } from './state.js';
import { dom } from './ui.js';

export function initNavigation() {
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Header Hide/Show logic
        if (window.innerWidth > 768) {
            if (currentScrollY > state.lastScrollY && currentScrollY > 100) {
                dom.header.classList.add('hidden');
            } else {
                dom.header.classList.remove('hidden');
            }
        }
        setState({ lastScrollY: currentScrollY });

        // Scrollspy logic
        dom.sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            const id = section.getAttribute('id');

            if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
                [dom.navItems, dom.bottomNavItems].forEach(navSet => {
                    navSet.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').includes(id)) {
                            link.classList.add('active');
                        }
                    });
                });
            }
        });
    });
}
