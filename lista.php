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

            <article class="nombre">
              <article class="header__nombre">Nombre</article>
              <article class="nombre__contrasenyas">
                <!-- Donde poner los nombre de contraseñas -->
                <p>Facebook</p>
                <p>Google</p>
              </article>
            </article>
            
            <article class="contrasenyas">
              <article class="header__contrasenya">Contraseña</article>
              <!-- Cada contrasenya__cruz es una contraseña a insertar -->
              <article class="contrasenya__cruz">
                <div class="contrasenya__individual">
                  <p>s5f4fd5gd5</p>
                </div>
                <img src="svg/eliminar.svg" alt="eliminar">
              </article>
              
              <article class="contrasenya__cruz">
                <div class="contrasenya__individual">
                  <p>s5f4fd5gd5</p>
                </div>
                <img src="svg/eliminar.svg" alt="eliminar">
              </article>

            </article>

          </article>

          <a href="registrado.php">Volver</a>
        </section>
      </main>    
    <?php include('componentes/footer_registrado.php'); ?>
  </body>
</html>