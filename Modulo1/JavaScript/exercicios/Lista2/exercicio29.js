// Nome: Flávio Soares Neves

// Exercicio 29
let matrizM = Array ();
let somaTodos = 0;
let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonal = 0;

for (let i=0;i<5;i++){
    matrizM[i] = Array();
    for (let j=0;j<5;j++){
        matrizM[i][j] = parseInt((Math.random()*1).toFixed(0));
        if (i===3){
            somaLinha4 += matrizM[i][j];
        }

        if (j===1){
            somaColuna2 += matrizM[i][j];
        }

        if (i===j){
            somaDiagonal += matrizM[i][j];
        }
        somaTodos += matrizM[i][j];
    }
}
console.log(`MatrizM:`);
console.log(matrizM);

console.log(`A soma da linha 4 de M: ${somaLinha4}`);
console.log(`A soma da coluna 2 de M: ${somaColuna2}`);
console.log(`A soma da diagonal principal: ${somaDiagonal}`);
console.log(`A soma de todos os elementros da Matriz M: ${somaTodos}`);