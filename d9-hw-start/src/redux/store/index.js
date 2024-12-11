import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouritesReducer'
import searchReducer from '../reducers/searchReducer'

const mainReducer = combineReducers({
  favourites: favouriteReducer,
  search: searchReducer,
})

const myReduxStore = configureStore({
  reducer: mainReducer,
})

export default myReduxStore
