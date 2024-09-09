function mySearchStudent(form) {
    const formData = new FormData(form);
    const queryString = new URLSearchParams(formData).toString();

    fetch(`request.php?${queryString}`)
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('student-results').querySelector('tbody');
            tbody.innerHTML = ''; // Vider les résultats précédents

            if (data.length > 0) {
                data.forEach(student => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${student.email}</td>
                        <td>${student.fullname}</td>
                        <td>${student.gender}</td>
                        <td>${student.grade}</td>
                        <td>${student.birthdate}</td>
                    `;
                    tbody.appendChild(row);
                });
            } else {
                tbody.innerHTML = '<tr><td colspan="5">Aucun étudiant trouvé</td></tr>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while searching for the student.');
        });

    // Prévenir le comportement par défaut du formulaire
    return false;
}

document.getElementById('form-search-student').addEventListener('submit', function(event) {
    event.preventDefault(); // Prévenir la soumission par défaut du formulaire
    mySearchStudent(this);
});
