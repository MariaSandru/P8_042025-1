// Fonction pour convertir un nombre décimal en binaire
function convertToBinary() {
    // Récupération de la valeur entrée par l'utilisateur
    let decimalNumber = document.getElementById('decimalInput').value;

    // Vérification que l'entrée est un nombre valide
    if (isNaN(decimalNumber) || decimalNumber === '') {
        document.getElementById('binaryResult').textContent = "Veuillez entrer un nombre valide.";
        return;
    }

    // Conversion du nombre décimal en binaire
    let binaryResult = parseInt(decimalNumber, 10).toString(2);

    // Affichage du résultat
    document.getElementById('binaryResult').textContent = `Résultat : ${binaryResult}`;
}