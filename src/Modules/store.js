import { createStore, applyMiddleware } from "redux"
// Logger with default options
import thunk from 'redux-thunk'
import reducer from "./Reducers"

const middlewares = [
  thunk,
]

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, applyMiddleware(...middlewares));
  return store;
}
