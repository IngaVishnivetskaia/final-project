import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {



    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">

         <Link to="/">
            <h1 className="logo">Pokedex</h1>
         </Link> 
         
         <Link to="/caught">
            <div>Caught pokemons here!</div>
         </Link>

        </header>
    );
};

export default Header;