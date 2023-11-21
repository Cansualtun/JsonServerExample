import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchFavorites = createAsyncThunk('favorite/fetchFavorites', async () => {
  const response = await axios.get(
    'http://localhost:3001/favorites'
  );
  return response.data;
});

export const addFavoriteAsync = createAsyncThunk('favorite/addFavorite', async (favorite) => {
  const response = await axios.post(
    'http://localhost:3001/favorites',
    favorite
  );
  return response.data;
});

export const removeFavoriteAsync = createAsyncThunk(
  'favorite/remove',
  async (favoriteId) => {
    await axios.delete(`http://localhost:3001/favorites/${favoriteId}`);
    return favoriteId;
  }
);

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    error:null,
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
  extraReducers:(builder)=>{
    builder.addCase(fetchFavorites.fulfilled,(state,action)=>{
      state.favorites =action.payload;
    }).
    addCase(fetchFavorites.rejected,(state,action)=>{
      state.error=action.error.message;
    }).
    addCase(addFavoriteAsync.fulfilled,(state,action)=>{
      state.favorites.push(action.payload);
    }).
    addCase(removeFavoriteAsync.fulfilled,(state,action)=>{
      state.favorites=state.favorites.filter((favorite)=>favorite.id!==action.payload)
    })
  }
});

export const { setFavorites, addFavorite, removeFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
