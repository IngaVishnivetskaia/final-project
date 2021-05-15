var pokemonsLoaded = function pokemonsLoaded(newPokemons) {
  return {
    type: 'POKEMONS_LOADED',
    payload: newPokemons
  };
};

var pokemonsError = function pokemonsError(error) {
  return {
    type: 'POKEMONS_ERROR',
    payload: error
  };
};

export var makeCatchPokemon = function makeCatchPokemon(pokemonId) {
  return {
    type: 'POKEMON_CAUGHT',
    payload: pokemonId
  };
};
export var loadMorePokemon = function loadMorePokemon(newPokemons) {
  return {
    type: 'POKEMONS_LOADED_MORE',
    payload: newPokemons
  };
}; // export const releasedPokemon = (pokemonId) => {
//     return {
//         type: 'POKEMON_RELEASED',
//         payload: pokemonId
//     };
// };

export { pokemonsLoaded, pokemonsError };