export function getEnderecoByCEP(cep){
    return fetch(`http://viacep.com.br/sw/${cep}/json/`).then(response => response.json())
}