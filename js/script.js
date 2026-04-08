document.addEventListener("DOMContentLoaded", () => {
    
    const spotlightTargets = document.querySelectorAll('.spotlight-target');
    const globalTexture = document.querySelector('.global-texture'); // Mise à jour ici

    // Valeurs par défaut pour éviter un "saut" de la lumière au chargement
    if (globalTexture) {
        globalTexture.style.setProperty('--mouse-x', `50vw`);
        globalTexture.style.setProperty('--mouse-y', `50vh`);
    }

    window.addEventListener('mousemove', (e) => {
        
        if (globalTexture) {
            globalTexture.style.setProperty('--mouse-x', `${e.clientX}px`);
            globalTexture.style.setProperty('--mouse-y', `${e.clientY}px`);
        }

        spotlightTargets.forEach(target => {
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            target.style.setProperty('--mouse-x', `${x}px`);
            target.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    //Reveal and scroll
    const revealBlocks = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // revealObserver.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15, //quand 15% de sa surface est visible
        rootMargin: "0px 0px -50px 0px" // Déclenche un peu avant que le bloc n'entre totalement
    });

    revealBlocks.forEach(block => {
        revealObserver.observe(block);
    });

});