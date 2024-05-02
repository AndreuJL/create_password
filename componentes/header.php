<?php
  // Si el usuario no está logeado se redirigirá a index.php y en lugar de mostrar el nombre del usuario se mostrará 'iniciar sesión'.
  if (!isset($_SESSION['logeado'])) {
    $estado_sesion = '<a href="inicio_sesion.php" class="sesion">Iniciar sesión</a>';
    $estado_registro = '<a href="registro.php" class="registro">Registrarse</a>';
  } else {
    $estado_sesion = '<a href="php/cerrar_sesion.php" class="cerrar__sesion">Cerrar sesión</a>';
    $estado_registro = $_SESSION['nombre_usuarioSesion'];
  }
?>

<header id="header">
  <div class="container__header">
    <h1><a href="registrado.php">oppassword</a></h1>
    <nav>
      <?php  echo $estado_sesion ?>
      <?php  echo "<p>" . $estado_registro . "</p>" ?>
    </nav>
  </div>
</header>