// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

//Exercicio 1
let idadeFumou = 0;
let quantidadeCigarros = recebe("Digite o numero medio de cigarros que fuma no dia: ");
if (!isNaN(quantidadeCigarros)){
    idadeFumou = recebe("Digite quantos anos você está fumando: ");
    if (!isNaN(idadeFumou)){
        console.log(`Você ira perder ${((quantidadeCigarros * 365 * idadeFumou) / 1440).toFixed(1)} dias de sua via com cigarro`);
    }
} else {
    console.log("Favor digitar informações corretas")
}

