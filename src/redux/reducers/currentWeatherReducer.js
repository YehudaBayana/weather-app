import { SET_CURRENT_WEATHER } from '../actions';

export const currentWeatherInitialState = {};

function currentCityReducer(state = currentWeatherInitialState, action) {
  switch (action.type) {
    case SET_CURRENT_WEATHER:
      return action.payload;
    default:
      return state;
  }
}
export default currentCityReducer;
