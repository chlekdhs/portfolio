document.addEventListener('DOMContentLoaded', () => {
    // Parallax Effect for floating elements
    document.addEventListener('mousemove', (e) => {
        const cubes = document.querySelectorAll('.cube');
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        cubes.forEach((cube, index) => {
            const speed = (index + 1) * 0.5; // Different speeds
            cube.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
        });
    });

    // Smooth Scroll for "Scroll for Works"
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.addEventListener('click', () => {
        document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
    });

    console.log("Dreamy Portfolio Loaded ✨");
});
