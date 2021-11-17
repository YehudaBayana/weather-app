import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from '../actions';

export const favoritesInitialState = [];

function favoritesReducer(state = favoritesInitialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      let alreadyIn = state.find((city) => city.Key === action.payload.Key);
      return alreadyIn ? state : [...state, action.payload];
    case DELETE_FROM_FAVORITES:
      let indexCity = state.findIndex(
        (city) => city.Key === action.payload.Key
      );
      state.splice(indexCity, 1);
      return state;
    default:
      return state;
  }
}
export default favoritesReducer;
