// Función para copiar de la lista.
export function copiar_contrasenya(element) {
  // Cogemos el padre del padre del padre del icono copiar que ha sido clicado.
  // En el DOM irá donde está escrita la contraseña.
  let padre1 = element.parentElement;
  let padre2 = padre1.parentElement;
  let padre3 = padre2.parentElement;

  // Seleccionamos el contenido del elemento donde se encuentra la contraseña.
  let elemento_texto = padre3.querySelector("p:nth-of-type(2)");
  // Extraemos el texto del elemento (que será el texto de la contraseña).
  let contrasenya_copiada = elemento_texto.textContent;
  
  // Creamos un elemento textarea temporal porque el comando de copiar solo funciona con elementos de tipo input o textarea.
  let elementoTemp = document.createElement("textarea");
  // Asignamos el texto a copiar al contenido del textarea.
  elementoTemp.value = contrasenya_copiada;
  // Añadimos el textarea al DOM.
  document.body.appendChild(elementoTemp);
  // Seleccionamos el contenido del textarea.
  elementoTemp.select();
  // Ejecutamos el comando de copiar.
  document.execCommand("copy");
  // Removemos el textarea temporal como si no ubrera existido.
  document.body.removeChild(elementoTemp);
}