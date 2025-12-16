console.log('Portfolio initialized.');

// Cursor Follower
const cursor = document.getElementById('cursor-follower');
document.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

document.addEventListener('mousedown', () => {
    if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
    if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.section, .hero');
hiddenElements.forEach((el) => {
    el.classList.add('hidden-section');
    observer.observe(el);
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
        navbar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(5, 5, 5, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});
