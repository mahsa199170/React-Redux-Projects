import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  //this contains all reducers
});

const initialState = {};

const middleWare = [thunk];

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
);
