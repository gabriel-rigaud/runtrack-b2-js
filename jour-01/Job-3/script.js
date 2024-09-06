function myIsInString(haystack, needle) {
    // Vérifie si 'needle' est contenu dans 'haystack'
    return haystack.includes(needle);
}

// Exemple d'utilisation de la fonction
console.log(myIsInString('Hello world', 'world')); // Affiche : true
console.log(myIsInString('Hello world', 'foo'));   // Affiche : false
