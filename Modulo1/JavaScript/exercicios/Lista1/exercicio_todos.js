// Flávio Soares Neves

Todos em um arquivo unico!!!!

const recebe = require('prompt-sync')();

//Exercicio 1
let tempCelsius = recebe("Digite temperatura em Celsius, para converter em Fahrenheit: ");

console.log(`Temperatura Celsius: ${tempCelsius}`);
console.log(`Temperatura Fahrenheit: ${(tempCelsius * (9/5)+32)}`);




// Exercicio 2
let quantidadeEleitores = recebe("Digite a quantidade de eleitores: ");
let quantidadeVotosBrancos = recebe("Digite a quantidade de votos Brancos: ");
let quantidadeVotosNulo = recebe("Digite a quantidade de votos Nulos: ");
let quantidadeVotosValidos = recebe("Digite a quantidade de votos Válidos: ");

console.log(`Temos ${((100*quantidadeVotosBrancos)/quantidadeEleitores)}% de votos em Branco`);
console.log(`Temos ${((100*quantidadeVotosNulo)/quantidadeEleitores)}% de votos Nulos`);
console.log(`Temos ${((100*quantidadeVotosValidos)/quantidadeEleitores)}% de votos Válidos`);




// Exercicios 3
let num1 = parseInt(recebe("Digite primeiro numero: "));
let num2 = parseInt(recebe("Digite segundo numero: "));
let num3 = parseInt(recebe("Digite terceiro numero: "));
let num4 = parseInt(recebe("Digite quarto numero: "));

console.log(`Some 25 ao primeiro numero: ${(num1+25)}`);
console.log(`Triplique o valor do segundo inteiro: ${(num2*3)}`);
console.log(`Modifique o valor do terceiro inteiro para 12% do valor origial: ${((num3*12)/100)}`);
console.log(`Armazene no quarto inteiro a soma dos valores originais (os que o usuario digitou dos primeiros três inteiros): ${num1+num2+num3}`);




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




// Exercicio 6
let ladoA = parseInt(recebe("Digite o tamanho do Lado A do Triangulo: "));
let ladoB = parseInt(recebe("Digite o tamanho do Lado B do Triangulo: "));
let ladoC = parseInt(recebe("Digite o tamanho do Lado C do Triangulo: "));
if ((ladoA < (ladoB + ladoC)) && (ladoB < (ladoA + ladoC)) && (ladoC < (ladoA + ladoC))){
    if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)){
        console.log("Com os dados digitados, este é um Triangulo Isósceles");
    }
    if ((ladoA !== ladoB) && (ladoB !== ladoC)){
        console.log("Com os dados digitados, este é um Triangulo Escaleno");
    }
    if ((ladoA === ladoB) && (ladoB === ladoC)){
        console.log("Com os dados digitados, este é um Triangulo Eqüilátero");
    }
} else {
    console.log("Não é um triangulo");
}




// Exercicio 7
let quantidadeMaca = parseInt(recebe("Quantidade de maça(s): "));
if (quantidadeMaca >= 12){
    console.log(`Você comprou ${quantidadeMaca} unidades de maças, com isto o valor da unidade ficou R$ 0,25. Ira pagar: R$ ${(quantidadeMaca*0.25)}`);
} else {
    console.log(`Você comprou ${quantidadeMaca} unidades de maças, com isto o valor da unidade ficou R$ 0,30. Ira pagar: R$ ${(quantidadeMaca*0.30)}`);
}




// Exercicio 8
let num1 = parseInt(recebe("Digite primeiro numero: "));
let num2 = parseInt(recebe("Digite segundo numero: "));
if (num1 !== num2) {
    if (num1 > num2) {
        console.log(`A ordem crescente dos numeros é esta: ${num1} e ${num2}`);
    } else {
        console.log(`A ordem crescente dos numeros é esta: ${num2} e ${num1}`);
    } 
} else {
    console.log(`Numeros iguais, não é possivel ordenar este numeros!}`);
}




// Exercicio 9
let codigoOrigem = parseInt(recebe("Digite o codigo de Origem: "));
switch (true) {
    case (codigoOrigem == 1): console.log(`O código ${codigoOrigem} é da Região Sul`);
    break;
    case (codigoOrigem == 2): console.log(`O código ${codigoOrigem} é da Região Norte`);
    break;
    case (codigoOrigem == 3): console.log(`O código ${codigoOrigem} é da Região Leste`);
    break;
    case (codigoOrigem == 4): console.log(`O código ${codigoOrigem} é da Região Oeste`);
    break;
    case (codigoOrigem <= 6): console.log(`O código ${codigoOrigem} é da Região Nordeste`);
    break;
    case (codigoOrigem <= 9): console.log(`O código ${codigoOrigem} é da Região Sudeste`);
    break;
    case (codigoOrigem <= 20):console.log(`O código ${codigoOrigem} é da Região Centro-Oeste`);
    break;
    case (codigoOrigem >= 25 && codigoOrigem <= 50): console.log(`O código ${codigoOrigem} é da Região Nordeste`);
    break;
    default: console.log(`O código ${codigoOrigem}: Fora dos intervalos - Produto Importado`);
}




