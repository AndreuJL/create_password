<?php
  // Iniciamos sesión.
  session_start();

  require_once 'config.php';

  //Otra manera de manipular el error de la Base de datos.
  if (mysqli_connect_errno()) {
    // Si la conexión tiene algún error creamos una variable de error.
    $error_conexionBD = "error_BD";
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
        $comprobante_contrasenya = "contrasenya_incorrecta";
      }
    } else {
      // Si el usuario no es correcto.
      $comprobante_usuario = "usuario_incorrecto";
    }

    $stmt->close();
  }
?>

<!-- ------------- ALERTAS ------------- -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body style="background: rgba(76, 78, 120, 1);">

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
          window.location.href = "../inicio_sesion.php";
        }
      });

      setTimeout(function() {
        window.location.href = "../inicio_sesion.php";
      }, 20000);
    }
  </script>

  <!-- ALERTA SI LA CONTRASEÑA ES INCORRECTA -->
  <script type="text/javascript">
  let comprobante_contrasenya = "<?php echo $comprobante_contrasenya ?>";

  if (comprobante_contrasenya == "contrasenya_incorrecta") {
    
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Contraseña incorrecta, vuelva a intentarlo",
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

  <!-- ALERTA SI NO EXISTE EL USUARIO -->
<script type="text/javascript">
  let comprobante_usuario = "<?php echo $comprobante_usuario ?>";

  if (comprobante_usuario == "usuario_incorrecto") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El usuario no existe, vuelva a intentarlo",
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
</body>
</html>
<?php exit; ?>
