import chalk from 'chalk';
import saludar from "./saludo.js";

const name = process.argv[2];
const log = console.log;
const chk = chalk;

log(chk.blue(saludar( name ? name : 'Inadaptado')));