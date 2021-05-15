//передаем наш сервис всем компонентам, используя context api react
import React from 'react';

const {
    Provider: ServiceProvider,
    Consumer
} = React.createContext();

export {
    ServiceProvider,
    Consumer
};
