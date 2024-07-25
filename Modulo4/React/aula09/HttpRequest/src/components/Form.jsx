import { useState } from "react";
import axios from "axios"

function Form(){
  
    const[user, setUser] = useState({
        name: '',
        job: ''
    })

    const handleChange = (event) => {
        const{name, value} = event.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post('https://reqres.in/api/users', user)
            console.log(response)

            alert(`usuario criado com sucesso ID ${response}`)
        } catch (error) {

        }
    }

    return(
        <form onSubmit={handleSubmit}> 
            <label>
                Nome:
                <input type="text" name="name" value={user.name} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Job:
                <input type="text" name="job" value={user.job} onChange={handleChange}/>
            </label>
            
            <br />
            <button type="submit">Submeter</button>
        </form>
    );

}
export default Form