function myPrimeList(n) {
    // Fonction pour vérifier si un nombre est premier
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    // Tableau pour stocker les nombres premiers
    let primes = [];

    // Vérification des nombres jusqu'à n
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    // Retourne le tableau des nombres premiers
    return primes;
}

// Exemple d'utilisation de la fonction
console.log(myPrimeList(20)); // Affiche : [2, 3, 5, 7, 11, 13, 17, 19]
console.log(myPrimeList(50)); // Affiche : [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
