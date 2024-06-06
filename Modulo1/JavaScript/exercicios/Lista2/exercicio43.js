// Nome: Flávio Soares Neves

// Exercicio 43
const obj1 = {
    nome: 'Anthony',
    idade: 3,
    altura: 80
}

const obj2 = {
    nome: 'Flávio',
    idade: 40,
    altura: 1.90,
    estadoCivil: 'Casado'
}

const obj3 = Object.assign(obj1, obj2);

console.log(obj1);
console.log(obj3);