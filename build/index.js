import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import PokemonService from './services/pokemon-service';
import { ServiceProvider } from './components/pokemon-service-context';
import store from './store';
var pokemonService = new PokemonService();
ReactDOM.render( /*#__PURE__*/React.createElement(Provider, {
  store: store
}, /*#__PURE__*/React.createElement(ErrorBoundry, null, /*#__PURE__*/React.createElement(ServiceProvider, {
  value: pokemonService
}, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(App, null))))), document.getElementById('root'));