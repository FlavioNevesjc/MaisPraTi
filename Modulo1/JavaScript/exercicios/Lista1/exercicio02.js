// Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 2
let quantidadeEleitores = recebe("Digite a quantidade de eleitores: ");
let quantidadeVotosBrancos = recebe("Digite a quantidade de votos Brancos: ");
let quantidadeVotosNulo = recebe("Digite a quantidade de votos Nulos: ");
let quantidadeVotosValidos = recebe("Digite a quantidade de votos Válidos: ");
console.log(`Temos ${((100*quantidadeVotosBrancos)/quantidadeEleitores)}% de votos em Branco`);
console.log(`Temos ${((100*quantidadeVotosNulo)/quantidadeEleitores)}% de votos Nulos`);
console.log(`Temos ${((100*quantidadeVotosValidos)/quantidadeEleitores)}% de votos Válidos`);