import chalk from "chalk";
import saludar from "./saludo.js";
import { input, select } from "@inquirer/prompts";

const log = console.log;
const argName = process.argv[2];
const argColor = process.argv[3];
const colorChoices = {
    message: "¿Cuál es tu color favorito?",
    choices: [
        {
            name: "Rojo",
            value: "red",
        },
        {
            name: "Verde",
            value: "green",
        },
        {
            name: "Azul",
            value: "blue",
        },
    ],
};

const name = argName ? argName : await input({ message: "¿Cómo te llamas?" });
const argColorObj = colorChoices.choices.find((col) => col.name === argColor);

const colorValue = argColorObj
    ? argColorObj.value
    : await select(colorChoices);
const selectedColor = colorChoices.choices.find(
    (choice) => choice.value === colorValue,
);
const chk = chalk[colorValue];

log(saludar(name));
log(`${chk("Tu color favorito es " + selectedColor.name)}`);
