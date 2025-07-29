document.addEventListener('DOMContentLoaded', () => {
    // --- SHARED INITIALIZERS ---
    handleTheme();
    handleResponsiveSidebar();
    handleCustomCursor();
    handleScrollAnimation();
    highlightActiveNavLink();
    
    // --- PAGE-SPECIFIC INITIALIZERS ---
    if (document.querySelector('.project-card')) handleCardTilt();
    if (document.getElementById('animated-question')) handleTypewriterAnimation();
    if (document.getElementById('skillsChart')) handleSkillsChart();
    if (document.getElementById('imageModal')) handleImageLightbox();
});

// --- HANDLER FUNCTIONS ---
function handleTheme() {
    const darkBtn = document.getElementById('dark-mode-toggle');
    const lightBtn = document.getElementById('light-mode-toggle');
    
    const setTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            lightBtn?.classList.add('active');
            darkBtn?.classList.remove('active');
        } else {
            document.body.classList.remove('light-mode');
            darkBtn?.classList.add('active');
            lightBtn?.classList.remove('active');
        }
        localStorage.setItem('theme', theme);
        if (window.skillsChartInstance) updateChartColors(window.skillsChartInstance);
    };

    darkBtn?.addEventListener('click', () => setTheme('dark'));
    lightBtn?.addEventListener('click', () => setTheme('light'));
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

function handleResponsiveSidebar() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (!hamburgerBtn || !sidebar || !overlay) return;

    const toggleSidebar = () => {
        document.body.classList.toggle('sidebar-open');
        sidebar.classList.toggle('-translate-x-full');
        hamburgerBtn.classList.toggle('open');
        overlay.classList.toggle('hidden');
    };

    hamburgerBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    sidebar.querySelectorAll('a:not([target="_blank"])').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1024 && document.body.classList.contains('sidebar-open')) {
                toggleSidebar();
            }
        });
    });
}

function handleCustomCursor() {
    if (window.matchMedia("(pointer: fine)").matches) {
        const cursorDot = document.querySelector('.cursor-dot');
        if (!cursorDot) return;
        
        const interactiveElements = document.querySelectorAll('a, button');
        window.addEventListener('mousemove', (e) => {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
        });

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-link-hover'));
            el.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-link-hover'));
        });
    }
}

function handleScrollAnimation() {
    const scrollElements = document.querySelectorAll('.reveal-on-scroll');
    if (scrollElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.1 }); 

    scrollElements.forEach(el => observer.observe(el));
}

function handleCardTilt() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = (y - (rect.height / 2)) / 20;
            const rotateY = ((rect.width / 2) - x) / 20;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

function handleTypewriterAnimation() {
    const container = document.getElementById('text-animation-container');
    const questionEl = document.getElementById('animated-question');
    const questions = [ "How might we make it easy to see if online information is trustworthy?", "How might we design social apps that leave people feeling happy and connected, not anxious?", "How might we make choosing the sustainable option the most convenient choice every day?" ];
    let isPaused = false, questionIndex = 0;

    const runAnimation = async () => {
        while (true) {
            if(isPaused) { await new Promise(r => setTimeout(r, 100)); continue; }
            
            const question = questions[questionIndex];
            questionEl.style.opacity = 1;

            for (let i = 0; i <= question.length; i++) {
                if(isPaused) { await new Promise(r => setTimeout(r, 100)); i--; continue; }
                const prefix = question.substring(0, "How might we".length);
                const suffix = question.substring("How might we".length, i);
                questionEl.innerHTML = `<span style="color: var(--accent-color);">${prefix}</span>${suffix}<span class="cursor"></span>`;
                await new Promise(r => setTimeout(r, 50));
            }
            
            await new Promise(r => setTimeout(r, 2500));
            if(isPaused) continue;
            questionEl.style.opacity = 0;
            await new Promise(r => setTimeout(r, 500));
            
            questionIndex = (questionIndex + 1) % questions.length;
        }
    };
    
    container.addEventListener('mouseenter', () => isPaused = true);
    container.addEventListener('mouseleave', () => isPaused = false);
    runAnimation();
}

function handleSkillsChart() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsData = {
        labels: ['Product Design', 'UX/UI Design', 'User Research', 'Info. Architecture', 'Interaction Design', 'Systems Thinking'],
        datasets: [{ label: 'Proficiency', data: [95, 90, 85, 80, 85, 90], borderWidth: 1 }]
    };
    window.skillsChartInstance = new Chart(ctx, {
        type: 'bar', data: skillsData,
        options: {
            indexAxis: 'y', responsive: true, maintainAspectRatio: false,
            scales: { x: { beginAtZero: true, max: 100 }, y: {} },
            plugins: { legend: { display: false } }
        }
    });
    updateChartColors(window.skillsChartInstance);
}

function handleImageLightbox() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const gridItems = document.querySelectorAll('.image-grid-item');
    let currentIndex;

    const showImage = (index) => {
        currentIndex = index;
        modalImg.src = gridItems[index].querySelector('img').src;
    };
    const openModal = (index) => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        showImage(index);
    };
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };
    
    gridItems.forEach((item, index) => item.addEventListener('click', () => openModal(index)));
    modal.querySelector('.modal-close-btn').addEventListener('click', closeModal);
    modal.querySelector('.modal-next-btn').addEventListener('click', () => showImage((currentIndex + 1) % gridItems.length));
    modal.querySelector('.modal-prev-btn').addEventListener('click', () => showImage((currentIndex - 1 + gridItems.length) % gridItems.length));
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') modal.querySelector('.modal-next-btn').click();
            if (e.key === 'ArrowLeft') modal.querySelector('.modal-prev-btn').click();
        }
    });
}

// --- GLOBAL HELPER FUNCTIONS ---
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('copy-toast');
        if (toast) {
            toast.classList.add('show');
            setTimeout(() => { toast.classList.remove('show'); }, 2500);
        }
    }).catch(err => console.error('Failed to copy: ', err));
}

function highlightActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop();
    const isCaseStudyPage = ['koinbasket.html', 'softwire.html', 'pebble.html', 'ivi.html', 'stampede.html'].includes(currentPath);

    document.querySelectorAll('.sidebar-link').forEach(link => {
        const linkPath = new URL(link.href).pathname.split('/').pop();
        let isActive = linkPath === currentPath || (linkPath === 'index.html' && currentPath === '');
        if (isCaseStudyPage && link.href.endsWith('index.html')) {
            isActive = true;
        }
        link.classList.toggle('active', isActive);
    });
}

function getChartColors() {
    const cs = getComputedStyle(document.documentElement);
    return {
        backgroundColor: cs.getPropertyValue('--accent-color') + '99',
        borderColor: cs.getPropertyValue('--accent-color'),
        textColor: cs.getPropertyValue('--text-secondary'),
        gridColor: cs.getPropertyValue('--border-color')
    };
}

function updateChartColors(chart) {
    const colors = getChartColors();
    chart.data.datasets[0].backgroundColor = colors.backgroundColor;
    chart.options.scales.x.ticks.color = colors.textColor;
    chart.options.scales.y.ticks.color = colors.textColor;
    chart.options.scales.x.grid.color = colors.gridColor;
    chart.update();
}