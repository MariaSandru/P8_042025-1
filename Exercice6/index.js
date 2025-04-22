// Sélectionne l'élément d'affichage
const display = document.getElementById('display');

// Fonction pour ajouter un caractère à l'affichage
function appendToDisplay(value) {
    display.value += value;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
    display.value = '';
}

// Fonction pour calculer et afficher le résultat
function calculateResult() {
    try {
        display.value = eval(display.value); // Évalue l'expression mathématique entrée
    } catch (error) {
        display.value = 'Erreur'; // Affiche une erreur en cas de saisie invalide
    }
}