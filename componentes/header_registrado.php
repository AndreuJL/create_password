<?php
  // Iniciamos sesión.
  session_start();
?>

<header id="header">
  <div class="container__header">
    <h1><a href="registrado.php">oppassword</a></h1>
    <nav>
      <a href="index.php" class="cerrar__sesion">Cerrar sesión</a>
      <?php  echo "<p>" . $_SESSION['nombre_usuarioSesion'] . "</p>" ?>
    </nav>
  </div>
</header> 