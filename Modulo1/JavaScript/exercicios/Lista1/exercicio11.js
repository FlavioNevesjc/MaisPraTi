// Flávio Soares Neves

const recebe = require('prompt-sync')();


// Exercicio 11
let numero; 
do {
    numero = parseInt(recebe("Digite numero inteiro: "));
    if  ((isNaN(numero)) || (numero === null) || (numero < 0)){
        break;
    } else {
       if (numero%2 === 0){
            console.log(`O numero: ${numero} é Par`);
        } else {
            console.log(`O numero: ${numero} é Impar`);
        }
        console.log("");
    }
} while (numero > -1) 