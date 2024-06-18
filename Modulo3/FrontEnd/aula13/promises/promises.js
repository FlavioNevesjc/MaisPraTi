let promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let resposta = {}

        if (false){
            resposta = {
                codigo: 404,
                erro: 'Objeto não encontrado'
            }

            reject(resposta)
        }

        resposta = {
            1: {id: 1, nome: 'Caio'},
            2: {id: 2, nome: 'Leonan'},
            3: {id: 3, nome: 'Rogerio'}
        }

        resolve(resposta)
    })
})