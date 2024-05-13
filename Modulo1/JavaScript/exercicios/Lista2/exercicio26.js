// Nome: Flávio Soares Neves

// Exercicio 26
let matrizA = Array();
let matrizB = Array();
let matrizP = Array();
for (let i=0;i<2;i++){
    matrizA[i] = Array();
    matrizB[i] = Array();
    matrizP[i] = Array();
    for (let j=0;j<5;j++){
        if (i===0 && j===3){
            break;
        }
        matrizA[i][j] = parseInt((Math.random()*5).toFixed(0));
        matrizB[i][j] = parseInt((Math.random()*5).toFixed(0));
        matrizP[i][j] = matrizA[i][j] * matrizB[i][j];
    }
}
console.log("MatrizA");
console.log(matrizA);
console.log("MatrizB");
console.log(matrizB);
console.log("MatrizP = matrizA x matrizB");
console.log(matrizP);