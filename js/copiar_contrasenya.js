// Esperamos a que se carge bien todo el HTML.
document.addEventListener("DOMContentLoaded", function () {
  // Cogemos la referencia del botón de copiar.
  let boton_copiar = document.getElementById("copiar");

  // Cuando le damos click al botón de copiar pasa esto...
  boton_copiar.addEventListener("click", function () {
    // Cogemos el contenido del elemento "salida_contrasena" del HTML.
    let salida_contrasenya = document.getElementById("salida__contrasena");

    // Seleccionamos el contenido del elemento.
    let range = document.createRange();
    range.selectNodeContents(salida_contrasenya);

    // Seleccionamos el contenido del elemento.
    let seleccion = window.getSelection();
    seleccion.removeAllRanges();
    seleccion.addRange(range);
    
    // Ejecutamos el comando de copiar.
    document.execCommand("copy");
    
    // Limpiamos la selección.
    seleccion.removeAllRanges();
  })
});

