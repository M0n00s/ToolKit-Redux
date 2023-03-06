import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { App } from "../App";
import { PokemonApp } from "../PokemonApp";

export const RouterApp = () => {
  return (
    <div className="container">
      <div>
        <NavLink
          to="counter"
          className={({ isActive }) => isActive && "active"}
        >
          Counter App
        </NavLink>
        <NavLink
          to="pokeapi"
          className={({ isActive }) => isActive && "active"}
        >
          Pokemon Api
        </NavLink>
      </div>
      <div>
        <Routes>
          <Route path="/counter" element={<App />} />
          <Route path="/pokeapi" element={<PokemonApp />} />
        </Routes>
      </div>
    </div>
  );
};
