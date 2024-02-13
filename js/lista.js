let pedir_lista = "rebibir_lista";

$.ajax({
  url: './php/procesar_lista.php',
  type: 'POST',
  data: {
    pedir_lista: pedir_lista
  },
  success: function (response) {
    let lista_contrasenyas = JSON.parse(response);

    lista_contrasenyas.forEach(element => {
      let nombre_contrasenya = element.nombre_contrasenya;
      let contrasenya = element.contrasenya_generada;

      // Crear el elemento de artículo
      var article = document.createElement("article");
      article.classList.add("fila__contrasenya");

      // Crear el elemento de párrafo para el nombre de la contraseña
      var nombre = document.createElement("p");
      nombre.classList.add("nombre__contrasenya");
      nombre.textContent = nombre_contrasenya;

      // Crear el elemento de párrafo para la contraseña y el botón de eliminar
      var contrasenyaEliminar = document.createElement("p");
      contrasenyaEliminar.classList.add("contrasenya__eliminar");
      contrasenyaEliminar.textContent = contrasenya;

      // Crear el elemento de imagen para el botón de eliminar
      var eliminarImagen = document.createElement("img");
      eliminarImagen.src = "svg/eliminar.svg";
      eliminarImagen.alt = "eliminar";

      // Agregar la imagen al párrafo de contraseña y eliminar
      contrasenyaEliminar.appendChild(eliminarImagen);

      // Agregar los elementos al artículo
      article.appendChild(nombre);
      article.appendChild(contrasenyaEliminar);

      // Seleccionar el artículo con ID "subcaja__contrasenyas"
      var subcaja__contrasenyas = document.getElementById("subcaja__contrasenyas");
     
      // Agregar el artículo al final de "subcaja__contrasenyas"
      subcaja__contrasenyas.appendChild(article);

    });

    
  }
})


//<article class="fila__contrasenya">
  //<p class="nombre__contrasenya">Google</p>
  //<p class="contrasenya__eliminar">555555
    //<img src="svg/eliminar.svg" alt="eliminar">
  //</p>             
//</article>