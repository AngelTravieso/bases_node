// Importar modulo
const colors = require('colors');
const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');



// option('l)
// listar
// boolean
// default: false


// Limpiar consola
console.clear();

// Capturar parametros recibidos por consola (node)
// console.log(process.argv);
// console.log(argv);

// Capturar parametros recibidos por consola (yargs)
// console.log('base: yargs', argv.b );

// Obtener argumentos de linea de comandos
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('='); 

// const base = 5;

crearArchivo( argv )
    .then( nombreArchivo => console.log(nombreArchivo.green.bold, 'creado \n'.green.bold) )
    .catch( err => console.log(err ) )




