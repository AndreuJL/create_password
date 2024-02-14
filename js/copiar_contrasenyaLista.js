// Esperamos a que se carge bien todo el HTML.
document.addEventListener("DOMContentLoaded", function () {
  // Cogemos la referencia de la imagen de copiar.
  let imagen_copiar = document.getElementById("imagen_copiar");

  // Cuando le damos click a la imagen de copiar pasa esto...
  imagen_copiar.addEventListener("click", function () {
    // Cogemos el contenido del elemento "contrasenya_lista" del HTML.
    let copiar_contrasenyaLista = document.getElementById("contrasenya_lista").textContent;

    // Copiamos el contenido de "copiar_contrasenyaLista";
    navigator.clipboard.writeText(copiar_contrasenyaLista);
  })
});