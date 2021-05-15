import React from 'react';
import PokemonList from '../pokemon-list';

var HomePage = function HomePage() {
  return /*#__PURE__*/React.createElement(PokemonList, null) //pokemonList обернут в connect
  ;
};

export default HomePage; // import withPokemonService from '../hoc';
// const App = ( {pokemonService} ) => {
//     console.log(pokemonService.getPokemons())
//     return <div>App</div>
// };
// export default withPokemonService()(App);