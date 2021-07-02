const producto = 'Monitor de 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto multiples veces

const texto = 'en Promoción'.repeat(1); 

/*
    Tal ves tú quieras engañar a JavaScript y decirle que lo realiace 2.5 veces y propablemente te muestre 
    'en Promoción' y en la segunda 'en pro'

    Pero no JavaScript redondeará ese número y sólo lo mostrará 2 veces.

    const texto = ' en Promoción'.repeat(2.5); 
*/


console.log(texto);
console.log( `${producto} ${texto} !!!` );

// .split, te permitirá dividir un STRING 

const articulo = 'Bocina Sony Con Buenos Bajos';
console.log(articulo.split(" ")); // Debemos aclararle qué buscará en el STRING para dividirlo y crear diferentes partes del string

/* 
 (5) ["Bocina", "Sony", "Con", "Buenos", "Bajos"]
 0: "Bocina"
 1: "Sony"
 2: "Con"
 3: "Buenos"
 4: "Bajos"
 length: 5
 __proto__: Array(0)


    Es muy útil porque si tenemos un listado de los ingredientes (en un sitio web de recetas) pueden utilizar está técnica para mostrar un listado
    de categorías con recetas relacionadas
*/

const hobbies = 'Leer, caminar, correr, música, bailar, escribir, dibujar, peliculas';
console.log(hobbies.split(", ")); // Se dividirá por la  coma (,) que tiene cada uno de ellos

/*
0: "Leer"
1: "caminar"
2: "correr"
3: "música"
4: "bailar"
5: "escribir"
6: "dibujar"
7: "peliculas"
*/

// ¿Cómo hace Twitter para resaltar el Hastagh?

const tweet = 'Aprendiendo Javascript Moderno #JSModernoConJuan';
console.log(tweet.split("#"))