
// Limpiar consola
console.clear();
console.log('===============================');
console.log('         Tabla del 5           ');
console.log('===============================');

// Imprimir tabla del 5 por consola
const base = 5;
for(let i = 1; i <= 10; i++) {
    console.log(`${base} x ${i} = ${base * i}`);
}

// Todas las tablas de multiplicar
// for(let i = 1; i <= 10; i++) {
//     console.log(`Tabla del ${i} \n`);
//     for(let c = 1; c <=10; c++) {
//         console.log(`${i} x ${c} = ${i * c} `);
//     }
//     console.log('\n');
// }