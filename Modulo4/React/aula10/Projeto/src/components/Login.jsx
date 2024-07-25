import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <label>
                Login:
                <input type="text" name="name" onChange={handleChange}/>
            </label>
            <br />
            <br /><label>
                Senha:
                <input type="password" name="password" onChange={handleChange}/>
            </label>
            <br />
            <button type="submit">OK</button>
        </form>
    )
}

export default Login