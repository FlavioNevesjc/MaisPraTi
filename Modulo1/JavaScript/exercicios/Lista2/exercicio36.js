// Nome: Flávio Soares Neves

// Exercicio 36
let matrizJogos = Array ();
let criarNovoNumero = 0;
let verificador = 0;
let numerosSorteado = [1,2,3,4,5,6,7,8,9,10,11,12,13];
numerosSorteado.sort(function(a,b) { return a - b});

console.log(`Resultado dos numeros sorteados: ${numerosSorteado}`);
for (let i=0;i<100;i++){
    matrizJogos[i] = Array ();
    for (let j=0;j<13;j++){
        while (true){
            if (j===0){
                verificador = parseInt((Math.random()*15).toFixed(0));
                matrizJogos[i][j] = verificador+1;
                break;
            } else {
                verificador = parseInt((Math.random()*15).toFixed(0));
                if (matrizJogos[i].indexOf(verificador+1) === -1){
                    matrizJogos[i][j] = verificador+1;
                    break; 
                }  
            }
        }
    }
    matrizJogos[i].sort(function(a,b) { return a - b});
    let contResultado = 0;
    for (let j=0;j<13;j++){
        if ((numerosSorteado[j] === matrizJogos[i][j])){
            contResultado++
        } else {
            break;
        }
        if (contResultado === 13){
            console.log(`O apostador de numero ${i} ganhou!!`)
        }
    }
}

console.log("Todas as apostas abaixo: ")
console.log(matrizJogos);