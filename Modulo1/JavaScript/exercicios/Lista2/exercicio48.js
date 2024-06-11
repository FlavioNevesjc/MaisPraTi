// Nome: Flávio Soares Neves

// Exercicio 48

const inventarioLojaA = [
    {item: 'Produto A', valor: 10, quantidade: 40},
    {item: 'Produto B', valor: 15.20, quantidade: 10},
    {item: 'Produto C', valor: 30, quantidade: 12},
    {item: 'Produto D', valor: 1, quantidade: 100},
    {item: 'Produto E', valor: 300, quantidade: 2} 
    ];

const inventarioLojaB = [
    {item: 'Produto C', valor: 30, quantidade: 40},
    {item: 'Produto A', valor: 10, quantidade: 10},
    {item: 'Produto D', valor: 1, quantidade: 200},
    {item: 'Produto B', valor: 15.20, quantidade: 100},
    {item: 'Produto E', valor: 300, quantidade: 30} 
    ];

const balancoLojas = inventarioLojaA;

function consolidacao (obj1, obj2){
    let temp = Array();
    for (let chave1 of obj1){
        for (let chave2 of obj2){
            if (chave1['item'] == chave2['item']){
                chave1['quantidade'] += chave2['quantidade'];
                break;
            }
        }
    }
}

function imprimir (obj){
    for (let chave of obj){
        console.log(`Item: ${chave['item']}, Valor: ${chave['valor']}, Quantidade: ${chave['quantidade']}`);
    }
}

consolidacao(balancoLojas,inventarioLojaB);

console.log('Dados do inventario da Loja A');
imprimir(inventarioLojaA);
console.log('');
console.log('Dados do inventario da Loja B');
imprimir(inventarioLojaB);
console.log('');
console.log('Dados da consolidação das 2 lojas');
imprimir(balancoLojas);

