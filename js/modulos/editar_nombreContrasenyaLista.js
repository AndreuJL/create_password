export function editar_contrasenya(element){
  let padre1 = element.parentElement;
  let padre2 = padre1.parentElement;
  let padre3 = padre2.parentElement;

  let elemento_texto = padre3.querySelector("p:nth-of-type(1)");

  let nombre_contrasenyaEditar = elemento_texto.textContent;

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
      
      let nuevo_nombre = result.value;

      $.ajax({
      url: './php/editar_contrasenyaLista.php',
      type: 'POST',
      data: {
        nombre_contrasenyaEditar: nombre_contrasenyaEditar,
        nuevo_nombre: nuevo_nombre
      },
      success: function () {
        padre3.querySelector("p:nth-of-type(1)").textContent = nuevo_nombre;
        }
      })
    }
  })
}