import React from 'react';

import { Sidebar } from '../index';

import { shallow } from 'enzyme';

describe('<Sidebar>', () => {
    let sidebar;

    beforeEach(() => {
        sidebar = shallow(
            <Sidebar />
        );
    });

    describe('render', () => {
        
        it('always render Container', () => {
            const container = sidebar.find('Container');
            expect(container).toHaveLength(1);
        });

    });
});
