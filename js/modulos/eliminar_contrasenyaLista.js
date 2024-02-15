export function eliminar_contrasenya(element){
  let padre1 = element.parentElement;
  let padre2 = padre1.parentElement;
  let padre3 = padre2.parentElement;

  let elemento_texto = padre3.querySelector("p:nth-of-type(2)");

  let contrasenya_eliminar = elemento_texto.textContent;

  $.ajax({
  url: './php/eliminar_contrasenyaLista.php',
  type: 'POST',
  data: {
    contrasenya_eliminar: contrasenya_eliminar
  },
  success: function () {
    padre3.remove();
    }
  })
}