import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <div>PokemonApp</div>
      <hr />
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </>
  );
};
