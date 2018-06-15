import { Record } from 'immutable';

const defaultState = new Record({
    title: 'Welcome to Valhalla - React/Redux boilerplate'
});

export function exampleReducer (state = new defaultState(), { type, payload }) {
    switch (type) {
    
    default:
        return state;
    }
}
