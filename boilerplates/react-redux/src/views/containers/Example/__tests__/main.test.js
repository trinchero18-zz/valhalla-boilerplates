import Example from '../main';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Example />', () => {

    let example;

    beforeEach(() => {
        example = shallow(
            <Example />
        );
    });

    describe('render', () => {
        
        it('always render Layout', () => {
            const layout = example.find('Layout');
            expect(layout).toHaveLength(1);
        });

        it('always render Container', () => {
            const container = example.find('Container');
            expect(container).toHaveLength(1);
        });

    });

});
