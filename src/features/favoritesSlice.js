import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload; //favori listesini güncelleyecek state
    },
    removeFavorite: (state, action) => {
      // favorileri siler
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
    },
  },
});

export const { setFavorites, addFavorite, removeFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
