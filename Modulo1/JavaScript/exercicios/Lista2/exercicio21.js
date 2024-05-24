// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 21
function pesoIdeal(alt,sex){
    let peso = 0;
    if (sex === 'M' || sex === 'm') {
        peso = 72.7 * alt - 58;
        return "Peso ideial é: "+ peso;;
    } else if (sex === 'F' || sex === 'f') {
        peso = 62.1 * alt - 44.7;
        return "Peso ideial é: "+ peso + " kg";
    } else {
        return "Dados invalidos";
    }
}
let altura = parseFloat(recebe(`Digite a altura da pessoa: `));
let sexo = recebe(`Digite o sexo da pessoa: `);
console.log(pesoIdeal(altura,sexo));