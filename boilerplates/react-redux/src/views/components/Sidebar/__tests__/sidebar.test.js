import React from 'react';
import { shallow } from "enzyme";

import { Sidebar } from '../index';

describe('<Sidebar>', () =>{
    let sidebar;

    beforeEach(() => {
        sidebar = shallow(
            <Sidebar />
        );
    })

    describe('render', () => {
        
        it('always render Container', () => {
            const container = sidebar.find('Container');
            expect(container).toHaveLength(1);
        })

    })
})