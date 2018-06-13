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

        it('always render Header', () => {
            const header = layout.find('Header');
            expect(header).toHaveLength(1);
        });

        it('always render Sidebar', () => {
            const sidebar = layout.find('Sidebar');
            expect(sidebar).toHaveLength(1);
        });

        it('should render children', () => {
            expect(layout.prop('children')[2]).toBe('children');
        });

    });

});
