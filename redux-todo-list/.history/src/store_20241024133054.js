import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TodoReducer } from './reducer/TodoReducer';

const reducer = combineReducers({
  todo: TodoReducer,
});

const initialState = {};

const middleWare = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
