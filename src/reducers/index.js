const initialState = {
    pokemons: [],
    loading: true,
    error: null,
    visible: 4,
    caughtPokemons: []
};



const reducer = (state = initialState, action ) => {
    
    switch (action.type) {
        case 'POKEMONS_LOADED':
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
                error: null
            };

        case 'POKEMONS_ERROR':
            return {
                ...state,
                pokemons: [],
                loading: false,
                error: action.payload //значение ошибки
            };

        case 'POKEMON_CAUGHT':
            
            const pokemonId = action.payload;
            const pokemon = state.pokemons.find( (pokemon) => pokemon.id === pokemonId);
            const d = new Date();
            const date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' at ' +
            d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            const newItem = {
                id: pokemon.id,
                name: pokemon.name,
                date: date,
                disabled: true // deactivate button
            };
            return {
                ...state,          
                caughtPokemons: [
                    ...state.caughtPokemons,
                    newItem
                ]
            };

        case 'POKEMON_RELEASED':
            const { index } = action.payload;
            return {
                ...state,
                caughtPokemons: [
                    ...state.caughtPokemons.slice(0, index),
                    ...state.caughtPokemons.slice(index + 1)
                  ]
            };

        case 'POKEMONS_LOADED_MORE':
                return {
                    ...state,
                    visible: state.visible + 4
                };
            

        default:        
            return state; //если не знаем action, вернуть state без изменений
        }
};

export default reducer;