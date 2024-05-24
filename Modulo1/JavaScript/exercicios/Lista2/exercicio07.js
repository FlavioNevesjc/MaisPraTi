// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 7
let totalGasto = 0;
let tipoCarro = parseInt(recebe("Qual veiculo deseja alugar (1) veiculo popular (2) veiculo de luxo: "));
if ((!isNaN(tipoCarro)) || (tipoCarro === !undefined) || ((tipoCarro >=1 ) && (tipoCarro <=2))){
    let diasAlugado = parseInt(recebe("Quantos dias ira ficar com o carro?: "));
    if ((!isNaN(diasAlugado)) || (diasAlugado === !undefined)){
        let kmPercorrido = parseInt(recebe("OK!!! Qual distancia foi percorrido (KM)?: "));
        if ((!isNaN(kmPercorrido)) && (kmPercorrido === !undefined) || (kmPercorrido <=0)){
            switch (tipoCarro){
                case 1: {
                    if (kmPercorrido <= 100){
                        totalGasto = parseFloat((kmPercorrido * 0,20) + (90 * diasAlugado));
                    } else {
                        totalGasto = parseFloat((kmPercorrido * 0,10) + (90 * diasAlugado));
                    }
                    break;
                }
                case 2: {
                    if (kmPercorrido <= 200){
                        totalGasto = parseFloat((kmPercorrido * 0,25) + (150 * diasAlugado));
                    } else {
                        totalGasto = parseFloat((kmPercorrido * 0,30) + (150 * diasAlugado));;
                    }
                    break;
                }
                default: console.log("Valor invalido!");
            }
            console.log(`Você ira pagar R$ ${totalGasto.toFixed(2)}, onde percorreu ${kmPercorrido} KM e ficou ${diasAlugado} dia com ele alugado.`);   
        }
    }
}
