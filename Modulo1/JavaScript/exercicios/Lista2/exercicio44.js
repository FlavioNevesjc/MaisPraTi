// Nome: Flávio Soares Neves

// Exercicio 44

const pessoa ={ 
    nome: 'Flavio',
    idade: 40,
    altura: 1.90
}
let cont = 0;

function calculaString(objeto){
    for (let i=0; i < objeto.length; i++) {
        cont++
    }
    return cont;    
}
console.log(pessoa);
console.log(`O objeto pessoa.nome possui ${calculaString(pessoa.nome)} string(s).`);