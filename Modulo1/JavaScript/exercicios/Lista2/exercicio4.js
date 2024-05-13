// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 4
let retaA = parseInt(recebe("Digite o tamanho da primeira Reta: "));
let retaB = parseInt(recebe("Digite o tamanho da segunda Reta: "));
let retaC = parseInt(recebe("Digite o tamanho da terceira Reta: "));
if ((retaA < (retaB + retaC)) && (retaB < (retaA + retaC)) && (retaC < (retaA + retaC))){
    console.log("Com estes valores é possivel criar um triangulo")
} else {
    console.log("Com este valores não é possivel criar um triangulo");
}