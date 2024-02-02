let contrasenya = "A4&HSL58";

// do {
  let comprobante = true;

  // Todo el código menos las que no son combinaciones........

  // Que no se repitan carácteres
  for (let i = 0; i < contrasenya.length; i++) {
    let caracter_a_comprobar = contrasenya[i];

    for (let j = 0; j < contrasenya.length; j++) {
      let contenido_indice = contrasenya[j];
      if (caracter_a_comprobar === contenido_indice) {
        if (i !== j && caracter_a_comprobar === contenido_indice) {
          comprobante = false;
        }
      }
    }
  }

  // Que no hayan más de 3 mayúsculas o minúscuals consecutivas.
  let may_consecutivas = /[A-Z]{3}/;
  let min_consecutivas = /[a-z]{3}/;

  if (may_consecutivas.test(contrasenya) || min_consecutivas.test(contrasenya)) {
    comprobante = false;
  }

  // Que no haya 2 letras del abacedario seguidas, indiferentemente de si son mayúsculas (AB), minúsculas (ab) o una combinación (Ab).
  // Recorremos la contrasenya con hasta la posición -1 ya que comprobaremos cada valor con el siguiente.
  for (let i = 0; i < contrasenya.length - 1; i++) {
    // Cojemos el valor actual y lo pasamos a Ascii.
    let valor_actual = contrasenya[i].charCodeAt(0);
    // Lo mismo en el valor siguiente.
    let valor_siguiente1 = contrasenya[i + 1].charCodeAt(0);


    // Que no pueda haber 2 letras consecutivas como en el abecedario (ab)(AB)(aB)(AB)
    if ((valor_siguiente1 == valor_actual + 1 || valor_siguiente1 == valor_actual + 33 || valor_siguiente1 == valor_actual - 31)) {
      comprobante = false;
    }
  }

  // Para que no me ponga 2 números consecutivos seguidos
  let todos_numeros = /\d+/g;

  for (let i = 0; i < contrasenya.length; i++) {
    if (todos_numeros.test(contrasenya)) {
      let valor_actual = contrasenya[i];
      let valor_siguiente1 = contrasenya[i + 1];

      if (valor_siguiente1 == valor_actual + 1) {
        comprobante = false;
      }
    }
  }

  // Para que no pueda haber 3 o más números seguidos
  for (let i = 0; i < contrasenya.length - 1; i++) {
    let valor_actual = contrasenya[i];
    let valor_siguiente1 = contrasenya[i + 1];
    let valor_siguiente2 = contrasenya[i + 2];

    if (todos_numeros.test(valor_actual) && (todos_numeros.test(valor_siguiente1)) && (todos_numeros.test(valor_siguiente2))) {
      comprobante = false;
    }
}
  
console.log(comprobante);

// } while (comprobante = false);
