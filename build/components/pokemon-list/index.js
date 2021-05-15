function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.object.set-prototype-of.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.reflect.construct.js";
import "core-js/modules/es.object.create.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
import PokemonListItem from '../pokemon-list-item';
import { connect } from 'react-redux';
import withPokemonService from '../hoc';
import { pokemonsLoaded, pokemonsError, makeCatchPokemon, loadMorePokemon
/*releasedPokemon */
} from '../../actions';
import compose from '../../utils';
import './pokemon-list.css';
import { Row, Col } from 'react-bootstrap';
import SpinnerLoad from '../spinner';
import ErrorIndicator from '../error-indicator';
import { Container } from 'react-bootstrap';

var PokemonList = /*#__PURE__*/function (_Component) {
  _inherits(PokemonList, _Component);

  var _super = _createSuper(PokemonList);

  function PokemonList() {
    _classCallCheck(this, PokemonList);

    return _super.apply(this, arguments);
  }

  _createClass(PokemonList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          pokemonService = _this$props.pokemonService,
          pokemonsLoaded = _this$props.pokemonsLoaded,
          pokemonsError = _this$props.pokemonsError;
      pokemonService.getPokemons().then(function (data) {
        return pokemonsLoaded(data);
      })["catch"](function (err) {
        return pokemonsError(err);
      }); //передаем объект с ощибкой в action creator
    } // componentDidMount() {
    //     //получить данные
    //     const { pokemonService } = this.props;
    //     const data = pokemonService.getPokemons();
    //    console.log(`componentdidmount: ${data}`);
    // //  console.log(data);
    //     //dispath action в store
    //    this.props.pokemonsLoaded(data);
    // }

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          pokemons = _this$props2.pokemons,
          loading = _this$props2.loading,
          error = _this$props2.error,
          _makeCatchPokemon = _this$props2.makeCatchPokemon,
          loadMorePokemon = _this$props2.loadMorePokemon,
          visible = _this$props2.visible;

      if (loading) {
        return /*#__PURE__*/React.createElement(SpinnerLoad, null);
      }

      if (error) {
        return /*#__PURE__*/React.createElement(ErrorIndicator, null);
      }

      return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, pokemons.slice(0, visible).map(function (pokemon) {
        return /*#__PURE__*/React.createElement(Col, {
          lg: true,
          key: pokemon.id
        }, /*#__PURE__*/React.createElement(PokemonListItem, {
          pokemon: pokemon,
          makeCatchPokemon: function makeCatchPokemon() {
            return _makeCatchPokemon(pokemon.id);
          } // releasedPokemon = { () => releasedPokemon(pokemon.id) }

        }));
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: loadMorePokemon,
        className: "btn btn-secondary"
      }, "Load more pokemons..."))));
    }
  }]);

  return PokemonList;
}(Component); //принимает state и возвращает объект, где ключи названия свойств, которые мы присвоим компоненту


var mapStateToProps = function mapStateToProps(state) {
  return {
    pokemons: state.pokemons,
    loading: state.loading,
    error: state.error,
    caughtPokemons: state.caughtPokemons,
    visible: state.visible
  };
}; // const makeCatchPokemon = (id) => {
//   dispatch(makeCatchPokemon(id));
// }


var mapDispatchToProps = {
  pokemonsLoaded: pokemonsLoaded,
  pokemonsError: pokemonsError,
  makeCatchPokemon: makeCatchPokemon,
  loadMorePokemon: loadMorePokemon // releasedPokemon

}; //делаем сразу объектом, а не функцией
//   1/ теперь используем action creator pokemonsLoaded
// {
//     type: 'POKEMONS_LOADED',
//     payload: newPokemons
// }            

export default compose(withPokemonService(), connect(mapStateToProps, mapDispatchToProps))(PokemonList); //наш компонент оборачивается 2мя компонентами высшего порядка, сначала connect, потом withPokemonService
// чтобы работать с redux store нужно определить конфигурацию для connect