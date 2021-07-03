/* Veremos 3 metodos para objetos: KEYS | VALUE | ENTRIES */

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 3000,
    disponible: true,
}

/* 
    Agregamos Object.keys ( y dentro el objeto del cual queremos obtener sus llaves )


    Object Keys nos retornará un ARREGLO (ARRAY) con los KEYS (LLAVES) del Objeto

    EJEMPLO:

        Es una forma de saber si la consulta a una base de datos de un cliente fue exitosa o no exitosa.
        Así sabremos si ese Objeto tiene o no tiene información

    Object Keys nos retorna la parte izquierda del Objeto

*/

// OBJECT KEYS - Object.keys( OBJETO );

console.log(Object.keys( producto ));


// OBJECT VALUES - Object.values( OBJETO );

/* 
    Si Object.keys te retorna los ARREGLOS (propiedades convertidas en arreglos)
    Object.values te retornará los valores de los ARREGLOS (propiedades convertidas en arreglos)

    Object values nos retorna la parte derecha del Objeto = Los valores
*/

console.log(Object.values( producto ));

// OBJECT ENTRIES - Object.entries( OBJETO );

/* 
    ENTRIES te retorna toda la información en (ARREGLOS) pares
*/

console.log(Object.entries( producto ));