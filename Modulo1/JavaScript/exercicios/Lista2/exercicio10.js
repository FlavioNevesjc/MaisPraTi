// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();
// Está dando errado na media (estranho!!!!)
// Exercicio 10
let continua = 's';
let somaTotal = 0;
let menor = 0;
let contador = 0;
let contadorPar = 0; 
let media = 0;
do {
    let valor = parseInt(recebe("Digite um valor: "));
    if ((!isNaN(valor)) || (valor === !undefined)){
        somaTotal += valor;
        contador++
        if (contador === 1) {
            menor = valor;
        }
        if (valor < menor){
            menor = valor;
        }
        if (valor%2 === 0){
            contadorPar++
        }
    }
    console.log("");
    console.log(` somaTotal: ${somaTotal}, contador: ${contador}, ${typeof(contador)} menor ${menor}, contadorPar: ${contadorPar}`);
    continua = recebe("Deseja continuar? (s) (n): ");
    console.log("");
} while (continua !== 'n')
if (contador !== 0){
    console.log(`Somatória dos valores digitados são: ${somaTotal}`);
    console.log(`O menor valor digitado foi: ${menor}`);
    console.log(`A média de todos os valores é: ${(parseFloat(valor/contador))}`);
    console.log(`De todos os numeros digitados temos ${contadorPar} pares`);
} else {
    console.log("Não tivemos nenhum numero digitado.");
}