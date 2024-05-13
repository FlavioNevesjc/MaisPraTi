// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 17
let nomes = new Array (9);
let idades = new Array (9);

for (let i=0;i<nomes.length;i++){
    nomes[i] = recebe(`Digite o ${i+1}º nome: `);
    idades[i] = recebe(`Digite a idade de ${nomes[i]}: `);
}

for (let i=0;i<nomes.length;i++){
    if (idades[i] <=18){
        console.log(`O ${nomes[i]}, tem ${idades[i]} anos de idade (menor de idade)`);
    }
}