
const producto = 'Monitor de 20 pulgadas';

// Reemplazar un texto de una cadena 
console.log(producto);
console.log(producto.replace('pulgadas', 'pies'));

// Con el METODO .replace podemos ir reemplazando texto que ya existe
console.log(producto.replace('Monitor', 'Monitor Curvo'));
 
// El metodo .slice para cortar caracteres
console.log(producto.slice(0, 10));

// Si no comienzas desde el 0 sino desde un número mayor lo que hará es recorrer 8 letras y de ahí hasta el segundo valor
console.log(producto.slice(8, 15));

// "Voy a engañar un poco a JavaScript".
// Si el primer valor es mayor al segundo, no va a cortar nada. Simplemente no hará nada.
console.log(producto.slice(2, 1));

/* 
 Alternativa a Slice es substring
  El resultado es exactamente el mismo que: 

console.log(producto.slice(0, 10));

    La diferencia fundamental entre .slice y .substring es que si lo tratas de engañar .substring es más inteligente
    Y cambia el número
*/
console.log(producto.substring(0,10));

// .substring modifica el número y cambia el número a console.log(producto.substring(1,2));
console.log(producto.substring(2,1));

/*
    En algunos sitios cuando entras a Google aparece un circulo en la parte superior con tu letra inicial.
   
*/ 

const usuario = "Adrian";

// ¿Cómo se logra eso?
console.log(usuario.substring(0,1));

// Hay otra forma más corta de hacerlo .charAt
console.log(usuario.charAt(0));

