import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';


import rootReducer from './root-reducer';

const bindMiddleware = () => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(thunk));
  }
  return applyMiddleware(thunk);
};

const initStore = (initialState = {}) =>
  createStore(rootReducer, initialState, bindMiddleware());

export const store = initStore();

export const persistor = persistStore(store);



export default {store,persistor};
