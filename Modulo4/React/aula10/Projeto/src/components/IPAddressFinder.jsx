import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const IPAddressFinder = () => {
    const [ipData, setIP] = useState([])
    const [query, setQuery] = useState(null)

    const searchIP = async () => {
        try{
        const response = await axios.get(`https://ipinfo.io/${query}/json`)
        setIP(response.data)
        console.log(response)
        } catch(error) {
            console.error("Erro: ", error)
        }
    }

    return (
    <div>
        <title>IP Address Finder</title>
            <input type='text'value={query} onChange={(event) => setQuery(event.target.value)}/>
            <button onClick={searchIP}>Search</button>
            <div>
            {ipData && ( 
                <div>
                    <p><strong>IP:</strong> {ipData.ip}</p>
                     <p><strong>Location:</strong> {ipData.city}, {ipData.region}, {ipData.country}</p>
                     <p><strong>ISP:</strong> {ipData.org}</p>
                </div>
        )}
            </div>
    </div>
    )
}

export default IPAddressFinder