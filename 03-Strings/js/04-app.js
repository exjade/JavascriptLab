// El espacio en blanco cuenta como una letra
const producto = '                  Monitor de 20 pulgadas                 ';

// Metodos que nos permitan eliminar el espacio en blanco al inicio y al final de una cadena de texto

console.log(producto);

// Los espacios son considerados parte de la cadena de texto
console.log(producto.length);

/* 
A lo largo de nuestra vida de programadores tendremos muchos formularios y en ellos los usuarios colocaran su correo
electronico. 
Y muchas veces para pasar la validación agregaran espacios en blanco
Entonces de esta forma te encargas de eliminar los espacios en blanco y sólo insertar datos reales
*/

//Eliminar el espacio en blanco del inicio...
console.log( producto.trimStart() ); 


// Eliminar el espacio en blanco del final
console.log( producto.trimEnd() ); 


/*
En JavaScript se pueden usar los METODOS de forma ENCADENADA (Channing)
Es decir colocar un METODO y después el otro METODO


*/

//Eliminar el espacio en blanco del inicio y final
// Estos metodos son nuevos
// Te ayuda a eliminar al inicio o al final cuando no es necesario eliminar en ambas direcciones
console.log( producto.trimStart().trimEnd() );

// Antes existía este metodo | Elimina el espacio en blanco en ambas direcciones
console.log( producto.trim() );