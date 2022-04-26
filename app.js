// Módulo de commonJS
const fs = require('fs');

// ES module (forma nueva)
// import { fs } from 'fs';

// Limpiar consola
console.clear();
console.log('===============================');
console.log('         Tabla del 5           ');
console.log('===============================');

// Imprimir tabla del 5 por consola
const base = 3;
let salida = '';

for(let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base * i} \n`;
}

console.log(salida);

fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${base}.txt creado`);
});

// Todas las tablas de multiplicar
// for(let i = 1; i <= 10; i++) {
//     console.log(`Tabla del ${i} \n`);
//     for(let c = 1; c <=10; c++) {
//         console.log(`${i} x ${c} = ${i * c} `);
//     }
//     console.log('\n');
// }