const saludar = require('./saludo');

const nombre = process.argv[2];

console.log(saludar( nombre ? nombre : 'Inadaptado'));