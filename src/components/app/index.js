import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, PokemonPage } from '../pages';
import  CaughtPokemons from '../caught-pokemons';
import Header from '../header';

import './app.css';


const App = () => {
    return (
        <main>
            <Header/>
            <Switch>
                <Route path="/" 
                component={ HomePage }
                exact/>

                <Route path="/caught" 
                component={ CaughtPokemons }
                />

                <Route path="/:slug"          
                component = { PokemonPage } 
                exact/>

            </Switch>
        </main>
    );
};

export default App;