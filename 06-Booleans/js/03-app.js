/* 
    Un error muy común al momento de hacer LOGINS es:

    Al asignar el VALOR TRUE a la variable "autenticado" están dando como implicito que el valor es VERDADERO
    Por lo que te aparecerá 'Si puedes ver NETFLIX'.

    Según el PROFESOR existen personas que no son contratadas porque escriben código de esté estilo
    
                                        const autenticado = true;

                                        if(autenticado === true){
                                            console.log('Si puedes ver NETFLIX')
                                        } else {
                                            console.log('No puedes ver NETFLIX')
                                        }
    
*/

// Por ende debes eliminar el VALOR y dejarlo vacio


const autenticado = true;

if(autenticado){
    console.log('Si puedes ver NETFLIX')
} else {
    console.log('No puedes ver NETFLIX')
}

// Operador Ternario

console.log( autenticado ? 'Si esta autenticado' : 'No esta autenticado');
