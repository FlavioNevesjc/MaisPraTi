// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 8
let pontos = 0;
let horasAtividade = recebe("Digite quantas horas de atividades foram realizadas no mês atual: ");
if ((!isNaN(horasAtividade)) || (horasAtividade === !undefined)){
    if (horasAtividade <=0){
        console.log("Valor invalidos!");
    } else {
        if (horasAtividade <= 10){
            pontos = (horasAtividade*2);
        } else {
            if (horasAtividade <= 20){
                pontos = (horasAtividade*5);
            } else {
                pontos = (horasAtividade*10);
            }
        }
        console.log(`Você ira receber R$ ${(pontos*0.05).toFixed(2)} e conseguiu ${pontos} pontos neste mês.`);
    }
} else {
    console.log("Valor invalido!");
}
