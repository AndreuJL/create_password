// Importamos las 3 funciones.
import { generar_caracteres } from "./modulos/generar_caracteres.js";

// Esperamos que se carge toda la página HTML.
document.addEventListener("DOMContentLoaded", function () {
  let boton_generar = document.getElementById("generar");

  // Esperamos a que pulsen el botón de generar.
  boton_generar.addEventListener("click", function () {
    // Cogemos el valor del select mediante su id
    let valor_select = longitud.value;

    // Según el valor que tendrá el select ponemos los parámetros que toque a cada opción.
    switch (valor_select) {
      case "6caracteres":
        generar_caracteres(6,3,2,2,2,2,1);
        break;

      case "8caracteres":
        generar_caracteres(8,4,3,2,2,2,2);
        break;

      case "10caracteres":
        generar_caracteres(10,5,4,3,2,3,2);
        break;

      default:
        break;
    };
  });
});

