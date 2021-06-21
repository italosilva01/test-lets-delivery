import { createStore, combineReducers } from "redux";

import FavoriteReducer from "./Favorite/Favorite.reducer";
const rootReducer = combineReducers({
  favorites: FavoriteReducer,
});

const store = createStore(rootReducer);

export default store;
