// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

//Exercicio 1
let tempCelsius = recebe("Digite temperatura em Celsius, para converter em Fahrenheit: ");

console.log(`Temperatura Celsius: ${tempCelsius}`);
console.log(`Temperatura Fahrenheit: ${(tempCelsius * (9/5)+32)}`);