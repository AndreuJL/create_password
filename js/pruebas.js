// Creamos 2 números aleatorios y los metemos en una array
document.addEventListener("DOMContentLoaded", function () {
  let boton_generar = document.getElementById("generar");

  
  boton_generar.addEventListener("click", function () {

  let array_numeros = new Array();
  let num_random1 = Math.floor(Math.random() * (9 - 0) + 0);
  let num_random2 = Math.floor(Math.random() * (9 - 0) + 0);

  array_numeros.push(num_random1, num_random2);

  // Creamos 2 letras minúsculas aleatorias y los metemos en una array
  let array_abecedario_minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let minuscula_random1 = array_abecedario_minusculas[Math.floor(Math.random() * array_abecedario_minusculas.length)];
  let minuscula_random2 = array_abecedario_minusculas[Math.floor(Math.random() * array_abecedario_minusculas.length)];

  let array_minusculas = new Array();
  array_minusculas.push(minuscula_random1, minuscula_random2);

  // Creamos 2 mayúsculas aleatorias y las metemos en un array
  let array_abecedario_mayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "Y", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  let mayuscula_random1 = array_abecedario_mayusculas[Math.floor(Math.random() * array_abecedario_mayusculas.length)];
  let mayuscula_random2 = array_abecedario_mayusculas[Math.floor(Math.random() * array_abecedario_mayusculas.length)];

  let array_mayusculas = new Array();
  array_mayusculas.push(mayuscula_random1, mayuscula_random2);

  // Los unimos todo en una array
  let array_contrasenya_ordenada = array_numeros.concat(array_minusculas, array_mayusculas);

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

  // Desordenamos la array ordenada
  let array_contrasenya_final = desordenar(array_contrasenya_ordenada);
  // La transformamos en String (saldrá separado con comas)
  let contrasenya_final_string = array_contrasenya_final.toString();
  // Le quitamos las comas (/,/g significa que buscará todas, no solo la primera)
  let contrasenya_final = contrasenya_final_string.replace(/,/g, '');

  // Referenciamos donde se tiene que mostrar la contraseña
  let contrasenya = document.getElementById("salida__contrasena");

  // La escribimos
  contrasenya.textContent = contrasenya_final;
  });
});

