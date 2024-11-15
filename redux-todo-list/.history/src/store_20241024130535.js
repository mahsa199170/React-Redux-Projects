import { createStore, combileReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName:
      return { ...state, ...payload };

    default:
      return state;
  }
};