// Exercicio 10
let numero = parseInt(recebe("Digite numero inteiro: "));
for (let i=1; i<11;i++){
    console.log(`${i}º - ${numero}`);
}




// Exercicio 11
let numero; 
do {
    numero = parseInt(recebe("Digite numero inteiro: "));
    if  ((isNaN(numero)) || (numero === null) || (numero < 0)){
        break;
    } else {
       if (numero%2 === 0){
            console.log(`O numero: ${numero} é Par`);
        } else {
            console.log(`O numero: ${numero} é Impar`);
        }
        console.log("");
    }
} while (numero > -1) 




// Exercicio 12
console.log(`Numero dividido por 11, com resto igual a 5 são estes abaixo: `);
for (let i = 1000; i < 2000; i++){
    if (i%11 === 5 ){
        console.log(`${i} `);
    }
}




// Exercicio 13 
let valor1 = parseInt(recebe("Digite primeiro valor: "));
let valor2 = parseInt(recebe("Digite segundo valor: "));
let valor3 = parseInt(recebe("Digite terceiro valor: "));
let valor4 = parseInt(recebe("Digite quarto valor: "));
let valor5 = parseInt(recebe("Digite quinto valor: "));

console.log(" ");
if (!isNaN(valor1)) {
    console.log(`Tabuada do ${valor1}`);
    for (let i=0; i<= valor1; i++){
        console.log(`${valor1} x ${i} = ${(valor1*i)}`);
    }
} else {
    console.log("Primeiro valor, não foi digitado");
}

console.log(" ");
if (!isNaN(valor2)) {
    console.log(`Tabuada do ${valor2}`);
    for (let i=0; i<= valor2; i++){
        console.log(`${valor2} x ${i} = ${(valor2*i)}`);
    }
} else {
    console.log("Segundo valor, não foi digitado");
}

console.log(" ");
if (!isNaN(valor3)) {
    console.log(`Tabuada do ${valor3}`);
    for (let i=0; i<= valor3; i++){
        console.log(`${valor3} x ${i} = ${(valor3*i)}`);
    }
} else {
    console.log("Terceiro valor, não foi digitado");
}

console.log(" ");
if (!isNaN(valor4)) {
    console.log(`Tabuada do ${valor4}`);
    for (let i=0; i<= valor4; i++){
        console.log(`${valor4} x ${i} = ${(valor4*i)}`);
    }
} else {
    console.log("Quarto valor, não foi digitado");
}

console.log(" ");
if (!isNaN(valor5)) {
    console.log(`Tabuada do ${valor5}`);
    for (let i=0; i<= valor5; i++){
        console.log(`${valor5} x ${i} = ${(valor5*i)}`);
    }
} else {
    console.log("Quinto valor, não foi digitado");
}




// Exercicio 14
let numero;
let resposta = 0;
let indice = 1;
while (numero !== 0) {
    numero = parseInt(recebe(`Digite o ${indice}º  valor: `));
    if (!isNaN(numero)) {
        resposta += numero;
        indice++;
    }
    console.log(`Total até momento: ${resposta}`);
}
console.log(`A Média aritmética dos numeros digitados é: ${(resposta/indice)}`);




// Exercicio 15
let numero;
let peso;
let respostaNumero = 0;
let respostaPeso = 0;
let indice = 1;
while (numero !==0 || peso !==0) {
    numero = parseInt(recebe(`Digite o ${indice}º numero: `));
    if  ((isNaN(numero)) || (numero === null) || (numero === 0)){
        break;
    } else {
        peso = parseInt(recebe(`Digite o peso para o numero ${numero}: `));
        if  ((isNaN(peso)) || (peso === null) || (peso === 0)){
            break;
        } else {
            respostaNumero += peso*numero;
            respostaPeso += peso;
            indice++;
        }
    }
}

if (respostaNumero !== 0){
    console.log(`A Média ponderada de ${(indice-1)} numeros digitados é: ${(respostaNumero/respostaPeso)}`);
}




// Exercicio 16
let numero = parseInt(100);
let divisor, contRest, contPrimo = 0;
while (contPrimo !== 50){
    divisor = parseInt(numero);
    while (divisor !== 0){
        if (numero%divisor==0) {
            contRest++;
            if (contRest >= 3){
                break;
            }
        }
        divisor--;
    }
    if (contRest===2){
        console.log(`O numero ${numero}, é numero primo`);
        contPrimo++
    }
    numero++;
    contRest = 0;
}
