const pokemonsLoaded = (newPokemons) => {
    return {
        type: 'POKEMONS_LOADED',
        payload: newPokemons
    };
}; 

const pokemonsError = (error) => {
    return {
        type: 'POKEMONS_ERROR',
        payload: error
    };
};

export const makeCatchPokemon = (pokemonId) => {
    return {
        type: 'POKEMON_CAUGHT',
        payload: pokemonId
    }
};

export const loadMorePokemon = (newPokemons) => {
    return {
        type: 'POKEMONS_LOADED_MORE',
        payload: newPokemons
    };
}; 
// export const releasedPokemon = (pokemonId) => {
//     return {
//         type: 'POKEMON_RELEASED',
//         payload: pokemonId
//     };
// };

export {
    pokemonsLoaded,
    pokemonsError
};