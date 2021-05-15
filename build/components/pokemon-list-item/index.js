import "core-js/modules/es.function.name.js";
import "core-js/modules/es.array.slice.js";
import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon-list-item.css';

var PokemonListItem = function PokemonListItem(_ref) {
  var pokemon = _ref.pokemon,
      makeCatchPokemon = _ref.makeCatchPokemon;

  var getMissingImageID = function getMissingImageID(id) {
    if (id < 719) {
      return id;
    } else {
      return Math.floor(Math.random() * 718 + 1);
    }
  };

  var id = pokemon.id,
      name = pokemon.name;
  var nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1);
  return /*#__PURE__*/React.createElement("div", {
    className: "card text-white bg-success mb-3"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/".concat(id)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "/pokemons/".concat(getMissingImageID(id), ".png"),
    alt: name
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-header"
  }, "My name is ", nameUpperCase), /*#__PURE__*/React.createElement("div", {
    className: "card-text"
  }, "My pokemons id here ", id), /*#__PURE__*/React.createElement("button", {
    onClick: makeCatchPokemon,
    className: "btn btn-warning" // disabled = { disabled }

  }, "Catch me!"), /*#__PURE__*/React.createElement(Link, {
    to: "/".concat(id)
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-info"
  }, "More info about me")))));
};

export default PokemonListItem;