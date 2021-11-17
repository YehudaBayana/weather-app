import { SET_ALL_WEATHER } from '../actions';

export const allWeatherInitialState = [];

function allWeatherReducer(state = allWeatherInitialState, action) {
  switch (action.type) {
    case SET_ALL_WEATHER:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
export default allWeatherReducer;
