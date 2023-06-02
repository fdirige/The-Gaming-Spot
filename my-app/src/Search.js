import React, { useState } from 'react';
import Results from './Results';

const API_KEY = process.env.REACT_APP_API_KEY;

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [gameResults, setGameResults] = useState([])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let search = searchTerm.split(' ').join('-').toLowerCase()

        setGameResults([])
        fetch(`http://rawg.io/api/games?key=${API_KEY}&search=${search}`)
        .then(resp => resp.json())
        .then(({results}) => {
            results === undefined ? alert('No games found') : setGameResults(results)
        })
        setSearchTerm("")
    }

    return (
        <div className="game-search">
            <h1>Game Search</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={searchTerm} onChange={handleChange}/>
                <br></br>
                <input type="submit"/>
            </form>
            <Results gameResults={gameResults} />
        </div>
    );
}

export default Search;