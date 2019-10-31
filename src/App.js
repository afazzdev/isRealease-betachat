import React from "react";
import { Provider } from "react-redux";

import configureStore from "./configureStore";

import "./App.scss";

import Routes from "./routes/Routes";

const store = configureStore();

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
