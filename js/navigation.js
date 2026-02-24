import { state, setState } from './state.js';
import { dom } from './ui.js';

export function initNavigation() {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Header Hide/Show logic
        if (window.innerWidth > 768) {
            if (currentScrollY > state.lastScrollY && currentScrollY > 100) {
                dom.header.classList.add('hidden');
            } else {
                dom.header.classList.remove('hidden');
            }
        } else {
            dom.header.classList.remove('hidden');
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
    };

    const navItems = [...dom.navItems, ...dom.bottomNavItems];
    navItems.forEach(link => {
        link.addEventListener('click', (e) => {
            if (document.startViewTransition) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                document.startViewTransition(() => {
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            }
        });
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check
}
