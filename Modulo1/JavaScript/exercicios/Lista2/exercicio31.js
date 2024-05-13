// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 31
let matrizV = Array ();
let matrizX = Array ();
let contA = 0;
let A = recebe("Digite um numero inteiro A: ");
if ((!isNaN(A)) || (A === !undefined)){
    for (let i=0;i<30;i++){
        matrizV[i] = Array();
        matrizX[i] = Array();
        for (let j=0;j<30;j++){
            matrizV[i][j] = parseInt((Math.random()*5).toFixed(0));
            if (matrizV[i][j] == A){
                contA++;
                matrizX[i][j] = (matrizV[i][j] + 1); 
            } else {
                matrizX[i][j] = matrizV[i][j];
            }
        }
    }
console.log(`MatrizV:`);
console.log(matrizV);
console.log(`Temos ${contA} numeros iguais ao valor A(${A}), que estão na matrizV `)
console.log(`MatrizX (retirado somente numeros iguais ao valor A):`);
console.log(matrizX);
} else {
    console.log("Digite numero válido, programa finalizado!")
}
