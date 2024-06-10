// Nome: Flávio Soares Neves

// Exercicio 46
const ordemVendas = {
    numero: [10,20,30,40,50,60],
    produto: ['Iphone 7','Motorola Edge', 'Samsung Galaxy S20', 'Xiaomi Mi Mix3', 'Iphone 12', 'Xiaomi Mi 13'],
    valor: [700 ,1200 ,1500 ,1500 ,2500 , 4000], 
    vendedor: ['Pedro', 'Pedro', 'Pedro', 'João', 'João', 'Felipe']
}
const vendedor = new Set(ordemVendas.vendedor);
const vendedorArray = Array.from(vendedor);
let valorTotal = Array();

for(let i=0;i<vendedorArray.length; i++){
    valorTotal[i]=0;
    for(let j=0;j<ordemVendas.valor.length; j++){
        if (vendedorArray[i] == ordemVendas.vendedor[j]){
            valorTotal[i] += ordemVendas.valor[j]; 
        }
    }
    console.log(`Vendedor: ${vendedorArray[i]} Total Vendas: R$ ${valorTotal[i]}`);
}
