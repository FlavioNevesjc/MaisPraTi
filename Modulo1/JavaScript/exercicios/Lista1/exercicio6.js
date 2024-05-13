// Flávio Soares Neves

const recebe = require('prompt-sync')();


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