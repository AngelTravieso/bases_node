// Módulo de commonJS
const fs = require('fs');
// ES module (forma nueva)
// import { fs } from 'fs';

const colors = require('colors');

const crearArchivo = async( base = 5, listar = false ) => {
    
    try {

        let salida = '';

        for(let i = 1; i <= 10; i++) {
            salida += `${base} ${colors.green('x')} ${i} ${colors.green('=')} ${ base * i } \n`;
        }

        if( listar ) {
            console.log(colors.yellow('==============================='));
            console.log(colors.green(`|        Tabla del ${ colors.blue(base)}          |`.bold));
            console.log(colors.yellow('==============================='));
            console.log(salida);
        }

        fs.writeFileSync(`tabla-${ base }.txt`, salida );
        return `tabla-${ base }.txt`;

    } catch(error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}


// fs.writeFileSync( `tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;

//     console.log(`tabla-${base}.txt creado`);
// });