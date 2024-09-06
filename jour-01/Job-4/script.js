function myArraySum(arr) {
    // Initialisation de la somme
    let sum = 0;

    // Parcours de chaque élément du tableau
    for (let i = 0; i < arr.length; i++) {
        // Ajout de l'élément à la somme
        sum += arr[i];
    }

    // Retour de la somme
    return sum;
}

// Exemple d'utilisation de la fonction
console.log(myArraySum([4, 24, 52, 14, 32, 56])); // Affiche : 182
console.log(myArraySum([10, -2, 3.5, 0])); // Affiche : 11.5