let contrasenya = ["a", "u", "a", "P", "i", "E"];

for (let i = 0; i < contrasenya.length; i++) {
  let comprobante = true;
  let caracter_a_comprobar = contrasenya[i];
  
  // Que no se repitan carácteres
  for (let j = 0; j < contrasenya.length; j++) {
    let contenido_indice = contrasenya[j];
    if (caracter_a_comprobar === contenido_indice) {
      
      if (i !== j && caracter_a_comprobar === contenido_indice) {
        console.log(caracter_a_comprobar + " está repetido");

        let comprobante = false;  // COn un do while en el otro sitio que solo deja pasar si es true, sinó vuelve atrás.
      }
    }
  }

  // Que no hayan carácteres repetidos.




}