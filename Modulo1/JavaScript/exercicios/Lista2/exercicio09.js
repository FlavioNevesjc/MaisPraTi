// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();

// Exercicio 9
let continua = 's';
let salarioMasculino = 0;
let salarioFeminino = 0; 

while (continua !== 'n'){
    let salario = parseInt(recebe("Digite o salário do funcionário: "));
    if ((!isNaN(salario)) || (salario === !undefined)){
        if (salario <=0) {
            console.log("Salario invalido!");
        } else {
            let sexo = recebe("Digite o sexo do funcionário (M) Masculino | (F) Feminino: ");
            if ((sexo == 'M') || (sexo == 'm')){
                salarioMasculino += salario;
            } else {
                if ((sexo == 'F') || (sexo == 'f')){
                    salarioFeminino += salario;
                } else {
                    console.log("Dados Invalidos");
                }
            }
        }
    }
    console.log("");
    continua = recebe("Deseja cadastrar mais funcionários? (s) (n): ");
    console.log("");
}
if (salarioFeminino !== 0){
    console.log(`A soma de salário Feminina é: R$ ${salarioFeminino}`)
} else {
    console.log(`Não temos funcionárias Femininas cadastradas`);
}
if (salarioMasculino !==0){
    console.log(`A soma de salário Masculino é: R$ ${salarioMasculino}`);
} else {
    console.log(`Não temos funcionários Masculinos cadastrados`);
}