import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type HeroesState = {
  favorites: string[];
};

const initialState: HeroesState = {
  favorites: [],
};

export const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = heroesSlice.actions;

export default heroesSlice.reducer;
