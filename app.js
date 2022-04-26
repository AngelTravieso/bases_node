// Importar modulo
const { option } = require('yargs');
const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');

// yargs
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Listar resultado'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                demandOption: false,
                describe: 'Multiplicación hasta número indicado'
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

crearArchivo( argv )
    .then( nombreArchivo => console.log(nombreArchivo.green.bold, 'creado \n'.green.bold) )
    .catch( err => console.log(err ) )




