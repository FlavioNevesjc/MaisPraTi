// Nome: Flávio Soares Neves
// verificar o erro
// Exercicio 30
let matrizM = Array ();
let vetorSL = [0,0,0,0,0];
let vetorSC = [0,0,0,0,0];

for (let i=0;i<5;i++){
    matrizM[i] = Array();
    vetorSL[i]
    for (let j=0;j<5;j++){
        matrizM[i][j] = parseInt((Math.random()*5).toFixed(0));
        vetorSL[i] += matrizM[i][j];
        vetorSC[j] += matrizM[i][j];
    }
}
console.log(`MatrizM:`);
console.log(matrizM);

console.log(`A soma do vetorSL`);
console.log(vetorSL);
console.log(`A soma do vetorSC`);
console.log(vetorSC);