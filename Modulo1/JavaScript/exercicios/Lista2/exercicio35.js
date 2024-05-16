// Nome: Flávio Soares Neves

// Exercicio 35
let conjunto = Array (30);
let vetorPar = Array (5);
let contPar = 0;
let vetorImpar = Array (5);
let contImpar = 0;



for (let i=0;i<30;i++){
    conjunto[i] = parseInt((Math.random()*5).toFixed(0));
    if (conjunto[i]%2 === 0){
        vetorPar[contPar] = conjunto[i];
        if (contPar < 5){
            contPar++;
        } else {
            contPar = 0;
        }    } else {
        vetorImpar[contImpar] = conjunto[i];
        if (contImpar < 5){
            contImpar++;
        } else {
            contImpar = 0;
        }
    }
}

console.log(`Conjunto:`);
console.log(conjunto);
console.log(`VetorPar:`);
console.log(vetorPar);
console.log(`VetorImpar:`);
console.log(vetorImpar);
