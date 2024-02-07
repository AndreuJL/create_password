<?php
  // Iniciamos sesión.
  session_start();

  // Si se envia el submit del registro de usuario coge el nombre de usuario, la contrasenya de acceso y el correo en variables.
  if(isset($_POST['submit'])) {
    session_regenerate_id();
    $nombre_usuario = $_SESSION["nombre_usuario"] = $_POST['nombre_usuario'];
    $contrasenya_acceso = $_SESSION["contrasenya_acceso"] = $_POST['contrasenya_acceso'];
    $correo = $_SESSION["correo"] = $_POST["correo"];
  }

  // Definimos las variables para la base de datos.
  $host = "localhost";
  $user = "edib";
  $password = "edib";
  $bbdd = "contrasenyas";

  // Conectamos con la base de datos
  $conector = mysqli_connect($host, $user, $password, $bbdd);

  // Si se ha conectado correctamente la base de datos mira que no haya otro usuario que se llame igual en la base de datos.
  if ($conector) {
    $sentencia = "SELECT * FROM `usuarios` WHERE `nombre_usuario` = '$nombre_usuario';";
    $resultado_nombre_usuario = mysqli_query($conector,$sentencia);

    // Si no encuentra ningún usuario que se llame igual lo inserta.
    if (mysqli_affected_rows($conector) === 0) {
      $sentencia = "INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `contrasenya`, `correo`) VALUES (NULL, '$nombre_usuario', '$contrasenya_acceso', '$correo')";
      $resultado_insert_usuario = mysqli_query($conector,$sentencia);
      
      // Si se ha introducido el el usuario en la base de datos nos redirigimos a registrado.php
      if($resultado_insert_usuario){
        header("Location: ../registrado.php");
        die();

      // En caso contrario volveremos a la pantalla de registro.php
      }else{
        header("Location: ../registro.php");
        die();
      }
      
    // Si ya hay un usuario que se llama igual salta un mensaje.
    }else{
      echo "El usuario $nombre_usuario ya existe";
    }

  // Si falla la conexión a MySQL envia un mensaje de error.
  }else{
    echo "<br>Fallo al conectar a MySQL o a la BBDD: " . mysqli_connect_error();
  }
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error registro</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body class="fallo__registro">
  <br>
  <!-- Este mensaje se mostarrá siempre en la página, ya que si ha ido bien se redirigirá a registrado.php -->
  <h4>Ha sucedido un error al registrarse.</h4>
  <a class="boton__fallo" href="../registro.php">Volver a intentarlo</a>
</body>
</html>