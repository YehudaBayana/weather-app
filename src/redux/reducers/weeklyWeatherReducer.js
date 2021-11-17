import { SET_WEEKLY_WEATHER } from '../actions';

export const weeklyWeatherInitialState = [];

function currentCityReducer(state = weeklyWeatherInitialState, action) {
  switch (action.type) {
    case SET_WEEKLY_WEATHER:
      return action.payload;
    default:
      return state;
  }
}
export default currentCityReducer;
