// Nome: Flávio Soares Neves

// Exercicio 27
let matrizM = Array();
let valorA = 10;
let vetorV = Array (36)
let cont = 0; 
for (let i=0;i<6;i++){
    matrizM[i] = Array();
    for (let j=0;j<6;j++){
        matrizM[i][j] = parseInt((Math.random()*5).toFixed(0));
        vetorV[cont] = matrizM[i][j] * parseInt(valorA);
        cont++;
    }
}
console.log(matrizM);
console.log(vetorV);
