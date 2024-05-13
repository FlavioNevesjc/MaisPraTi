// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 15
let numeros = new Array (10);
for (let i=0;i<10;i++){
    numeros[i] = parseInt(recebe(`Digite o ${i+1} numero: `));
}
for (let i=0;i<numeros.length;i++){
    if (numeros[i]%2 === 0){
        console.log(`Posição do Array: ${i} | numero neste Array ${numeros[i]} é par`)
    }
}