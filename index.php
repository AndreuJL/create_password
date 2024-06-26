<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>oppasword</title>
    <!-- SEO = Básico -->
    <meta name="Genera y guarda tus propias contraseñas" content="" />
    <meta name="seguridad contraseña seguro" content="" />
    <!-- Etiquetas Open Graph y Twitter Card, para crear el SEO de Redes Sociales -->
    <meta property="og:title" content="oppasword" />
    <meta property="og:description" content="Genera y guarda tus propias contraseñas" />
    <meta
      property="og:image"
      content="./img/desktop/imagen_contrasena.webp"
    />
    <meta property="og:url" content="http://oppassword.andreujuliaedib.com/" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="oppassword" />
    <meta name="twitter:description" content="Genera y guarda tus propias contraseñas" />
    <meta
      name="twitter:image"
      content="./img/desktop/imagen_contrasena.webp"
    />
     <!-- App Web, inidicar al navegador que elementos mostrar en un JSON -->
     <link rel="manifest" href="site.webmanifest" />
    <!-- icono de acceso para IOS -->
    <link rel="apple-touch-icon" href="icon.png" />
    <!-- Recordar que favicon.ico tiene que estar en el directorio inicial -->
    <link rel="stylesheet" href="css/style.css" />
    <meta name="robots" content="noindex, nofollow">
    <!-- Se cambia el tema de algunos navegadores -->
    <meta name="theme-color" content="#fafafa" />
    <script src="./js/scroll_header.js"></script>
    <script src="./js/generar_contrasenya.js" type="module"></script>
    <script src="./js/copiar_contrasenya.js"></script>
  </head>
  <body>
    <?php include('componentes/header.php'); ?>
      <main>
            <section class="generador">
              <section class="izquierda">

                <h1>Genera tu contraseña de 6 dígitos</h1>

                <article class="opciones">
                  <div class="opcion">
                    <input type="checkbox" name="mayusculas" id="mayusculas" checked>
                    <h3>MAYÚSCULAS</h3>
                  </div>
                  <div class="opcion">
                    <input type="checkbox" name="minusculas" id="minusculas" checked>
                    <h3>Minúsculas</h3>
                  </div>
                  <div class="opcion">
                    <input type="checkbox" name="numeros" id="numeros" checked>
                    <h3>Números</h3>
                  </div>
                  <!-- He puesto este check y select escondido con CSS para que javascript me pille que la casilla de simbolos no está seleccionada y para que me pilla que tiene la opcion de 6 carácteres siempre -->
                  <div class="simbolo__escondido" id="simbolos"></div>
                  <select class="select__escondido" name="longitud" id="longitud">
                    <option value="6caracteres">6 carácteres (poco segura)</option>
                  </select>
                </article>

                <article class="zona__salida">
                  <div class="salida__contrasena" id="salida__contrasena"></div>
                  <button class="boton__generar" id="generar">Generar</button>
                </article>

                <button class="copiar" id="copiar">Copiar</button>

              </section>

              <picture></picture>

            </section>
            <section class="forma__redondeada"></section>

            <section class="contenido">
              <article class="parrafo1">
                <h3>La Importancia de Contraseñas Seguras</h3>
                <p>En la era digital actual, donde la información personal y confidencial está constantemente en riesgo de ser comprometida, la creación de contraseñas seguras se ha convertido en una práctica fundamental para proteger nuestra privacidad. Una contraseña segura es la primera línea de defensa contra accesos no autorizados y ciberataques. Pero, ¿qué elementos hacen que una contraseña sea realmente segura?</p>
              </article>

              <article class="imagen1"></article>

              <article class="imagen2"></article>

              <article class="parrafo2">
                <h4>Longitud y Complejidad</h4>
                <p>Una contraseña segura se caracteriza por su longitud y complejidad. Optar por contraseñas con al menos 12 caracteres, que incluyan una combinación de letras mayúsculas, minúsculas, números y caracteres especiales, aumenta la resistencia contra ataques de fuerza bruta. Es crucial evitar patrones obvios y secuencias, ya que contraseñas más complejas ofrecen una defensa más sólida contra métodos automatizados de hackeo.</p>
              </article>

              <article class="parrafo3">
                <h4>Evitar Información Personal y Reutilización</h4>
                <p>Evitar el uso de información personal, como nombres y fechas de nacimiento, fortalece la seguridad de una contraseña. Además, la reutilización de contraseñas debe evitarse a toda costa. Cada cuenta debe tener su propia contraseña única para minimizar riesgos. El uso de gestores de contraseñas facilita la gestión de múltiples contraseñas sin comprometer la seguridad. Además, cambiar las contraseñas regularmente, al menos cada 3-6 meses, y la implementación de la autenticación de dos factores (2FA) añaden capas adicionales de protección. Estar alerta ante actividades inusuales y actuar rápidamente al detectarlas contribuye a mantener la integridad de nuestras cuentas en el entorno digital.</p>
              </article>

              <article class="imagen3"></article>
            </section>
      </main>    
    <?php include('componentes/footer.php'); ?>    
  </body>
</html>
