const initialState = {
  fav: {
    favourites: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAV':
      return {
        ...state,
        fav: {
          ...state.fav,
          favourites: [...state.fav.favourites, action.payload],
        },
      }
    case 'REMOVE_FAV':
      return {
        ...state,
        fav: {
          ...state.fav,
          favourites: state.fav.favourites.filter(
            (_, i) => i !== action.payload
          ),
        },
      }
    default:
      return state
  }
}

export default mainReducer
