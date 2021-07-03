"use strict";
// SELLAR UN OBJETO

/* 
    ¿En qué se diferencia 'Freeze' y 'Seal'?

    R: Lo que hace SEAL es que no se puedan AGREGAR ni ELIMINAR propiedades pero Sí se puedan MODIFICAR las existentes
    R: FREEZE no te deja hacer nada, te deja el objeto tal cual
    R: SEAL te permite modificar las llaves existentes de un Objeto pero no te permite Añadir nuevas ni Eliminarlas
*/

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 3000,
    disponible: true
}

Object.seal( producto );

// Si puedo modificar lo que existe en ese OBJETO
producto.disponible = false;


// Pero no se puede ni agregar ni eliminar porque está cellado
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

// De igual forma se puede revisar cuando un objeto está cellado
console.log(Object.isSealed(producto));