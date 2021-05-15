//передаем наш сервис всем компонентам, используя context api react
import React from 'react';

var _React$createContext = /*#__PURE__*/React.createContext(),
    ServiceProvider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

export { ServiceProvider, Consumer };