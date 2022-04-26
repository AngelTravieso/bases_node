// Módulo de commonJS
const fs = require('fs');
// ES module (forma nueva)
// import { fs } from 'fs';

const crearArchivo = async( base = 5) => {
    
    try {
        console.log('===============================');
        console.log(`     Tabla del ${ base }       `);
        console.log('===============================');

        let salida = '';

        for(let i = 1; i <= 10; i++) {
            salida += `${ base } x ${ i } = ${ base * i } \n`;
        }

        console.log(salida);

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