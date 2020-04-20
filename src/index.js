import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, combineReducers } from "redux";

const personReducer = (state = {}, { type, payload }) => {
  if (type === "UPDATE_NAME") {
    return { name: payload };
  }
  return state;
};

const gameReducer = (state = {}, { type, payload }) => {
  if (type === "UPDATE_GAME") {
    return { name: payload };
  }
  return state;
};

const AllReducers = combineReducers({
  person: personReducer,
  game: gameReducer,
});

const store = createStore(AllReducers);

console.log(store.getState());

store.dispatch({ type: "UPDATE_NAME", payload: "Daddy Maxwell" });
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
