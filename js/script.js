document.addEventListener("DOMContentLoaded", () => {
    
    const spotlightTargets = document.querySelectorAll('.spotlight-target');
    const globalTexture = document.querySelector('.global-texture'); // Mise à jour ici

    // Valeurs par défaut pour éviter un "saut" de la lumière au chargement
    if (globalTexture) {
        globalTexture.style.setProperty('--mouse-x', `50vw`);
        globalTexture.style.setProperty('--mouse-y', `50vh`);
    }

    window.addEventListener('mousemove', (e) => {
        
        // 1. Gérer l'effet global (sur le fond fixe)
        if (globalTexture) {
            globalTexture.style.setProperty('--mouse-x', `${e.clientX}px`);
            globalTexture.style.setProperty('--mouse-y', `${e.clientY}px`);
        }

        // 2. Gérer les reflets individuels (sur les composants)
        spotlightTargets.forEach(target => {
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            target.style.setProperty('--mouse-x', `${x}px`);
            target.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});