/*
    En este ejercicio veremos la forma de cómo crear objetos con *** OBJECT CONSTRUCTOR ***

    Nosotros podemos "Automatizar" la creación de los Objetos cuando nos toca crear multiples Objetos
*/


// OBJECT LITERAL - Es más utilizado
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 3000,
    disponible: true,
}

// OBJECT CONSTRUCTOR - Este es más dinamico

function Producto(nombre, precio) {
    /*
     Como vimos anteriormente la palabra .this permite que no se mezclen los valores.
     Por lo tanto cuando estemos creando nuevos productos queremos que se asocien a ese mismo producto

    Con THIS no va a buscar las propiedades o variables por fuera sino que las almacenará dentro del mismo objeto

        OBJECT CONSTRUCTOR:
     THIS almacenará las propiedades de esta forma cuando creemos un nuevo objeto las propiedades dentro del "Objeto de referencia" 
     serán tomadas y asignadas en los valores de los nuevos Objetos sin necesidad de escribirlos nuevamente
    */

   this.nombre = nombre;
   this.precio = precio;
   this.disponible = true;
}

const producto2 = new Producto('Monitor de 50 Pulgadas', 5000);
console.log(producto2);


const producto3 = new Producto('Television de 80 Pulgadas', 10000);
console.log(producto3);
