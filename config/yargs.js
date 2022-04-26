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

module.exports = argv;