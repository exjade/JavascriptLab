/* 
                          DESTRUCTURING EN ARRAYS  
                Tomamos un valor y lo sacamos de su estructura: DESTRUCTURING | Sacar de la Estructura
*/

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 3000,
    disponible: true,
};

// Básicamente estamos tomando un Valor, Creando la Variable  y extrayendo el Valor todo en un mismo paso
// Sintaxis de DESTRUCTURING en Objetos
const { nombre } = producto;

console.log(nombre);

/*
    ¿Cómo accedemos en un Elemento del Arreglo?
        R: Con la posición (index)
*/
// Sintaxis de DESTRUCTURING en Arrays

const numeros = [10, 20, 30, 40, 50]


// Extraer Elementos del Arreglo | El primer valor que especifiquemos se agregará automaticamente al primer valor dentro del Array
const [ , , segundo] = numeros; 

// Para acceder a un Elemento en una Posición especifica no podemos sólo declarar ese mismo valor como en los Objectos
// Debemos poner un " Espacio y ' , ' para decir que esa posición es igual a nada"

console.log(segundo);