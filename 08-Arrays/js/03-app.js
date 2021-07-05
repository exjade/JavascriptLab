const meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo', 'Junio', 'Julio' ];

console.table(meses);

/* 
    En lugar de estár accediendo individualmente a cada Elemento dentro del Arreglo

                            console.table(meses[0]):
                            console.table(meses[1]):
                            console.table(meses[2]):
                            console.table(meses[3]):
                            console.table(meses[4]):
                            console.table(meses[5]):

    Debe haber alguna forma para acceder más fácil, ¿no?

    Entonces ¿cómo hacemos para recorrer un Arreglo en el que su distancia o tamaño sea variable?
*/

// Lo primero que debemos hacer es: Conocer cuánto mide el Arreglo usando la propiedad ' .length ' 

console.log(meses.length);

/*
    for es una función que tiene tres partes en el paretesis ()
    
        1.  Es el valor en el que va a iniciar: let i = 0

    Queremos acceder la cantidad de veces que haya elementos en el Arreglo ( Para evitar gastar memoria de forma innecesaria)
    

        2.  ¿Cuántas veces quieres que se ejecute el código? i < meses.length 
    
    ( Mientras la longitud de meses sea menor a 'i', seguirá ejecutando el código dentro de la función)

        3. Recorrer de 1 en 1: i++

    ¿Por qué utilizamos un LET en lugar de un CONST? 

    R: Si usamos CONST la  'i'  va a INCREMENTAR en  '1 (i++)' cada que se ejecute la función (Se explica en 04-Numeros)
    Usualmente se utilizará un LET para RECORRER de 1 en 1
*/

for(let i = 0; i < meses.length; i++){

    /* 
        ¿Cómo hacemos para acceder a la información (valor) y que el ARRAY no nos muestre únicamente el indice?

         'i': tendra una posición dinamica, es decir, irá cambiando en cada iteración

                                                console.log( meses[0] );
                                                console.log( meses[1] );
                                                console.log( meses[2] );
                                                console.log( meses[3] );
                                                console.log( meses[4] );
                                                console.log( meses[5] );

        Esto provoca que 'i' se vaya recorriendo 1 en cada iteración y nos evitamos estar accediendo a los Elementos del Arreglo de 1 en 1 (individualmente)
                                                
    */

    console.log( meses[i] );
}