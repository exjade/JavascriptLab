// Las variables son una caracteristica de cualquier lenguaje de programación. Si un lenguaje tiene variables es un lenguaje de programación

// Existen 3 maneras de crear variables en JavaScript, aunque en las nuevas versiones sólo de utilizan dos

// debes usar la palabra reservada var | Significa que conoce ese lenguaje
// Variable nombredevariable asignarvalor (=) | Un valor se asigna con el signo de igual = | También se le llama inicializar una variable con un valor


var producto = "Monitor de 24 pulgadas";
console.log(producto);

// Las variables se pueden reasignar | Se pueden usar tanto comillas dobles y sencillas pero no se pueden mezclar
producto = 'Monitor de 19 pulgadas';  // esto es una string
console.log(producto);

//Javascript es un lenguaje de tipo dinamico  | No es un lenguaje que tenga tipo de dato. Si quieres tipado existe algo llamado TYPESCRIPT
producto = 20; // esto es un número
console.log(producto);

// Se pueden inicializar sin valor y asignarlo después

//Aun no sé qué valor tendrá mi variable. Conforme se vaya inicializando el problema ese valor cambiaría.

var disponible;
disponible = true;

disponible = false;

//Inicializar multiples variables | Muchas personas les molestar que VAR se repita muchas veces por lo que puedes poner una coma ,

var categoria = 'computadora';
var marca = "Marca Famosa";
var calificación = "10";

// De esta forma se crearan multiples variables y cada una tendrá su valor
var categoria = 'computadora',
    marca = "Marca Famosa",
    calificación = "10";

// Las variables tienen reglas, una variable puede contener LETRAS, GUIONES BAJOS o NÚMEROS pero no pueden iniciar con un NUMERO.

//var 99días;  Lanzará un Error

var días99;
var _01;
var __usuario

// Existen diferentes estilos para nombrar una variable con más de una palabra

var nombreproducto; //tengo dos palabras en esta varibale | No se recomienda

var nombreProducto; // Camel Case: En JavaScript está es la forma más tradicional de hacerlo.
var nombre_producto; // Underscore/Snake: Está forma no es tan común
var Nombre_Producto // PascalCase: Es más utilizada en clases. Una clase siempre inicia con letra Mayuscula 


