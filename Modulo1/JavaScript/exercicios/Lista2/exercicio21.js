// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();
// resposta extranha!!!! Validar isto depois!!!
// Exercicio 21
function pesoIdeal(alt,s){
    let peso = 0;
    if (s === 'M' || s === 'm') {
        peso = 72.7 * alt - 58;
        return "Peso ideial é: "+ peso;;
    } else if (s === 'F' || s === 'f') {
        peso = 62.1 * alt - 44.7;
        return "Peso ideial é: "+ peso;
    } else {
        return "Dados invalidos";
    }
}
let altura = recebe(`Digite a altura da pessoa: `);
let sexo = recebe(`Digite o sexo da pessoa: `);
console.log(pesoIdeal(altura,sexo));