// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 11
let razao = 0;
let somaTermos = 0;
let resultadoPA = 0;
let valor = parseInt(recebe("Digite o primeiro termo: "));
if ((!isNaN(valor)) || (valor === !undefined)){
     razao = parseInt(recebe("Digite o valor da Razão da PA: "));
     if ((!isNaN(valor)) || (valor === !undefined)){
        for (let i=1; i <= 10; i++){
            resultadoPA = valor+(i-1)*razao;
            console.log(`${i} termo: ${resultadoPA}`);
            somaTermos += resultadoPA   
        }
        console.log(`A soma de todos os termos ficou: ${somaTermos}`);
    }
}