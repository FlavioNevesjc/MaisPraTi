// Flávio Soares Neves

const recebe = require('prompt-sync')();


// Exercicio 9
let codigoOrigem = parseInt(recebe("Digite o codigo de Origem: "));
switch (true) {
    case (codigoOrigem == 1): console.log(`O código ${codigoOrigem} é da Região Sul`);
    break;
    case (codigoOrigem == 2): console.log(`O código ${codigoOrigem} é da Região Norte`);
    break;
    case (codigoOrigem == 3): console.log(`O código ${codigoOrigem} é da Região Leste`);
    break;
    case (codigoOrigem == 4): console.log(`O código ${codigoOrigem} é da Região Oeste`);
    break;
    case (codigoOrigem <= 6): console.log(`O código ${codigoOrigem} é da Região Nordeste`);
    break;
    case (codigoOrigem <= 9): console.log(`O código ${codigoOrigem} é da Região Sudeste`);
    break;
    case (codigoOrigem <= 20):console.log(`O código ${codigoOrigem} é da Região Centro-Oeste`);
    break;
    case (codigoOrigem >= 25 && codigoOrigem <= 50): console.log(`O código ${codigoOrigem} é da Região Nordeste`);
    break;
    default: console.log(`O código ${codigoOrigem}: Fora dos intervalos - Produto Importado`);
}