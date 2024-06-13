<?php
  // Si se envia el submit del registro de usuario coge el nombre de usuario, la contrasenya de acceso y el correo en variables.
  if(isset($_POST['submit'])) {
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
  $error_conexionBD = "";
  $registo_exitoso = "";
  $registro_fallido = "";
  $usuario_existe = "";

  // Si se ha conectado correctamente la base de datos mira que no haya otro usuario que se llame igual en la base de datos.
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

<!-- ------------- ALERTAS ------------- -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error registro</title>
  <link rel="stylesheet" href="../css/style.css">
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body style="background: rgba(76, 78, 120, 1);">
  
  <!-- ALERTA USUARIO REGISTRADO -->
  <script type="text/javascript">
    let registo_exitoso = "<?php echo $registo_exitoso ?>";

    if (registo_exitoso == "registro_exitoso") {
      
      Swal.fire({
        icon: "success",
        title: "Registro exitoso!",
        text: "Debe iniciar sesión",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "../inicio_sesion.php";
        }
      });

      setTimeout(function() {
        window.location.href = "../inicio_sesion.php";
      }, 20000);
    }
  </script>

  <!-- ALERTA FALLO EN LA INCERCIÓN DEL USUARIO EN LA BD -->
  <script type="text/javascript">
    let registro_fallido = "<?php echo $registro_fallido ?>";

    if (registro_fallido == "registro_fallido") {
    
      Swal.fire({
        icon: "error",
        title: "Registro fallido...",
        text: "Fallo en la incersión de los datos en la base de datos",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "../registro.php";
        }
      });

      setTimeout(function() {
        window.location.href = "../registro.php";
      }, 20000);
    }
  </script>

  <!-- ALERTA EL USUARIO YA EXISTE EN LA BD -->
  <script type="text/javascript">
    let usuario_existe = "<?php echo $usuario_existe ?>";

    if (usuario_existe == "usuario_existe") {
    
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El usuario que intenta registrar ya existe",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "../registro.php";
        }
      });

      setTimeout(function() {
        window.location.href = "../registro.php";
      }, 20000);
    }
  </script>

  <!-- ALERTA NO SE HA PODIDO ACCEDER A LA BASE DE DATOS -->
  <script type="text/javascript">
    let error_conexionBD = "<?php echo $error_conexionBD ?>";

    if (error_conexionBD == "error_BD") {
    
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fallo en la conexión con la base de datos",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "../registro.php";
        }
      });

      setTimeout(function() {
        window.location.href = "../registro.php";
      }, 20000);
    }
  </script>
</body>
</html>