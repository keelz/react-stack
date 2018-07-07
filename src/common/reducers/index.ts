import { combineReducers } from 'redux';
import { responsiveStateReducer as browser } from 'redux-responsive';

const rootReducer = combineReducers({
  browser,
});

export default rootReducer;
