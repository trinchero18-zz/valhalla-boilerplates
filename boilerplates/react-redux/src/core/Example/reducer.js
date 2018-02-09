import { Record } from 'immutable';

const NewRecord = new Record({
    example: null,
});

export function exampleReducer(state = new NewRecord(), { type, payload }) {
    switch (type) {
        case 'EXAMPLE_SET':
        return state.set('example', payload);
        
        default:
        return state;
    }
}