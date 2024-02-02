// Creamos una funcion que desordena arrays
function desordenar(array) {
  for (let i = 0; i < array.length; i++) {
    let x = Math.floor(Math.random() * (i + 1));

    let temporal = array[i];
    array[i] = array[x];
    array[x] = temporal;
  }
  return array;
}

export function generar_10caracteres(){
  // Se referencia a todos los elementos necesarios del HTML
  let contrasenya = document.getElementById("salida__contrasena");

  let mayusculas = document.getElementById("mayusculas");
  let minusculas = document.getElementById("minusculas");
  let numeros = document.getElementById("numeros");
  let simbolos = document.getElementById("simbolos");

  // Para los símbolos simplemente he hecho un Array con los que quiero poner (no son todos ya que algunos serían un poco complicados para los usuarios). Se usará más adelante.
  let array_contrasenya_simb = ["!", "¡", "¿", "?", "$", "%", "&", "=", "+", "-", "*", "/"];

  // SIN ELECCIÓN
  // Si no se elije una opción saldrá un mensage.
  if (!mayusculas.checked && !minusculas.checked && !numeros.checked && !simbolos.checked) {
    let elige_opcion = "Por favor elija una opción";
    contrasenya.textContent = elige_opcion;
    throw new Error('Esto no es un error, soloe s para parar el archivo javascript');
  };

  // MAYÚSCULAS
  // Si solo están marcadas las mayúsculas con un for de 10 vueltas crea un número aleatorio de entre 65 y 90 que son las mayúsculas en la tabla Ascii, los paso a mayúsculas de la tabla Ascii y vol anexando carácteres al string "contrasenya_may",
  if (mayusculas.checked && !minusculas.checked && !numeros.checked  && !simbolos.checked) {
    let contrasenya_may = "";
    for (let i = 0; i < 10; i++) {
      let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
      let may_aleat = String.fromCharCode(may_aleat_num);
      contrasenya_may += may_aleat;
      contrasenya.textContent = contrasenya_may;
    };
    throw new Error('Esto no es un error, soloe s para parar el archivo javascript');
  };

  // MINÚSCULAS
  // Igual que en al anterior pero con minúsculas
  if (minusculas.checked && !mayusculas.checked && !numeros.checked && !simbolos.checked) {
    let contrasenya_mim = "";
    for (let i = 0; i < 10; i++) {
      let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
      let min_aleat = String.fromCharCode(min_aleat_num);
      contrasenya_mim += min_aleat;
      contrasenya.textContent = contrasenya_mim;
    };
    throw new Error('Esto no es un error, soloe s para parar el archivo javascript');
  };

  // NÚMEROS
  // Igual que en al anterior pero con números (no hace falta la tabla Ascii)
  if (numeros.checked && !minusculas.checked && !mayusculas.checked && !simbolos.checked) {
    let contrasenya_num = "";
    for (let i = 0; i < 10; i++) {
      let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
      contrasenya_num += num_aleat;
      contrasenya.textContent = contrasenya_num;
    };
    throw new Error('Esto no es un error, soloe s para parar el archivo javascript');
  };

  // SÍMBOLOS
  // Con un bucle de 6 vueltas busca un número aleatorio de entre 0 y 11 ya que son los índices de la array de símbolos, guardamos el valor del indice aleatorio en una variable, los vamos concatenando y los mostramos juntos por pantalla.
  if (!numeros.checked && !minusculas.checked && !mayusculas.checked && simbolos.checked) {
    let contrasenya_simb = "";     
    for (let i = 0; i < 10; i++) {
      let num_aleat = Math.floor(Math.random() * (11 - 0) + 0);
      let simbolo_aleat = array_contrasenya_simb[num_aleat];
      contrasenya_simb += simbolo_aleat;
    }
    contrasenya.textContent = contrasenya_simb;
    throw new Error('Esto no es un error, soloe s para parar el archivo javascript');
  };



  // MAYÚSCULAS + MINÚSCULAS
  // Aquí es lo mismo pero con mayúsculas y minúsculas, el bucle for solo da 5 vueltas porque he decidido que tiene que haber 5 mayúsculas y 5 minúsculas. Luego la paso a array para desordenarla y la vuelvo a pasar a String para tener la contrasenya final.
  if (mayusculas.checked && minusculas.checked && !numeros.checked && !simbolos.checked) {
    let contrasenya_may = "";
    let contrasenya_mim = "";
    for (let i = 0; i < 5; i++) {
      let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
      let may_aleat = String.fromCharCode(may_aleat_num);
      contrasenya_may += may_aleat;

      let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
      let min_aleat = String.fromCharCode(min_aleat_num);
      contrasenya_mim += min_aleat;
    }
    let contrasenya_may_min_ord = contrasenya_may + contrasenya_mim;
    let array_contrasenya_may_min_ord = contrasenya_may_min_ord.split("");
    let array_contrasenya_may_min = desordenar(array_contrasenya_may_min_ord);
    let contrasenya_may_min = array_contrasenya_may_min.toString().replace(/,/g, "");
    // "/,/g" quiere decir que quíta todas las , del String.
    contrasenya.textContent = contrasenya_may_min;
    throw new Error('Esto no es un error, soloe s para parar el archivo javascript');
  }

  // MAYÚSCULAS + NÚMEROS
  // Lo mismo que el anterior pero con mayúsculas y números
  if (mayusculas.checked && !minusculas.checked && numeros.checked && !simbolos.checked) {
    let contrasenya_may = "";
    let contrasenya_num = "";
    for (let i = 0; i < 5; i++) {
      let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
      let may_aleat = String.fromCharCode(may_aleat_num);
      contrasenya_may += may_aleat;

      let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
      contrasenya_num += num_aleat;
    }
    let contrasenya_may_num_ord = contrasenya_may + contrasenya_num;
    let array_contrasenya_may_num_ord = contrasenya_may_num_ord.split("");
    let array_contrasenya_may_num = desordenar(array_contrasenya_may_num_ord);
    let contrasenya_may_num = array_contrasenya_may_num.toString().replace(/,/g, "");
    contrasenya.textContent = contrasenya_may_num;
    throw new Error('Esto no es un error, soloe s para parar el archivo javascript');
  }

  // MINÚSCULAS + NÚMEROS
  // Lo mismo que el anterior pero con minúsculas y números
  if (!mayusculas.checked && minusculas.checked && numeros.checked && !simbolos.checked) {
    let contrasenya_min = "";
    let contrasenya_num = "";
    for (let i = 0; i < 5; i++) {
      let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
      let min_aleat = String.fromCharCode(min_aleat_num);
      contrasenya_min += min_aleat;

      let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
      contrasenya_num += num_aleat;
    }
    let contrasenya_min_num_ord = contrasenya_min + contrasenya_num;
    let array_contrasenya_min_num_ord = contrasenya_min_num_ord.split("");
    let array_contrasenya_min_num = desordenar(array_contrasenya_min_num_ord);
    let contrasenya_min_num = array_contrasenya_min_num.toString().replace(/,/g, "");
    contrasenya.textContent = contrasenya_min_num;
    throw new Error('Esto no es un error, soloe s para parar el archivo javascript');
  }

  // MAYÚSCULAS + SÍMBOLOS
  // Para mayúsculas y símbolos.
  if (mayusculas.checked && !minusculas.checked && !numeros.checked && simbolos.checked) {
    let contrasenya_may = "";
    let contrasenya_simb = "";
    for (let i = 0; i < 5; i++) {
      let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
      let may_aleat = String.fromCharCode(may_aleat_num);
      contrasenya_may += may_aleat;

      let num_aleat = Math.floor(Math.random() * (11 - 0) + 0);
      let simbolo_aleat = array_contrasenya_simb[num_aleat];
      contrasenya_simb += simbolo_aleat;
    }
    let contrasenya_may_simb_ord = contrasenya_may + contrasenya_simb;
    let array_contrasenya_may_simb_ord = contrasenya_may_simb_ord.split("");
    let array_contrasenya_may_simb = desordenar(
      array_contrasenya_may_simb_ord
    );
    let contrasenya_may_simb = array_contrasenya_may_simb.toString().replace(/,/g, "");
    contrasenya.textContent = contrasenya_may_simb;
    throw new Error('Esto no es un error, soloe s para parar el archivo javascript');
  }

  // MINÚSCULAS + SÍMBOLOS
  if (!mayusculas.checked && minusculas.checked && !numeros.checked && simbolos.checked) {
    let contrasenya_min = "";
    let contrasenya_simb = "";
    for (let i = 0; i < 5; i++) {
      let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
      let min_aleat = String.fromCharCode(min_aleat_num);
      contrasenya_min += min_aleat;

      let num_aleat = Math.floor(Math.random() * (11 - 0) + 0);
      let simbolo_aleat = array_contrasenya_simb[num_aleat];
      contrasenya_simb += simbolo_aleat;
    }
    let contrasenya_min_simb_ord = contrasenya_min + contrasenya_simb;
    let array_contrasenya_min_simb_ord = contrasenya_min_simb_ord.split("");
    let array_contrasenya_min_simb = desordenar(
      array_contrasenya_min_simb_ord
    );
    let contrasenya_min_simb = array_contrasenya_min_simb.toString().replace(/,/g, "");
    contrasenya.textContent = contrasenya_min_simb;
    throw new Error('Esto no es un error, soloe s para parar el archivo javascript');
  }

  // NÚMEROS + SÍMBOLOS
  if (!mayusculas.checked && !minusculas.checked && numeros.checked && simbolos.checked) {
    let contrasenya_num = "";
    let contrasenya_simb = "";
    for (let i = 0; i < 5; i++) {
      let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
      contrasenya_num += num_aleat;

      let num_aleat_simb = Math.floor(Math.random() * (11 - 0) + 0);
      let simbolo_aleat = array_contrasenya_simb[num_aleat_simb];
      contrasenya_simb += simbolo_aleat;
    }
    let contrasenya_num_simb_ord = contrasenya_num + contrasenya_simb;
    let array_contrasenya_num_simb_ord = contrasenya_num_simb_ord.split("");
    let array_contrasenya_num_simb = desordenar(
      array_contrasenya_num_simb_ord
    );
    let contrasenya_num_simb = array_contrasenya_num_simb.toString().replace(/,/g, "");
    contrasenya.textContent = contrasenya_num_simb;
    throw new Error('Esto no es un error, soloe s para parar el archivo javascript');
  }


  do {
    let comprobante = true;
      
    // MAYÚSCULAS + MINÚSCULAS + NÚMEROS
    // Igual que en los anteriores pero con mayúsculas minúsculas y números, he decidido que la contraseña tendrá que tener 4 mayúsculas, 3 minúsculas y 3 números, así que habrá 2 bucles, uno con 4 vueltas y otro con 3.
    if (mayusculas.checked && minusculas.checked && numeros.checked && !simbolos.checked) {
      let contrasenya_may = "";
      let contrasenya_min = "";
      let contrasenya_num = "";
      for (let i = 0; i < 4; i++) {
        let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
        let may_aleat = String.fromCharCode(may_aleat_num);
        contrasenya_may += may_aleat;
      }
      for (let i = 0; i < 3; i++) {
        let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
        let min_aleat = String.fromCharCode(min_aleat_num);
        contrasenya_min += min_aleat;

        let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
        contrasenya_num += num_aleat;
      }

      let contrasenya_may_min_num_ord =
        contrasenya_may + contrasenya_min + contrasenya_num;
      let array_contrasenya_may_min_num_ord =
        contrasenya_may_min_num_ord.split("");
      let array_contrasenya_may_min_num = desordenar(
        array_contrasenya_may_min_num_ord
      );
      let contrasenya_may_min_num = array_contrasenya_may_min_num.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_may_min_num;
    }

    // MINÚSCULAS + NÚMEROS + SÍMBOLOS
    // Tendrá 4 minúsculas, 3 números y 3 símbolos
    if (!mayusculas.checked && minusculas.checked && numeros.checked && simbolos.checked) {
      let contrasenya_mim = "";
      let contrasenya_num = "";
      let contrasenya_simb = "";
      for (let i = 0; i < 4; i++) {
        let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
        let min_aleat = String.fromCharCode(min_aleat_num);
        contrasenya_mim += min_aleat;
      }
      for (let i = 0; i < 3; i++) {
        let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
        contrasenya_num += num_aleat;

        let num_aleat_simb = Math.floor(Math.random() * (11 - 0) + 0);
        let simbolo_aleat = array_contrasenya_simb[num_aleat_simb];
        contrasenya_simb += simbolo_aleat;
      }

      let contrasenya_min_num_simb_ord =
        contrasenya_mim + contrasenya_num + contrasenya_simb;
      let array_contrasenya_min_num_simb_ord =
        contrasenya_min_num_simb_ord.split("");
      let array_contrasenya_min_num_simb = desordenar(
        array_contrasenya_min_num_simb_ord
      );
      let contrasenya_min_num_simb = array_contrasenya_min_num_simb.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_min_num_simb;
    }

    // MAYÚSCULAS + NÚMEROS + SÍMBOLOS
    // 4 mayúsculas, 3 números y 3 símbolos
    if (mayusculas.checked && !minusculas.checked && numeros.checked && simbolos.checked) {
      let contrasenya_may = "";
      let contrasenya_num = "";
      let contrasenya_simb = "";
      for (let i = 0; i < 4; i++) {
        let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
        let may_aleat = String.fromCharCode(may_aleat_num);
        contrasenya_may += may_aleat;
      }
      for (let i = 0; i < 3; i++) {
        let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
        contrasenya_num += num_aleat;

        let num_aleat_simb = Math.floor(Math.random() * (11 - 0) + 0);
        let simbolo_aleat = array_contrasenya_simb[num_aleat_simb];
        contrasenya_simb += simbolo_aleat;
      }

      let contrasenya_may_num_simb_ord =
        contrasenya_may + contrasenya_num + contrasenya_simb;
      let array_contrasenya_may_num_simb_ord =
        contrasenya_may_num_simb_ord.split("");
      let array_contrasenya_may_num_simb = desordenar(
        array_contrasenya_may_num_simb_ord
      );
      let contrasenya_may_num_simb = array_contrasenya_may_num_simb.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_may_num_simb;
    }

    // MAYÚSCULAS + MINÚSCULAS + SÍMBOLOS
    // 4 mayúsculas, 4 minúsculas y 2 símbolos
    if (mayusculas.checked && minusculas.checked && !numeros.checked && simbolos.checked) {
      let contrasenya_may = "";
      let contrasenya_min = "";
      let contrasenya_simb = "";
      for (let i = 0; i < 4; i++) {
        let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
        let may_aleat = String.fromCharCode(may_aleat_num);
        contrasenya_may += may_aleat;

        let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
        let min_aleat = String.fromCharCode(min_aleat_num);
        contrasenya_min += min_aleat;
      }
      for (let i = 0; i < 2; i++) {
        let num_aleat_simb = Math.floor(Math.random() * (11 - 0) + 0);
        let simbolo_aleat = array_contrasenya_simb[num_aleat_simb];
        contrasenya_simb += simbolo_aleat;
      }

      let contrasenya_min_num_simb_ord =
        contrasenya_may + contrasenya_min + contrasenya_simb;
      let array_contrasenya_min_num_simb_ord =
        contrasenya_min_num_simb_ord.split("");
      let array_contrasenya_min_num_simb = desordenar(
        array_contrasenya_min_num_simb_ord
      );
      let contrasenya_min_num_simb = array_contrasenya_min_num_simb.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_min_num_simb;
    }

    // MAYÚSCULAS + MINÚSCULAS + NÚMEROS + SÍMBOLOS
    // En este apartado he decidido que tiene que haber 3 mayúsculas, 3 minúsculas, 2 números y 2 símbolo.
    if (mayusculas.checked && minusculas.checked && numeros.checked && simbolos.checked) {
      let contrasenya_may = "";
      let contrasenya_min = "";
      let contrasenya_num = "";
      let contrasenya_simb = "";
      for (let i = 0; i < 3; i++) {
        let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
        let may_aleat = String.fromCharCode(may_aleat_num);
        contrasenya_may += may_aleat;

        let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
        let min_aleat = String.fromCharCode(min_aleat_num);
        contrasenya_min += min_aleat;
      }
      for (let i = 0; i < 2; i++) {
        let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
        contrasenya_num += num_aleat;

        let num_aleat_simb = Math.floor(Math.random() * (11 - 0) + 0);
        let simbolo_aleat = array_contrasenya_simb[num_aleat_simb];
        contrasenya_simb += simbolo_aleat;
      }

      let contrasenya_may_min_num_simb_ord =
        contrasenya_may + contrasenya_min + contrasenya_num + contrasenya_simb;
      let array_contrasenya_may_min_num_simb_ord =
        contrasenya_may_min_num_simb_ord.split("");
      let array_contrasenya_may_min_num_simb = desordenar(
        array_contrasenya_may_min_num_simb_ord
      );
      let contrasenya_may_min_num_simb = array_contrasenya_may_min_num_simb.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_may_min_num_simb;
    }

    // ---------------------------COMPROBACIONES--------------------------------

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

  } while ((comprobante == false));
};
