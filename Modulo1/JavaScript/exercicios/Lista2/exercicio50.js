// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();
// Exercicio 50

// Definição das estruturas de dados

// Objeto Hotel
class Hotel {
    constructor(id, nome, cidade, quartosTotais) {
      this.id = id;
      this.nome = nome;
      this.cidade = cidade;
      this.quartosTotais = quartosTotais;
      this.quartosDisponiveis = quartosTotais;
      this.reservas = [];
      this.avaliacoes = [];
    }
  
    adicionarReserva(idReserva, nomeCliente) {
      if (this.quartosDisponiveis > 0) {
        this.quartosDisponiveis--;
        this.reservas.push({ idReserva, nomeCliente });
        console.log(`Reserva feita para ${nomeCliente} no hotel ${this.nome}.`);
      } else {
        console.log(`Desculpe, não há quartos disponíveis neste hotel.`);
      }
    }
  
    cancelarReserva(idReserva) {
      const reservaIndex = this.reservas.findIndex(reserva => reserva.idReserva === idReserva);
      if (reservaIndex !== -1) {
        this.quartosDisponiveis++;
        const reservaCancelada = this.reservas.splice(reservaIndex, 1)[0];
        console.log(`Reserva cancelada para ${reservaCancelada.nomeCliente} no hotel ${this.nome}.`);
      } else {
        console.log(`Reserva não encontrada.`);
      }
    }
  
    adicionarAvaliacao(avaliacao) {
      this.avaliacoes.push(avaliacao);
    }
  }
  
  // Array para armazenar os hotéis
  const hoteis = [];
  
  // Funções do sistema
  
  // Adicionar um novo hotel
  function adicionarHotel(id, nome, cidade, quartosTotais) {
    const novoHotel = new Hotel(id, nome, cidade, quartosTotais);
    hoteis.push(novoHotel);
    console.log(`Hotel ${nome} adicionado com sucesso.`);
  }
  
  // Buscar hotéis por cidade
  function buscarHoteisCidade(cidade) {
    const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade === cidade);
    if (hoteisNaCidade.length === 0) {
      console.log(`Não há hotéis disponíveis em ${cidade}.`);
    } else {
      console.log(`Hotéis disponíveis, ${cidade}:`);
      hoteisNaCidade.forEach(hotel => console.log(`${hotel.nome} - ${hotel.quartosDisponiveis} quartos disponíveis`));
    }
  }
  
  // Fazer reserva em um hotel
  function fazerReserva(idHotel, idReserva, nomeCliente) {
    const hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (hotel) {
      hotel.adicionarReserva(idReserva, nomeCliente);
    } else {
      console.log(`Hotel não encontrado.`);
    }
  }
  
  // Cancelar reserva em um hotel
  function cancelarReserva(idHotel, idReserva) {
    const hotel = hoteis.find(hotel => hotel.id === idHotel);
    if (hotel) {
      hotel.cancelarReserva(idReserva);
    } else {
      console.log(`Hotel não encontrado.`);
    }
  }
  
  // Listar todas as reservas
  function listarReservas() {
    console.log("Lista de reservas:");
    hoteis.forEach(hotel => {
      hotel.reservas.forEach(reserva => {
        console.log(`Hotel: ${hotel.nome}, Cliente: ${reserva.nomeCliente}`);
      });
    });
  }
  
  // Exemplo de uso
  
  // Adicionando hotéis
 let id;
 let nome;
 let cidade;
 let quartosTotais;

 do{
    console.log("1 - Cadastro de Hoteis: ");
    console.log("2 - Buscar Hoteis por cidade: ");
    console.log("3 - Fazer reserva no Hotel: ");
    console.log("4 - Cancelar reserva no Hotel: ");
    console.log("5 - Listar reservas: ");
    let opcao = recebe("Digite o que deseja fazer:");

    switch(opcao){
        case 1:{
            console.log("Cadastro de Hotel")
            nome = recebe("Digite o nome do Hotel: ");
            cidade = recebe("Digite a cidade do Hotel: ");
            quartosTotais = recebe("Digite o numero de quartos totais: ");

            adicionarHotel(id, nome, cidade, quartosTotais);
        }
        break; 
        case 2: {
            console.log("Busca de hotel por cidade")
            cidade = recebe("Digite a cidade do Hotel: ");

            buscarHoteisCidade(cidade);
        }
        break;
        case 3: {
            console.log("Fazer uma reserva no Hotel")
            
            idHotel = recebe("Digite o ID do Hotel: ");
            
            fazerReserva(idHotel, idReserva, nomeCliente)

        }
        break;
        case 4: {

        }
        break;
        case 5: {

        }
        break;
        default: {
            console.log("Opção invalida! ");        
        }
    } 
    continua = recebe("Deseja continuar? (s) (n):"); 
} while (continua !== 'n')
    

for (let chave of hoteis){
    console.log(chave['nome']);
}

  
//   // Fazendo algumas reservas
//   fazerReserva(1, 1, "Cliente 1");
//   fazerReserva(1, 2, "Cliente 2");
//   fazerReserva(2, 3, "Cliente 3");
  
//   // Cancelando uma reserva
//   cancelarReserva(1, 1);
  
//   // Listando todas as reservas
//   listarReservas();






























    let valor = parseInt(recebe("Digite um valor: "));
    if ((!isNaN(valor)) || (valor === !undefined)){
        somaTotal += valor;
        contador++
        if (contador === 1) {
            menor = valor;
        }
        if (valor < menor){
            menor = valor;
        }
        if (valor%2 === 0){
            contadorPar++
        }
    }
    console.log("");
     */