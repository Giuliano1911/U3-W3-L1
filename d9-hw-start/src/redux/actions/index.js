export const ADD_TO_FAV = ' ADD_TO_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'

export const addToFavAction = (fav) => {
  return {
    type: ADD_TO_FAV,
    payload: fav,
  }
}

export const removeFavAction = (i) => {
  return {
    type: REMOVE_FAV,
    payload: i,
  }
}

export const searchResultsAction = (results) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results,
  }
}
