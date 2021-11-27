import { SET_ALL_WEATHER, DELETE_ALL_WEATHER } from '../actions';

export const allWeatherInitialState = [];

function allWeatherReducer(state = allWeatherInitialState, action) {
  switch (action.type) {
    case SET_ALL_WEATHER:
      return [...state, ...action.payload];
    case DELETE_ALL_WEATHER:
      return [];
    default:
      return state;
  }
}
export default allWeatherReducer;
