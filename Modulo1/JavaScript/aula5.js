/*
// Exercicio 1: Par ou impar

const recebe = require('prompt-sync')();
let num = recebe("Digite um numero");
//let num = 2;

if (num%2 === 0) {
    console.log(`O numero ${num} é par`);
} else {
    console.log(`O numero ${num} é impar`);
}

// Exercicio 2: Maior de 2 numeros

const recebe = require('prompt-sync')();
let num1 = parseInt(recebe("Digite primeiro numero: "));
let num2 = parseInt(recebe("Digite segundo numero: "));

if (num1 > num2) {
    console.log(`O numero ${num1} é maior`);
} else if (num2 > num1) {
    console.log(`O numero ${num2} é maior`);
} else {
    console.log(`Os numeros ${num1} e ${num2} são iguais`);
}

// Exercicio 3: 
const recebe = require('prompt-sync')();
let num1 = parseInt(recebe("Digite primeiro lado do Triangulo: "));
let num2 = parseInt(recebe("Digite segundo lado do Triangulo: "));
let num3 = parseInt(recebe("Digite terceiro lado do Triangulo: "));

if ((num1+num2 > num3) && (num1+num3 > num2) && (num2+num3 > num1)){
    console.log(`É Possivel montar o triangulo`);
} else {
    console.log(`Não é Possivel montar o triangulo`);
}

// Exercicio 4: Calculadora
const recebe = require('prompt-sync')();
let num1 = parseInt(recebe("Digite primeiro numero: "));
let num2 = parseInt(recebe("Digite segundo numero: "));
let resultado = 0;
let operacao = recebe("Digite o operador (+) (-) (*) (/): ");
switch (operacao) {
    case "+": resposta = num1 + num2; 
    break;
    case "-": resposta = num1 - num2; 
    break;
    case "*": resposta = num1 * num2; 
    break;
    case "/": {
        if (num2 !== 0) {
            resposta = num1 / num2; 
        }
    }   
    break;
    default: console.log("Não selecionou operação valida"); 
}
if (resposta !== 0){
    console.log(`A resposta da operação ${num1} ${operacao} ${num2} = ${resposta}`);
}
*/
// Switch case

let dia = 5;
switch (dia) {
    case 1: console.log("Domingo");
    break;
    case 2: console.log("Segunda");
    break;
    case 3: console.log("Terça");
    break;
    case 4: console.log("Quarta");
    break;
    case 5: console.log("Quinta");
    break;
    case 6: console.log("Sexta");
    break;
    case 7: console.log("Sabado");
    break;
    default:console.log("Dia da semana não existem");
}

