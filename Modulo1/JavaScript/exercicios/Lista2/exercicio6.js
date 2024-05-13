// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 6
let continua = 's';
while (continua !== 'n'){
    let jogador1 = parseInt(recebe("Vamos decobri qual valor o computador sorteou, digite um valor (1 até 5): "));
    if ((!isNaN(jogador1)) || (jogador1 === !undefined) || ((jogador1 >=1 ) && (jogador1 <=5))){
        let jogador2 = parseInt(Math.random()*5)+1;
        if (jogador1 === jogador2) {
            console.log(` Você descobriu o numero que o computador selecionou. Seu numero: ${jogador1} | Computador: ${jogador2}`);
        } else {
            console.log(` Você não acertou o numero que o computador selecionou. Seu numero: ${jogador1} | Computador: ${jogador2}`);
        }   
    } else {
        console.log("Valor invalido!!")
    }
    
    console.log("");
    continua = recebe("Deseja jogar mais? (s) (n): ");
    console.log("");
}
     