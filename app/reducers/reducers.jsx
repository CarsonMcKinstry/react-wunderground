
export const weatherReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_WEATHER':
            return {
               ...action.weather,
               loading: false
            };
        case 'SET_LOADING':
            return {
                loading: true
            }
        default:
            return state;
    }
}