import React from 'react';

import { Spinner } from 'react-bootstrap';
import './spinner.css';

const SpinnerLoad = () => {
    return (    
        <div className="center">
            <Spinner animation="border" variant="success" role="status">
            
            </Spinner>
            <span className="sr-only spinner">Loading pokemons...</span>
       </div>
    )
    
};

export default SpinnerLoad;