// Creamos una funcion que desordena arrays
function desordenar(array) {
  for (let i = 0; i < array.length; i++) {
    let x = Math.floor(Math.random() * (i + 1));

    let temporal = array[i];
    array[i] = array[x];
    array[x] = temporal;
  }
  return array;
};

export function generar_caracteres(unElemento, dosElementos, tresElementos1, tresElementos2, tresElementos3, cuatroElementos1, cuatroElementos2) {
  // Se referencia a todos los elementos necesarios del HTML
  let contrasenya = document.getElementById("salida__contrasena");
  let mayusculas = document.getElementById("mayusculas");
  let minusculas = document.getElementById("minusculas");
  let numeros = document.getElementById("numeros");
  let simbolos = document.getElementById("simbolos");

  let array_contrasenya_simb = ["!", "¡", "¿", "?", "$", "%", "&", "=", "+", "-", "*", "/"];  

  do {
    var comprobante = true;
    // SIN ELECCIÓN
    // Si no se elije una opción saldrá un mensage.
    if (!mayusculas.checked && !minusculas.checked && !numeros.checked && !simbolos.checked) {
      let elige_opcion = "Por favor elija una opción";
      contrasenya.textContent = elige_opcion;
      throw new Error('Salir del proceso, ya que no puede pasar las comprobaciones.');
    };

    // MAYÚSCULAS
    // Si solo están marcadas las mayúsculas con un for un número aleatorio de entre 65 y 90 que son las mayúsculas en la tabla Ascii, transformamos las números en dichas mayúsculas y voy anexando carácteres al string "contrasenya_may",
    if (mayusculas.checked && !minusculas.checked && !numeros.checked  && !simbolos.checked) {
      let contrasenya_may = "";
      for (let i = 0; i < unElemento; i++) {
        let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
        let may_aleat = String.fromCharCode(may_aleat_num);
        contrasenya_may += may_aleat;
        contrasenya.textContent = contrasenya_may;
      }
      throw new Error('Salir del proceso, ya que no puede pasar las comprobaciones.');
    };

    // MINÚSCULAS
    // Igual que en al anterior pero con minúsculas
    if (minusculas.checked && !mayusculas.checked && !numeros.checked && !simbolos.checked) {
      let contrasenya_mim = "";
      for (let i = 0; i < unElemento; i++) {
        let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
        let min_aleat = String.fromCharCode(min_aleat_num);
        contrasenya_mim += min_aleat;
        contrasenya.textContent = contrasenya_mim;
      }
      throw new Error('Salir del proceso, ya que no puede pasar las comprobaciones.');
    };

    // NÚMEROS
    // Igual que en al anterior pero con números (no hace falta la tabla Ascii)
    if (numeros.checked && !minusculas.checked && !mayusculas.checked && !simbolos.checked) {
      let contrasenya_num = "";
      for (let i = 0; i < unElemento; i++) {
        let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
        contrasenya_num += num_aleat;
        contrasenya.textContent = contrasenya_num;
      }
      throw new Error('Salir del proceso, ya que no puede pasar las comprobaciones.');
    };

    // SÍMBOLOS
    // Con un bucle busca un número aleatorio de entre 0 y 11 ya que son los índices de la array de símbolos, guardamos el valor del indice aleatorio en una variable, los vamos concatenando y los mostramos juntos por pantalla.
    if (!numeros.checked && !minusculas.checked && !mayusculas.checked && simbolos.checked) {
      let contrasenya_simb = "";     
      for (let i = 0; i < unElemento; i++) {
        let num_aleat = Math.floor(Math.random() * (11 - 0) + 0);
        let simbolo_aleat = array_contrasenya_simb[num_aleat];
        var contrasenya_fin = contrasenya_simb += simbolo_aleat;
      }
      contrasenya.textContent = contrasenya_fin;
    };

    // MAYÚSCULAS + MINÚSCULAS
    // Aquí es lo mismo pero con mayúsculas y minúsculas, el bucle for solo hace la mitad de vueltas que carácteres tiene la contraseña, ya que he decidido que tiene que haber la mitad de mayúsculas que de minúsculas. Luego la paso a array para desordenarla y la vuelvo a pasar a String para tener la contrasenya final.
    if (mayusculas.checked && minusculas.checked && !numeros.checked && !simbolos.checked) {
      let contrasenya_may = "";
      let contrasenya_mim = "";
      for (let i = 0; i < dosElementos; i++) {
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
      var contrasenya_fin = array_contrasenya_may_min.toString().replace(/,/g, "");
      // "/,/g" quiere decir que quíta todas las , del String.
      contrasenya.textContent = contrasenya_fin;
    };

    // MAYÚSCULAS + NÚMEROS
    // Lo mismo que el anterior pero con mayúsculas y números
    if (mayusculas.checked && !minusculas.checked && numeros.checked && !simbolos.checked) {
      let contrasenya_may = "";
      let contrasenya_num = "";
      for (let i = 0; i < dosElementos; i++) {
        let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
        let may_aleat = String.fromCharCode(may_aleat_num);
        contrasenya_may += may_aleat;

        let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
        contrasenya_num += num_aleat;
      }
      let contrasenya_may_num_ord = contrasenya_may + contrasenya_num;
      let array_contrasenya_may_num_ord = contrasenya_may_num_ord.split("");
      let array_contrasenya_may_num = desordenar(array_contrasenya_may_num_ord);
      var contrasenya_fin = array_contrasenya_may_num.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_fin;
    };

    // MINÚSCULAS + NÚMEROS
    // Lo mismo que el anterior pero con minúsculas y números
    if (!mayusculas.checked && minusculas.checked && numeros.checked && !simbolos.checked) {
      let contrasenya_min = "";
      let contrasenya_num = "";
      for (let i = 0; i < dosElementos; i++) {
        let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
        let min_aleat = String.fromCharCode(min_aleat_num);
        contrasenya_min += min_aleat;

        let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
        contrasenya_num += num_aleat;
      }
      let contrasenya_min_num_ord = contrasenya_min + contrasenya_num;
      let array_contrasenya_min_num_ord = contrasenya_min_num_ord.split("");
      let array_contrasenya_min_num = desordenar(array_contrasenya_min_num_ord);
      var contrasenya_fin = array_contrasenya_min_num.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_fin;
    };

    // MAYÚSCULAS + SÍMBOLOS
    // Para mayúsculas y símbolos.
    if (mayusculas.checked && !minusculas.checked && !numeros.checked && simbolos.checked) {
      let contrasenya_may = "";
      let contrasenya_simb = "";
      for (let i = 0; i < dosElementos; i++) {
        let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
        let may_aleat = String.fromCharCode(may_aleat_num);
        contrasenya_may += may_aleat;

        let num_aleat = Math.floor(Math.random() * (11 - 0) + 0);
        let simbolo_aleat = array_contrasenya_simb[num_aleat];
        contrasenya_simb += simbolo_aleat;
      }
      let contrasenya_may_simb_ord = contrasenya_may + contrasenya_simb;
      let array_contrasenya_may_simb_ord = contrasenya_may_simb_ord.split("");
      let array_contrasenya_may_simb = desordenar(array_contrasenya_may_simb_ord);
      var contrasenya_fin = array_contrasenya_may_simb.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_fin;
    };
    
    // MINÚSCULAS + SÍMBOLOS
    if (!mayusculas.checked && minusculas.checked && !numeros.checked && simbolos.checked) {
      let contrasenya_min = "";
      let contrasenya_simb = "";
      for (let i = 0; i < dosElementos; i++) {
        let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
        let min_aleat = String.fromCharCode(min_aleat_num);
        contrasenya_min += min_aleat;

        let num_aleat = Math.floor(Math.random() * (11 - 0) + 0);
        let simbolo_aleat = array_contrasenya_simb[num_aleat];
        contrasenya_simb += simbolo_aleat;
      }
      let contrasenya_min_simb_ord = contrasenya_min + contrasenya_simb;
      let array_contrasenya_min_simb_ord = contrasenya_min_simb_ord.split("");
      let array_contrasenya_min_simb = desordenar(array_contrasenya_min_simb_ord);
      var contrasenya_fin = array_contrasenya_min_simb.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_fin;
    };
    
    // NÚMEROS + SÍMBOLOS
    if (!mayusculas.checked && !minusculas.checked && numeros.checked && simbolos.checked) {
      let contrasenya_num = "";
      let contrasenya_simb = "";
      for (let i = 0; i < dosElementos; i++) {
        let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
        contrasenya_num += num_aleat;

        let num_aleat_simb = Math.floor(Math.random() * (11 - 0) + 0);
        let simbolo_aleat = array_contrasenya_simb[num_aleat_simb];
        contrasenya_simb += simbolo_aleat;
      }
      let contrasenya_num_simb_ord = contrasenya_num + contrasenya_simb;
      let array_contrasenya_num_simb_ord = contrasenya_num_simb_ord.split("");
      let array_contrasenya_num_simb = desordenar(array_contrasenya_num_simb_ord);
      var contrasenya_fin = array_contrasenya_num_simb.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_fin;
    };

    // MAYÚSCULAS + MINÚSCULAS + NÚMEROS
    // Igual que en los anteriores pero con mayúsculas minúsculas y números, se ha decidido que habrá igual número siempre de mayúsculas que de minúsculas simpre.
    if (mayusculas.checked && minusculas.checked && numeros.checked && !simbolos.checked) {
      let contrasenya_may = "";
      let contrasenya_min = "";
      let contrasenya_num = "";
      for (let i = 0; i < tresElementos1; i++) {
        let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
        let may_aleat = String.fromCharCode(may_aleat_num);
        contrasenya_may += may_aleat;

        let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
        let min_aleat = String.fromCharCode(min_aleat_num);
        contrasenya_min += min_aleat;
      }
      for (let i = 0; i < tresElementos2; i++) {
        let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
        contrasenya_num += num_aleat;
      }
      let contrasenya_may_min_num_ord = contrasenya_may + contrasenya_min + contrasenya_num;
      let array_contrasenya_may_min_num_ord = contrasenya_may_min_num_ord.split("");
      let array_contrasenya_may_min_num = desordenar(array_contrasenya_may_min_num_ord);
      var contrasenya_fin = array_contrasenya_may_min_num.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_fin;
    };
    
    // MINÚSCULAS + NÚMEROS + SÍMBOLOS
    if (!mayusculas.checked && minusculas.checked && numeros.checked && simbolos.checked) {
      let contrasenya_mim = "";
      let contrasenya_num = "";
      let contrasenya_simb = "";
      for (let i = 0; i < tresElementos1; i++) {
        let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
        let min_aleat = String.fromCharCode(min_aleat_num);
        contrasenya_mim += min_aleat;

        let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
        contrasenya_num += num_aleat;
      }
      for (let i = 0; i < tresElementos2; i++) {
        let num_aleat_simb = Math.floor(Math.random() * (11 - 0) + 0);
        let simbolo_aleat = array_contrasenya_simb[num_aleat_simb];
        contrasenya_simb += simbolo_aleat;
      }
      let contrasenya_min_num_simb_ord = contrasenya_mim + contrasenya_num + contrasenya_simb;
      let array_contrasenya_min_num_simb_ord = contrasenya_min_num_simb_ord.split("");
      let array_contrasenya_min_num_simb = desordenar(array_contrasenya_min_num_simb_ord);
      var contrasenya_fin = array_contrasenya_min_num_simb.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_fin;
    };

    // MAYÚSCULAS + NÚMEROS + SÍMBOLOS
    if (mayusculas.checked && !minusculas.checked && numeros.checked && simbolos.checked) {
      let contrasenya_may = "";
      let contrasenya_num = "";
      let contrasenya_simb = "";
      for (let i = 0; i < tresElementos1; i++) {
        let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
        let may_aleat = String.fromCharCode(may_aleat_num);
        contrasenya_may += may_aleat;

        let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
        contrasenya_num += num_aleat;
      }
      for (let i = 0; i < tresElementos2; i++) {
        let num_aleat_simb = Math.floor(Math.random() * (11 - 0) + 0);
        let simbolo_aleat = array_contrasenya_simb[num_aleat_simb];
        contrasenya_simb += simbolo_aleat;
      }
      let contrasenya_may_num_simb_ord = contrasenya_may + contrasenya_num + contrasenya_simb;
      let array_contrasenya_may_num_simb_ord = contrasenya_may_num_simb_ord.split("");
      let array_contrasenya_may_num_simb = desordenar(array_contrasenya_may_num_simb_ord);
      var contrasenya_fin = array_contrasenya_may_num_simb.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_fin;
    };

    // MAYÚSCULAS + MINÚSCULAS + SÍMBOLOS
    if (mayusculas.checked && minusculas.checked && !numeros.checked && simbolos.checked) {
      let contrasenya_may = "";
      let contrasenya_min = "";
      let contrasenya_simb = "";
      for (let i = 0; i < tresElementos1; i++) {
        let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
        let may_aleat = String.fromCharCode(may_aleat_num);
        contrasenya_may += may_aleat;

        let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
        let min_aleat = String.fromCharCode(min_aleat_num);
        contrasenya_min += min_aleat;
      }
      for (let i = 0; i < tresElementos3; i++) {
        let num_aleat_simb = Math.floor(Math.random() * (11 - 0) + 0);
        let simbolo_aleat = array_contrasenya_simb[num_aleat_simb];
        contrasenya_simb += simbolo_aleat;
      }
      let contrasenya_min_num_simb_ord = contrasenya_may + contrasenya_min + contrasenya_simb;
      let array_contrasenya_min_num_simb_ord = contrasenya_min_num_simb_ord.split("");
      let array_contrasenya_min_num_simb = desordenar(array_contrasenya_min_num_simb_ord);
      var contrasenya_fin = array_contrasenya_min_num_simb.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_fin;
    };

    // MAYÚSCULAS + MINÚSCULAS + NÚMEROS + SÍMBOLOS
    // En este apartado he decidido que tiene que haber igual de mayúsculas que de minúsculas e igual de números que de símbolos siempre.
    if (mayusculas.checked && minusculas.checked && numeros.checked && simbolos.checked) {
      let contrasenya_may = "";
      let contrasenya_min = "";
      let contrasenya_num = "";
      let contrasenya_simb = "";
      for (let i = 0; i < cuatroElementos1; i++) {
        let may_aleat_num = Math.floor(Math.random() * (90 - 65) + 65);
        let may_aleat = String.fromCharCode(may_aleat_num);
        contrasenya_may += may_aleat;

        let min_aleat_num = Math.floor(Math.random() * (122 - 97) + 97);
        let min_aleat = String.fromCharCode(min_aleat_num);
        contrasenya_min += min_aleat;
      }

      for (let i = 0; i < cuatroElementos2; i++) {
        let num_aleat = Math.floor(Math.random() * (9 - 0) + 0);
        contrasenya_num += num_aleat;
  
        let num_aleat_simb = Math.floor(Math.random() * (11 - 0) + 0);
        let simbolo_aleat = array_contrasenya_simb[num_aleat_simb];
        contrasenya_simb += simbolo_aleat;
      }

      let contrasenya_may_min_num_simb_ord = contrasenya_may + contrasenya_min + contrasenya_num + contrasenya_simb;
      let array_contrasenya_may_min_num_simb_ord = contrasenya_may_min_num_simb_ord.split("");
      let array_contrasenya_may_min_num_simb = desordenar(array_contrasenya_may_min_num_simb_ord);
      var contrasenya_fin = array_contrasenya_may_min_num_simb.toString().replace(/,/g, "");
      contrasenya.textContent = contrasenya_fin;
    };

    // ---------------------------COMPROBACIONES--------------------------------
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

  } while (comprobante == false);
};
