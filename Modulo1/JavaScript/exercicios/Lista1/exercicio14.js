// Flávio Soares Neves

const recebe = require('prompt-sync')();


// Exercicio 14
let numero;
let resposta = 0;
let indice = 1;
while (numero !== 0) {
    numero = parseInt(recebe(`Digite o ${indice}º  valor: `));
    if (!isNaN(numero)) {
        resposta += numero;
        indice++;
    }
    console.log(`Total até momento: ${resposta}`);
}
console.log(`A Média aritmética dos numeros digitados é: ${(resposta/indice)}`);