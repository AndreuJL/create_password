<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inicio de sesión</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="./js/scroll_header.js"></script>
</head>
<body>
  <?php include('componentes/header_no_registrado.php') ?>

  <main>
    <div class="container__registro">
      <form method="POST" novalidate onsubmit="return validar()">
        <h2>INICIAR SESIÓN</h2>
        <label for="nombreusuario">Nombre de Usuario*</label>
        <input type="text" id="nombre_usuario" />
        <label for="contrasena1">Contraseña*</label>
        <input type="password" name="contrasenya" id="contrasenya1" />
        <div class="botones__formulario">
          <input type="submit" name="aceptar" value="Aceptar" />
          <a href="index.php">Volver</a>
        </div>
      </form>

      <picture></picture>
    </div>
  </main>

  <?php include('componentes/footer_no_registrado.php.php') ?>
</body>
</html>