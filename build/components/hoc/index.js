import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Consumer } from '../pokemon-service-context';

var withPokemonService = function withPokemonService() {
  return function (Wrapped) {
    return function (props) {
      return /*#__PURE__*/React.createElement(Consumer, null, function (pokemonService) {
        return /*#__PURE__*/React.createElement(Wrapped, _extends({}, props, {
          pokemonService: pokemonService
        }));
      });
    };
  };
};

export default withPokemonService; //теперь достаточно обернуть любой компонент в HOC withPokemonService и он будет получать pokemonService из контекста