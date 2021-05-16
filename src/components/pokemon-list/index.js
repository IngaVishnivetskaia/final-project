import React, { Component } from 'react';
import PokemonListItem from '../pokemon-list-item';
import { connect } from 'react-redux';

import withPokemonService from '../hoc';
import { pokemonsLoaded, pokemonsError, makeCatchPokemon, loadMorePokemon } from '../../actions';
import compose from '../../utils';

import './pokemon-list.css';
import { Row, Col  } from 'react-bootstrap';

import SpinnerLoad from '../spinner';
import ErrorIndicator from '../error-indicator';
import { Container } from 'react-bootstrap';

class PokemonList extends Component {

  componentDidMount() {

    const { pokemonService, 
      pokemonsLoaded,
      pokemonsError } = this.props; 

    pokemonService.getPokemons()
      .then((data) => pokemonsLoaded(data))
      .catch((err) => pokemonsError(err)); //передаем объект с ощибкой в action creator   

  }

    // componentDidMount() {
    //     //получить данные
    //     const { pokemonService } = this.props;
    //     const data = pokemonService.getPokemons();
    //    console.log(`componentdidmount: ${data}`);
    // //  console.log(data);
    //     //dispath action в store
    //    this.props.pokemonsLoaded(data);
    // }

    render() {
        const { pokemons, loading, error, makeCatchPokemon, loadMorePokemon, visible,  /*releasedPokemon */ } = this.props;
        
        if (loading) {
          return <SpinnerLoad />
        }

        if (error) {
          return <ErrorIndicator />
        }
          
        return (
         
           <Container>
             <Row>

             
            { 
              pokemons.slice(0, visible).map((pokemon) => {
                return (
                  <Col lg={true}  key={pokemon.id} >
                        <PokemonListItem pokemon={pokemon}                     
                        makeCatchPokemon={ () => makeCatchPokemon(pokemon.id) }
                            
                        />
                        
                  </Col>
                )
              })
            }
              <div>
                 <button 
                 onClick= { loadMorePokemon } 
                 className="btn btn-secondary"
                 >Load more pokemons...</button>
              </div>
          </Row>
          </Container>
    
        );
      }
}

//принимает state и возвращает объект, где ключи названия свойств, которые мы присвоим компоненту
const mapStateToProps = (state) => {
   return {
       pokemons: state.pokemons,
       loading: state.loading,
       error: state.error,
       caughtPokemons: state.caughtPokemons,
       visible: state.visible 
   };
};

// const makeCatchPokemon = (id) => {
//   dispatch(makeCatchPokemon(id));
// }

const mapDispatchToProps = {
      pokemonsLoaded,
      pokemonsError,
      makeCatchPokemon,
      loadMorePokemon
    }; //делаем сразу объектом, а не функцией
    
    
 
            //   1/ теперь используем action creator pokemonsLoaded
            // {
            //     type: 'POKEMONS_LOADED',
            //     payload: newPokemons
            // }            
            
export default compose(
  withPokemonService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PokemonList);

//наш компонент оборачивается 2мя компонентами высшего порядка, сначала connect, потом withPokemonService
// чтобы работать с redux store нужно определить конфигурацию для connect