 <?php
// nombre_usuario    correo   pass

function inserta_usuario()
{
   if (isset($_POST["nombre_usuario"]) && isset($_POST["pass"])) {
      $nombre_usuario = $_POST["nombre_usuario"];
      // $correo         = $_POST["correo"];
      $pass = $_POST["pass"];
      if ($nombre_usuario != "" && $pass != "") {
         include "../conn/conn.php";
         try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $stmt = $conn->prepare(
               "INSERT INTO usuario (nombre_usuario, pass )
            VALUES (:nombre_usuario, :pass)");

            $stmt->bindParam(
               ':nombre_usuario',
               $nombre_usuario);

            // $stmt->bindParam(
            //    ':correo',
            //    $correo);

            $stmt->bindParam(
               ':pass',
               $pass);

            if ($stmt->execute()) {
               $last_id = $conn->lastInsertId();
               crear_cliente_de_usuario($last_id);

            }

         } catch (PDOException $e) {
            $resultado = array("respuesta" => "error");

            echo json_encode($resultado);
         }

         $conn = null;
      } else {
         $resultado = array("respuesta" => "error");

         echo json_encode($resultado);
      }
   } else {
      $resultado = array("respuesta" => "error");

      echo json_encode($resultado);
   }

}

function existencia_usuario()
{
   if (isset($_POST["nombre_usuario"])) {
      $nombre_usuario = $_POST["nombre_usuario"];
      // $correo         = $_POST["correo"];
      // $pass = $_POST["pass"];
      if ($nombre_usuario != "") {
         include "../conn/conn.php";
         try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $stmt = $conn->prepare("SELECT * FROM usuario WHERE nombre_usuario=:nombre_usuario");

            $stmt->bindParam(
               ':nombre_usuario',
               $_POST["nombre_usuario"]);

            // $stmt->bindParam(
            //    ':correo',
            //    $_POST["correo"]);

            // $stmt->bindParam(
            //    ':pass',
            //    $_POST["pass"]);

            // insert a row
            // $firstname = "John";
            // $lastname  = "Doe";
            // $email     = "john@example.com";
            $stmt->execute();

            $count = $stmt->rowCount();

            if ($count == 0) {

               inserta_usuario();

            } else {
               $resultado = array("respuesta" => "existe");

               echo json_encode($resultado);
            }

            // echo "New record created successfully";
         } catch (PDOException $e) {
            $resultado = array("respuesta" => "error");

            echo json_encode($resultado);
         }

         $conn = null;
      } else {

         $resultado = array("respuesta" => "error");

         echo json_encode($resultado);
      }

   } else {
      $resultado = array("respuesta" => "error");

      echo json_encode($resultado);
   }

}

function crear_cliente_de_usuario($id)
{
   include "../conn/conn.php";
   try {
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      // prepare sql and bind parameters
      $stmt = $conn->prepare(
         "INSERT INTO cliente (id_usuario)
         VALUES (:id_usuario)");
      $stmt->bindParam(':id_usuario', $id);

      if ($stmt->execute()) {
         $resultado = array("respuesta" => "insertado");

         echo json_encode($resultado);
      }

   } catch (PDOException $e) {
      echo "Error: " . $e->getMessage();
   }
   $conn = null;
}
existencia_usuario();

// echo $_POST['nombre_usuario'];
// echo $_POST["correo"];
// echo $_POST["pass"];
