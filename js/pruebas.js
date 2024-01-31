let contrasenya = "a/hPa¿?E";
let comprobante = true;

do {

  // Todo el código

  
  for (let i = 0; i < contrasenya.length; i++) {   
    let caracter_a_comprobar = contrasenya[i];
    
    // Que no se repitan carácteres
    for (let j = 0; j < contrasenya.length; j++) {
      let contenido_indice = contrasenya[j];
      if (caracter_a_comprobar === contenido_indice) {
        if (i !== j && caracter_a_comprobar === contenido_indice) {
          comprobante = false;
        }   
      }
    }

    // Que no hayan más de 3 mayúsculas o minúscuals consecutivas.
    let may_consecutivas = /[A-Z]{3}/;
    let min_consecutivas = /[a-z]{3}/;

    if (may_consecutivas.test(contrasenya) || min_consecutivas.test(contrasenya)) {
      comprobante = false;
    }
  }
} while (comprobante = false);