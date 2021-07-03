/* 
    DESTRUCTIRING de OBJETOS ANIDADOS
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

const { nombre, información, información: { fabricación, fabricación: { país } } } = producto;


console.log(producto);
console.log(fabricación);
console.log(país);
