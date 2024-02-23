export function editar_contrasenya(element) {
  // Cogemos el padre del padre del padre del icono editar que ha sido clicado.
  let padre1 = element.parentElement;
  let padre2 = padre1.parentElement;
  let padre3 = padre2.parentElement;
  // Seleccionamos el contenido del elemento donde se encuentra el nombre de la contraseña.
  let elemento_texto = padre3.querySelector("p:nth-of-type(1)");
  // Extraemos el texto del elemento (que será el texto del nombre de la contraseña).
  let nombre_contrasenyaEditar = elemento_texto.textContent;
  // Saldrá un alert que nos pedirá el nombre que le queremos poner a la contraseña.
  Swal.fire({
    title: "Inserte el nombre que le quiera poner a la contraseña (Nombre actual: " + nombre_contrasenyaEditar + ")",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
      style: 'width: 85%'
    },
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    showLoaderOnConfirm: false,
    allowOutsideClick: !Swal.isLoading(),
  }).then((result) => {
    // Si le damos a aceptar entrará aquí.
    if (result.isConfirmed) {
      // Si se ha dado al botón de generar cogerá el nombre en una variable.
      let nuevo_nombre = result.value;
      // Con ajax mandamos el nombre y la contraseña a editar_contrasenyaLista.php que se encargará de editar el nombre de la contraseña en la base de datos.
      $.ajax({
      url: './php/editar_contrasenyaLista.php',
      type: 'POST',
      data: {
        nombre_contrasenyaEditar: nombre_contrasenyaEditar,
        nuevo_nombre: nuevo_nombre
      },
        success: function () {
        // Si se ha guardado correctamente escribirá el nuevo nombre en el HTML.
        padre3.querySelector("p:nth-of-type(1)").textContent = nuevo_nombre;
        }
      })
    }
  })
}