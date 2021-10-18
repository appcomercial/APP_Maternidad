<?php

$nombre_bebe           = $_POST['nombre_bebe'];
$fecha_nacimiento_bebe = $_POST['fecha_nacimiento_bebe'];
$genero                = $_POST['genero'];
// $lactancia             = $_POST['lactancia'];
$peso = $_POST['peso'];

function registro_bebe($nombre_bebe, $fecha_nacimiento_bebe, $genero, $peso)
{

   include_once '../conn/conn.php';

   try {
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      // prepare sql and bind parameters
      // $stmt = $conn->prepare(
      //    "INSERT INTO bebe (nombre_bebe, fecha_nacimiento_bebe, genero,lactancia,peso)
      //    VALUES (:nombre_bebe, :fecha_nacimiento_bebe, :genero,:lactancia,:peso)");
      $stmt = $conn->prepare(
         "INSERT INTO bebe (nombre_bebe, fecha_nacimiento_bebe, genero,peso)
         VALUES (:nombre_bebe, :fecha_nacimiento_bebe, :genero,:peso)");

      $stmt->bindParam(':nombre_bebe', $nombre_bebe);
      $stmt->bindParam(':fecha_nacimiento_bebe', $fecha_nacimiento_bebe);
      $stmt->bindParam(':genero', $genero);
      // $stmt->bindParam(':lactancia', $lactancia);
      $stmt->bindParam(':peso', $peso);

      //  // insert a row
      //  $firstname = "John";
      //  $lastname  = "Doe";
      //  $email     = "john@example.com";
      //  $stmt->execute();

      //  // insert another row
      //  $firstname = "Mary";
      //  $lastname  = "Moe";
      //  $email     = "mary@example.com";
      //  $stmt->execute();

      //  // insert another row
      //  $firstname = "Julie";
      //  $lastname  = "Dooley";
      //  $email     = "julie@example.com";
      $stmt->execute();

      $respuesta = array('respuesta' => "ok");

      echo json_encode($respuesta);
   } catch (PDOException $e) {
      echo "Error: " . $e->getMessage();
   }
   $conn = null;

}

registro_bebe($nombre_bebe, $fecha_nacimiento_bebe, $genero, $peso);
