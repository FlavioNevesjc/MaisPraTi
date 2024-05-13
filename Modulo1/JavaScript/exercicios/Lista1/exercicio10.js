// Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 10
let numero = parseInt(recebe("Digite numero inteiro: "));
for (let i=1; i<11;i++){
    console.log(`${i}º - ${numero}`);
}