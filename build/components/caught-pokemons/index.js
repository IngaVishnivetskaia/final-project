import "core-js/modules/es.function.name.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.map.js";
import React from 'react';
import { connect } from 'react-redux';
import { makeCatchPokemon, releasedPokemon } from '../../actions';
import { Row, Col, Container, Figure } from 'react-bootstrap';
import './caught-pokemons.css';

var CaughtPokemons = function CaughtPokemons(_ref) {
  var items = _ref.items;

  var renderPokemons = function renderPokemons(item, idx) {
    var id = item.id,
        name = item.name,
        date = item.date;

    var getImageID = function getImageID(id) {
      if (id < 719) {
        return id;
      } else {
        return Math.floor(Math.random() * 718 + 1);
      }
    };

    return /*#__PURE__*/React.createElement(Col, {
      key: idx,
      lg: true
    }, /*#__PURE__*/React.createElement(Figure, null, /*#__PURE__*/React.createElement(Figure.Caption, null, /*#__PURE__*/React.createElement("div", null, idx + 1), /*#__PURE__*/React.createElement("h3", {
      className: "card-header"
    }, name), /*#__PURE__*/React.createElement("p", null, "Pokemon was caught on ", date)), /*#__PURE__*/React.createElement(Figure.Image, {
      src: "/pokemons/".concat(getImageID(id), ".png"),
      alt: name
    })));
  };

  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement("h2", null, "You have caught ".concat(items.length, " ").concat(items.length === 1 ? "pokemon" : "pokemons")), items.map(renderPokemons)));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var caughtPokemons = _ref2.caughtPokemons;
  return {
    items: caughtPokemons
  };
}; // const mapDispatchToProps = {  //не работает как передать этот action в store?
//    releasedPokemon
// };


export default connect(mapStateToProps
/*mapDispatchToProps*/
)(CaughtPokemons);
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