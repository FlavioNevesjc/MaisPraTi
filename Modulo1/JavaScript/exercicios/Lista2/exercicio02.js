// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

//Exercicio 2
let velocidadeCarro = parseFloat(recebe("Digite a velocidade do carro: "));
if ((!isNaN(velocidadeCarro)) || (velocidadeCarro === !undefined)){
    if (velocidadeCarro > 80){
        console.log(`O carro será multado no valor de R$ ${(velocidadeCarro-80)*5}, pois estava ${velocidadeCarro} KM/h`); 
    } else {
        if (velocidadeCarro <= 0) {
            console.log(`O carro está parado`);
        } else {
            console.log(`O carro não será multado pois a velocidade de ${velocidadeCarro} KM/h, está no limite recomendado`);
        }
    }
} else {
    console.log("Valor invalido!");
}
