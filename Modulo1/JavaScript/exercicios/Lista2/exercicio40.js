// Nome: Flávio Soares Neves

// Exercicio 40
let resultadoOficialLoto = [1,2,3,4,5];
let apostas = Array (50);
let verificador = 0;
resultadoOficialLoto.sort(function(a,b) { return a - b});

console.log(`Resultado dos numeros sorteados: ${resultadoOficialLoto}`);
for (let i=0;i<50;i++){
    apostas[i] = Array ();
    for (let j=0;j<5;j++){
        while (true){
            if (j===0){
                verificador = parseInt((Math.random()*7).toFixed(0));
                apostas[i][j] = verificador+1;
                break;
            } else {
                verificador = parseInt((Math.random()*7).toFixed(0));
                if (apostas[i].indexOf(verificador+1) === -1){
                    apostas[i][j] = verificador+1;
                    break; 
                }  
            }
        }
    }
    apostas[i].sort(function(a,b) { return a - b});
    let contResultado = 0;
    for (let j=0;j<5;j++){
        if ((resultadoOficialLoto[j] === apostas[i][j])){
            contResultado++
        } else {
            break;
        }
        if (contResultado === 5){
            console.log(`O apostador de numero ${i} ganhou!!`)
        }
    }
}

console.log("Todas as apostas abaixo: ")
console.log(apostas);