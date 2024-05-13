// Flávio Soares Neves

const recebe = require('prompt-sync')();


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