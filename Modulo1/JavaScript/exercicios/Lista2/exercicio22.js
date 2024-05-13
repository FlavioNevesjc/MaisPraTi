// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 22
let salarioTotal = 0;
let salarioMaior = 0;
let contador = 0;
let contadorBaixo = 0;
let totalFilhos = 0;

function imprimiResultado(){
    if (salarioTotal !== 0){
        console.log(`Média Salárial da população é: ${(salarioTotal/contador).toFixed(2)}`);
        console.log(`A Média de filhos é: ${(totalFilhos/contador).toFixed(2)}`);
        console.log(`O Maior Salario é: ${salarioMaior}`);
        console.log(`O Percentual de pessoas que ganham abaixo de R$ 350,00 é: ${((100*contadorBaixo)/contador).toFixed(2)}`);
    } else {
        console.log("Não existe nenhum cadastro.")
    }
}

function CalculosPesquisa(valor, filho,){
    totalFilhos += filho;
    salarioTotal += valor;
    contador++

    if (contador === 1) {
        salarioMaior = valor;
    }
    if (valor > salarioMaior){
        salarioMaior = valor;
    }
    if (valor < 350){
        contadorBaixo++;
    }
}

let salario = 0;
let numeroFilho = 0;

do {
    let salario = parseInt(recebe("Digite o salário de um morador: "));
    if ((!isNaN(salario)) || (salario === !undefined)){
        let numeroFilho = parseInt(recebe("Digite o numero de filhos: "));  
        if ((!isNaN(numeroFilho)) || (numeroFilho === !undefined)){
            CalculosPesquisa(salario,numeroFilho);
        }
    }
    console.log("");
    continua = recebe("Deseja cadastrar mais moradores? (s) (n): ");
    console.log("");
} while (continua !== 'n');

imprimiResultado();