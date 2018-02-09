import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default function rootReducer() {
  return combineReducers({
    router: routerReducer,
  });
};