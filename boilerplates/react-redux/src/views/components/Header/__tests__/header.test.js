import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../index';

describe('<Header />', () => {
    let header;

    beforeEach(() => {
        header = shallow(
            <Header />
        );
    });

    describe('render', () => {

        it('always render Container', () => {
            const container = header.find('Container');
            expect(container).toHaveLength(1);
        });

        it('always have <h1>', () => {
            const container = header.find("h1");
            expect(container).toHaveLength(1);
        })

    });

});