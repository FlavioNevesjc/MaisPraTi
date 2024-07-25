import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Titulo = styled.h1`
    color: green;
    text-align: center;
`

const LanguageTranslator = () => {

    const [ text, setText ] = useState('')
    const [ translatedText, setTranslatedText ] = useState('')
    const [ sourceLang, setSourceLang ] = useState('en')
    const [ targetLang, setTargetLang ] = useState ('pt')

    const translateText = async () => {
        try {
            const response = await axios.get('https://api.mymemory.translated.net/get', {
                params: {
                    q: text,
                    langpair: `${sourceLang}|${targetLang}`, 
                },
            })
            setTranslatedText(response.data.responseData.translateText)
        } catch (error) {
            console.error("Erro ao traduzir o texto: ", error)
        }
    }

    return (
        
        <>
        <Titulo> Language Translator</Titulo><div>
            <label> Source Language</label>
            <select value={sourceLang} onChange={(event) => setSourceLang(event.target.value)}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italiano</option>
                <option value="pt">Portuguese</option>
            </select>
        </div>
        <div>
            <label> Target Language: </label>
            <select value={targetLang} onChange={(event) => setTargetLang(event.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italiano</option>
                    <option value="pt">Portuguese</option>
                </select>
            </div>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
        
            <button onClick={translateText}>Translate</button>
            {translateText && <translateText>{translateText}</translateText>}
        </>
    )
}

export default LanguageTranslator