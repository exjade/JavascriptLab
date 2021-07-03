const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Operadores si un número es igual a otro | Revisar si dos números son iguales

/*
        = | Un signo de igual es para ASIGNAR VALORES
        == | Dos signos de igual es para COMPARAR
*/

console.log(numero1 == numero3);
console.log(numero3 == numero3);


// Si son iguales porque es un comparador no muy estrico y sólo se fija en el valor y 20, "20" son iguales
console.log(numero1 == numero2);


// Este comparador es estrico | Se fija en el valor y en el tipo de dato: STRING + NUMERO
console.log(numero1 === numero2);

// Estamos viendo cuál es el tipo de dato
console.log(typeof numero1);
console.log(typeof numero2);


// Convertimos una STRING a NUMERO y lo comparamos con === y dio TRUE
console.log(parseInt(numero2) === numero1);



// Diferente !- | Este comparador ayuda a saber si son diferentes sin importar cuál es mayor o menos que

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);

// No son diferentes | Porque se fija en el valor no es ESTRICTO
console.log(numero1 != numero2);

// Si son difentes porque uno es STRING y el otro es NUMERO
console.log(numero1 !== numero2);

// Convertimos la STRING  a NUMERO con parseInt 
console.log(numero1 !== parseInt(numero2));




