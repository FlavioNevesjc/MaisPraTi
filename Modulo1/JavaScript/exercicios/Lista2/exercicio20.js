// Nome: Flávio Soares Neves

// Exercicio 20
const funcionario = [
    {
        matricula: 1,
        nome: 'Pedro',
        cargo: 'Analista',
        salario: 3500
    },
    {
        matricula: 10,
        nome: 'João',
        cargo: 'Marketing',
        salario: 2500
    },
    {
        matricula: 5,
        nome: 'Manuel',
        cargo: 'Assistente',
        salario: 1000
    }
];

for (const chave of funcionario) {
    console.log(`Matrícula: ${chave['matricula']}`);
    console.log(`Nome: ${chave['nome']}`);
    console.log(`Salário Bruto: ${chave['salario']}`);
    console.log(`Dedução INSS: ${(chave['salario']*0.12)}`);
    console.log(`Salário líquido: ${(chave['salario']-(chave['salario']*0.12))}`);
    console.log("");
}
