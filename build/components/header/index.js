import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

var Header = function Header() {
  return /*#__PURE__*/React.createElement("header", {
    className: "navbar navbar-expand-lg navbar-light bg-light"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "logo"
  }, "Pokedex")), /*#__PURE__*/React.createElement(Link, {
    to: "/caught"
  }, /*#__PURE__*/React.createElement("div", null, "Caught pokemons here!")));
};

export default Header;