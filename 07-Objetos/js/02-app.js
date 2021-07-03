// Object 
const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 3000, 
    disponible: true 
}

console.log(producto);

/* 
    Un OBJETO es como si fueran multiples variables en una sola

    ¿Cómo podemos acceder a cierto valor? Por ejemplo al NOMBRE "Monitor de 20 pulgadas"


    Los objetos tienen algo llamado 'Sintaxis del punto' así se logra acceder valor dentro del OBJETO
*/

console.log(producto.nombre); // En la consola obtendremos el nombre "Monitor de 20 pulgadas"
console.log(producto.precio); 
console.log(producto.disponible); 


// Existe una segunda forma para acceder al valor del OBJETO. En lugar de un STRING utilizas CORCHETES 
// Y después en una STRING (palabra dentro de comillas) pones la LLAVE  a la que quieres acceder

console.log(producto['nombre']);




