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
    // Optenemos la contraseña a eliminar desde eliminar_contrasenyaLista.js con AJAX.
    $contrasenya_eliminar = $_POST['contrasenya_eliminar'];
    $id_usuario = $_SESSION['id_usuario'];

    if(isset($contrasenya_eliminar)) {

      // Buscamos la contraseña que queremos eliminar y la eliminamos.
      $query = "DELETE FROM contrasenyas WHERE `contrasenyas`.`contrasenya_generada` = '$contrasenya_eliminar' && `contrasenyas`.`id_usuario` = '$id_usuario'";
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
