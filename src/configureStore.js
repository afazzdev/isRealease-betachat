import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import messagesReducer from "./redux/reducers/MessagesReducer";
import loginReducer from "./redux/reducers/LoginReducer";
import thunk from "redux-thunk";
import searchReducer from "./redux/reducers/searchReducer";

const createRootReducers = combineReducers({
  messages: messagesReducer,
  loginData: loginReducer,

  resSearch: searchReducer
});

// const middlewares = [thunk];

const composeMiddlewares = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

// if (process.env.NODE_ENV === "development") {
//   const logger = createLogger();
//   middlewares.push(logger);
// }

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const configureStore = () =>
  createStore(createRootReducers, persistedState, composeMiddlewares);

export default configureStore;
