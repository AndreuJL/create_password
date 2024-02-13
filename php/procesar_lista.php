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
    $pedir_lista = $_POST['pedir_lista'];
    $id_usuario = $_SESSION['id_usuario'];

    if(isset($pedir_lista)) {

      $query = "SELECT nombre_contrasenya, contrasenya_generada FROM `contrasenyas` WHERE id_usuario = $id_usuario;";
      $result = mysqli_query($conector, $query);

      // Si el resultado está vacio salimos del proceso.
      if(!$result) {
        die("Error de sentencia" . mysqli_error($conector));
      }

      $json = array();
      while($row = mysqli_fetch_array($result)) {
        $json[] = array(
          'nombre_contrasenya' => $row['nombre_contrasenya'],
          'contrasenya_generada' => $row['contrasenya_generada']
        );
      }

      $jsonstring = json_encode($json);
      echo $jsonstring;
    }
  // Si falla la conexión a MySQL envia un mensaje de error.
  }else{
    die("Error al conectar con la base de datos");
  }
?>