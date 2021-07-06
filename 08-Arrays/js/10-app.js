/* forEach y .map son prácticamente iguales en sintaxis */

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 2500},
    { nombre: 'Celular', precio: 1500},
    { nombre: 'Escritorio', precio: 5000},
    { nombre: 'Silla gamer', precio: 3500},
    { nombre: 'Computadora gaming', precio: 3200},
    { nombre: 'Mouse y teclado', precio: 500},
]

/* 
    ¿Cuál es la diferencia entre Map y ForEach?
        R: .map te crea un arreglo nuevo | Va a llenar una variable con un Arreglo nuevo

*/

carrito.forEach( function(producto) {
       console.log( `${producto.nombre}  - Precio: ${producto.precio}` ); 
} )


carrito.map( function(producto) {
       console.log( `${producto.nombre}  - Precio: ${producto.precio}` ); 
} )

// EJEMPLO:

const nuevoArreglo2 = carrito.map( function(producto) {
    return  `${producto.nombre}  - Precio: ${producto.precio}` ; 
} )

/* 
    Las funciones: 
    basicamente es un código que se puede ejecutar más de una vez    
    Nos permite dividir nuestro código en partes

    No tendremos un programa con miles de líneas, lo vamos a ir dividiendo en secciones
*/