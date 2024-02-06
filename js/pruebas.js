let contrasenya_fin = "1fX0eDrA7t";

var comprobante = true;
// Que no se repitan carácteres en la misma contraseña
    for (let i = 0; i < contrasenya_fin.length; i++) {
      let caracter_a_comprobar = contrasenya_fin[i];

      for (let j = 0; j < contrasenya_fin.length; j++) {
        let contenido_indice = contrasenya_fin[j];
        if (caracter_a_comprobar === contenido_indice) {
          if (i !== j && caracter_a_comprobar === contenido_indice) {
            comprobante = false;
          }
        }
      }
    }

    // Que no hayan más de 1 mayúscula o 1 minúscula una al lado de otra (aj) (KP).
    let may_consecutivas = /[A-Z]{2}/;
    let min_consecutivas = /[a-z]{2}/;

    if (may_consecutivas.test(contrasenya_fin) || min_consecutivas.test(contrasenya_fin)) {
      comprobante = false;
    }

    // Que no haya 3 letras del abacedario seguidas, indiferentemente de si son mayúsculas (ABC), minúsculas (abc) o una combinación (AbC).
    // Recorremos la contrasenya hasta la posición -2 ya que comprobaremos cada valor con los 2 valores siguientes.
    for (let i = 0; i < contrasenya_fin.length - 2; i++) {
      // Cojemos el valor actual y lo pasamos a Ascii.
      let valor_actual = contrasenya_fin[i].charCodeAt(0);
      // Lo mismo en el valor siguiente.
      let valor_siguiente1 = contrasenya_fin[i + 1].charCodeAt(0);
      let valor_siguiente2 = contrasenya_fin[i + 2].charCodeAt(0);

      if ((valor_siguiente1 == valor_actual + 1 || valor_siguiente1 == valor_actual + 33 || valor_siguiente1 == valor_actual - 31) &&
      (valor_siguiente2 == valor_actual + 2 || valor_siguiente2 == valor_actual + 34 || valor_siguiente2 == valor_actual - 30)) {
        comprobante = false;
      }
    }

    // Para que no ponga 2 números consecutivos seguidos uno al lado de otro (56) (23)
    for (let i = 0; i < contrasenya_fin.length - 1; i++) {
    let valor_actual = contrasenya_fin[i];
    let valor_siguiente1 = contrasenya_fin[i + 1];

    if (valor_actual == valor_siguiente1 - 1) {
      comprobante = false;
    }
  }

    // Para que no pueda haber 3 o más números seguidos
    let tres_o_mas_numeros_consecutivos = /\d{3,}/g;
    
    if (tres_o_mas_numeros_consecutivos.test(contrasenya_fin)) {
      comprobante = false;
    }

    // Para que no se repita la misma letra en mayúscula y en minúscula (uU)
    for (let i = 0; i < contrasenya_fin.length - 2; i++) {
      // Cojemos el valor actual y lo pasamos a Ascii.
      let valor_actual = contrasenya_fin[i].charCodeAt(0);

      for (let j = 0; j < contrasenya_fin.length; j++) {
        let valor_comparacion = contrasenya_fin[j].charCodeAt(0);
        
        if (valor_actual == valor_comparacion + 32 || valor_actual == valor_comparacion - 32) {
          comprobante = false;
        }
      }
}
    
console.log(comprobante);