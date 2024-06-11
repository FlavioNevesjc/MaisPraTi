// Nome: Flávio Soares Neves

// Exercicio 49
const trasacaoFinanceira = [
    {id: 100, valor: 10.50, data: 10/10/2021,categoria: 1}, // categoria 1 = Debito
    {id: 110, valor: -100, data: 11/10/2021,categoria: 2},  // categoria 2 = Credito
    {id: 120, valor: 1150, data: 15/10/2021,categoria: 1},
    {id: 130, valor: -1000, data: 18/10/2021,categoria: 2},
    {id: 140, valor: -100, data: 20/10/2021,categoria: 2},
    {id: 150, valor: 560.20, data: 23/10/2021,categoria: 1},
    {id: 160, valor: 200.30, data: 24/10/2021,categoria: 1},
];

const retorno = Array();

function ordenarCategoria(obj){
    let i = 0;
    
    retorno[0] = Array(); 
    for(let chave of obj){
        if (chave['categoria'] == 1){
            retorno[0][i] = chave['valor'];
            i++
        }
    }

    retorno[1] = Array();
    i=0;
    for(let chave of obj){
        if (chave['categoria'] == 2){
            retorno[1][i] = chave['valor'];
            i++
        }
    }   
}

ordenarCategoria(trasacaoFinanceira);
console.log(retorno);
