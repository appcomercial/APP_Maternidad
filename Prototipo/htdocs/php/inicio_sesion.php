<?php

function existencia_usuario()
{
   if (isset($_POST["nombre_usuario"])) {

      $nombre_usuario =
         $_POST["nombre_usuario"];
      $pass =
         $_POST["pass"];

      if ($nombre_usuario != "" && $pass != "") {

         include "../conn/conn.php";
         try {

            $conn =
            new PDO(
               "mysql:host=$servername;dbname=$dbname",
               $username,
               $password
            );

            $conn->setAttribute(
               PDO::ATTR_ERRMODE,
               PDO::ERRMODE_EXCEPTION);

            $stmt =
            $conn->prepare(
               "SELECT * FROM usuario
               WHERE nombre_usuario=:nombre_usuario
               AND pass=:pass"
            );

            $stmt->bindParam(':nombre_usuario',
               $_POST["nombre_usuario"]);

            $stmt->bindParam(':pass',
               $_POST["pass"]);

            $stmt->execute();

            $count = $stmt->rowCount();

            $result = $stmt->fetchAll();

            // =====================================
            //  Cantidad de registros encontrados
            //  el registro en si
            //  NOTA : debería devolver so solo se encuentra un registro
            //  Funciona pero no esta del todo bien escrito.

            $resultado =
            array(
               "respuesta" => $count,
               "datos"     => $result);

            echo json_encode($resultado);
            // =====================================

         } catch (PDOException $e) {

            //  Error de conexión
            $resultado = array("respuesta" => "error");

            echo json_encode($resultado);
         }

         $conn = null;

      } else {

         //  Si los valores están en blanco también se produce error
         $resultado = array("respuesta" => "error");

         echo json_encode($resultado);
      }

   } else {
      //  Se produce si la variable  necesaria esta sin definir.
      $resultado = array("respuesta" => "error");

      echo json_encode($resultado);
   }

}

//  Llamada a la función
existencia_usuario();
