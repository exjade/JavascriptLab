/* COPIAR 2 OBJETOS */ 

/* 
    Esto llega a ser una tarea común dado que en una base de datos obtienes el ID del Cliente y también tienes loc
    Clientes que pertecen a ese ID y te gustaría unirlos
*/

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 3000,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m",
}

console.log(producto);
console.log(medidas);

/* 
    Aprendimos a realizar una copia de dos objetos y de esa forma tener todas las propiedades de 2 objetos distintos dentro de un objeto
*/

const resultado = Object.assign(producto, medidas);

console.log(resultado);

// Spread Operator o Rest Operator | Los tres puntos " ... " hacen que tome una copia de la VARIABLE y la asigne dentro del Objeto
const resultado2 = { ...producto, ...medidas} // Es más utilizada

console.log(resultado2);
