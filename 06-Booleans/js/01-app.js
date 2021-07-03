/*
    BOOLEANS - ¿Qué son los BOOLEANS?

    El tipo de dato BOOLEAN sólo puede tener 2 valores: TRUE / FALSE

    Sólo se le asigna TRUE o FALSE es decir VERDADERO o FALSO
*/

const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1);
console.log(boolean2);
console.log(boolean3);

console.log(typeof boolean1);
console.log(typeof boolean2);
console.log(typeof boolean3);

/*
    En este caso si comparamos los BOOLEANS con el OPERADOR NO ESTRICTO resulta FALSE 
    (en los numeros daría TRUE porque se dejaba llevar sólo por el valor)

    En los BOOLEANS colocarlo en una STRING no asigna un valor similar como en los NÚMEROS y los STRINGS
*/

console.log(boolean1 == boolean3);

// Otra forma de crear BOOLEANS

const boolean4 = new Boolean(true);
console.log(boolean4);


/* 
    Si checadmos el tipo de dato de la variable BOOLEAN4 no será un BOOLEAN sino que un OBJECT

    Esté tipo de constructores usualmente crean OBJETOS no crean el valor PRIMITIVO
*/

console.log(typeof boolean4);
