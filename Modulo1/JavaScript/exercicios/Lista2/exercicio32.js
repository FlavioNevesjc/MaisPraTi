// Nome: Flávio Soares Neves

// Exercicio 32
let matrizM = Array ();
let maior = 0;
let matrizModificada = Array ();

for (let i=0;i<12;i++){
    matrizM[i] = Array();
    matrizModificada[i] = Array ();
    for (let j=0;j<13;j++){
        matrizM[i][j] = parseInt((Math.random()*5).toFixed(0));
        if (j === 0){
            maior = matrizM[i][j];
        } 
        
        if (maior < matrizM[i][j]) {
            maior = matrizM[i][j];
        }
    }
    for (let j=0;j<13;j++){
        matrizModificada[i][j] = (matrizM[i][j] / (maior*-1)).toFixed(2);
    }
}
console.log(`MatrizM:`);
console.log(matrizM);
console.log(" ");
console.log(`matrizModificada pelo modulo |${maior}|:`);
console.log(matrizModificada);
