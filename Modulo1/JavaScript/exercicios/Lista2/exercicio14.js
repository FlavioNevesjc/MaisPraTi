// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 14
let nomes = new Array (7);
for (let i=0;i<7;i++){
    nomes[i] = recebe(`Digite o ${i+1} nome: `);
}
nomes.reverse()
console.log("");
for (let i=0;i<7;i++){
    console.log(`Posição Array Alterado ${i+1}: ${nomes[i]}`);
}
