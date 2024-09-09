// Fonction pour incrémenter le compteur
function myAddCount() {
    // Sélectionner l'élément du paragraphe par son ID
    const countDisplayer = document.getElementById('count-displayer');

    // Convertir le contenu textuel en nombre
    let currentCount = parseInt(countDisplayer.textContent, 10);

    // Incrémenter le compteur
    currentCount += 1;

    // Mettre à jour le contenu du paragraphe
    countDisplayer.textContent = currentCount;
}

// Sélectionner le bouton par son ID et ajouter un écouteur d'événements
document.getElementById('add-count-btn').addEventListener('click', myAddCount);
