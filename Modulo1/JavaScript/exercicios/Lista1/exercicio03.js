// Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicios 3
let num1 = parseInt(recebe("Digite primeiro numero: "));
let num2 = parseInt(recebe("Digite segundo numero: "));
let num3 = parseInt(recebe("Digite terceiro numero: "));
let num4 = parseInt(recebe("Digite quarto numero: "));

console.log(`Some 25 ao primeiro numero: ${(num1+25)}`);
console.log(`Triplique o valor do segundo inteiro: ${(num2*3)}`);
console.log(`Modifique o valor do terceiro inteiro para 12% do valor origial: ${((num3*12)/100)}`);
console.log(`Armazene no quarto inteiro a soma dos valores originais (os que o usuario digitou dos primeiros três inteiros): ${num1+num2+num3}`);