const numeros = [10, 20, 30, 40, 50]

console.log(numeros);
console.table(numeros); // Con .table será más amigable visualizar el indice y el valor del arreglo

/*
        Digamos que quiero acceder al número 40. ¿Cómo accedo al número?
            R: Podemos acceder utilizando el indice del arreglo. El indice de 40 es igual a 3

        La posicion en el Arreglo es lo que determina cómo acceder a los diferentes Elementos
*/

// Acceder al arreglo

console.log(numeros[3]);
console.log(numeros[0]);

// Si intentamos acceder a un Elemento que no existe marcará UNDEFINED (El valor no está definido)
console.log(numeros[10]);

