
const carrito = [];


// Definir un producto - Objeto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 3000,
}

const producto2 = {
    nombre: "Consola XBOX ONE SERIES X",
    precio: 15000,
}
const producto4 = {
    nombre: "Xioami redmi note 8",
    precio: 7000,
}

carrito.push(producto2);
carrito.push(producto4);
carrito.push(producto);

const producto3 = {
    nombre: "Sofa reclinable",
    precio: 5000,
}


carrito.unshift(producto3); // Es una forma de agregar al inicio del Arreglo

console.table(carrito);

/*
// En los Objetos se elminaba con delete producto.nombre;

// Eliminar último elemento de un Arreglo | Elimina al final del Arreglo

                            carrito.pop();

                            console.table(carrito);

// Eliminar del inicio del Arreglo

                            carrito.shift();
                             console.table(carrito);
*/

/*
    Si queremos eliminar un elemento sea en medio al Inicio o al Final del Arreglo podemos usar " .splice "

    IMPORTANTE - FUNCIONAMIENTO DE SPLICE:

    Splice toma 2 parametros en los parentesis

        1. La posición (index) en donde comenzará a cortar (eliminar)
        2. Cuántos elementos quieres eliminar 

    Al contrario de SHIFT (Inicio) y POP (Final)
    SPLICE es un Metodo para eliminar de forma MANUAL los diferentes Elementos del Arreglo

    NOTA: Es la forma IMPERATIVA de eliminar Elementos dentro de un ARRAY
*/

carrito.splice(2,1 ); 
console.table(carrito);