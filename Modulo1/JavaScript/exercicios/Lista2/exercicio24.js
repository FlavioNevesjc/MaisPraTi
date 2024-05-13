// Nome: Flávio Soares Neves

// Exercicio 24
let matrizM = Array();
let vetorC = Array();
for (let i=0;i<2;i++){
    matrizM[i] = Array();
    vetorC[i] = Array();
    for (let j=0;j<8;j++){
        if (i===0 && j===6){
            break;
        }
        matrizM[i][j] = parseInt((Math.random()*5).toFixed(0));
        
        vetorC[i][j] = matrizM[i][j] * -1; 
    }
}
console.log("MatrizM");
console.log(matrizM);
console.log("VetorC");
console.log(vetorC);

