import { combineReducers } from 'redux';
import favoritesReducer, { favoritesInitialState } from './favoritesReducer';
import currentCityReducer, { currentInitialState } from './currentCityReducer';
import autoCompleteReducer, {
  autoCompleteInitialState,
} from './autoCompleteReducer';

export const initialState = {
  favorites: favoritesInitialState,
  currentCity: currentInitialState,
  autoComplete: autoCompleteInitialState,
};

export default combineReducers({
  favorites: favoritesReducer,
  currentCity: currentCityReducer,
  autoComplete: autoCompleteReducer,
});
