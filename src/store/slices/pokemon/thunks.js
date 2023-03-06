import { pokemonApi } from "../../../api/pokeApi";
import { setPokemon, startLoadingPokemon } from "./PokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemon());

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(
      setPokemon({
        pokemon: data.results,
        page: page,
      })
    );
  };
};
