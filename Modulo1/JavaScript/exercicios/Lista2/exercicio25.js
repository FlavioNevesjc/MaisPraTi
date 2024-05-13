// Nome: Flávio Soares Neves

// Exercicio 25
let matriz = Array();
let arraySoma = new Array ();
for (let i=0;i<15;i++){
    matriz[i] = Array();
    arraySoma[i]=parseInt(0);
    for (let j=0;j<20;j++){
        matriz[i][j] = parseInt((Math.random()*5).toFixed(0));
        arraySoma[i] += matriz[i][j];
    }
}
console.log("Matriz");
console.log(matriz);
console.log("ArraySoma");
console.log(arraySoma);

