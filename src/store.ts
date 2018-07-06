import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import ROUTES from './common/constants/routes';
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
  routerMiddleware(createBrowserHistory({ basename: ROUTES.BASE_ROUTE })),
].map(a => applyMiddleware(a));
enhancers.push(responsiveStoreEnhancer);

export const composedEnhancers = composeFunc().apply(null, enhancers);

export const store = createStore(rootReducer, {}, composedEnhancers);

export default store;
