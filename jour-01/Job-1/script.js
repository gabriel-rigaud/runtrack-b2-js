function myUpperCase(str) {
    // Création d'une variable pour stocker la chaîne en majuscules
    let upperStr = '';

    // Parcours de chaque caractère de la chaîne
    for (let i = 0; i < str.length; i++) {
        // Conversion du caractère en majuscule et ajout à upperStr
        upperStr += str[i].toUpperCase();
    }

    // Affichage de la chaîne en majuscules dans la console
    console.log(upperStr);
}

// Exemple d'utilisation de la fonction
myUpperCase('bonjour le monde');  // Affiche : BONJOUR LE MONDE
