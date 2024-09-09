function myChangeBackgroundColor() {
    const htmlElement = document.documentElement;
    const width = window.innerWidth;

    if (width >= 1337) {
        htmlElement.style.backgroundColor = '#ffb703';
    } else if (width >= 505) {
        htmlElement.style.backgroundColor = '#d90429';
    } else {
        htmlElement.style.backgroundColor = '#003049';
    }
}

// Appel initial de la fonction pour définir la couleur au chargement de la page
myChangeBackgroundColor();

// Ajout d'un écouteur d'événements pour mettre à jour la couleur lorsque la taille de l'écran change
window.addEventListener('resize', myChangeBackgroundColor);
