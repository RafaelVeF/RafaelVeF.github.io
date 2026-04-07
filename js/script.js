// Attendre que la page soit chargée
document.addEventListener("DOMContentLoaded", () => {
    
    // Sélectionner tous les éléments qui doivent réagir à la lumière
    const spotlightTargets = document.querySelectorAll('.spotlight-target');

    // Écouter le mouvement de la souris sur toute la fenêtre
    window.addEventListener('mousemove', (e) => {
        
        spotlightTargets.forEach(target => {
            // Obtenir la position et la taille de l'élément
            const rect = target.getBoundingClientRect();
            
            // Calculer la position X et Y de la souris à l'intérieur de cet élément
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Injecter ces coordonnées dans le CSS via des variables personnalisées
            target.style.setProperty('--mouse-x', `${x}px`);
            target.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});