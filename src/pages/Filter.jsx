import React, { useState, useEffect } from "react";
import LargeTile from "../components/LargeTile";
import SmallTile from "../components/SmallTile";

const Filter = () => {

    const [loading, setLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);

     const fetchPokemonList = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        console.log(`response: ${response}`);
        const data = await response.json();
        console.log(`data: ${data}`);
        console.log(`data.results: ${data.results}`);
        return data.results;
    }
    
    const fetchPokemonDetails = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    
    const fetchAllPokemonDetails = async () => {
        try {
            const pokemonList = await fetchPokemonList();
            const detailedPromises = await Promise.all(pokemonList.map(pokemon => fetchPokemonDetails(pokemon.url)));
            setPokemonList(detailedPromises);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching Pokémon data:', error);
        }
    }
    
    useEffect(() => {
        fetchAllPokemonDetails();
    }, []);


    return (
        <div id="filter">
            <h1>Pokémon List</h1>
            <div id='container'>
                {pokemonList.map(pokemon => (
                        <SmallTile 
                            key={pokemon.id}
                            name={pokemon.name}
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                            height={pokemon.height}
                        />
                ))}  
            </div>
              

        </div>
    )
}

export default Filter;