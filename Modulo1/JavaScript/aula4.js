console.log("Hello 'World'");
console.log('Hello "World"');
console.log(`Hello World`);

let aluno = "Flavio";
let aula = 4;
console.log(`Meu nome é ${aluno} e estou na aula ${aula} do professor Jaques`); 

// Maneira de Declaração de variaveis;
nome1 = "Flávio"; // Não recomendado
let nome = "Flávio";  // Declaração padrão
var name = "Flávio";   //Antiga e inadequada
var name

const NAME = "Flávio"; // Constante

let teste;
console.log(teste); // saida variavel não declarada ou UNDEFINED
let meuNull = null;
console.log(meuNull);

// typeof(<variavel>);
let meuNumber = 10;
console.log(typeof(meuNumber));

let minhaString = "Sou desenvolvedor";
console.log(typeof(minhaString));

let meuBoolean = true;
console.log(typeof(meuBoolean));

// operadores logicos
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);  // soma
console.log(num1 - num2);  // subtração
console.log(num1 * num2);  // Multiplicação
console.log(num1 / num2);  // Divisão
console.log(num1 ** num2); // Potencia

let numTeste = "5.5";
console.log(numTeste + num1); // saida soma de string ou concatenação

let numTesteI = parseInt(numTeste); // casting (forçar a vira Int)
let numTesteF = parseFloat(numTeste); // casting (forçar a vira Float)
let numTesteN = Number(numTeste); // casting (forçar a vira Number ou Float ou Int)
console.log(numTesteI + num1); // saida soma de string ou concatenação


let contador = 1;
console.log(contador = contador +1);
contador++; // igual a contador = contador +1
console.log(contador++); // a soma ocorre depois desta linha
console.log(++contador); // a soma ocorre antes de sair desta linha


// Comparadores e Operadores lógicos
console.log(10 < 5);
console.log(10 <= 5);
console.log(10 > 5);
console.log(10 >= 5);
console.log(10 == "10");  // Igual valor
console.log(10 === "10"); // Igual Valor e tipo variavel
console.log(10 != "10");  // Diferente  valor 
console.log(10 !== "10"); // Valor e tipo variavel

console.log((10 > 5) && (10 >2));
console.log((10 > 5) && !(10 >2));

// Estruturas condicionais

// if else
const nota = 40;
if (nota >= 60) {
    console.log("Aprovado");
} else if ((nota >= 40) && (nota <=59)){
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// operador ternario
let resultado = (10 < 100) ? true : false;
console.log(resultado)

const prompt = require('prompt-sync')();

let tes = prompt("Digite aqui o seu nome: ");