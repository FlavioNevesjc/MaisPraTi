// Nome: Flávio Soares Neves

// Exercicio 34
let matriz = Array ();
let matrizModificada = Array ();

for (let i=0;i<50;i++){
    matriz[i] = Array();
    matrizModificada[i] = Array();
    for (let j=0;j<50;j++){
        matriz[i][j] = parseFloat((Math.random()*5).toFixed(1));
        matrizModificada[i][j] = matriz[i][j];
    }
}

for (let i=0;i<matriz.length;i++){
    for (let j=0;j<matriz.length;j++){
        matrizModificada[i][j] = parseFloat((matriz[i][j] * matriz[i][i]).toFixed(1));
    }
}

console.log(`Matriz:`);
console.log(matriz);
console.log(`Matriz Modificada:`);
console.log(matrizModificada);
