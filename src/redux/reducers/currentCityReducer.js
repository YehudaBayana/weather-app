import { SET_CURRENT_CITY } from '../actions';

export const currentInitialState = 'current city';

function currentCityReducer(state = currentInitialState, action) {
  switch (action.type) {
    case SET_CURRENT_CITY:
      return action.payload;
    default:
      return state;
  }
}
export default currentCityReducer;
