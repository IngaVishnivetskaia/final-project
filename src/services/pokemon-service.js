export default class PokemonService {

    getPokemons() {
    return fetch('http://localhost:3000/pokemons')
    .then(response => response.json())
    // .then(json => console.log(json))
    }


  }

