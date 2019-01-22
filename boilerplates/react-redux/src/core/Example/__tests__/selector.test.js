import { exampleReducer } from '../reducer';
import { exampleSelector } from '../selector';

const title = 'Welcome to Valhalla - React/Redux boilerplate';

const defaultState = () => ({
    title
});

describe('Messages selector', () => {
    const newState = exampleReducer(defaultState(), {});
    const store = { example: newState };
    const result = exampleSelector(store);

    it('should return messages', () => {
        expect(result).toEqual(title);
    });

});
