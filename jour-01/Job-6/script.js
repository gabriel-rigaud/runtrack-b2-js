function mySquareArray(arr) {
    // Création d'un nouveau tableau pour stocker les carrés
    let squaredArray = [];

    // Parcours de chaque élément du tableau d'entrée
    for (let i = 0; i < arr.length; i++) {
        // Calcul du carré de l'élément et ajout au nouveau tableau
        squaredArray.push(arr[i] * arr[i]);
    }

    // Retourne le tableau des carrés
    return squaredArray;
}

// Exemple d'utilisation de la fonction
console.log(mySquareArray([1, 2, 3, 4])); // Affiche : [1, 4, 9, 16]
console.log(mySquareArray([5, 6, 7]));    // Affiche : [25, 36, 49]
