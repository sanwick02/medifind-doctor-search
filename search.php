<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("sql100.byetcluster.com", "if0_41613267", "YOUR_PASSWORD_HERE", "if0_41613267_DocSearch");

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed"]));
}

$query = isset($_GET['q']) ? $conn->real_escape_string($_GET['q']) : "";

$sql = "SELECT * FROM doctors WHERE name LIKE '%$query%' OR specialty LIKE '%$query%'";
$result = $conn->query($sql);

$doctors = [];
while ($row = $result->fetch_assoc()) {
    $doctors[] = $row;
}

echo json_encode($doctors);
$conn->close();
?>
