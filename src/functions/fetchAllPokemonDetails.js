
async function fetchPokemonList() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    console.log(`response: ${response}`);
    const data = await response.json();
    console.log(`data: ${data}`);
    console.log(`data.results: ${data.results}`);
    return data.results;
}


async function fetchPokemonDetails(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchAllPokemonDetails() {
    try {
        const pokemonList = await fetchPokemonList();
        const detailedPromises = pokemonList.map(pokemon => fetchPokemonDetails(pokemon.url));
        const detailedPokemonList = await Promise.all(detailedPromises);
        return detailedPokemonList;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

fetchAllPokemonDetails().then(detailedPokemonList => {
    console.log(detailedPokemonList); 
});

export default fetchAllPokemonDetails;