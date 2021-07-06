const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 2500},
    { nombre: 'Celular', precio: 1500},
    { nombre: 'Escritorio', precio: 5000},
    { nombre: 'Silla gamer', precio: 3500},
    { nombre: 'Computadora gaming', precio: 3200},
    { nombre: 'Mouse y teclado', precio: 500},
]

// For loop
for (let i = 0; i < carrito.length; i++) {
    console.log( `${carrito[i].nombre}  - Precio: ${carrito[i].precio}` );
}
/*
    Cuando la sintaxis es de esta forma es una FUNCION
                            hola();
    Cuando la sintaxis es de esta forma es un METODO 
                            "juan".hola();
    
    Un forEach() 
            Es una función | Está función hará lo mismo que tenemos en el FOR LOOP 

            En lugar de tener 'carrito' podemos agregar una variable más descriptiva con lo que estamos haciendo
*/

/*
     Es decir, 'carrito' es el plural de todo esto: 
                                        const carrito = [
                                        { nombre: 'Monitor 27 Pulgadas', precio: 2500},
                                        { nombre: 'Celular', precio: 1500},
                                        { nombre: 'Escritorio', precio: 5000},
                                        { nombre: 'Silla gamer', precio: 3500},
                                        { nombre: 'Computadora gaming', precio: 3200},
                                        { nombre: 'Mouse y teclado', precio: 500},
                                    ]
    
    'Producto' serían cada uno de los objetos 

                                        { nombre: 'Monitor 27 Pulgadas', precio: 2500},
                                        { nombre: 'Celular', precio: 1500},
                                        { nombre: 'Escritorio', precio: 5000},
                                        { nombre: 'Silla gamer', precio: 3500},
                                        { nombre: 'Computadora gaming', precio: 3200},
                                        { nombre: 'Mouse y teclado', precio: 500},

    forEach va a ir iterando sobre cada uno de los Objetos

*/
carrito.forEach( function(producto) {

/*
    En el ejemplo anterior hacemos uso de "carrito[i].nombre" pero eso ya no es necesario porque ya no estamos iterando sobre "carrito".

    Estamos iterando sobre el PRODUCTO
    Y como estamos en PRODUCTO tenemos acceso al Objeto
*/
    console.log( `${producto.nombre}  - Precio: ${producto.precio}` ); 
} )

/* 
    forEach y for hacen básicamente lo mismo

    Ambos se comportan igual, ambos hacen básicamente lo mismo

    Sin embargo, tienes la ventaja de acceder directamente al Objeto con forEach y renombrar el objeto
    sin necesidad de cambiar el nombre del Arreglo Original

                                        carrito.forEach( function(renombrarObjeto) {


                                        console.log( `${renombrarObjeto.nombre}  - Precio: ${renombrarObjeto.precio}` ); 
                                    } )

    Con Array tendrías que renombrar el Arreglo original

                                        const renombrarArreglo = [
                                        { nombre: 'Monitor 27 Pulgadas', precio: 2500},
                                        { nombre: 'Celular', precio: 1500},
                                        { nombre: 'Escritorio', precio: 5000},
                                        { nombre: 'Silla gamer', precio: 3500},
                                        { nombre: 'Computadora gaming', precio: 3200},
                                        { nombre: 'Mouse y teclado', precio: 500},
]
*/