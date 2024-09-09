<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = ""; // Remplacez par votre mot de passe
$dbname = "lp_official"; // Remplacez par le nom de votre base de données

// Crée une connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifie la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fonction pour insérer un étudiant
function my_insert_student($conn, $email, $fullname, $gender, $grade, $birthdate) {
    $stmt = $conn->prepare("INSERT INTO students (email, fullname, gender, grade, birthdate) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $email, $fullname, $gender, $grade, $birthdate);

    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();
        return true;
    } else {
        $stmt->close();
        $conn->close();
        return false;
    }
}

// Récupérer les données POST
$email = $_POST['student-mail'];
$fullname = $_POST['student-fullname'];
$gender = $_POST['student-gender'];
$grade = $_POST['student-grade'];
$birthdate = $_POST['student-birthdate'];

// Appeler la fonction d'insertion
if (my_insert_student($conn, $email, $fullname, $gender, $grade, $birthdate)) {
    echo "Student registered successfully!";
} else {
    echo "Error registering student.";
}
?>
