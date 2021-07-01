/* 

Los STRINGS o CADENAS DE TEXTO representan un TEXTO que se puede asignar a una VARIABLE. 
Como el nombre de un cliente, el nombre de un producto, caterogia. 
Todo eso es un TEXTO y se representa por medio de una STRING

Los STRINGS son básicamente representaciones de TEXTO. Todo lo que sea TEXTO termina siendo un STRING

*/

// El incluir comillas dobles o sencillas ya lo vuelve una cadena de texto 
const producto = "Monitor de 20 pulgadas" // Es la forma más común
const producto2 = String('Monitor de 24 pulgadas'); 



// Se le conoce como crear un nuevo Objeto de tipo String
const producto3 = new String('Monitor de 32 pulgadas'); 

// Se le conoce como Escapar las Comillas - De esta forma puedes poner las comillas haciendo referencia a las pulgadas
const producto4 = "Monitor de 20\""

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(producto4);
