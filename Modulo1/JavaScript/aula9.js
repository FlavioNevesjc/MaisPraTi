/*
// Programação orientada a objeto.
const pessoa = {
    nome: "Lucas",
    idade: 18,
    email: "lucas@teste.com",
    profissao: "Musica",
    empregada: true
};
console.log(pessoa);
pessoa.nome = "Jurema"
console.log(pessoa.nome);
delete pessoa.empregada;
console.log(pessoa);

pessoa.falar = function() {
    return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`;
}

console.log(pessoa.falar);
console.log(pessoa);




const televisao = {
    tamanho: 50,
    marca: "samsung",
    modelo: "xyz",
    cor: "preto",
    voltagem: "bivolt"
}

televisao.ligar = function(){
    return `Ligando a TV`
}
// for in (funciona muito melhor em objetos)
for (let chave in pessoa){
    console.log(chave + ": " + pessoa[chave]);
}

let numeros = [10,20,100];
// for of (funciona muito melhor em array)
for (let num of numeros){
    console.log(num);
}



//  Você tem uma lista de objetos que representam diferentes tipos
// de veiculos e suas caracteristicas. Seu objetivo é primeiro usar o for in para listar 
// todas as propriedade e valores de cada veiculo. Depois o For of para 
// listar apenas os modelos dos veiculos.

const carro = [
    {
        modelo: 'Gol',
        cor: 'vermelho',
        ano: 2020
    },
    {
        modelo: 'Palio',
        cor: 'branco',
        ano: 2022
    },
    {
        modelo: 'Fiat',
        cor: 'azul',
        ano: 2021
    }
];

for (const chave in carro) {
    console.log(carro[chave]);
}

for (const chave of carro) {
    console.log(chave['modelo']);
}

// ForEach
let cores = ['azul', 'preto', 'branco'];
cores.forEach((cor, indice) => {
    console.log(indice + ": "+cor)
});

let compras = []
compras['frutas'] = new Array('banana','laranja');

compras['frutas'].forEach((value, index) => {
    console.log(index + ": "+value)
})



// Construa um array de números e calcule a soma total dos números e também imprima 
// cada número multiplicado por dois.

let numeros = [1,2,3,4,5,6,7];
let soma = 0
numeros.forEach((value) => {
    console.log(`Multiplicação por 2: ${value*2}`);
    soma += value;
});
console.log(`Soma: ${soma}`);
*/

// design patterns (Fabrica de Objetos ou Factory)
let BicicletaFactory = function(cor, tipo, marca){
    return {
        cor,
        tipo,
        marca
    }
}


let bicicleta = BicicletaFactory('Azul', 'Spped', 'Caloi');
let bicicleta1 = BicicletaFactory('Preta','Mountain','BMX');

console.log(bicicleta);
console.log(bicicleta1);