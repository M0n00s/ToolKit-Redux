import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  isLoading: false,
  pokemon: [],
};

export const PokemonSlice = createSlice({
  name: "[Pokemon]",
  initialState,
  reducers: {
    startLoadingPokemon: (state) => {
      state.isLoading = true;
    },
    setPokemon: (state, { payload }) => {
      state.isLoading = false;
      state.page = payload.page;
      state.pokemon = payload.pokemon;
    },
  },
});

export const { startLoadingPokemon, setPokemon } = PokemonSlice.actions;
