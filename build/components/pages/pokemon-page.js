function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.match.js";
import "core-js/modules/es.function.name.js";
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
import { Link } from 'react-router-dom';
import withPokemonService from '../hoc';
import { pokemonsLoaded, pokemonsError
/*releasedPokemon */
} from '../../actions';
import compose from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './pokemon-page.css';

var PokemonPage = /*#__PURE__*/function (_Component) {
  _inherits(PokemonPage, _Component);

  var _super = _createSuper(PokemonPage);

  function PokemonPage() {
    _classCallCheck(this, PokemonPage);

    return _super.apply(this, arguments);
  }

  _createClass(PokemonPage, [{
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
          disabled = _this$props2.disabled,
          makeCatchPokemon = _this$props2.makeCatchPokemon;
      var idP = this.props.match.params.slug; // console.log(`try to get match.param ${idP}`);
      // console.log(`what is pokemons ${pokemons}`);
      // console.log(`what is (pokemons[idP].name) ${pokemons[idP].name}`)

      if (loading) {
        return /*#__PURE__*/React.createElement(Spinner, null);
      }

      if (error) {
        return /*#__PURE__*/React.createElement(ErrorIndicator, null);
      }

      var getImageID = function getImageID(idP) {
        if (idP < 719) {
          return idP;
        } else {
          return Math.floor(Math.random() * 718 + 1);
        }
      };

      var getPokemonInArray = function getPokemonInArray(idP) {
        if (idP <= 802) {
          return idP - 1;
        }

        if (idP > 802) {
          return idP - 9199;
        }
      };

      if (idP < 0 || idP > 10147) return /*#__PURE__*/React.createElement("h1", null, "No such pokemon here");
      var name = pokemons[getPokemonInArray(idP)].name;
      var nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1);
      return /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement("h2", null, "My name is ".concat(nameUpperCase)), /*#__PURE__*/React.createElement("div", {
        className: "pokemon-image"
      }, /*#__PURE__*/React.createElement("img", {
        className: "image",
        src: "/pokemons/".concat(getImageID(idP), ".png"),
        alt: pokemons[getPokemonInArray(idP)].name
      })), /*#__PURE__*/React.createElement("p", null, "Pokemon are creatures of all shapes and sizes who live in the wild or alongside humans. For the most part, Pok\xE9mon do not speak except to utter their names."), /*#__PURE__*/React.createElement("p", null, "The Pokemon world is the main planet for the Pok\xE9mon franchise, set in the Pok\xE9mon universe. It bears some striking similarities with the real world, certainly deriving inspiration from it, but many factors set it apart as a different place from our own world."), /*#__PURE__*/React.createElement(Link, {
        to: "/"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "logo"
      }, "back to main page")));
    }
  }]);

  return PokemonPage;
}(Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    pokemons: state.pokemons,
    loading: state.loading,
    error: state.error //    disabled: state.disabled // button

  };
};

var mapDispatchToProps = {
  pokemonsLoaded: pokemonsLoaded,
  pokemonsError: pokemonsError //   makeCatchPokemon,

};
export default compose(withPokemonService(), connect(mapStateToProps, mapDispatchToProps))(PokemonPage); // ПОПЫТКА С USESELECTOR:
// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// export const PokemonPage = ({ match }) => {
//   const { slug } = match.params;
//   console.log(slug); 
//   const post = useSelector(state => {
//       console.log(state);
//       return state.pokemons.find( pokemons => pokemons.id === slug )});
//       console.log(`post is ${post}`);
//   if (!post) {
//     return (
//       <section>
//         <h2>Pokemon not found!</h2>
//       </section>
//     )
//   }
//   return (
//     <div>
//         <h2>{post.name}</h2>
//         <Link to={`/`} className="button">
//           Edit Post
//         </Link>
//     </div>
//   )
// }
// export default PokemonPage;