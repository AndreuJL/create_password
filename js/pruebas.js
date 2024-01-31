let contrasenya = "a/Pi¿?E";
let comprobante = true;

// do {

  // Todo el código menos las que no son combinaciones

  
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
  }

  // Que no hayan más de 2 mayúsculas o minúscuals consecutivas.
  let may_consecutivas = /[A-Z]{3}/;
  let min_consecutivas = /[a-z]{3}/;

  if (may_consecutivas.test(contrasenya) || min_consecutivas.test(contrasenya)) {
    comprobante = false;
  }
  
  let letras_consecutivas = /[a-zA-Z]{3}/;

  if (letras_consecutivas.test(contrasenya)) {
    comprobante = false;
  }
  

    console.log(comprobante);
  
  

  

// } while (comprobante = false);