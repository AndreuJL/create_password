<?php
  session_start();
  // Si el usuario no está logeado se redirigirá a index.php.
  if (!isset($_SESSION['logeado'])) {
    header('Location: index.php');
    exit();
  }

  // Definimos las variables para la base de datos.
  $host = "localhost";
  $user = "edib";
  $password = "edib";
  $bbdd = "contrasenyas";

  // Conectamos con la base de datos
  $conector = mysqli_connect($host, $user, $password, $bbdd);

  // Si se ha conectado bien en la base de datos...
  if ($conector) {
    // Optenemos el nombre y la contraseña a guardar desde guardar_contrasenya.js con AJAX y el nombre de usuario qye está en sesión.
    $nombre_contrasenya = $_POST['nombre_contrasenya'];
    $salida_contrasenya = $_POST['salida_contrasenya'];
    $id_usuario = $_SESSION['id_usuario'];

    // Si las variables obtenidas no están vacias...
    if(!empty($nombre_contrasenya) && !empty($salida_contrasenya)) {

      // Preparamos la consulta SQL
      $query = "INSERT INTO `contrasenyas` (`id_contrasenya_generada`, `nombre_contrasenya`, `contrasenya_generada`, `id_usuario`) VALUES (NULL, '$nombre_contrasenya', '$salida_contrasenya', '$id_usuario');";

      // Almacenamos la respuesta en la base de datos.
      $result = mysqli_query($conector, $query);

      // Si el resultado está vacio salimos del proceso.
      if(!$result) {
        die("Error de sentencia" . mysqli_error($conector));
      }
      
    }

  // Si falla la conexión a MySQL envia un mensaje de error.
  }else{
    die("Error al conectar con la base de datos");
  }











?>

