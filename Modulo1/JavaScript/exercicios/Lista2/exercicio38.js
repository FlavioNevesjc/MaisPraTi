// Nome: Flávio Soares Neves

// Exercicio 38
let vetor = Array (6);
let somaElementos = 0;
let produtoElementos = 1;
let vetorOrdenado = Array (6);
for (let i=0;i<6;i++){
    vetor[i] = parseInt((Math.random()*6).toFixed(0));
    somaElementos += vetor[i];
    produtoElementos *= vetor[i];
} 
console.log(`soma dos elementos: ${somaElementos}`);
console.log(`produto dos elementos: ${produtoElementos}`);
console.log(`média dos elementos: ${(somaElementos/vetor.length).toFixed(2)}`);
console.log(`mostre o vetor: ${vetor}`);
console.log(`ordene os elementos em ordem crescente: ${vetor.sort(function(a,b) { return a - b})}`);
