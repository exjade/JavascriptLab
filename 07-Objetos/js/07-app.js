const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 3000, 
    disponible: true 
}

/* 
    Si recordamos una VARIABLE con CONST una vez definida no puede REASIGNARSE su VALOR

    EJEMPLO:

                                const nombreProducto = "Monitor";

                                nombreProducto = "Televisor";
*/



/* 
    Sin embargo los OBJETOS si se pueden REASIGNAR 
*/

// Se cambio el valor BOOLEANO de disponible: true -> false
producto.disponible = false;

console.log(producto);


/* 
    Una VARIABLE aunque esté declarada como CONST al estar en un OBJETO digamos que si se pueden REESCRIBIR o ELIMINAR

    // Esto ELIMINARIA la PROPIEDAD PRECIO del OBJETO
    delete producto.precio;
*/

