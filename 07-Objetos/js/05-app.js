/*
    De está forma se crea un OBJETO dentro de otro OBJETO 
*/

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 3000,
    disponible: true,
    información :  {
        medidas : {
            peso: "1kg",
            altura: "1m",
        },
        fabricación: {
            país: "México",
            año: "2021",
        },
        
    }
}

console.log(producto);


/*
    Está es la sintaxis para acceder a la información dentro del objeto utilizando los puntos " . "


    Si añadimos un valor que no existe, nos saltará un error o no se mostrará nada porque no se puede acceder a una propiedad que no existe
*/

console.log(producto.información.medidas.peso);
console.log(producto.información.medidas.altura);

console.log(producto.información.fabricación.país);
console.log(producto.información.fabricación.año);