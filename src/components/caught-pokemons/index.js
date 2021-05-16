import React from 'react';
import { connect } from 'react-redux';

import { Row, Col, Container, Figure  } from 'react-bootstrap';
import './caught-pokemons.css';

const CaughtPokemons = ({ items }) => {

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
                                src={`../../../public/pokemons/${getImageID(id)}.png`}
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

export default connect(mapStateToProps)(CaughtPokemons);