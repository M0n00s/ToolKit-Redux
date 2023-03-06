import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { pokemon, isLoading, page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const onNextPokemons = () => {
    dispatch(getPokemons(page + 1));
  };
  const onBackPokemons = () => {
    if (page <= 0) return;
    dispatch(getPokemons(page - 1));
  };

  return (
    <>
      <div>PokemonApp</div>
      <hr />
      {isLoading ? (
        "Cargando..."
      ) : (
        <ul>
          {pokemon.map((poke) => (
            <li key={poke.name}>{poke.name}</li>
          ))}
        </ul>
      )}
      <div>
        <button disabled={isLoading} onClick={onBackPokemons}>
          back
        </button>
        <button disabled={isLoading} onClick={onNextPokemons}>
          Next
        </button>
      </div>
    </>
  );
};
