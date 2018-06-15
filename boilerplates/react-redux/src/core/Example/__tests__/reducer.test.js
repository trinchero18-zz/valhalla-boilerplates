import { Record } from 'immutable';
import { exampleReducer } from '../reducer';
import { CHAT_SET_ALL_MESSAGES, CHAT_SET_NEW_MESSAGE } from '../../types';

const defaultState = new Record({
    title: 'Welcome to Valhalla - React/Redux boilerplate'
});

describe('Example reducer', () => {

    it('should return default', () => {
        const result = exampleReducer(undefined, {});
        const record = new defaultState();
        expect(result.toJS()).toEqual(record.toJS());
    });

});
