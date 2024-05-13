// Nome: Flávio Soares Neves

// Exercicio 13
const valor = 15
let numero1 = 1, numero2 = 1, proximo;
let vetor= [15];
console.log('Sequencia de Fibonacci:');
for (let i = 1; i <= valor; i++) {
    vetor[i-1] = numero1;
    console.log(`${i}: ${vetor[i-1]}`);
    proximo = numero1 + numero2;
    numero1 = numero2;
    numero2 = proximo;
}