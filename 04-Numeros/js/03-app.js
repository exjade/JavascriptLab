/*
    OPERADOR MATH - Es un objeto

    Con el operador MATH tenemos acceso a una cantidad grande de opciones

   
*/

let resultado;


// PI - Te enviará el resultado de PI que tiene registrado el OBJETO de Math
resultado = Math.PI;


// Redondear Resultado 

resultado = Math.round(2.8); // Redondea hacía arriba según las reglas de redondeo
resultado = Math.round(2.2); // Redondea hacía abajo según las reglas de redondeo


resultado = Math.round(2.5); // Debería redondearlo hacía abajo pero JavaScript lo redondea hacía arriba 

/* 
¿Cómo hacemos que redondee según la regla? 

    CEIL - Mientras sea mayor 2.01 redendeará hacía arriba
*/

// Redondear hacía arriba | Existe un metodo que se llama "CEIL"

resultado = Math.ceil(2.5);
resultado = Math.ceil(2.1); // Incluso 2.1 lo redondea hacía arriba

// Redondear hacía abajo | Existe un metodo que de forma forzosa redondea hacía abajo "FLOOR"

resultado = Math.floor(3.9); // Resultará 3 | Obliga a que redondee hacía abajo 

// Raíz cuadrada | "SQRT" - Es una forma de obtener la raiz cuadrada

resultado = Math.sqrt(144);

// Absoluto  - Math.abs()

/*
    Por ejemplo, si es -200 va a traer sólo el valor e ignora el menos y trae el 200
*/

resultado = Math.abs(+100);

// Potencia - 8 a la potencia de 3, es multiplicar 8 * 8 * 8 

resultado = Math.pow(4, 4);

/*
    Si tenemos una serie de números y queremos saber cuál es el minimo ( Cual es de menor valor ) podríamos usar 
    Math.min();
    
     Si tenemos una serie de números y queremos saber cuál es el maximo podríamos usar 
    Math.max();

    Existe otro que es el ALEATORIO (random) | Pocas veces da números enteros
    
*/

resultado = Math.min(3,5, 10, -10);

resultado = Math.max(5,1,20,30);

resultado = Math.random();


// Lo puedes multiplicar y así dará un número mayor a 1
resultado = Math.random() * 20 ; // No es muy recomendable

/*
    Puedes mezclar varios valores dentro de un rango

*/

// Aleatorio dentro de un rango | Está bien por ejemplo para una rifa

resultado = Math.floor(Math.random() * 30) ; // De esta forma tendremos un valor que vaya del 1 al 30

console.log(resultado);