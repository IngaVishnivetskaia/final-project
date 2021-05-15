import React from 'react';
import { Consumer } from '../pokemon-service-context';

const withPokemonService = () => (Wrapped) => {

    return (props) => {
        return (
            <Consumer>
                {
                    (pokemonService) => {
                       return ( <Wrapped {...props} pokemonService = {pokemonService}/>);
                    }
                }
            </Consumer>
        );
    }
};

export default withPokemonService;

//теперь достаточно обернуть любой компонент в HOC withPokemonService и он будет получать pokemonService из контекста