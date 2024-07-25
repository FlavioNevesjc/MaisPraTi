import { useState } from "react";
import axios from 'axios'
import styled from 'styled-components'

const MovieSearchEngine = () => {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')

    const searchMovies = async () => {
        try{
        const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=b0e5d4bd`)
        setMovies(response.data.Search)
        console.log(response)
        } catch(error) {
            console.error("Erro: ", error)
        }
    }

    return (
    <div>
        <title>Movie Search Engine</title>
            <input type='text'value={query} onChange={(event) => setQuery(event.target.value)}/>
            <button onClick={searchMovies}>Search</button>
            <div>
                {movies && movies.map((movie) => (
                    <movieCard key={movie.imdbID}>
                        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </movieCard>
                ))}
            </div>
    </div>
    )
}
export default MovieSearchEngine