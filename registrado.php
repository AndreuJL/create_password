<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>oppasword</title>
    <link rel="stylesheet" href="css/style.css" />
    <script src=""></script>
  </head>
  <body>    
    <?php include('componentes/header_registrado.php'); ?>    
      <main>
            <section class="generador">
              <section class="izquierda">

                <h1>Genera tu contraseña personalizada</h1>

                <article class="opciones">
                  <div class="opcion">
                    <input type="checkbox" name="mayusculas" id="mayusculas">
                    <h3>MAYÚSCULAS</h3>
                  </div>
                  <div class="opcion">
                    <input type="checkbox" name="minusculas" id="minusculas">
                    <h3>Minúsculas</h3>
                  </div>
                  <div class="opcion">
                    <input type="checkbox" name="numeros" id="numeros">
                    <h3>Números</h3>
                  </div>
                  <div class="opcion">
                    <input type="checkbox" name="simbolos" id="simbolos">
                    <h3>Símbolos</h3>
                  </div>
                  <div class="opcion">
                    <select name="longitud" id="longitud">
                      <option value="6caracteres">6 carácteres (poco segura)</option>
                      <option value="8caracteres">8 carácteres (segura)</option>
                      <option value="10caracteres">10 carácteres (muy segura)</option>
                    </select>
                  </div>
                </article>

                <article class="zona__salida">
                  <div class="salida__contrasena"></div>
                  <button class="boton__generar">Generar</button>
                  <button class="boton__guardar">Guardar</button>
                </article>

                <article class="zona__botones2">
                  <button class="copiar__registrado">Copiar</button>
                  <a href="lista.php">
                    <button class="tus__contrasenyas">Tus contraseñas</button>
                  </a>
                </article>

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
    <?php include('componentes/footer_registrado.php'); ?>
  </body>
</html>
