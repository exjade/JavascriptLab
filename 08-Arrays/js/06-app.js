/*
    En JavaScript es importante que mencionar que en las nuevas versiones se dieron "diferentes funciones" que hacen lo mismo

        Unas se conocen como Funciones DECLARATIVAS
        Otras como FORMAS IMPERATIVAS

    Ambas son muy utilizadas en la programación de JavaScript

                                                       FORMA IMPERATIVA: 

    Es el ejemplo que vimos en el ejercicio pasado (Lección 05):
        Tenemos un Variable llamada 'carrito' con un Arreglo vacio, un Objeto con los diferentes articulos a vender 
        y sobre ese mismo carrito estamos agregando elementos al Inicio o al Final

    La FORMA IMPERATIVA modifica la Variable Original
    Sobre ella misma trabaja, sobre ella misma reescribe y sobre ella misma modifica los datos
*/

/* 
                                                    FUNCIONES DECLARATIVAS
    En la actualización más grande de JavaScript (ecmaScript 6) agregaron Funciones DECLARATIVAS:

    La forma Declarativa es un paradigma que expresa la lógica sin describir tanto el 'flujo de control'.

    En la forma IMPERATIVA el código se ve ordenado y se sabe qué hace cada cosa 
    En la forma DECLARATIVA digamos que no queda muy claro pero tambien no modifica directamente el "Objeto Original (carrito)"

    La forma DECLARATIVA no modifica la Variable sino que Crea una Variable nueva (En su sintaxis no es tan claro qué está haciendo)
*/

// IMPERATIVA
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

const producto3 = {
    nombre: "Sofa reclinable",
    precio: 5000,
}
console.table(carrito);

// DECLARATIVA 

/* 
    La forma DECLARATIVA está más relacionada con la Programación Funcional

    .push y está sintaxis (resultado = [...carrito, producto, producto2];) hacen lo mismo sólo que .push es IMPERATIVA y la otra DECLARATIVA
*/
let resultado;

/* 
    Con Spread Operator (Los tres puntos ' ... ' ) tomamos una copia de carrito
*/
resultado = [...carrito, producto,]; // Va al carrito toma la copia y encima el producto

// Orden de agregado al carrito: 

resultado = [...resultado, producto2]; // Toma el resultado previo y después añade el producto al final
resultado = [producto3, ...resultado]; // En esté dice el producto irá primero y después el contenido del Arreglo

console.table(resultado);


