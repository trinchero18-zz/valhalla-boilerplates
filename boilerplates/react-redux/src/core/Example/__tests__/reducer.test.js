import { exampleReducer } from '../reducer';

const defaultState = () => ({
    title: 'Welcome to Valhalla - React/Redux boilerplate'
});

describe('Example reducer', () => {

    it('should return default', () => {
        const result = exampleReducer(undefined, {});
        const record = defaultState();
        expect(result).toEqual(record);
    });

});
