// Nome: Flávio Soares Neves
// verificar o erro
// Exercicio 30
let matrizM = Array ();
let vetorSL = Array ();
let vetorSC = Array ();


for (let i=0;i<5;i++){
    matrizM[i] = Array();
    for (let j=0;j<5;j++){
        matrizM[i][j] = parseInt((Math.random()*1).toFixed(0));
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