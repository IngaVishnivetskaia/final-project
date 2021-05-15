function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import "core-js/modules/es.array.find.js";
import "core-js/modules/es.date.to-string.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/es.array.for-each.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.get-own-property-descriptors.js";
import "core-js/modules/es.object.define-properties.js";
import "core-js/modules/es.array.is-array.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.from.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  pokemons: [],
  loading: true,
  error: null,
  visible: 4,
  caughtPokemons: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'POKEMONS_LOADED':
      return _objectSpread(_objectSpread({}, state), {}, {
        pokemons: action.payload,
        loading: false,
        error: null
      });

    case 'POKEMONS_ERROR':
      return _objectSpread(_objectSpread({}, state), {}, {
        pokemons: [],
        loading: false,
        error: action.payload //значение ошибки

      });

    case 'POKEMON_CAUGHT':
      var pokemonId = action.payload;
      var pokemon = state.pokemons.find(function (pokemon) {
        return pokemon.id === pokemonId;
      });
      var d = new Date();
      var date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      var newItem = {
        id: pokemon.id,
        name: pokemon.name,
        date: date,
        disabled: true // deactivate button

      };
      return _objectSpread(_objectSpread({}, state), {}, {
        caughtPokemons: [].concat(_toConsumableArray(state.caughtPokemons), [newItem])
      });

    case 'POKEMON_RELEASED':
      var index = action.payload.index;
      return _objectSpread(_objectSpread({}, state), {}, {
        caughtPokemons: [].concat(_toConsumableArray(state.caughtPokemons.slice(0, index)), _toConsumableArray(state.caughtPokemons.slice(index + 1)))
      });

    case 'POKEMONS_LOADED_MORE':
      return _objectSpread(_objectSpread({}, state), {}, {
        visible: state.visible + 4
      });

    default:
      return state;
    //если не знаем action, вернуть state без изменений
  }
};

export default reducer;