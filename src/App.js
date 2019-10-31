import React from "react";
import { Provider } from "react-redux";

import { isMobile } from "react-device-detect";

import configureStore from "./configureStore";

import "./App.scss";

import Routes from "./routes/Routes";

const store = configureStore();
if (!isMobile) {
  store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  });
}

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
