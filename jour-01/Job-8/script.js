function myArraySort(arr, order = 'asc') {
    // Vérifie que le tableau est bien un tableau
    if (!Array.isArray(arr)) {
        console.error('Le premier argument doit être un tableau.');
        return;
    }

    // Vérifie que l'ordre est valide
    if (order !== 'asc' && order !== 'desc') {
        console.error('Le second argument doit être "asc" pour croissant ou "desc" pour décroissant.');
        return;
    }

    // Fonction de comparaison pour le tri
    function compare(a, b) {
        if (order === 'asc') {
            return a - b;
        } else {
            return b - a;
        }
    }

    // Tri du tableau en utilisant la fonction de comparaison
    return arr.sort(compare);
}

// Exemple d'utilisation de la fonction
console.log(myArraySort([5, 3, 8, 1]));       // Affiche : [1, 3, 5, 8]
console.log(myArraySort([5, 3, 8, 1], 'desc')); // Affiche : [8, 5, 3, 1]
console.log(myArraySort([7, 2, 9, 4, 1], 'asc')); // Affiche : [1, 2, 4, 7, 9]