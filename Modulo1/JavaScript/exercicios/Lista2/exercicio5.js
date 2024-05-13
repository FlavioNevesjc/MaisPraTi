// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 5
let continua = 's';
while (continua !== 'n'){
    let jogador1 = parseInt(recebe("Digite o que você quer jogar (1 pedra | 2 papel | 3 tesoura): "));
    if ((!isNaN(jogador1)) || (jogador1 === !undefined) || ((jogador1 >=1 ) && (jogador1 <=3))){
        let jogador2 = parseInt(Math.random()*3)+1;
        if ((jogador1 === 1) && (jogador2 === 3)){
            console.log(` Você ganhou do computador!! | Pedra (vocë) vs Tesoura (computador)`); 
        }
        if ((jogador1 === 2) && (jogador2 === 1)){
            console.log(` Você ganhou do computador!! | Papel (vocë) vs Pedra (computador)`); 
        }
        if ((jogador1 === 3) && (jogador2 === 2)){
            console.log(` Você ganhou do computador!! | Tesoura (vocë) vs Papel (computador)`); 
        } 
        
        if ((jogador2 === 1) && (jogador1 === 3)){
            console.log(` O computador ganhou de Você!! | Pedra (vocë) vs Tesoura (computador)`); 
        }
        if ((jogador2 === 2) && (jogador1 === 1)){
            console.log(` O computador ganhou de Você!! | Papel (vocë) vs Pedra (computador)`); 
        }
        if ((jogador2 === 3) && (jogador1 === 2)){
            console.log(` O computador ganhou de Você!! | Tesoura (vocë) vs Papel (computador)`);
        }
        if (jogador1 === jogador2) {
            console.log(` Empate, pois o Você e o computador escolheram iguais!`);
        }
    }
    console.log("");
    continua = recebe("Deseja jogar mais? (s) (n): ");
    console.log("");
}
     