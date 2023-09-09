import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';

import { todosReducers } from './Reducers/todosReducers';
const reducer = combineReducers({
    todos: todosReducers
})
const middleware = [thunk];

export const Store = configureStore({
    reducer: reducer, // Pass the above resucer
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  });
export default Store;