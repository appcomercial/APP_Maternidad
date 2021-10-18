<?php
function perfil_vacio_opcion()
{

   try {
      include "../../conn/conn.php";
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      // prepare sql and bind parameters
      $stmt = $conn->prepare(
         "SELECT valor FROM opciones WHERE nombre=:nombre");
      $stmt->bindParam(':nombre', "perfil_vacio");

      if ($stmt->execute()) {
         $result    = $stmt->fetchAll();
         $resultado = array(
            "respuesta" => "exito",
            "datos"     => $result);

         echo json_encode($resultado);
      } else {
         crea_opcion()
      }

   } catch (PDOException $e) {
      echo "Error: " . $e->getMessage();
   }
   $conn = null;

}

function crea_opcion()
{

   try {
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      // prepare sql and bind parameters
      $stmt = $conn->prepare(
         "INSERT INTO opciones (nombre)
         VALUES (:nombre");
      $stmt->bindParam(':nombre', "perfil_vacio");

      if ($stmt->execute()) {
         perfil_vacio_opcion();
      }

   } catch (PDOException $e) {
      echo "Error: " . $e->getMessage();
   }
   $conn = null;
}
