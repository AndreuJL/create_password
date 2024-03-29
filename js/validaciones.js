function alerta(mensaje_error) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: mensaje_error,     
  });
}

function validar() {
  // ----------VALIDAR NOMBRE------------
  let valorNombre = document.getElementById("nombre").value;

  //Que no sea nulo
  if (valorNombre == null || valorNombre.length == 0) {
    alerta("Por favor, escriba su nombre");
    return false;
  }

  // ----------VALIDAR APELLIDOS------------
  let valorApellidos = document.getElementById("apellidos").value;

  //Que no sea nulo
  if (valorApellidos == null || valorApellidos == 0) {
    alerta("Por favor, introduzca el apellido")
    return false;
  }

  // ----------VALIDAR NOMBRE DE USUARIO------------
  let valorNombreUsuario = document.getElementById("nombre_usuario").value;

  if (valorNombreUsuario == null || valorNombreUsuario.length == 0) {
    alerta("Por favor, introduzca el nombre de usuario");
    return false;
  }

  // ----------VALIDAR CORREO ELECTRÓNICO------------
  let valorCorreo = document.getElementById("mail").value;

  if (valorCorreo == true || valorCorreo.length == 0) {
    alerta("Por favor, introduzca un correo electrónico");
    return false;
  } else {
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(valorCorreo)) {
      alerta("Porfavor, introduzca un correo electrónico correcto");
      return false;
    }
  }

  // ----------VALIDAR CONTRASEÑAS------------
  let valorContrasena1 = document.getElementById("contrasenya_acceso").value;
  let valorContrasena2 = document.getElementById("contrasenya2").value;

  // Que haya una contraseña
  if (
    valorContrasena1 == null ||
    valorContrasena1.length == 0 ||
    valorContrasena2 == null ||
    valorContrasena2.length == 0
  ) {
    alerta("Por favor, introduzca una contraseña");
    return false;
  }

  // Que coincidan las contraseñas
  if (valorContrasena1 !== valorContrasena2) {
    alerta("Las contraseñas no coinciden");
    return false;
  }

  // Que la contraseña tenga 8 carácteres mínimo
  if (valorContrasena1.length < 8 && valorContrasena2.length < 8) {
    alerta("La contraseña debe tenér mínimo 8 carácteres");
    return false;
  }

  // ----------VALIDAR CONTRASEÑAS------------
  var checkbox = document.getElementById("check");

  if (!checkbox.checked) {
    alerta("Debe aceptar los términos y condiciones para continuar");
    return false;
  }

  return true;
}