export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const DELETE_FROM_FAVORITES = 'DELETE_FROM_FAVORITES';
export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
export const SET_AUTO_COMPLETE = 'SET_AUTO_COMPLETE';

export function addToFavorites(item) {
  return { type: ADD_TO_FAVORITES, payload: item };
}

export function deleteFromFavorites(key) {
  return { type: DELETE_FROM_FAVORITES, payload: key };
}

export function setCurrentCity(item) {
  return { type: SET_CURRENT_CITY, payload: item };
}

export function setAutoComplete(items) {
  return { type: SET_AUTO_COMPLETE, payload: items };
}
