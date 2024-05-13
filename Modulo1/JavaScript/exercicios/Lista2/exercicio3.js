// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

//Exercicio 3
let distanciaPercorrer = parseFloat(recebe("Digite a distância que deseja percorrer: "));
if ((!isNaN(distanciaPercorrer)) || (distanciaPercorrer === !undefined)){
    if (distanciaPercorrer >= 200){
        console.log(`Você ira pagar R$ ${(distanciaPercorrer*0.45).toFixed(2)}, ou R$ 0,45 por KM`); 
    } else {
        console.log(`Você ira pagar R$ ${(distanciaPercorrer*0.50).toFixed(2)}, ou R$ 0,50 por KM`);
    }
} else {
    console.log("Valor invalido!");
}
