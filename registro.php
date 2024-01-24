<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <?php include('header_no_registrado.php') ?>

  <main>
    <div class="container__registro">
      <form method="POST" novalidate onsubmit="return validar()">
        <label for="nombre">Nombre*</label>
        <input type="text" name="nombre" id="nombre" />
        <label for="apellidos">Apellidos*</label>
        <input type="text" name="apellidos" id="apellidos" />
        <label for="nombreusuario">Nombre de Usuario*</label>
        <input type="text" id="nombre_usuario" />
        <label for="contrasena1">Contraseña*</label>
        <input type="password" name="contrasenya1" id="contrasenya1" />
        <label for="contrasena2">Confirmar contraseña*</label>
        <input type="password" name="contrasenya2" id="contrasenya2" />
        <div class="terminos">
          <input type="checkbox" name="condiciones">
          <p>Aceptar los términos y condiciones</p>
        </div>
        <input type="submit" name="aceptar" value="Aceptar" />
      </form>
    </div>
  </main>

  <?php include('footer.php') ?>
</body>
</html>