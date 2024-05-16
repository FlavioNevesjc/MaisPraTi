// Nome: Flávio Soares Neves

// Exercicio 36
let matrizJogos = Array ();
let criarNovoNumero = 0;
let verificar = true;
let numerosSorteado = [1,2,3,4,5,6,7,8.9,10,11,12,13];
for (let i=0;i<100;i++){
    matrizJogos[i] = Array ();
    for (let j=0;j<13;j++){
        while (verificar = true) {
            criarNovoNumero = parseInt((Math.random()*20).toFixed(0));
            if (matrizJogos.indexOf(criarNovoNumero) !== null){
                matrizJogos[i][j] = criarNovoNumero;
                break;
            } else {
                verificar = true;
            }
        }
    }
}

console.log(`matrizJogos:`);
console.log(matrizJogos);