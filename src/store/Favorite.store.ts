import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'model/character';

const favorite = createSlice({
  name: 'favorite',
  initialState: [] as Character[],

  reducers: {
    insert(state, { payload }: PayloadAction<Character>) {
      const item = state.filter(({ id }) => id === payload.id);
      if (item.length == 0) state.push(payload);
    },
    remove: (state, { payload }: PayloadAction<Character>) =>
      state.filter((item) => item.id != payload.id),
  },
});

export const { insert, remove } = favorite.actions;
export default favorite.reducer;
