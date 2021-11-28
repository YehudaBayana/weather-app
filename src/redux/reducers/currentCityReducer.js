import { SET_CURRENT_CITY } from '../actions';

export const currentCityInitialState = {};

function currentCityReducer(state = currentCityInitialState, action) {
  switch (action.type) {
    case SET_CURRENT_CITY:
      return action.payload;
    default:
      return state;
  }
}
export default currentCityReducer;
