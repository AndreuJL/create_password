import { copiar_contrasenya } from "./modulos/copiar_contrasenyaLista.js";
import { eliminar_contrasenya } from "./modulos/eliminar_contrasenyaLista.js";
import { editar_contrasenya } from "./modulos/editar_nombreContrasenyaLista.js";

// Definimos una variable para pedir la lista de contraseñas con Ajax a procesar_lista.php.
let pedir_lista = "recibir_lista";

// Hacemos la petición a procesar_lista.php para obtener la lista de contraseñas mediante el método POST.
$.ajax({
  url: './php/procesar_lista.php',
  type: 'POST',
  data: {
    pedir_lista: pedir_lista
  },
  success: function (response) {
    // Nos devuelve un string con formato JSON y lo convertimos a un objeto JSON.
    let lista_contrasenyas = JSON.parse(response);

    lista_contrasenyas.forEach(element => {
      let nombre_contrasenya = element.nombre_contrasenya;
      let contrasenya = element.contrasenya_generada;
      

      // Ahora vamos a crear los elementos de la lista de contraseñas.
      // Primero creamos el artículo.
      let articulo = document.createElement("article");
      // Agregamos la clase al artículo para el css.
      articulo.classList.add("fila__contrasenya");

      // Creamos el elemento de párrafo para el nombre de la contraseña.
      let nombre = document.createElement("p");
      // Agregamos la clase al párrafo para el css.
      nombre.classList.add("nombre__contrasenya");
      // Agregamos el nombre obtenido de la base de datos al párrafo.
      nombre.textContent = nombre_contrasenya;

      // Creamos el elemento de párrafo para la contraseña y los svg.
      let contrasenya__eliminar = document.createElement("p");
      contrasenya__eliminar.classList.add("contrasenya__eliminar");
      // Agragamos la contraseña obtenida de la base de datos al párrafo.
      contrasenya__eliminar.textContent = contrasenya;

      // Creamos el artículo para los svg.
      let articulo2 = document.createElement("article");
      // Agregamos la clase al artículo para el css.
      articulo2.classList.add("imagenes__svg");

      // Creamos el elemento de imagen para el botón de copiar.
      let imagen_copiar = document.createElement("img");
      // Metemos la imagen del botón de eliminar.
      imagen_copiar.src = "svg/copy.svg";
      // Agregamos el alt a la imagen.
      imagen_copiar.alt = "copy";
      // Metemos una id la imagen de copiar.
      imagen_copiar.classList.add("imagen__copiar");
      imagen_copiar.onclick = function() {copiar_contrasenya(this)};

      // Creamos el elemento de imagen para el botón de editar.
      let imagen_editar = document.createElement("img");
      // Metemos la imagen del botón de eliminar.
      imagen_editar.src = "svg/edit.svg";
      // Agregamos el alt a la imagen.
      imagen_editar.alt = "editar";
      imagen_editar.onclick = function() {editar_contrasenya(this)};

      // Creamos el elemento de imagen para el botón de eliminar.
      let imagen_eliminar = document.createElement("img");
      // Metemos la imagen del botón de eliminar.
      imagen_eliminar.src = "svg/eliminar.svg";
      // Agregamos el alt a la imagen.
      imagen_eliminar.alt = "eliminar";
      imagen_eliminar.onclick = function() {eliminar_contrasenya(this)};
      
      // Metemos las imagenes al contenedor de svgs.
      articulo2.appendChild(imagen_copiar);
      articulo2.appendChild(imagen_editar);
      articulo2.appendChild(imagen_eliminar);

      // Metemos el contenedor de svgs al párrafo de la contraseña.
      contrasenya__eliminar.appendChild(articulo2);

      // Agregamos los elementos al artículo.
      articulo.appendChild(nombre);
      articulo.appendChild(contrasenya__eliminar);

      // Seleccionamos el artículo con ID "subcaja__contrasenyas".
      let subcaja__contrasenyas = document.getElementById("subcaja__contrasenyas");
      
      // Agregamos el artículo al final de "subcaja__contrasenyas".
      subcaja__contrasenyas.appendChild(articulo);
    });
  }
})