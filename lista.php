<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tus contraseñas</title>
    <link rel="stylesheet" href="css/style.css" />
    <script src=""></script>
  </head>
  <body>    
    <?php include('componentes/header_registrado.php'); ?>   
      <main>
        <section class="contenedor__lista">
          <h2>Tus contraseñas</h2>

          <article class="subcaja__contrasenyas">

            <article class="header__contrasenyas">
              <p>Nombre</p>
              <p>Contraseña</p>
            </article>

            <article class="fila__contrasenya">
              <p class="nombre__contrasenya">Google</p>
              <p class="contrasenya__eliminar">555555
                <img src="svg/eliminar.svg" alt="eliminar">
              </p>             
            </article>

            <article class="fila__contrasenya">
              <p class="nombre__contrasenya">Facebook</p>
              <p class="contrasenya__eliminar">5555555555
                <img src="svg/eliminar.svg" alt="eliminar">
              </p>
            </article>

          </article>

          <a href="registrado.php">Volver</a>
        </section>
      </main>    
    <?php include('componentes/footer_registrado.php'); ?>
  </body>
</html>