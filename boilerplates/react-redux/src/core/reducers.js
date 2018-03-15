import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { exampleReducer } from './Example/reducer';

export default function rootReducer() {
  return combineReducers({
    router: routerReducer,
    example: exampleReducer
  });
};