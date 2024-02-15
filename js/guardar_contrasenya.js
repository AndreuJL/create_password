// Esperamos a que se carge bien todo el HTML.
document.addEventListener("DOMContentLoaded", function () {

  // Cogemos la referencia del botón guardar.
  let boton_guardar = document.getElementById("boton_guardar");

  // Cuando le damos click al botón de guardar pasa esto...
  boton_guardar.addEventListener("click", function () {
    // Cogemos el contenido del elemento "salida_contrasena" del HTML.
    let salida_contrasenya = document.getElementById("salida__contrasena").textContent;

    // Saldrá un alert que nos pedirá el nombre que le queremos poner a la contraseña.
    Swal.fire({
      title: "Inserte el nombre que le quiera poner a la contraseña",
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
        // Si se ha dado al botón de generar (que la salida no sea "Por favor elija una opción") cogerá el nombre en una variable.
        if (salida_contrasenya != "Por favor elija una opción") {
          let nombre_contrasenya = result.value;

          $.ajax({
            url: './php/guardar_contrasenya.php',
            type: 'POST',
            data: {
              nombre_contrasenya: nombre_contrasenya,
              salida_contrasenya: salida_contrasenya
            },
            success: function (response) {

              if (response == "Nombre existente") {
                Swal.fire({
                  icon: "error",
                  title: "Nombre existente!!!",
                  text: "El nombre " + nombre_contrasenya + " ya existe, por favor elija otro nombre.",
                });
              } else {
                Swal.fire({
                  icon: "success",
                  title: "Contraseña guardada!!!",
                  text: "La contraseña " + salida_contrasenya + " para " + nombre_contrasenya + " se ha guardado correctamente!",
                });
              }

            }
          })
        }        
      }
    })
  })
});