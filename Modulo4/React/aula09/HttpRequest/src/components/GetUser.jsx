import axios from "axios"

function GetUser() {
    axios.get('https://reqres.in/api/users/2')
    .then(response => {
        console.log(`Dados do usuario: ${response.data}`)
        alert(`Usuario recuperado ${JSON.stringify(response.data)}`)
    })
    .catch(error => {
        console.log(`Erro ao recuperar o usuário: ${error}`)
        alert("Erro ao recuperar os dados do usuário")
    })

    return(
        <button onClick={GetUser} >Recuperar dados</button>
    )
}
export default GetUser