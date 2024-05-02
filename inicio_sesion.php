<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inicio de sesión</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="./js/scroll_header.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>

  <?php include('componentes/header.php') ?>

  <main>
    <div class="container__registro">
      <form action="./php/procesar_iniciar_sesion.php" method="POST" novalidate>
        <h2>INICIAR SESIÓN</h2>
        <label for="nombre_usuarioSesion">Nombre de Usuario*</label>
        <input type="text" name="nombre_usuarioSesion" id="nombre_usuarioSesion" />
        <label for="contrasenya_acceso">Contraseña*</label>
        <input type="password" name="contrasenya_acceso" id="contrasenya_acceso" />
        <div class="botones__formulario">
          <input type="submit" name="aceptar" value="Aceptar" />
          <a href="index.php">Volver</a>
        </div>
      </form>

      <picture></picture>
    </div>
  </main>
  
  <?php include('componentes/footer.php') ?>

</body>
</html>