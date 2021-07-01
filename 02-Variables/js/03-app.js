// Las diferencias entre LET & CONST

// La primera y las más fundamental es que CONST - NO PUEDE SER REASIGNADO y NO PUEDEN INCIAR SIN UN VALOR

const producto = 'Tablet'; // Una Constante no se puede reasignar 
 /* 
 producto = "Monitor";  Por ende no tomará "producto" como "Monitor" sino que seguirá arrojando "Tablet" 
 */

console.log(producto);

/* 
const precio;  | Deben inicializar con un VALOR
precio = 20;   | Igual si lo indicamos no funcionará
console.log(precio); 
*/


const precio = 20; // De está forma no tendrá ningún error
console.log(precio);