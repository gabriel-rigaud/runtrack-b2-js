function myCountChar(str, char) {
    // Initialisation du compteur
    let count = 0;

    // Vérification si le caractère à rechercher est un seul caractère
    if (char.length !== 1) {
        console.error('Le caractère à rechercher doit être un seul caractère.');
        return;
    }

    // Parcours de chaque caractère de la chaîne
    for (let i = 0; i < str.length; i++) {
        // Incrémentation du compteur si le caractère correspond
        if (str[i] === char) {
            count++;
        }
    }

    // Retour du nombre d'occurrences
    return count;
}

// Exemple d'utilisation de la fonction
console.log(myCountChar('hello world', 'o'));  // Affiche : 2