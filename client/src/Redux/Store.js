import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { todosReducers } from './Reducers/todosReducers';
import { filterReducers } from './Reducers/filterReducers';

const reducer = combineReducers({
  todos: todosReducers,
  currentFilter: filterReducers
});

const middleware = [thunk];

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
