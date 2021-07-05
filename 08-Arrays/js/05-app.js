/*
const meses = ['Enero', 'Febrero', 'Marzo'];

//        METODOS DEL ARREGLO (ARRAY)


     ¿Cuál es la desventaja de crear un nuevo valor de esta manera?

     Funciona bien pero debes conocer las posiciones del Arreglo y agregarla (Eso lo hace no tan dinamico)

     Una variante son los Metodos de los Arreglos

                        meses[3] = 'Abril';




// Agregar al final del Arreglo - No necesito conocer la posición | Lo agregará siempre al final
meses.push('Abril');
// Al agregar Mayo dirá ('Abril' en ese momento era el último elemento) esté lugar está ocupado así que lo añado hasta el final
// Y 'Abril' tomará la posición penunltima y 'Mayo' pasará a ser el último valor del Arreglo
meses.push('Mayo');




console.table(meses);
*/

/* 
    EJEMPLO: Carrito de compras

    Iniciamos un Arreglo sin Elementos. ¿Por qué sin elementos? Porque cuando tú entras a AMAZON no hay elementos en tu carrito sino que debes
    añadirlos.

    Usualmente iniciaremos con un Arreglo vacio y en base a las Interacciones del Usuario darán click e iran agregando productos al carrito y
    ese Arreglo se irá llenando.
*/

const carrito = [];


// Un Arreglo puede tener Objetos

// Definir un producto - Objeto

const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 3000,
}

const producto2 = {
    nombre: "Consola XBOX ONE SERIES X",
    precio: 15000,
}

/* 
    PASOS:
        1. Creamos el Array carrito: const carrito = [];
        2. Definimos el producto:
                                const producto = {
                                nombre: "Monitor 32 Pulgadas",
                                precio: 3000,
                            }
        3. Añadirmos el producto al carrito: carrito.push(producto);

    Si queremos añadir un producto al carrito ponemos .push porque como no hay ningún elemento lo añadirá a la última posición libre
*/

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Sofa reclinable",
    precio: 5000,
}

/*
    unshift añadirá elementos al Inicio del Arreglo
*/
carrito.unshift(producto3);

console.table(carrito);
