// Veremos 2 metodos toUpperCase & toLowerCase

/* 
    Supongamos que somos los encargados de una tienda virtual y nos dicen que requieren que todos los textos estén en 
    Mayusculas.

    Podríamos hacerlo con CSS con un text-transform: Uppercase;
    Pero también es posible hacerlo en JavaScript
*/

const producto = 'Monitor de 20 Pulgadas';
console.log(producto.toUpperCase()); // Es muy importante respetar las mayusculas al incio de los Metodos

/* 
    Tal vez pienses, ¿Cuál es el sentido de saber esto? Yo puedo ir a la base de datos y cambiar todo a Mayusculas.

    En teoría si podrías hacerlo pero si tienes una base con un millón de registros tardarías mucho tiempo. 
    Y si al final requieren que lo dejes mejor como estaba antes, seria trabajo doble.
*/

// Es más utilizado en el registro porque muchas personas colocan en el INPUT (registro/formulario) su email todo en Mayusculas: 
//const email = 'CORREO@CORREO.COM';
console.log(producto.toLowerCase()); 

// El problema es que en una base de datos marcaría los correos como diferentes

const email2 = 'Adrian@correo.com';
const email3 = 'adrian@coreo.COM';

// Así que antes de insertarlos a la base de datos los transformamos en minisculas

console.log(email2.toLowerCase());

// Algunas personas piensan que su correo es todo en MAYUSCULAS pero no hay dos Correos diferentes, son el mismo.



const articulo = 'Computadora' // ¿Por qué está variable tiene comillas? - Porque es una cadena de texto / STRING
const precio = 3000; // ¿Por qué está variable no tiene comillas? - Porque es un número

console.log(precio); // Se identifica en la consola del navegador por el color azul/morado

// Pero si queremos converti el NUMERO a STRING se utiliza .toString

console.log(precio.toString()); // En el navegador se vería un texto blanco / Negro