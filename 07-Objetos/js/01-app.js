/*
    ¿Cómo crear OBJETOS?
*/

const nombre = "Monitor de 20 pulgadas";
const precio = 3000;
const disponible = true;

/* 
    Un objeto agrupa todo en una sola variable

    Cuando veamos que una VARIABLE se ASIGNA y tiene LLAVES es un indicativo de que es un OBJETO.

    Después vamos agregando nuestras variables
    Y para ASIGNAR un valor dentro del OBJETO en lugar de utilizar el signo "=" igual se utilizan dos puntos (:)
    
    IMPORTANTE: A la variable dentro del OBJETO se le conoce como PROPIEDAD o LLAVE DEL OBJETO

    IMPORTANTE: En las VARIABLES se utiliza el signo " = " en los OBJETOS los dos puntos " : "

    Entonces se podría decir que son grupos de Llave y Valor

*/

// Object Literal
const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 3000, // Si vamos agregando valores es OBLIGATORIO agregar una " , " al final
    disponible: true // Si es el último valor no es obligatorio pero igual se puede agregar
}

console.log(producto);

/* 
    En resumen: 
    En lugar de crear 3 variables podemos crear un objeto que contenga esos mismos 3 valores
*/ 