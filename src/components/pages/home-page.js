import React from 'react';
import PokemonList from '../pokemon-list';


const HomePage = () => {
  return (
      <PokemonList /> //pokemonList обернут в connect
  );
};

export default HomePage;

// import withPokemonService from '../hoc';

// const App = ( {pokemonService} ) => {
//     console.log(pokemonService.getPokemons())
//     return <div>App</div>
// };

// export default withPokemonService()(App);