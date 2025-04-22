

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Veuillez remplir tous les champs.');
        return false;
    }
    alert('Formulaire envoyé avec succès!');
    return true;
}