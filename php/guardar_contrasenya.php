<?php
  session_start();
  // Si el usuario no está logeado se redirigirá a index.php.
  if (!isset($_SESSION['logeado'])) {
    header('Location: index.php');
    exit();
  }

  require_once 'config.php';

  // Si se ha conectado bien en la base de datos...
  if ($conector) {
    // Optenemos el nombre y la contraseña a guardar desde guardar_contrasenya.js con AJAX y el nombre de usuario que está en sesión.
    $nombre_contrasenya = $_POST['nombre_contrasenya'];
    $salida_contrasenya = $_POST['salida_contrasenya'];
    $id_usuario = $_SESSION['id_usuario'];

    // Si las variables obtenidas no están vacias...
    if(!empty($nombre_contrasenya) && !empty($salida_contrasenya)) {
      
      //Si el usuario ya tiene un nombre de contraseña igual al que se quiere guardar se enviará un mensaje.
      $query = "SELECT `nombre_contrasenya` FROM `contrasenyas` WHERE `nombre_contrasenya` = '$nombre_contrasenya' AND `id_usuario` = '$id_usuario';";
      $result = mysqli_query($conector, $query);

      if(mysqli_num_rows($result) > 0) {
        $nombre_existente = "Nombre existente";
        echo "$nombre_existente";
        die();
      }
      // Preparamos la consulta SQL
      $query = "INSERT INTO `contrasenyas` (`id_contrasenya_generada`, `nombre_contrasenya`, `contrasenya_generada`, `id_usuario`) VALUES (NULL, '$nombre_contrasenya', '$salida_contrasenya', '$id_usuario');";
      // Almacenamos la respuesta en la base de datos.
      $result = mysqli_query($conector, $query);

      // Si el resultado está vacio salimos del proceso.
      if(!$result) {
        die("Error de sentencia" . mysqli_error($conector));
      }    
    }else{
      echo "Error al obtener los datos";
    }

  // Si falla la conexión a MySQL envia un mensaje de error.
  }else{
    die("Error al conectar con la base de datos");
  }
?>

