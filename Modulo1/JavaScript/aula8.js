// Exercitando Arrays e funções

// Exercicio 1: Somar todos os elementos de um array
// Exercicio 2: Procurar o maior numero do array
// Exercicio 3: Inverter os numeros de um Array 
/*
function somaElementos(vetor){
    let soma=0;
    for (let i=0; i < vetor.length; i++){
        soma+=vetor[i];
    }
    return soma
}

function maiorNumero(vetor){
    let maior = vetor[0];
    for (let i=0; i< vetor.length; i++){
        if (vetor[i] > maior){
            maior = vetor[i];
        }
    }
    return maior;
}

function reverterArray(vetor){
    let inverso = [];
    let id = vetor.length;
    for (let i=0; i<vetor.length;i++){
        inverso[id]=vetor[i];
        id--;
    }
    return inverso;
}

let elementos = [1,2,3,4,10,11];
console.log(`Exercicio 1: A soma dos elementos é ${(somaElementos(elementos))}`);
console.log(`Exercicio 2: O maior numero deste array é ${maiorNumero(elementos)}`);
console.log(`Exercicio 3: O maior numero deste array é ${reverterArray(elementos)}`);

// Exercicio 4 Somar todos os elementos de uma matriz
// Exercicio 5 Encontrar o maior numero em uma matriz

let elementosMatriz = [[1,2,3,4,10,11],
                       [2,3,6,7,19,9],
                       [3,4,5,1,2,4]];

function somaMatriz(matriz){
    let soma = 0;
    for (let i=0; i< matriz.length; i++){
        for (let j=0; j < matriz[i].length; j++){
            soma += matriz[i][j];
        }
    }
    return soma;
}

function maiorMatriz(matriz){
    let maior = 0;
    for (let i=0; i< matriz.length; i++){
        for (let j=0; j < matriz[i].length; j++){
            if (matriz[i][j] > maior){
                maior = matriz[i][j];
            }
        }
    }
    return maior;
}

console.log(`Exercicio 4: A Soma da Matriz é ${somaMatriz(elementosMatriz)}`);
console.log(`Exercicio 5: Maior numero da Matriz é ${maiorMatriz(elementosMatriz)}`);



// Funções avançadas em String
let nome = "Dick Vigarista";
console.log(nome.replace('i','I')); // troca caracter por outro
nome = "Dick Vigarista";
console.log(nome.substr('7','5')); // imprimi somente o que está no rang.. começa na posição 7 e copia 5 caracter
nome = "Batman";
console.log(nome.toLocaleLowerCase()); // deixa minusculo todas os caracteres
nome = "      Batman ";
console.log(nome.trim()); // retira todos os espaços iniciais e finais



// Função avançada em Matematica
let x = Math.floor(10.510); // despresa todos os valor depois da virgula
console.log(x);
x = Math.round(10.600); // arredonda o valor para baixo o cima
console.log(x);
x = Math.round(10.100); // arredonda o valor para baixo o cima
console.log(x);
x = Math.random(); // gera numeros aleatorios 
console.log(x)
*/

// Função avançada envolvendo data
let data = new Date();
console.log(`Data de hoje é ${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`);
console.log(data.toLocaleDateString());
console.log(data.toString());
data.setDate(data.getDate() + 720);
console.log(data.toString());
data.setFullYear(data.getDate()+3);


// Encontrar a quatidade de milissegundos entre duas datas;

let date = new Date();
let date2 = new Date();

let milisegundosEntreDatas = Math.abs(date.getTime() - date1.getTime());
