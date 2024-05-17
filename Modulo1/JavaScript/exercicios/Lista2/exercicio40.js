// Nome: Flávio Soares Neves

// Exercicio 39
let vetor = Array (100);
let vetorB = Array();
let iB = 0;
for (let i=0;i<100;i++){
    vetor[i] = parseInt(Math.floor(Math.random()*(-10 - 10 + 1)+10).toFixed(0));
    if (vetor[i] > 0){
        vetorB[iB] = vetor[i];
        iB++;
    }
} 
console.log("Vetor: ");
console.log(vetor);
console.log("VetorB: ");
console.log(vetorB);
