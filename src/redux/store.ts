import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

let PreloadedState = JSON.parse(localStorage.getItem("redux") || "{}");

export const store = createStore(
  reducer,
  // PreloadedState,                    //causes unsolvable for me Error
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export type AppState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  window.localStorage.setItem("redux", JSON.stringify(store.getState()));
});
