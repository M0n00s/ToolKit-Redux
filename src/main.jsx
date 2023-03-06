import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { store } from "./store/Store";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import { RouterApp } from "./router/RouterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
