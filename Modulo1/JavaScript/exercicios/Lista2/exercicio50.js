// Nome: Flávio Soares Neves

const recebe = require('prompt-sync')();
// Exercicio 50

class Hotel {
  constructor(id, nome, cidade, quartosTotais) {
    this.id = id;
    this.nome = nome;
    this.cidade = cidade;
    this.quartosTotais = quartosTotais;
    this.quartosDisponiveis = quartosTotais;
    this.reservas = [];
  }

  adicionarReserva(idReserva, nomeCliente) {
    if (this.quartosDisponiveis > 0) {
      this.quartosDisponiveis--;
      this.reservas.push({ idReserva, nomeCliente });
      console.log(`Reserva realizada para: ${nomeCliente} no hotel ${this.nome}.`);
    } else {
      console.log(`Não tem quartos neste hotel.`);
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

}

const hoteis = [];

function adicionarHotel(id, nome, cidade, quartosTotais) {
  const novoHotel = new Hotel(id, nome, cidade, quartosTotais);
  hoteis.push(novoHotel);
  console.log(`Hotel ${nome} adicionado com sucesso.`);
}

function buscarHoteisCidade(cidade) {
  const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade === cidade);
  if (hoteisNaCidade.length === 0) {
    console.log(`Não há hotéis disponíveis em ${cidade}.`);
  } else {
    console.log(`Hotéis disponíveis, ${cidade}:`);
    hoteisNaCidade.forEach(hotel => console.log(`${hotel.nome} (ID: ${hotel.id}) - ${hotel.quartosDisponiveis} quartos disponíveis`));
  }
}

function fazerReserva(idHotel, idReserva, nomeCliente) {
  const hotel = hoteis.find(hotel => hotel.id === idHotel);
  if (hotel) {
    hotel.adicionarReserva(idReserva, nomeCliente);
  } else {
    console.log(`Hotel não encontrado.`);
  }
}

function cancelarReserva(idHotel, idReserva) {
  const hotel = hoteis.find(hotel => hotel.id === idHotel);
  if (hotel) {
    hotel.cancelarReserva(idReserva);
  } else {
    console.log(`Hotel não encontrado.`);
  }
}


function listarReservas() {
  console.log("Lista de reservas:");
  hoteis.forEach(hotel => {
    hotel.reservas.forEach(reserva => {
      console.log(`Hotel: ${hotel.nome} (ID: ${hotel.id}), Cliente: ${reserva.nomeCliente}`);
    });
  });
}


let idHotel;
let nomeHotel;
let cidadeHotel;
let quartosTotais;
let idReserva;

do {
  console.log("1 - Cadastro de Hoteis");
  console.log("2 - Buscar Hoteis por cidade");
  console.log("3 - Fazer reserva no Hotel");
  console.log("4 - Cancelar reserva no Hotel");
  console.log("5 - Listar reservas");
  let opcao = recebe("Digite o que deseja fazer: ");
  console.log("");

  switch (opcao) {
    case '1' : {
      console.log("Cadastro de Hotel");
      idHotel = recebe("Digite o ID do Hotel: ")
      nomeHotel = recebe("Digite o nome do Hotel: ");
      cidadeHotel = recebe("Digite a cidade do Hotel: ");
      quartosTotais = recebe("Digite o numero de quartos totais: ");

      adicionarHotel(idHotel, nomeHotel, cidadeHotel, quartosTotais);
    }
      break;
    case '2': {
      console.log("Busca de hotel por cidade");
      cidadeHotel = recebe("Digite a cidade do Hotel: ");

      buscarHoteisCidade(cidadeHotel);
    }
      break;
    case '3': {
      console.log("Fazer uma reserva no Hotel")
      idHotel = recebe("Digite o ID do Hotel: ");
      idReserva = recebe("Digite um novo ID de reserva: ");
      nomeCliente = recebe("Digite o nome do Cliente: ")
      fazerReserva(idHotel, idReserva, nomeCliente);
    }
      break;
    case '4': {
      console.log("Cancelar reserva no Hotel")
      idHotel = recebe("Digite o ID do Hotel para cancelar a reserva: ");
      idReserva = recebe("Digite o ID de reserva, que gostaria de cancelar: ");
      cancelarReserva(idHotel, idReserva);
    }
      break;
    case '5': {
      listarReservas();
    }
      break;
    default: {
      console.log("Opção invalida! ");
    }
  }
  console.log("");
  continua = recebe("Deseja continuar no sistema? (s) (n):");
} while (continua !== 'n')
