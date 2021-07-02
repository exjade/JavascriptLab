/*
    Incrementar o Decremento de 1 en 1
*/

// Existen 3 formas de ir INCREMENTANDO de 1 en 1

let puntaje = 5;

/* 
    El puntaje++; seguirá siendo 5 porque primero se manda a llamar el puntaje y después de suma
    Pero al volver a llamar sólo a la variable "puntaje" dará 6 porque ya se sumo el 5 + 1
*/

puntaje++; // El puntaje no aparecerá actualizado sino que seguirá siendo 5 en esté caso pero al llamar puntaje obtendrás el resultado que es 6
++puntaje; // Si queremos que el puntaje se sume y se muestre a la vez, usamos ++ al princio de la variable

/* En el caso del DECREMENTO se comporta igual que el INCREMENTO */

let puntaje2 = 5; 

puntaje--; // El puntaje no aparecerá actualizado hasta que lo llames con la variable
--puntaje; // El puntaje aparecerá actualizado al valor correspondiente de la resta



/*
    El "puntaje" puede ir aumentando en valores más grandes que de 1 en 1 o hacía abajo en valores más grandes que 1 y 1.

    Si estamos creando un videojuego y queremos dar un estimulo o eliminar dicho estimulo, está sería la forma correcta de hacerlo.
*/

puntaje += 3; // Este ejercicio tomó los 5 puntos de la variable "Puntaje" que ya tenemos y le sumó 3
 
// Si lo llamamos varias veces irá sumando el valor | En incremento de 3 en 3
puntaje += 3;
puntaje += 3;
puntaje += 3;
puntaje += 3;
puntaje += 3;


puntaje2 -= 3 // Este ejercicio tomó los 5 puntos de la variable "Puntaje2" que ya tenemos y le restó 3

// De la misma forma puede ir restando | En decremento de 3 en 3
puntaje2 -= 3;
puntaje2 -= 3;
puntaje2 -= 3;
puntaje2 -= 3;
puntaje2 -= 3;

console.log(puntaje);
console.log(puntaje2);