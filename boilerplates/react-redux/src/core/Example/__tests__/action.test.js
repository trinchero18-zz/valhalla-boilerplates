import {
    EXAMPLE_ACTION
} from '../../types';
import { exampleActionCreator } from '../action';

describe('Example action', () => {

    it('exampleActionCreator', () => {
        const result = exampleActionCreator();
        expect(result).toEqual({
            type: EXAMPLE_ACTION
        });
    });
    
});
