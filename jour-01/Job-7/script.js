function myNearZero(arr) {
    // Vérifie si le tableau est vide
    if (arr.length === 0) {
        console.error('Le tableau est vide.');
        return;
    }

    // Initialisation de la variable pour stocker l'entier le plus proche de zéro
    let nearZero = arr[0];

    // Parcours de chaque élément du tableau
    for (let i = 1; i < arr.length; i++) {
        // Compare les éléments pour trouver celui le plus proche de zéro
        if (Math.abs(arr[i]) < Math.abs(nearZero) || (Math.abs(arr[i]) === Math.abs(nearZero) && arr[i] > nearZero)) {
            nearZero = arr[i];
        }
    }

    // Retourne l'entier le plus proche de zéro
    return nearZero;
}

// Exemple d'utilisation de la fonction
console.log(myNearZero([3, 8, 4, 2, 5]));   // Affiche : 2
console.log(myNearZero([-1, -4, 2, 5, 6, 9])); // Affiche : -1
console.log(myNearZero([1, 2, -1, -2]));  // Affiche : 1
