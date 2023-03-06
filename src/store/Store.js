import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./slices/counter/CounterSlice";
import { PokemonSlice } from "./slices/pokemon/PokemonSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    pokemons: PokemonSlice.reducer,
  },
});
