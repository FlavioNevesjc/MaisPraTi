/*

// Array ou Vetor

let listaCompra = Array();
listaCompra[0] = "Shampoo";
listaCompra[1] = "Condicionador";
listaCompra['x'] = "100";

console.log(listaCompra);

let listaFrutas = ['Banana', 'Morango'];

console.log(listaFrutas);

let listaViagem = Array('Passagens', 'Malas');

console.log(listaViagem);


// Arrays muldimensionais ou Matriz

let listaCoisas = Array();
listaCoisas['Frutas'] = Array();
listaCoisas['Frutas'][0] = "Morango";
listaCoisas['Frutas'][1] = "Uva";
listaCoisas['Frutas'][2] = "Laranja";
listaCoisas['Frutas'][3] = "Bergamota";

listaCoisas['Viagem'] = Array();
listaCoisas['Viagem'][0] = "Passagens";
listaCoisas['Viagem'][1] = "Malas";

console.log(listaCoisas);

// inserção de elementos no final do array
listaCoisas['Frutas'].push('Banana')
console.log(listaCoisas);

// inserção de elementos no inicio  do array
listaCoisas['Frutas'].unshift('Limão');
console.log(listaCoisas);

// Localizar item no Array
let listaProdutos = Array('Computador', 'Caneta', 'Chuteira');

let aux = listaProdutos.indexOf('Computador'); // se não existir iria ficar com o valor -1

if (aux === -1) {
    console.log('Elemento não existe');
} else {
    console.log(`Elemento encontrado na posição ${aux}`);
}

// Apagar item no inicio do Array
listaProdutos.shift();
console.log(listaProdutos);

// Apagar item no final do Array
listaProdutos.pop();
console.log(listaProdutos);

// Ordernar um Array
let listaItens = Array('Lousa', 'Caneta', 'Chuteira', 'Garrafa de água');
console.log(listaItens.sort());
console.log(listaItens);


// ********************* Função *************************
function calcularAreaTerrno(largura, comprimento){
    let area = largura * comprimento;
    return area;
}

let prompt = require('prompt-sync')();
let lg = prompt("Digite a largura do terreno em metros: ");
let cp = prompt("Digite o comprimento do terreno em metros: ");
let resultado = calcularAreaTerrno(lg, cp);
console.log(`O terreno possui ${resultado} metros quadrados`);

// Funções anonimas
let exibirFuncao = function() {
    console.log("Olá");
}

exibirFuncao();


// exemplo de callBack
function exibirArtigo(callbackSucesso, callbackErro){
    if (true){
        callbackSucesso('Funções de callback com sucesso.');
    } else {
        callbackErro('Funções de callback com erro');
    }
}

let callbackSucesso = function(titulo){
    console.log(titulo);
}

let callbackErro = function(erro){
    console.log(erro);
}
exibirArtigo(callbackSucesso, callbackErro);

*/
// calculadora com callback
let soma = function(num1, num2){
    return num1 + num2;
}

let subtracao = function(num1, num2){
    return num1 + num2;
}

let multiplicacao = function(num1, num2){
    return num1 + num2;
}

let divisao = function(num1, num2){
    return num1 / num2;
}

function calculadora(operacao, num1, num2, soma, subtracao, multiplicacao, divisao){
    let resultado;
    switch(operacao){
        case "soma": resultado = soma(num1, num2);
        return resultado;
        break;
        case "subtracao": resultado = subtracao(num1, num2);
        return resultado;
        break;
        case "multiplicacao": resultado = multiplicacao(num1, num2);
        return resultado;
        break;
        case "divisao": resultado = divisao(num1, num2);
        return resultado;
        break;
    }
}

console.log(calculadora("divisao",10,2,divisao));