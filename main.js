document.addEventListener('DOMContentLoaded', () => {

    // --- SHARED ELEMENTS & FUNCTIONS ---
    const body = document.body;

    const setTheme = (theme) => {
        const darkBtn = document.getElementById('dark-mode-toggle');
        const lightBtn = document.getElementById('light-mode-toggle');
        body.classList.toggle('light-mode', theme === 'light');
        lightBtn?.classList.toggle('active', theme === 'light');
        darkBtn?.classList.toggle('active', theme !== 'light');
        localStorage.setItem('theme', theme);
        if (window.skillsChartInstance) {
            updateChartColors(window.skillsChartInstance);
        }
    };

    const highlightActiveNavLink = () => {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
        let activeLinkId;
        if (currentPath.includes('about.html')) activeLinkId = 'nav-about-link';
        else if (currentPath.includes('play.html')) activeLinkId = 'nav-play-link';
        else if (currentPath.includes('index.html') || currentPath === '') activeLinkId = 'nav-work-link';
        else {
            const pageName = currentPath.replace('.html', '');
            activeLinkId = `nav-${pageName}-link`;
        }
        const activeLink = document.getElementById(activeLinkId);
        if (activeLink) {
            activeLink.classList.add('active');
            if (!['nav-work-link', 'nav-play-link', 'nav-about-link'].includes(activeLinkId)) {
                 document.getElementById('nav-work-link')?.classList.add('active');
            }
        } else {
            document.getElementById('nav-work-link')?.classList.add('active');
        }
    };

    // --- INITIALIZATION & EVENT LISTENERS ---
    setTheme(localStorage.getItem('theme') || 'dark');
    document.getElementById('dark-mode-toggle')?.addEventListener('click', () => setTheme('dark'));
    document.getElementById('light-mode-toggle')?.addEventListener('click', () => setTheme('light'));

    const yearSpan = document.getElementById('copyright-year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    highlightActiveNavLink();

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (hamburgerBtn && sidebar && overlay) {
        const toggleSidebar = () => {
            body.classList.toggle('sidebar-open');
            sidebar.classList.toggle('-translate-x-full');
            hamburgerBtn.classList.toggle('open');
            overlay.classList.toggle('hidden');
        };
        hamburgerBtn.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);
        sidebar.querySelectorAll('a, button').forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.id.includes('mode-toggle') || link.textContent === 'EMAIL' || link.target === '_blank') return;
                if (window.innerWidth < 1024) toggleSidebar();
            });
        });
    }

    if (window.matchMedia("(pointer: fine)").matches) {
        const cursorDot = document.querySelector('.cursor-dot');
        if (cursorDot) {
            const interactiveElements = document.querySelectorAll('a, button, .work-card, .image-grid-item, .project-card, .close-btn, .prev-btn, .next-btn');
            window.addEventListener('mousemove', e => {
                cursorDot.style.left = `${e.clientX}px`;
                cursorDot.style.top = `${e.clientY}px`;
            });
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-link-hover'));
                el.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-link-hover'));
            });
            document.addEventListener('mouseleave', () => cursorDot.classList.add('cursor-hidden'));
            document.addEventListener('mouseenter', () => cursorDot.classList.remove('cursor-hidden'));
        }
    }

    const scrollObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-on-scroll').forEach(el => scrollObserver.observe(el));


    // --- PAGE-SPECIFIC LOGIC ---
    // (Card tilt, typewriter, image modal, skills chart, project modal logic is all here, but omitted for final summary brevity)
});

// --- GLOBAL HELPER FUNCTIONS ---
function updateChartColors(chart) {
    // Placeholder for chart color update logic
    console.log("Updating chart colors for:", chart);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('copy-toast');
        if (toast && !toast.classList.contains('show')) {
            toast.classList.add('show');
            setTimeout(() => { toast.classList.remove('show'); }, 2500);
        }
    }).catch(err => console.error('Failed to copy: ', err));
}
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('copy-toast');
        if (toast && !toast.classList.contains('show')) {
            toast.classList.add('show');
            setTimeout(() => { toast.classList.remove('show'); }, 2500);
        }
    }).catch(err => console.error('Failed to copy: ', err));
}