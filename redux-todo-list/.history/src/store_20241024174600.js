import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TodoReducer } from './reducer/TodoReducer';
import countReducer from './slice/countSlice';

const reducer = combineReducers({
  todo: TodoReducer,
  counter: countReducer,
});

const initialState = {};

const middleWare = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
