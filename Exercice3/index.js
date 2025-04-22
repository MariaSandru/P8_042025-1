function calculateAverage(numbers) {
    // Vérifier si le tableau est vide
    if (numbers.length === 0) {
        return "No numbers to calculate average";
    }

    // Calculer la somme des nombres
    let sum = numbers.reduce((acc, num) => acc + num, 0);

    // Retourner la moyenne
    return sum / numbers.length;
}

// Exemples d'utilisation
console.log(calculateAverage([10, 20, 30])); // Affichera 20
console.log(calculateAverage([])); // Affichera "No numbers to calculate average"
console.log(calculateAverage([5, 15, 25, 35])); // Affichera 20
