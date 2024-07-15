import { useState } from "react";

function Form2(){
    const [login, setLogin ] = useState({
        name: '',
        email: '',
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

        if (!login.name || !login.email || !login.password || !login.password2) {
            alert("Digitar todos os campos primeiro")
        }   else {
            if (!(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i).test(login.email)){
                alert(`email em formato errado`)
            } else {
                if (login.password.length < 8) {
                    alert(`Senha com menos de 8 caracteres`)
                } else {
                    if (login.password === login.password2) {
                        alert(`Usuario ${login.name} cadastrado com sucesso`)
                    } else {
                        alert(`Senhas diferente, cadastro não realizado`)
                    }
                }
            }            
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" name="name" onChange={handleChange}/>
            </label>
            <br />
            <label>
                email:
                <input type="text" name="email" onChange={handleChange}/>
            </label>
            <br /><label>
                senha:
                <input type="text" name="password" onChange={handleChange}/>
            </label>
            <br />
            <label>
            senha novamente:
                <input type="text" name="password2" onChange={handleChange}/>
            </label>
            <br />
            <button type="submit">Submeter</button>
        </form>
    )
}

export default Form2