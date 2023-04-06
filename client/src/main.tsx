import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
