// Nome: Flávio Soares Neves

// Exercicio 28
let matriz = Array ();
let somaA = 0;
let somaB = 0;
for (let i=0;i<10;i++){
    matriz[i] = Array();
    for (let j=0;j<10;j++){
        matriz[i][j] = parseInt((Math.random()*1).toFixed(0));
        if (i!==j){
            if (i<j){
                somaA += matriz[i][j];
            } else {
                somaB += matriz[i][j];
            }
        }
    }
}
console.log(`Matriz:`);
console.log(matriz);
console.log(`A soma dos elementos acima da diagonal principal é: ${somaA}`);
console.log(`A soma dos elementos abaixo da diagonal principal é: ${somaB}`);

