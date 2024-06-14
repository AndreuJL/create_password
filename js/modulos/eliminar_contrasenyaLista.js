export function eliminar_contrasenya(element) {
  // Cogemos el padre del padre del padre del icono eliminar que ha sido clicado.
  let padre1 = element.parentElement;
  let padre2 = padre1.parentElement;
  let padre3 = padre2.parentElement;
  // Seleccionamos el contenido del elemento donde se encuentra la contraseña.
  let elemento_texto = padre3.querySelector("p:nth-of-type(2)");
  // Extraemos el texto del elemento (que será el texto de la contraseña).
  let contrasenya_eliminar = elemento_texto.textContent;

  Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás volver atrás!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminalo!"
  }).then((result) => {
    if (result.isConfirmed) {
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
      Swal.fire({
        title: "Eliminado!",
        text: "Su contraseña ha sido eliminada.",
        icon: "success"
      });
    }
  });
}
