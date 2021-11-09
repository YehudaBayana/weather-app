import { SET_AUTO_COMPLETE } from '../actions';

export const autoCompleteInitialState = ['auto complete'];

function currentCityReducer(state = autoCompleteInitialState, action) {
  switch (action.type) {
    case SET_AUTO_COMPLETE:
      return [...state, action.payload];
    default:
      return state;
  }
}
export default currentCityReducer;
