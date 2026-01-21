import { suma,resta,multiplicacion,division } from "./operaciones.js";

import inquirer from "inquirer";

const { operacion } = await inquirer.prompt([{
    type: "select",
    name: "operacion",
    message: "¿Qué operación quieres hacer?",
    choices: [{
        name: "Sumar",
        value: "sumar"
    },{
        name: "Restar",
        value: "resta"
    },{
        name: "Multiplicar",
        value: "mulitplicacion"
    },{
        name: "Dividir",
        value: "division"
    }]
}]);

const { a, b } = await inquirer.prompt([
    {
        type: "input",
        name: "a",
        message: "Dame el primer número: "
    },
    {
        type: "input",
        name: "b",
        message: "Dame el segundo número: "
    }
]);

let resultado = 0;
const { val1, val2 } = (a,b) => {
    
    return {c,d}
}

switch (operacion) {
    case "sumar":
        resultado = suma(a,b);
        break;
    case "restar":
        resultado = resta(a,b);
        break;
    case "multiplicar":
        resultado = multiplicacion(a,b);
        break;
    case "dividir":
        resultado = division(a,b);
        break;
    default:
        break;
}

console.log(resultado);


// console.log("Suma", suma(5,3));
// console.log("Resta", resta(8,2));
// console.log("Multiplicación", multiplicacion(4,6));
// console.log("División", division(10,2));