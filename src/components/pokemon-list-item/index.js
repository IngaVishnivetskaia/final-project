import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './pokemon-list-item.css';

const PokemonListItem = ( {pokemon, makeCatchPokemon } ) => {

  const getMissingImageID = (id) => {
      if ( id < 719) {
          return id;
      } else {
          return Math.floor( (Math.random()*718) + 1);
      }
  };   

   const { id, name } = pokemon;
   const nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1); 

  // disable button
  const [ buttonState, setButtonState ] = useState(false);


//   const [count, setCount] = useState(0);

  useEffect(() => {
    setButtonState(JSON.parse(window.sessionStorage.getItem('buttonState')));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem('buttonState', buttonState);
  }, [buttonState]);
  
  const getButtonState = () => setButtonState(true);

   return (
       <div className="card text-white bg-success mb-3">
            <Link to={`/${id}`}>
            <div>
                <img 
                    src={`../../../public/pokemons/${getMissingImageID(id)}.png`}
                    alt={name}/>
            </div>
            </Link>

           <div>
               <div className="card-body">
               <div className="card-header">My name is {nameUpperCase}</div>
               <div className="card-text">My pokemons id here {id}</div>
                
                <button                                                      
                onClick = { () => {
                    makeCatchPokemon()
                    getButtonState()
                } }
                className="btn btn-warning"               
                disabled = { buttonState }
                >
                    Catch me!</button>

                    <Link to={`/${id}`}>
                    <button 
                    className="btn btn-info">
                    More info about me</button>
                    </Link>


                </div>
           </div>

       </div>
   );
};

export default PokemonListItem;