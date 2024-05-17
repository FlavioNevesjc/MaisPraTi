// Nome: Flávio Soares Neves

// Exercicio 37
let gabarito = ['A','B','C','A','D','D','A','C','C','D','B','A','D','A','C','C','B','A','C','D'];
let respostaProva = Array ();
let contador = 0;
for (let i=0;i<50;i++){
    respostaProva[i] = Array ();
    for (let j=0;j<20;j++){
        respostaProva[i][j] = parseInt((Math.random()*4).toFixed(0));
        switch(respostaProva[i][j]){
            case 1 : respostaProva[i][j] = 'A'; break;
            case 2 : respostaProva[i][j] = 'B'; break;
            case 3 : respostaProva[i][j] = 'C'; break;
            case 4 : respostaProva[i][j] = 'D'; break;
            default: respostaProva[i][j] = null;
        }
        if (gabarito[j] === respostaProva[i][j]){
            contador++
        }    
    }
    if (contador >=12){
        console.log(`O aluno numero ${i+1} foi aprovado com ${contador} acertos e ${20-contador} erros.`);
    } else {
        console.log(`O aluno numero ${i+1} foi reprovado com ${contador} acertos e ${20-contador} erros.`);
    }
    contador = 0;
}