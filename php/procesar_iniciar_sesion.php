<?php

  // Iniciamos sesión.
  session_start();


  // Definimos las variables para la base de datos.
  $host = "localhost";
  $user = "edib";
  $password = "edib";
  $bbdd = "contrasenyas";

  // Conectamos con la base de datos
  $conector = mysqli_connect($host, $user, $password, $bbdd);

  //Otra manera de manipular el error de la Base de datos.
  if (mysqli_connect_errno()) {
    // Si tiene algún error me sale del proceso y me dice el error.
	  exit();
  }

  // Preparamos nuestra sentencia SQL para evitar la SQL injection y que nos puedan robar datos.
  if ($stmt = $conector->prepare('SELECT id_usuario, contrasenya FROM usuarios WHERE nombre_usuario = ?')) {

    // Le decimos que busque un String (s) que sea el nombre de usuario, lo ejecutamos y miramos si hay algún resultado.
    $stmt->bind_param('s', $_POST['nombre_usuarioSesion']);
    $stmt->execute();
    $stmt->store_result();

    // Si encuentra resultado 
    if ($stmt->num_rows > 0) {
      // Cogemos el resultado de la última sentencia SQL y metemos los resultados devueltos por orden en variables.
      $stmt->bind_result($id_usuario, $contrasenya_acceso);
      $stmt->fetch();
      
      // Ahora que la contraseña sabemos que existe, la verificamos.
      if ($_POST['contrasenya_acceso'] === $contrasenya_acceso) {

        // Ahora creamos las variables de sesión para que sepamos que el usuario está logeado, funcionaría como las cookies.
        session_regenerate_id();
        $_SESSION['logeado'] = TRUE;
        $_SESSION['nombre_usuarioSesion'] = $_POST['nombre_usuarioSesion'];
        $_SESSION['id_usuario'] = $id_usuario;

        header("Location: ../registrado.php");

      } else {
        // Si la contraseña es incorrecta.
        $_SESSION["contrasenya_incorrecta"] = "incorrecta";
        header("Location: ../inicio_sesion.php");
      }
    } else {
      // Si el usuario no es correcto.
      $_SESSION["usuario_incorrecto"] = "incorrecto";
      header("Location: ../inicio_sesion.php");
    }

    $stmt->close();
  }

?>

