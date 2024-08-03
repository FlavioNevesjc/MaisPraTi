import { useState } from "react";
import styled from 'styled-components'

const Fundo = styled.div`
    background-color: black;
    width: 450px;
    opacity: 0.8; 
`

function Login(){

    const [login, setLogin ] = useState({
        name: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setLogin(prevState => ({
            ... prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!login.name || !login.password) {
            alert("Digitar todos os campos primeiro")
        }   else {
            if (login.name == 'admin' && login.password === 'admin') {
                alert(`Usuario ${login.name} cadastrado com sucesso`)
            } else {
                alert(`Senhas diferente, cadastro não realizado`)
            }
        }
    }
    
    
    return(
        <Fundo>
            <form  onSubmit={handleSubmit}>
                <h1 class="texto">Entrar</h1>
                <input class="login corTransp" type="text" name="name" placeholder="Email ou número de celular" onChange={handleChange}/>
                <br />
                <br />
                <input class="login corTransp" type="password" name="password" placeholder="Senha" onChange={handleChange}/>
                <br />
                <br />
                <button class="login corRed" type="submit">Entrar</button>
                <p class="texto center">OU</p>
                <button class="login corCinza" type="submit">Use um código de acesso</button>
                <p class="texto center">Esqueceu a senha?</p>
                <input type="checkbox" /> <label class="texto">Lembre-se de mim</label>
                <p class="texto">Novo por aqui? <a href="#">Assine agora</a></p>
                <p class="texto">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba mais.</a></p>
            </form>
        </Fundo>
    )

}


export default Login