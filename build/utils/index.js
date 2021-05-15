import "core-js/modules/es.array.reduce-right.js";

var compose = function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function (comp) {
    return funcs.reduceRight(function (wrapped, f) {
      return f(wrapped);
    }, comp);
  };
};

export default compose;