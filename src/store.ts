import { createStore, applyMiddleware, compose } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import thunk from 'redux-thunk';
import rootReducer from './common/reducers';

export const composeFunc = () => {
  return process.env.NODE_ENV === 'development'
  ? (() => {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools;
  })()
  : compose;
};

export const enhancers = [
  thunk,
].map(a => applyMiddleware(a));
enhancers.push(responsiveStoreEnhancer);

export const composedEnhancers = composeFunc().apply(null, enhancers);

export const store = createStore(rootReducer, {}, composedEnhancers);

export default store;
