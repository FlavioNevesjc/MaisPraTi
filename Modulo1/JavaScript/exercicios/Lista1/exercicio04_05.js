// Flávio Soares Neves

const recebe = require('prompt-sync')();


// Execicio 4 e 5
let nota1 = parseInt(recebe("Digite a primeira nota: "));
let nota2 = parseInt(recebe("Digite a segunda nota: "));
let media = (nota1+nota2)/2;

if (media >= 6) {
    console.log(`PARABÉNS! Vocẽ foi aprovado`);
    console.log(`Média do Semestre: ${media}`);
} else {
    console.log(`Você foi REPROVADO! Estude mais`);
    console.log(`Média do Semestre: ${media}`);
}