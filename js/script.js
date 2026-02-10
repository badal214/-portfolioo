let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('.header');

window.onscroll = () => {
    // Header background on scroll
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Section active class
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
            // Add show class for animations
            sec.classList.add('show');
            
            // Animate headings
            let heading = sec.querySelector('.heading');
            if (heading && !heading.classList.contains('show')) {
                heading.classList.add('show');
            }
            
            // Animate timeline items
            if (id === 'education') {
                let timelineItems = sec.querySelectorAll('.timeline-item');
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 200);
                });
            }
            
            // Animate project items
            if (id === 'projects') {
                let projectItems = sec.querySelectorAll('.project-item');
                projectItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 300);
                });
            }
        }
    });
};

menuIcon.onclick = () => {
    console.log('icon clicked');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Show home section immediately
    document.getElementById('home').classList.add('show');
    
    // Show other sections as they come into view
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 500);
});

// Color scheme switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const scheme = this.classList[1];
            changeColorScheme(scheme);
        });
    });
});

function changeColorScheme(scheme) {
    const root = document.documentElement;
    
    switch(scheme) {
        case 'teal':
            root.style.setProperty('--bg-color', '#0a192f');
            root.style.setProperty('--second-bg-color', '#112240');
            root.style.setProperty('--text-color', '#e6f1ff');
            root.style.setProperty('--main-color', '#64ffda');
            root.style.setProperty('--accent-color', '#8892b0');
            root.style.setProperty('--gradient-start', '#64ffda');
            root.style.setProperty('--gradient-end', '#00aaff');
            root.style.setProperty('--card-bg', 'rgba(100, 255, 218, 0.05)');
            break;
        case 'red':
            root.style.setProperty('--bg-color', '#1a1a2e');
            root.style.setProperty('--second-bg-color', '#16213e');
            root.style.setProperty('--text-color', '#ffffff');
            root.style.setProperty('--main-color', '#e94560');
            root.style.setProperty('--accent-color', '#0f3460');
            root.style.setProperty('--gradient-start', '#e94560');
            root.style.setProperty('--gradient-end', '#ff6b6b');
            root.style.setProperty('--card-bg', 'rgba(233, 69, 96, 0.05)');
            break;
        default:
            root.style.setProperty('--bg-color', '#080808');
            root.style.setProperty('--second-bg-color', '#131313');
            root.style.setProperty('--text-color', 'white');
            root.style.setProperty('--main-color', 'rgb(153, 255, 0)');
            root.style.setProperty('--accent-color', '#ff6b6b');
            root.style.setProperty('--gradient-start', '#00c6ff');
            root.style.setProperty('--gradient-end', '#0072ff');
            root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.05)');
    }
}