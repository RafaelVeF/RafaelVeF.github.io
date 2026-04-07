document.addEventListener("DOMContentLoaded", () => {

    const metalBg     = document.querySelector('.hex-metal-bg');
    const glowOverlay = document.querySelector('.hex-glow-overlay');
    const heroCard    = document.getElementById('hero-card');

    window.addEventListener('mousemove', (e) => {
        const x = `${e.clientX}px`;
        const y = `${e.clientY}px`;

        // Mise à jour du masque de révélation hexagonale (position curseur en fixed)
        if (metalBg) {
            metalBg.style.setProperty('--mouse-x', x);
            metalBg.style.setProperty('--mouse-y', y);
        }
        if (glowOverlay) {
            glowOverlay.style.setProperty('--mouse-x', x);
            glowOverlay.style.setProperty('--mouse-y', y);
        }

        // Halo interne sur la hero-card (coordonnées relatives à la carte)
        if (heroCard) {
            const rect = heroCard.getBoundingClientRect();
            const cx = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1) + '%';
            const cy = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1) + '%';
            heroCard.style.setProperty('--card-mx', cx);
            heroCard.style.setProperty('--card-my', cy);
        }
    });

});