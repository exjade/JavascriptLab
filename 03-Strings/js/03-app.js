// Concatenar 2 variables o productos en una sola STRING

const producto = 'Monitor de 20 pulgadas '
const precio = '30 USD ';

// Es muy común que querramos concatenar 2 variables

// existen diferentes formas #Ejemplo 1:

console.log(producto.concat(precio));


/*
Estos son METODOS disponibles únicamente en los STRINGS | Si es un booleano, un array, cada uno tiene metodos propios. | 
También puedes crear tus propias funciones. #Ejemplo 2:
*/
console.log(producto.concat('En Descuento'));

//  #Ejemplo 3:
console.log(producto + precio);

// #Ejemplo 4: | Es muy importante saber concatenar porque cuando obtienes resultados de una base de datos lo más normal 
// es que vengan de está forma y nos tocará darle el formato que piden
console.log(producto + " con un precio de " + precio);

// Ejemplo 5: | Si el signo de más "+" se omite marcará un error y no mostrará el texto
console.log("El producto " + producto + "tiene un precio de " + precio);

// Otra forma es poner en lugar del signo "+" añadir una  coma ","
console.log("El producto " , producto , "tiene un precio de " , precio);

// El problema de esa sintaxis y de cómo se soluciona fue un gran paso de Javascript en la versión ECMAScript 6
// Trajo una mejor forma de CONCATENAR variables que se le conoce como TEMPLATE STRING / TEMPLATE LITERALS
// #Ejemplo 6: RECOMENDADA
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);

