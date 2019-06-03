import { combineReducers } from 'redux';
import { exampleReducer } from './Example/reducer';
import { routerReducer } from 'react-router-redux';

export default function rootReducer () {
    return combineReducers({
        example: exampleReducer,
        routing: routerReducer
    });
}
