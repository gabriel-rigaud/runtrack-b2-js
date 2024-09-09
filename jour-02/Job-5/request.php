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

// Fonction pour rechercher un étudiant
function my_search_student($conn, $email) {
    $stmt = $conn->prepare("SELECT email, fullname, gender, grade, birthdate FROM students WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $result = $stmt->get_result();
    $students = array();

    while ($row = $result->fetch_assoc()) {
        $students[] = $row;
    }

    $stmt->close();
    $conn->close();

    return $students;
}

// Récupérer les données GET
if (isset($_GET['email-search-student'])) {
    $email = $_GET['email-search-student'];
    $students = my_search_student($conn, $email);

    // Retourner les données en JSON
    header('Content-Type: application/json');
    echo json_encode($students);
}
?>
