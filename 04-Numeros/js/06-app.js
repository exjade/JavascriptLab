const numero1 = "20"; //Es una STRING porque está en comillas pero tiene la representación de número
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

/*
        Con el Operador/Metodo "typeof" nos dice que ese tipo de dato es una STRING
        console.log(typeof numero1);
*/

/* 
    ¿Cómo pódemos convertir esa STRING hacía un NUMERO?
    Number es un Objeto igual que Math

*/
console.log(numero1); // Sigue siendo una STRING

/* parseInt lo que hace es convertirlo de STRING a NUMERO pero NUMERO ENTERO */
console.log(Number.parseInt(numero1)); // Ya lo convertimos a un número


//  parseFloat convierte el número a flotante es decir con una fracción
console.log(Number.parseFloat(numero2));

console.log(Number.parseInt(numero3)); // Retorna NaN porque no es un número


// Revisar si un número es ENTERO o no lo es
console.log(Number.isInteger(numero2))