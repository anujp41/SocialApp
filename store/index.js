import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import users from './users';
import recipes from './recipes';

const reducers = combineReducers({ users, recipes })
const middleware = applyMiddleware(thunkMiddleware, logger);

const store = createStore(reducers, middleware);

export default store;

export * from './users';