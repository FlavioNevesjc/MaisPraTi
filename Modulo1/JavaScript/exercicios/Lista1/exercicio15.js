// Flávio Soares Neves

const recebe = require('prompt-sync')();


// Exercicio 15
let numero;
let peso;
let respostaNumero = 0;
let respostaPeso = 0;
let indice = 1;
while (numero !==0 || peso !==0) {
    numero = parseInt(recebe(`Digite o ${indice}º numero: `));
    if  ((isNaN(numero)) || (numero === null) || (numero === 0)){
        break;
    } else {
        peso = parseInt(recebe(`Digite o peso para o numero ${numero}: `));
        if  ((isNaN(peso)) || (peso === null) || (peso === 0)){
            break;
        } else {
            respostaNumero += peso*numero;
            respostaPeso += peso;
            indice++;
        }
    }
}

if (respostaNumero !== 0){
    console.log(`A Média ponderada de ${(indice-1)} numeros digitados é: ${(respostaNumero/respostaPeso)}`);
}