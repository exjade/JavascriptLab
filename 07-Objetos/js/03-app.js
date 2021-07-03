/* 
    ¿Cómo agregar más PROPIEDADES al OBJETO?
*/


const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 3000, 
    disponible: true,
    imagen: "imagen.jpg", // Podemos agregarlas directamente en el objeto
}

/* 
    Pero supongamos que queremos agregarlas en la ejecución de nuestro Proyecto.

    Tal y como las usamos para acceder a las propiedades del objeto " . "
    Para agregar nuevos valores al objeto se utiliza la misma sintaxis de punto " . "

    IMPORTANTE: Como estamos fuera del objeto ya no se utiliza la sintaxys de los 2 puntos " : "
*/


// Agregar nuevas propiedades al objeto  | Al estar fuera del objeto se utiliza el signo de " = " para ASIGNAR el valor
producto.imagen = "imagen.jpg"


/* 
    ELIMINAR una LLAVE

    Un OBJETO es muy común cuando realizas una consult en una base de datos y consultas un usuario. 
    Te dará todo el OBJETO con la información del USUARIO


    EJEMPLO:

    Supongamos que queremos eliminar el PASSWORD ( en esté caso disponible )
*/


// Eliminar PROPIEDADES del OBJETO
delete producto.disponible; // Disponible ya no estará, lo eliminamos correctamente



console.log(producto);