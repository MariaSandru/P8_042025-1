// Créez votre fonction ici
function calculate(num1, num2, operator) {
    // Vérification que les entrées sont bien des nombres entiers
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "Veuillez entrer des nombres entiers.";
    }

    // Vérification que l'opérateur est valide
    if (!['+', '-', '*', '/'].includes(operator)) {
        return "Opérateur invalide. Utilisez '+', '-', '*' ou '/'.";
    }

    // Exécution de l'opération selon l'opérateur donné
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Vérification pour éviter la division par zéro
            return num2 !== 0 ? num1 / num2 : "Erreur : Division par zéro impossible.";
        default:
            return "Opération inconnue.";
    }
}

// Exemples d'utilisation
console.log(calculate(5, 3, '+'));  // Affichera 8
console.log(calculate(10, 2, '-')); // Affichera 8
console.log(calculate(4, 7, '*'));  // Affichera 28
console.log(calculate(20, 5, '/')); // Affichera 4
console.log(calculate(10, 0, '/')); // Affichera "Erreur : Division par zéro impossible."
console.log(calculate(8, 3, '%'));  // Affichera "Opérateur invalide. Utilisez '+', '-', '*' ou '/'."
console.log(calculate(4.5, 2, '+')); // Affichera "Veuillez entrer des nombres entiers."
console.log(calculate(5,8,'-'));
