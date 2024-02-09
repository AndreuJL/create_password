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

  if ($conector) {
    $sentencia = "SELECT * FROM `usuarios` WHERE `nombre_usuario` = '$nombre_usuario';";
    $resultado_nombre_usuario = mysqli_query($conector,$sentencia);

    // Si no encuentra ningún usuario que se llame igual lo inserta.
    if (mysqli_affected_rows($conector) === 0) {
      $sentencia = "INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `contrasenya`, `correo`) VALUES (NULL, '$nombre_usuario', '$contrasenya_acceso', '$correo')";
      $resultado_insert_usuario = mysqli_query($conector,$sentencia);
      
      // Si se ha introducido el usuario en la base de datos declaramos una variable para luego pillarla con Javascript y mostrar un alert y redirigirse a inicio_sesion.php.
      if($resultado_insert_usuario){
        $registo_exitoso = "registro_exitoso";

      // En caso declaramos otra variable y con Javascript vamos a mostrar un alert y redirigir otra vez a la página de regístro.
      }else{
        $registro_fallido = "registro_fallido";
      }
      
    // Si ya hay un usuario que se llama igual.
    }else{
      $usuario_existe = "usuario_existe";
    }

  // Si falla la conexión a MySQL envia un mensaje de error.
  }else{
    $error_conexionBD = "error_BD";
  }











?>

