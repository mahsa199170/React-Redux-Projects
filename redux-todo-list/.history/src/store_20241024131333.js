import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  //this contains all reducers
});

const initialState = {};

const middleWare = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composWithDevTools(applyMiddleware(...middleWare))
);
