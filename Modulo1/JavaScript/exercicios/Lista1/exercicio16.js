// Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 16
let numero = parseInt(100);
let divisor, contRest, contPrimo = 0;
while (contPrimo !== 50){
    divisor = parseInt(numero);
    while (divisor !== 0){
        if (numero%divisor==0) {
            contRest++;
            if (contRest >= 3){
                break;
            }
        }
        divisor--;
    }
    if (contRest===2){
        console.log(`O numero ${numero}, é numero primo`);
        contPrimo++
    }
    numero++;
    contRest = 0;
}