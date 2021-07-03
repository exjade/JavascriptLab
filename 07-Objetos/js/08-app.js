"use strict";
// OBJECT METHODS - Al igual que con los STRINGS existen METODOS para los OBJETOS

/*
    ¿Cómo hacemos que un OBJETO se comporte como una CONSTANTE? 

        Es decir que no pueda ser modificado

        R: Debemos habilitar el modo estricto | Al inicio del documento entre comillas debemos escribir "use strict";

        ¿Para qué sirve "use strict"?

        Al igual que los comparadores de valor. EJEMPLO:

                                    STRING == NUMERO // Solamente comparaba el valor

                                    Después agregabamos el operador estricto

                                    STRING === NUMERO // Comparaba el valor y el tipo de dato

        Básicamente "use strict" es decir:

            ' Evalua este código de JavaScript de forma estricta. No permite malas prácticas en esté documento. '

        EJEMPLO:

        Si creamos una varible " x " y le damos un valor = 20; en el modo no estricto JavaScript lo creará por nosotros y nos dará como resultado 20
        Pero en el modo estricto nos dirá que " x " no está definida

        Habilitar el MODO ESTRICTO va hacer que cumplas ciertas reglas al momento de escribir código en JavaScript
*/

/*
    Una vez que lo habilitamos tenemos acceso a una serie de METODOS para OBJETOS - OBJECT METHODS

        En la documentación de ECMAScript vienen definidos como OBJECT METHODS
        En realidad ese es su nombre original
*/

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 3000,
    disponible: true
}



// De esta forma hacemos que tenga un comportamiento más similar a lo que tenemos con CONST
Object.freeze( producto );

// No nos permitirá agregar una propiedad
// producto.imagen = "imagen.jpg";

// Tampoco modificar el valor de una propiedad
// producto.disponible = false;


// Ni eliminar una propiedad el objeto
// delete producto.precio;

console.log(producto);


// Existen metodos para saber si un OBJETO esta CONGELADO (Freeze) o no.

// El metodo .isFrozen nos permitira saber si un objeto está congelado
console.log(Object.isFrozen(producto));

/* 
    Lo más probable es que tengamos que clonarlo para poder modificar la copia
*/

