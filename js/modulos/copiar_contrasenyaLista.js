export function copiar_contrasenya(element){
  let padre1 = element.parentElement;
  let padre2 = padre1.parentElement;
  let padre3 = padre2.parentElement;

  let elemento_texto = padre3.querySelector("p:nth-of-type(2)");

  let contrasenya_copiada = elemento_texto.textContent;

  navigator.clipboard.writeText(contrasenya_copiada);
}