export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const DELETE_FROM_FAVORITES = 'DELETE_FROM_FAVORITES';
export const SET_CITY_NAME = 'SET_CITY_NAME';
export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
export const SET_AUTO_COMPLETE = 'SET_AUTO_COMPLETE';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_ALL_WEATHER = 'SET_ALL_WEATHER';
export const DELETE_ALL_WEATHER = 'DELETE_ALL_WEATHER';
export const SET_WEEKLY_WEATHER = 'SET_WEEKLY_WEATHER';
export const SET_IS_C = 'SET_IS_C';
export const SET_API_ERROR = 'SET_API_ERROR';

export function addToFavorites(item) {
  return { type: ADD_TO_FAVORITES, payload: item };
}

export function deleteFromFavorites(key) {
  return { type: DELETE_FROM_FAVORITES, payload: key };
}

export function setCityName(item) {
  return { type: SET_CITY_NAME, payload: item };
}

export function setCurrentCity(item) {
  return { type: SET_CURRENT_CITY, payload: item };
}

export function setAutoComplete(items) {
  return { type: SET_AUTO_COMPLETE, payload: items };
}

export function setCurrentWeather(items) {
  return { type: SET_CURRENT_WEATHER, payload: items };
}

export function setAllWeather(items) {
  return { type: SET_ALL_WEATHER, payload: items };
}
export function deleteAllWeather() {
  return { type: DELETE_ALL_WEATHER };
}

export function setWeeklyWeather(items) {
  return { type: SET_WEEKLY_WEATHER, payload: items };
}

export function setIsC(items) {
  return { type: SET_IS_C, payload: items };
}

export function setApiError(items) {
  return { type: SET_API_ERROR, payload: items };
}
