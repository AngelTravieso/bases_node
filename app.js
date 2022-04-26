// Importar modulo
const { crearArchivo } = require('./helpers/multiplicar');


// Limpiar consola
console.clear();

// Obtener argumentos de linea de comandos
const [,,arg3 = 'base=5'] = process.argv;
const [,base = 5] = arg3.split('=');

// const base = 5;

crearArchivo( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err ) )




