// Nome: Flávio Soares Neves

// Exercicio 16
let numeros = new Array (20);
let numerosArrayOrdenado = new Array (20);

for (let i=0;i<numeros.length;i++){
    numeros[i] = (Math.random()*99).toFixed(0);
    console.log(`${i+1} numero gerado: ${numeros[i]}`);
}

numerosArrayOrdenado = numeros.sort(function(a,b) { return a - b});
console.log("");
for (let i=0;i<numerosArrayOrdenado.length;i++){
    console.log(`Posição do Array: ${i} = ${numerosArrayOrdenado[i]}`)
}