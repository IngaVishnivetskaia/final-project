import React from 'react';
import PokemonList from '../pokemon-list';


const HomePage = () => {
  return (
      <PokemonList /> //pokemonList обернут в connect
  );
};

export default HomePage;