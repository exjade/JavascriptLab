// En twitter te limitan la publicación a 240 caracteres | Eso se logra por medio de un metodo de las Strings

const producto = 'Monitor 20 pulgadas';

// En está forma nos aseguramos que los usuarios no escriban post de más de una cantidad expecificada.
//Conocer la cantidad de letras de la cadena de texto
console.log(producto.length); // .length es de los pocos metodos que no utilizan parentesis

/* 
Cuando buscamos en AMAZON y queremos buscar un telefono o una TABLET. En la barra de busqueda ponemos 
"Telefono", "Tablet", etc
*/

// Si no lo encuentra saldrá -1
// console.log(producto.indexOf('pulgadas'));

//Si ponemos Tablet nos dará FALSE porque no existe en la cadena de texto: const producto = 'Monitor 20 pulgadas';
console.log(producto.includes('tablet'));

//En cambio si añadimos una palabra que si exista dará como resultado TRUE
console.log(producto.includes('Monitor'));

// .includes | . length es una propiedad |  Se conocen como METODOS de los STRINGS. Son propiedades que tienen los STRINGS

