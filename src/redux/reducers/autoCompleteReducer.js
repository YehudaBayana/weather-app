import { SET_AUTO_COMPLETE } from '../actions';

export const autoCompleteInitialState = [];

function currentCityReducer(state = autoCompleteInitialState, action) {
  switch (action.type) {
    case SET_AUTO_COMPLETE:
      return action.payload;
    default:
      return state;
  }
}
export default currentCityReducer;
