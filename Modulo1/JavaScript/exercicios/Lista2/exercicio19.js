// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();
// Tem que verificar como funciona a função Hora....
// Exercicio 19

let horario = new Array(5);
horario = new Date();

for (let i=0; i<2; i++){
    horario[i] =  recebe(`Digite o ${i+1}º horario: `);
}
for (let i=0; i<2; i++){
    console.log(`Horario: ${horario[i].hoursValue}:${horario[i].getMinute}:${horario[i].getSecond}`);
}
/*
console.log(`Data de hoje é ${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`);
console.log(data.toLocaleDateString());
console.log(data.toString());
data.setDate(data.getDate() + 720);
console.log(data.toString());
data.setFullYear(data.getDate()+3);


// Encontrar a quatidade de milissegundos entre duas datas;

let date = new Date();
let date2 = new Date();

let milisegundosEntreDatas = Math.abs(date.getTime() - date1.getTime());
*/