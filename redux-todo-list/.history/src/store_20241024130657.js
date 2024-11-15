import { createStore, combileReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combileReducers({
  //this contains all reducers
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
);
