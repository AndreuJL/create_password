<?php
  session_start();
  session_destroy();
  header("Location: ../index.php");
  die(); // Aquí no haría falta pero si hay más cosas después se sigue ejecutando aunque el navegador redireccione a la página
?>
