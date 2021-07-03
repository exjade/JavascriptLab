
/*
    PALABRA THIS     - Se refiere a los valores que existen en el mismo Objeto
*/
const nombre = "Minisplit";
const precio = 3000;

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 3000,
    disponible: true,

    /*
     Al concatenar variables con TEMPLATE STRINGS / LITERALS tenemos un error  que dice que las variables no están definidas
     Por lo que debemos declarar las variables  
    */ 
    mostrarInfo: function() {
        console.log(`El Producto: ${nombre} tiene un precio de: ${precio}`)
    }
}

producto.mostrarInfo();

const articulo = {
    nombre: "Computadora HP",
    precio: 6000,
    disponible2: true,

    /* 
        Al añadir this.nombre2 va a mostrar la propiedad (nombre2) que se encuentra dentro del mismo objeto.

        THIS es una forma de REFERIRSE al OBJETO en sí mismo
        Porque un OBJETO puede CONTENER multiple información pero THIS se mantiene dentro de las LLAVES en el OBJETO del cual fue declarado


            La palabra THIS es reservada porque no se puede declarar una variable con ese nombre porque mostrará que ya está
            siendo utilizada por JavaScript
    */

    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

articulo.mostrarInfo();