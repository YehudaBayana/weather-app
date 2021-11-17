import { SET_API_ERROR } from '../actions';

export const apiErrorInitialState = false;

function apiErrorReducer(state = apiErrorInitialState, action) {
  switch (action.type) {
    case SET_API_ERROR:
      return action.payload;
    default:
      return state;
  }
}
export default apiErrorReducer;
