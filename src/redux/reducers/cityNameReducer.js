import { SET_CITY_NAME } from '../actions';

export const cityNameInitialState = '';

function cityNameReducer(state = cityNameInitialState, action) {
  switch (action.type) {
    case SET_CITY_NAME:
      return action.payload;
    default:
      return state;
  }
}
export default cityNameReducer;
