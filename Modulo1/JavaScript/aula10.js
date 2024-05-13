/*
// for in
const professor = {
    nome: "Tony Stark",
    materia: "Matematica",
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}   
let media = 0;
let alunos = 0;
for (let chave in professor.notas){
    media +=professor.notas[chave];
    alunos++
}
console.log(`Media: ${(media/alunos)}`);
if (media >= 3.0){
    console.log(`Aprovado `);
} else {
    console.log(`Reprovado `);
}

// for of
const biblioteca = [
    { titulo: '12 Regras para vida', autor: 'Jordan Peterson', ano: 1925},
    { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937},
    { titulo: 'Senhora do Jogo', autor: 'Sidnei Sheldon', ano: 2009},
    { titulo: 'Ze Carioca', autor: 'Disney', ano: 1940},
    { titulo: 'Nação Dopamina', autor: 'Anna Lembke', ano: 2021 }
]

// For of para iterar sobre o array biblioteca
    Para cada livro, verique se foi publicado antes de 2000
    Imprimir o titulu e o ano dos livros que atenden essa condição


for(let value of biblioteca){
    if (value.ano < 2000){
        console.log(`Livro: ${value.titulo} autor: ${value.autor} ano: ${value.ano}`);
    } 
}

const filmes = [
    {titulo: 'Tropa de Elite', genero: 'Ação'},
    {titulo: 'Capitão Fantastico', genero: 'Drama'},
    {titulo: 'O Poderoso Chefão', genero: 'Crime'},
    {titulo: 'Clube da Luta', genero: 'Drama'},
    {titulo: 'Oppenheimer', genero: 'Biografia'},
    {titulo: 'High School Musical', genero: 'Musical'},
    {titulo: 'Barbie', genero: 'Live action'}
]

/* Com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por genero
 Para cada filme no array, verifique se o genero já existe no objeto contagem
 Se existir, incremente a contagem, se não, adicione o genero ao objeto com contagem inicial de 1
 Apos loop, imprima cada genero e numero de filmes correspondentes

let ordem = {};
filmes.forEach((value) => {
    if (ordem[value.genero]){
        ordem[value.genero]++; 
    } else {
        ordem[value.genero] = 1;
    }
});
for (let value in ordem){
    console.log(`${ordem[value]} filme(s) do genero ${value}`);
}

*/
// Realizar uma pesquisa binaria

let numeroDescobrir = 5;
let list = [];
for (let i=0; i<= 100; i++){
    list[i] = parseInt(i);
}

const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length -1;
    while (low <= high){
        const mid = Math.floor((low + high)/2);
        const guess = list[mid]
        if (guess === item){
            return mid;
        } else if(guess > item){
            high = mid -1;
        } else {
            low = mid +1
        }
    }
    return null
}


var busca_binaria = (array, left, right, valor)=>{  //parametros array ordenado  valor esquerdo e valor direito, valor ha ser buscado
    if(right >= left){   // verifica se o array esta ordenado. Se o lado direito for maior ou igual ao valor do lado esquerdo
      indice = parseInt(left + (right-left)/2) // divide o array em 2 ou achar o meio do array : array de 5 posição formula left + (right-left)/2 =   1 + (5-1/2)

      if(array[indice] === valor){ //se o valor do meio do array for igual ao valor  desejado achamos o valor fim do programa
        return valor
      }
      if(array[indice] > valor){ //se o valor do meio do array for maior que o valor devemos voltar uma posição do array pois os valores menores são os do lado esquedo do array <-
        return busca_binaria(array, left, indice-1, valor)
      }

      return busca_binaria(array, indice+1, right, valor) // se o valor do meio do array for menor que o valor desejado devemos andar uma posição adiante ->
    }

    return "não achou"
}

console.log(busca_binaria(list, 0, list.length-1, 2));
console.log(binarySearch(list, 3));


//spread = espalhar
// rest  = juntar

let 