
//    Veremos algunos metodos de manipular un arreglo sin tener que tocarlo, es decir, sin hacer cambios dentro del arreglo


/* 
    Al igual que los Objetos los Arreglos se pueden modificar aunque estén declarados con CONST

    ¿En qué valor es una variable declarada en CONST se puede modificar sus valores?
        R: Objetos (Salvo que selles el objeto) y Arreglos (Los arreglos no tienen una forma de sellar)
*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo', 'Junio', 'Julio' ];

// Modificar el valor 
// Estamos accediendo a la posición '0' y le asignamos '=' un nuevo valor 'Nuevo Mes'
meses[0] = 'Nuevo Mes';

/*
    En otros lenguajes si tienes sólo 6 posiciones y creas la 10 (das un salto de 4 posiciones) te crean la 7, 8 y 9 en blanco
    En JavaScript dice "no hay posición 7, 8, 9" entonces no te listaré nada ( Se salta del 6 al 10)
*/
meses[10] = 'SaltarPosiciones';

// Agregar un valor 
// Como la posición 7 "no está definida" nosotros la estamos creando y asigniando un valor
meses[7] = 'Agosto';



console.table(meses);