// Nome: Flávio Soares Neves

// Exercicio 33
let matriz = Array ();
let somaDiagonalSecundaria = 0;
let contDiagonalSecundaria = 0;
for (let i=0;i<3;i++){
    matriz[i] = Array();
    for (let j=0;j<3;j++){
        matriz[i][j] = parseInt((Math.random()*3).toFixed(0));
        if (i!==j){
            if (i>j){
                somaDiagonalSecundaria += matriz[i][j];
                contDiagonalSecundaria++
            } 
        }
    }
}

console.log(`Matriz:`);
console.log(matriz);
for (let i=0;i<3;i++){
    for (let j=0;j<3;j++){
        if (i!==j){
            if (i<j){
                matriz[i][j] = matriz[i][j] * (somaDiagonalSecundaria/contDiagonalSecundaria).toFixed(2);
            } 
        }
    }
}
console.log(`Matriz Modificada:`);
console.log(matriz);
