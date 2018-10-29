import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import reducer from './Reducer'

// redux thunk vs redux-saga
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;