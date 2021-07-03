/* 
    En esté ejercicio veremos cómo acceder a los VALORES del OBJETO y asignarlos a una VARIABLE  
*/

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 3000,
    disponible: true,
};

//console.log(producto.nombre);

/* 
    Supongamos que queremos acceder al nombre = Utilizariamos la sintaxis del punto " . "


    Estamos extrayendo el valor de ' nombre ' y se lo asignamos a la VARIABLE
*/

const nombre = producto.nombre; // Esta era la forma antigua de hacerlo

console.log(nombre);


/* 
    Gracias a EcmaScript que fue una revolución muy grande tenemos algo que se conoce como OBJECT DESTRUCTURING
    es decir:  Extraer del objeto y crear una VARIABLE todo en un mismo paso.
*/

// OBJECT DESTRUCTURING - Permite extraer la propiedad junto con el valor del objeto, todo en un sólo paso. 
// Lo cual simplifica mucho el código

const { nombre2 } = producto;
console.log(nombre);


/*
    Cuando después de la VARIABLE hay LLAVES es un indicativo de que es DESTRUCTURING
    DESTRUCTURING significa Sacar De Una Estructura

    Y me permitirá sacar la PROPIEDAD junto con el VALOR del OBJETO

*/

const { precio } = producto;
console.log(precio);

/* 
    El código se puede simplificar aún más

    Puedo ir extrayendo más LLAVES siempre y cuando existan dentro del OBJETO

    DESTRUCTURING además de EXTRAER el valor CREA LA VARIABLE
*/
// DESTRUCTURING
 const { nombre, precio, disponible } = producto;
 console.log(nombre);
 console.log(precio);
 console.log(disponible);
