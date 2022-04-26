// Importar modulo
const { crearArchivo } = require('./helpers/multiplicar');

// yargs
const argv = require('yargs').argv;


// Limpiar consola
console.clear();

// Capturar parametros recibidos por consola (node)
// console.log(process.argv);
// console.log(argv);

// Capturar parametros recibidos por consola (yargs)
console.log('base: yargs', argv.base);

// Obtener argumentos de linea de comandos
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');

// const base = 5;

// crearArchivo( base )
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
//     .catch( err => console.log(err ) )




