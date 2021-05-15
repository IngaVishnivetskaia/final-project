import React from 'react';
import { Spinner } from 'react-bootstrap';
import './spinner.css';

var SpinnerLoad = function SpinnerLoad() {
  return /*#__PURE__*/React.createElement("div", {
    className: "center"
  }, /*#__PURE__*/React.createElement(Spinner, {
    animation: "border",
    variant: "success",
    role: "status"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sr-only spinner"
  }, "Loading pokemons..."));
};

export default SpinnerLoad;