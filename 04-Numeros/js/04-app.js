/* 

    ORDEN DE LAS OPERACIONES 

    Esté orden es igual que al de la escuela: Multiplicaciones y divisiones primero; Sumas y restas después.

*/

let resultado;

resultado = 20 + 30 * 2; // Cómo es una multiplicación primero se hará 30 * 2 y el resultado se sumará a 20

/* 
    ¿Qué ocurre si yo quiero que se realice primero la suma y después se multiplique el resultado? 
*/

resultado  = (20 + 30) * 2; // Encierras entre parentesis la operación que quieres que se haga primero

// EJEMPLO: 60% de descuento en tu carrito de compras

resultado = (20 + 60 + 90 + 200 + 40 + 50 + 60) * .6; // ´rimero se sumaria el costo de los productos y después de multiplica por el % del descuento

// Impuesto

resultado = (20 + 30) * 1.16; // El usuario tendría que pagar 57.99 ya con el impuesto



console.log(resultado);