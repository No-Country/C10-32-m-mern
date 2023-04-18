import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { HashRouter } from "react-router-dom";

import "./index.css";

import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
