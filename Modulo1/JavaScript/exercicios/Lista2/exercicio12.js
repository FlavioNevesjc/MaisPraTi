// Nome: Flávio Soares Neves

// Exercicio 12
const valor = 10
let numero1 = 1, numero2 = 1, proximo;

console.log('Sequencia de Fibonacci:');

for (let i = 1; i <= valor; i++) {
    console.log(`${i}: ${numero1}`);
    proximo = numero1 + numero2;
    numero1 = numero2;
    numero2 = proximo;
}