import React, { Component } from 'react';
import PokemonListItem from '../pokemon-list-item';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import withPokemonService from '../hoc';
import { pokemonsLoaded, pokemonsError,  /*releasedPokemon */ } from '../../actions';
import compose from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './pokemon-page.css'



class PokemonPage extends Component {

 


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
        const { pokemons, loading, error, disabled, makeCatchPokemon /*releasedPokemon */ } = this.props;

  
            
            const idP = this.props.match.params.slug;

            // console.log(`try to get match.param ${idP}`);
            // console.log(`what is pokemons ${pokemons}`);
            // console.log(`what is (pokemons[idP].name) ${pokemons[idP].name}`)
        
        
        if (loading) {
          return <Spinner />
        }

        if (error) {
          return <ErrorIndicator />
        }

        const getImageID = (idP) => {
            if ( idP < 719) {
                return idP;
            } else {
                return Math.floor( (Math.random()*718) + 1);
            }
        };

        const getPokemonInArray = (idP) => {
            if ( idP <= 802 ) {
                return idP - 1;
            }
            if ( idP > 802 ) {
                return idP - 9199;
            }
        };

        if ( idP < 0 || idP > 10147 )
        return (<h1>No such pokemon here</h1>);

        const name = pokemons[getPokemonInArray(idP)].name;
        const nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1);
          
        return (       
       
             <div className="container">     
              
                <h2>{`My name is ${nameUpperCase}` }</h2>
                <div className="pokemon-image">
                         <img className="image"
                                     src={`/pokemons/${getImageID(idP)}.png`} 
                                     alt={pokemons[getPokemonInArray(idP)].name}/>
                </div>          
                
                <p>Pokemon are creatures of all shapes and sizes 
                    who live in the wild or alongside humans. 
                    For the most part, Pokémon do not speak except to utter their names.
                </p>
                <p>
                The Pokemon world is the main planet for the Pokémon franchise, set in the Pokémon universe. It bears some striking similarities with the real world, 
                certainly deriving inspiration from it, but many factors set it apart as a different place from our own world.
                </p>
                <Link to="/">
                     <h5 className="logo">back to main page</h5>
                </Link>
            </div>
         
        );
      }
}

const mapStateToProps = (state) => {
   return {
       pokemons: state.pokemons,
       loading: state.loading,
       error: state.error,
    //    disabled: state.disabled // button
   };
};

const mapDispatchToProps = {
      pokemonsLoaded,
      pokemonsError,
    //   makeCatchPokemon,
    }; 

export default compose(
  withPokemonService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PokemonPage);



// ПОПЫТКА С USESELECTOR:
// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'



// export const PokemonPage = ({ match }) => {
//   const { slug } = match.params;
//   console.log(slug); 


//   const post = useSelector(state => {
//       console.log(state);
//       return state.pokemons.find( pokemons => pokemons.id === slug )});

//       console.log(`post is ${post}`);

 

//   if (!post) {
//     return (
//       <section>
//         <h2>Pokemon not found!</h2>
//       </section>
//     )
//   }

//   return (
//     <div>
      
//         <h2>{post.name}</h2>
        

//         <Link to={`/`} className="button">
//           Edit Post
//         </Link>
      
//     </div>
//   )
// }

// export default PokemonPage;