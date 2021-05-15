import React from 'react';
import { connect } from 'react-redux';

import { makeCatchPokemon, releasedPokemon } from '../../actions';

import { Row, Col, Container, Figure  } from 'react-bootstrap';
import './caught-pokemons.css';

const CaughtPokemons = ({ items, /*releasedPokemon*/ }) => {

  const renderPokemons = (item, idx) => {
        const { id, name, date } = item;

        const getImageID = (id) => {
          if ( id < 719) {
              return id;
          } else {
              return Math.floor( (Math.random()*718) + 1);
          }
         };
    
 

    return (
      
      <Col key={idx} lg={true}>        
        <Figure >
           <Figure.Caption>
            
            <div>{idx + 1}</div>
            <h3 className="card-header">{name}</h3>
            <p>Pokemon was caught on {date}</p>
            </Figure.Caption>

                    <Figure.Image
                                src={`/pokemons/${getImageID(id)}.png`}
                                alt={name}
                    />           

            
            </Figure>            
      </Col>  
    )
  };

      return (
        <Container>
          <Row>
          <h2>{`You have caught ${items.length} ${items.length === 1 ? "pokemon" : "pokemons" }`}</h2>
          { items.map(renderPokemons) }
          </Row>
        </Container>
       )
};

const mapStateToProps = ({ caughtPokemons }) => {
    return {
      items: caughtPokemons
    };
};

// const mapDispatchToProps = {  //не работает как передать этот action в store?
//    releasedPokemon
// };

export default connect(mapStateToProps, /*mapDispatchToProps*/)(CaughtPokemons);



/* const CaughtPokemons = ({ items, releasePokemon }) => {
  const renderRow = (item, idx) => {
    const { id, name } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{name}</td>
    
        <td>



          <button
            onClick={() => console.log('onDelete'(id))}
            className="btn btn-outline-danger btn-sm float-right">
            Release this pokemon
          </button>

         </td>
      </tr>  
    );
  };

  return (
    <div>
      <h2>Page of caught pokemons</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
  
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>

 
    </div>
  );
}; */