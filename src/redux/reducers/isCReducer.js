import { SET_IS_C } from '../actions';

export const isCInitialState = true;

function isCReducer(state = isCInitialState, action) {
  switch (action.type) {
    case SET_IS_C:
      return action.payload;
    default:
      return state;
  }
}
export default isCReducer;
