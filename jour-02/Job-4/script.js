function myRegisterStudent(form) {
    // Créer un objet FormData à partir du formulaire
    const formData = new FormData(form);

    // Envoyer les données du formulaire via Fetch API
    fetch('request.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(result => {
            if (result.includes('Student registered successfully')) {
                alert('Student registered successfully!');
            } else {
                alert('An error occurred while registering the student.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while registering the student.');
        });

    // Prévenir le comportement par défaut du formulaire
    return false;
}

// Ajouter un écouteur d'événements pour la soumission du formulaire
document.getElementById('form-add-student').addEventListener('submit', function(event) {
    event.preventDefault(); // Prévenir la soumission par défaut du formulaire
    myRegisterStudent(this);
});
