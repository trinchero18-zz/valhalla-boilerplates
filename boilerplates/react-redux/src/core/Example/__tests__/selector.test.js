import { Record } from 'immutable';
import { exampleReducer } from '../reducer';
import { exampleSelector } from '../selector';

const title = 'Welcome to Valhalla - React/Redux boilerplate';

const defaultState = new Record({
    title
});

describe('Messages selector', () => {
    const newState = exampleReducer(new defaultState(), {});
    const store = { example: newState };
    const result = exampleSelector(store);

    it('should return messages', () => {
        expect(result).toEqual(title);
    });

});
