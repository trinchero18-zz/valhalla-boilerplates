import { Layout } from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Layout />', () => {

    const children = 'children';
    let layout;

    beforeEach(() => {
        layout = shallow(<Layout>{ children }</Layout>);
    });

    describe('render', () => {

        it('should render children', () => {
            expect(layout.prop('children')).toEqual('children');
        });

    });

});
