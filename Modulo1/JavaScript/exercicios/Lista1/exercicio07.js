// Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 7
let quantidadeMaca = parseInt(recebe("Quantidade de maça(s): "));
if (quantidadeMaca >= 12){
    console.log(`Você comprou ${quantidadeMaca} unidades de maças, com isto o valor da unidade ficou R$ 0,25. Ira pagar: R$ ${(quantidadeMaca*0.25)}`);
} else {
    console.log(`Você comprou ${quantidadeMaca} unidades de maças, com isto o valor da unidade ficou R$ 0,30. Ira pagar: R$ ${(quantidadeMaca*0.30)}`);
}