<?php
header("Content-Type: application/json");

$servername = "127.0.0.1";
$username = "root";
$password = ""; // Agrega tu contraseña si tienes una
$dbname = "Inseminaciones";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT * FROM InseminationData";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$conn->close();

echo json_encode($data, JSON_PRETTY_PRINT);
?>
