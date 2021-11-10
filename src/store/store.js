import { createStore, combineReducers, applyMiddleware } from "redux";
import { quoteReducer } from "../reducers/quote-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const globalReducer = combineReducers({ quote: quoteReducer });

export const store = createStore(
  globalReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
