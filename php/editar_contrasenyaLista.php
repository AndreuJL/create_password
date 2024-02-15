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
    // Optenemos el nombre de la contraseña a editar desde editar_nombreContrasenyaLista.js con AJAX.
    $nombre_contrasenyaEditar = $_POST['nombre_contrasenyaEditar'];
    $nuevo_nombre = $_POST['nuevo_nombre'];
    $id_usuario = $_SESSION['id_usuario'];

    if(isset($nombre_contrasenyaEditar, $nuevo_nombre, $id_usuario)) {

      // Buscamos la contraseña que queremos editar y la eliminamos.
      $query = "UPDATE `contrasenyas` SET `nombre_contrasenya` = '$nuevo_nombre' WHERE `contrasenyas`.`nombre_contrasenya` = '$nombre_contrasenyaEditar' and `contrasenyas`.`id_usuario` = '$id_usuario'";
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