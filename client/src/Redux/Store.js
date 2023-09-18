import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { todosReducers } from './Reducers/todosReducers';

const reducer = combineReducers({
  todos: todosReducers
});

const middleware = [thunk];

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
