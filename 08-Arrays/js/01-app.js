/*
                                                ARRAYS - Arreglos
    
    Los arreglos sirven para agrupar elementos del mismo tipo
    Agrupar elementos es decir en plural

    IMPORTANTE:Cuando recién comenzamos a programar podemos confundirnos con los Objetos y los Arreglos por eso debemos tener 
    clara la diferencia entre cada uno.

    ¿Cual es la diferencia entre Arreglos y Objetos? 

    Mientras que un Objeto va a ser una Variable que va agrupar la información de un elemento de un Objeto

    Un Arreglo puede tener multiples Elementos que sean iguales

    EJEMPLO: 
            La forma en como Facebook muestra el "listado de amigos" o las "Personas que le dieron: Me gusta a una foto tuya" 
            seguramente esa información está almacenada en un "Arreglo"

    IMPORTANTE - Tienen la misma SINTAXIS PERO:
                    Los objetos se crean con LLAVES
                    Los arreglos con CORCHETES

    Tenemos diferentes elementos [10, 20, 30] en una misma variable y cada elemento estará separado por una coma " , "

    Diferencias en SINTAXIS:

        Objetos:
            Se crean con llaves
            Contiene Llave y Valor
        Arreglos:
            Se crean con corchetes
            Contiene sólo Valores
*/


// En el arreglo se diferencía únicamente por la coma " , "

const numeros = [10, 20, 30]

// En el Objeto cada parte está diferenciada por una LLAVE y el VALOR

const producto = {
    nombre: "Monitor de 20 pulgadas", 
    precio: 3000, 
    disponible: true 
}

// Existe una segunda forma de crear Arreglos no tan popular:

/*
    Está sintaxis a diferencia de la otra no tiene los corchetes
    Tiene parentesis porque estamos usando un contructor nuevo (new), es decir, como si fuera una función estamnos pasandole valores

    Si prestas atencion la cuenta comienza desde el número 0 

    Arreglos: 

        Los Arreglos utilizan algo que se conoce como indices, es decir, cuál es la posición ese elemento en el Arreglo
        Los Arreglos inician en cero " 0 "

    NOTA: En algunos lenguajes (JavaScript no está incluido) los Arreglos inician en unos " 1 ". 
            En JavaScript comienzan desde la posición cero " 0 "


    En los Arreglos agregaras "ELEMENTOS", es decir, multiples valores.

        EJEMPLO: Cuando compras algo en Amazon no te obliga a que compres más de 1 producto. Así que puede ser minimo 1 o pueden ser multiples
        elementos
*/

const meses = new Array('Enero', 'Febrero', 'Marzo'); // No es tan común

console.log(numeros);

// 0: 10
// 1: 20
// 2: 30

console.log(meses);

// 0: "Enero"
// 1: "Febrero"
// 2: "Marzo"

/* 
        Tampoco es obligatorio que sean elementos relacionados. Tú puedes crear Arreglos con todo tipo de datos
        EJEMPLO:
*/

// Arreglo que contiene datos de todo tipo

/* 
    Básicamente es como una variable que contendrá multiples elementos

    En lugar de ir creando una variable para diferentes cosas:
         puedes crear una que contenga todos los me gusta de una publicacion
            Todos las personas que sigues en Twitter
            Todas las personas que el dieron ME GUSTA a tu foto de Instagram
*/

  //   Un Arreglo puede estar dentro de un Arreglo de la misma manera que en los Objetos puedes tener Objetos dentro de Objetos

             // string + numero + booleano + null +  objeto + Arreglo  
const deTodo = ["Hola", 10, true, "si", null, {nombre: 'Adrian', trabajo: 'Programador'}, [1, 2, 3]]; // Es bastante común los Arreglos

console.log(deTodo);