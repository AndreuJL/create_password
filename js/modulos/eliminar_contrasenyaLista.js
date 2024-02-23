export function eliminar_contrasenya(element) {
  // Cogemos el padre del padre del padre del icono eliminar que ha sido clicado.
  let padre1 = element.parentElement;
  let padre2 = padre1.parentElement;
  let padre3 = padre2.parentElement;
  // Seleccionamos el contenido del elemento donde se encuentra la contraseña.
  let elemento_texto = padre3.querySelector("p:nth-of-type(2)");
  // Extraemos el texto del elemento (que será el texto de la contraseña).
  let contrasenya_eliminar = elemento_texto.textContent;
  // Con ajax mandamos la contraseña a eliminar_contrasenyaLista.php que se encargará de eliminar la contraseña en la base de datos.
  $.ajax({
  url: './php/eliminar_contrasenyaLista.php',
  type: 'POST',
  data: {
    contrasenya_eliminar: contrasenya_eliminar
  },
    success: function () {
    // Si se ha eliminado correctamente en la base de datos se eliminará la contraseña del HTML.
    padre3.remove();
    }
  })
}