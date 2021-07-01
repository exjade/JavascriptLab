// VAR era la forma de crear variables en versiones de EcmaScript. | Hoy en día las opciones se reducen a 2:  LET & CONST
// Las reglas siguen siendo las mismas aunque hoy en día se recomienda utilizar más LET & CONST

// Let te permite inicializar una variable y poner un valor

let producto = 'Tablet';

// También te permite reasignar un valor

producto = 'Monitor';

producto = 20;
producto = true; // Podemos ponerle un booleano es decir TRUE o FALSE
producto = null;

console.log(producto);

// Puedes crear la variable sin darle ningún valor

let precio; 

precio = 200

console.log(precio); // No dará ningún problema sino que aparecerá UNDEFINED (No Definido)

// Básicamente la diferencia entre VAR y LET es lo que se conoce como el SCOOB de las variables | Todo lo que se hace con VAR, aplica igual a LET
