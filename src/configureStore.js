import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import messagesReducer from "./redux/reducers/MessagesReducer";
import loginReducer from "./redux/reducers/LoginReducer";
import thunk from "redux-thunk";
import searchReducer from "./redux/reducers/searchReducer";

const createRootReducers = combineReducers({
  messages: messagesReducer,
  loginData: loginReducer,

  resSearch: searchReducer
});

const composeMiddlewares = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const configureStore = () =>
  createStore(createRootReducers, persistedState, composeMiddlewares);

export default configureStore;
