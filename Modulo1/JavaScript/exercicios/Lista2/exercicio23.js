// Nome: Flávio Soares Neves

// Exercicio 23
let matrizIdentidade = Array();
for (let i=0 ; i < 2; i++){
    matrizIdentidade[i] = Array(); 
    for (let j=0 ; j < 7; j++){
        
        if (j !== 0){
            matrizIdentidade[i][j] = 0;
        } else {
            matrizIdentidade[i][j] = 1;
        }
    }
}
console.log(matrizIdentidade);