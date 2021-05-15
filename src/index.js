import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import PokemonService from './services/pokemon-service';
import { ServiceProvider } from './components/pokemon-service-context';

import store from './store';


const pokemonService = new PokemonService();

ReactDOM.render(
<Provider store={store}>
  <ErrorBoundry>
    <ServiceProvider value={pokemonService}>
      <Router>
        <App />
      </Router>
    </ServiceProvider>
  </ErrorBoundry>
</Provider>,
document.getElementById('root')
);