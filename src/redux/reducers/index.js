import { combineReducers } from 'redux';
import favoritesReducer, { favoritesInitialState } from './favoritesReducer';
import currentCityReducer, {
  currentCityInitialState,
} from './currentCityReducer';
import autoCompleteReducer, {
  autoCompleteInitialState,
} from './autoCompleteReducer';
import currentWeatherReducer, {
  currentWeatherInitialState,
} from './currentWeatherReducer';
import weeklyWeatherReducer, {
  weeklyWeatherInitialState,
} from './weeklyWeatherReducer';
import allWeatherReducer, { allWeatherInitialState } from './allWeatherReducer';
import isCReducer, { isCInitialState } from './isCReducer';
import cityNameReducer, { cityNameInitialState } from './cityNameReducer';
import apiErrorReducer, { apiErrorInitialState } from './apiErrorReducer';

export const initialState = {
  favorites: favoritesInitialState,
  cityName: cityNameInitialState,
  currentCity: currentCityInitialState,
  autoComplete: autoCompleteInitialState,
  currentWeather: currentWeatherInitialState,
  allWeather: allWeatherInitialState,
  weeklyWeather: weeklyWeatherInitialState,
  isC: isCInitialState,
  apiError: apiErrorInitialState,
};

export default combineReducers({
  favorites: favoritesReducer,
  cityName: cityNameReducer,
  currentCity: currentCityReducer,
  autoComplete: autoCompleteReducer,
  currentWeather: currentWeatherReducer,
  allWeather: allWeatherReducer,
  weeklyWeather: weeklyWeatherReducer,
  isC: isCReducer,
  apiError: apiErrorReducer,
});
