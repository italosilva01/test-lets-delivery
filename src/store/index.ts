import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './Favorite.store';

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
