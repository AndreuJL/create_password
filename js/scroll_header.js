// Metemos la posición en el eje Y de la página una variable.
// Al entrar en la página será ubicacion_actual = 0.
let ubicacion_principal = window.pageYOffset;

// Escuchamos cuando hacemos scroll
window.addEventListener("scroll", function () {
  // Metemos la posicion del eje Y de la página (cuando hacemos scroll) en una var.
  // Será mayor que 0 ya que haremos scroll hacia abajo (havia abajo sube el num).
  let ubicacion_actual = window.pageYOffset;

  // Hacemos referencia al header con el ID
  let header = document.getElementById("header");

  // Si la ubicación principal (0) es menor a la ubicación actual donde está yendo el scroll (0+) esconde el header, sino se muestra.
  if (ubicacion_principal < ubicacion_actual) {
    header.style.top = "-60px"; // Se esconde
  } else {
    header.style.top = "0px"; // Se muestra
  }

  // al finalizar igualamos los 2 ubicaciones para que sean iguales (vuelta a empezar) y al hacer scroll hacia arriba aparecerá y hacia abajo se esconderá.
  ubicacion_principal = ubicacion_actual;
});
