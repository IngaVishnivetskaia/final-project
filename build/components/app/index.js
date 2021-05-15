import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, PokemonPage } from '../pages';
import CaughtPokemons from '../caught-pokemons';
import Header from '../header';
import './app.css';

var App = function App() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    component: HomePage,
    exact: true
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/caught",
    component: CaughtPokemons
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/:slug",
    component: PokemonPage,
    exact: true
  })));
};

export default App; // import './app.css';
// import withPokemonService from '../hoc';
// const App = ( {pokemonService} ) => {
//     console.log(pokemonService.getPokemons())
//     return <div>App</div>
// };
// export default withPokemonService()(App);