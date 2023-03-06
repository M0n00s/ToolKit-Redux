import React from "react";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
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

          <Route path="/*" element={<Navigate to="/counter" />} />
        </Routes>
      </div>
    </div>
  );
};
