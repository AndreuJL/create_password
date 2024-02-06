<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registro</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="./js/scroll_header.js"></script>
  <script src="./js/validaciones.js"></script>
</head>
<body>
  <?php include('componentes/header_no_registrado.php') ?>

  <main>
    <div class="container__registro">
      <form method="POST" novalidate onsubmit="return validar()">
        <h2>REGÍSTRATE</h2>
        <label for="nombre">Nombre*</label>
        <input type="text" name="nombre" id="nombre" />
        <label for="apellidos">Apellidos*</label>
        <input type="text" name="apellidos" id="apellidos" />
        <label for="nombreusuario">Nombre de Usuario*</label>
        <input type="text" id="nombre_usuario" />       
        <label for="nombreusuario">Correo electrónico*</label>
        <input type="email" name="correo" id="mail" />
        <label for="contrasena1">Contraseña*</label>
        <input type="password" name="contrasenya1" id="contrasenya1" />
        <label for="contrasena2">Confirmar contraseña*</label>
        <input type="password" name="contrasenya2" id="contrasenya2" />
        <div class="terminos">
          <input type="checkbox" name="condiciones" id="check">
          <p>Aceptar los términos y condiciones</p>
        </div>
        <div class="botones__formulario">
          <input type="submit" name="aceptar" value="Aceptar" />
          <input type="reset" name="limpiar" value="Limpiar">
          <a href="index.php">Volver</a>
        </div>
      </form>

      <picture></picture>
    </div>
  </main>

  <?php include('componentes/footer_no_registrado.php') ?>
</body>
</html>