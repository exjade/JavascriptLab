/*
    En JavaScript existen distintos tipos de datos PRIMITIVOS además de STRING y NUMBER

    Se tiene lo que se conoce como BOOLEAN | NULL & UNDEFINED
*/

//UNDEFINED 

/*
    ¿Por qué UNDEFINED? 

    Básicamente porque la variable está definida pero su valor no
*/

let numero;

console.log(numero);

// console.log(typeof numero)

// NULL

/* 
    Al final el tipo de dato de NULL queda como OBJECT

    Esto pasa porque la expecificación de ECMA (quien define el estandar del lenguaje) dice que los NULL deben de ser
    un OBJETO
*/

let numero2 = null;

console.log(numero2);
// console.log(typeof numero2)


/*
    Si los comparamos JAVASCRIPT nos dice que son iguales (true)

    Pero no debería porque uno es UNDEFINED y el otro NULL pero JS dice que es TRUE.
    Eso lleva a ejecución de código no deseada o comportamientos extraños ya que estamos comparando un VALOR QUE NO EXISTE y de todas formas
    retorna TRUE | Por esto es más recomendable comparar con el comparador estricto
*/

//Comparador No estricto

console.log(numero == numero2);


// Comparador estricto | Es recomendable siempre comparar con el ESTRICTO

console.log(numero === numero2);

