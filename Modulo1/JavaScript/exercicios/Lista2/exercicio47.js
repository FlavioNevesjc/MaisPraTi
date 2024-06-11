// Nome: Flávio Soares Neves

// Exercicio 47

const pessoa ={ 
    nome: 'Flavio',
    idade: 40,
    altura: 1.90
}

function alterar(obj){
    obj.nome = 'Anthony',
    idade = 3,
    altura = 70
}

function imprimir(obj){
    return `Nome: ${obj.nome}, Idade: ${obj.idade} e altura: ${obj.altura}`;
}

console.log('Dados atuais do objeto pessoa:');
console.log(imprimir(pessoa));
alterar(pessoa);
console.log('');
console.log('Dados alterado: Novos dados do objeto pessoa: ');
console.log(imprimir(pessoa));