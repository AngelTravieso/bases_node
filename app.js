// Importar modulo
const { option } = require('yargs');
const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');

// yargs
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
            })
            .check( ( argv, option ) =>{
                if( isNaN( argv.b ) ) {
                    throw 'La base tiene que ser un número';
                }

                return true;
            })
            .argv;

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

crearArchivo( argv.b, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo.green.bold, 'creado \n'.green.bold) )
    .catch( err => console.log(err ) )




