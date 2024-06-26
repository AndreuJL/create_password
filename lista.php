<?php
  session_start();
  // Si el usuario no está logeado se redirigirá a index.php.
  if (!isset($_SESSION['logeado'])) {
    header('Location: index.php');
    exit();
  }
?>

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tus contraseñas</title>
    <link rel="stylesheet" href="css/style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="./js/scroll_header.js"></script>
    <script src="./js/lista.js" type="module"></script>
  </head>
  <body>    
    <?php include('componentes/header.php'); ?>   
      <main>
        <section class="contenedor__lista">
          <h2>Tus contraseñas</h2>

          <article class="subcaja__contrasenyas" id="subcaja__contrasenyas">

            <article class="header__contrasenyas">
              <p class="nombre__contrasenyatitulo">Nombre</p>
              <p class="subtitulo__contrasenya">Contraseña</p>
            </article>
          </article>

          <a href="registrado.php">Volver</a>
        </section>
      </main>    
    <?php include('componentes/footer.php'); ?>
  </body>
</html>