// Flávio Soares Neves

const recebe = require('prompt-sync')();


// Exercicio 8
let num1 = parseInt(recebe("Digite primeiro numero: "));
let num2 = parseInt(recebe("Digite segundo numero: "));
if (num1 !== num2) {
    if (num1 > num2) {
        console.log(`A ordem crescente dos numeros é esta: ${num1} e ${num2}`);
    } else {
        console.log(`A ordem crescente dos numeros é esta: ${num2} e ${num1}`);
    } 
} else {
    console.log(`Numeros iguais, não é possivel ordenar este numeros!}`);
}
