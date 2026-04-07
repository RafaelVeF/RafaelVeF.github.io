// Attendre que la page soit chargée
document.addEventListener("DOMContentLoaded", () => {
    
    // Sélectionner tous les éléments qui doivent réagir à la lumière
    const spotlightTargets = document.querySelectorAll('.spotlight-target');
    const pervasiveTexture = document.querySelector('.spotlight-reveal');

    // Écouter le mouvement de la souris sur toute la fenêtre
    window.addEventListener('mousemove', (e) => {
        
        // 1. Gérer l'effet de texture pervasive (page complète)
        if (pervasiveTexture) {
            // Pour le masquage global, on utilise les coordonnées brutes (e.clientX/e.clientY)
            pervasiveTexture.style.setProperty('--mouse-x', `${e.clientX}px`);
            pervasiveTexture.style.setProperty('--mouse-y', `${e.clientY}px`);
        }

        // 2. Gérer les reflets individuels sur les blocs
        spotlightTargets.forEach(target => {
            const rect = target.getBoundingClientRect();
            // Calculer la position X et Y de la souris à l'intérieur de cet élément
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Injecter ces coordonnées relatives dans le CSS
            target.style.setProperty('--mouse-x', `${x}px`);
            target.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});