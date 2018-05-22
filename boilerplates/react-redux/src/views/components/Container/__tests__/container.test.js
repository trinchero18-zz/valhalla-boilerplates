import React from 'react';
import { shallow } from 'enzyme';

import { Container } from '../index';

describe('<Container />', () => {
    const props = {
        children: 'children'
    };
    let container;

    beforeEach(() => {
        container = shallow(
            <Container>{props.children}</Container>
        );
    });

    describe('render', () => {

        it('always render ContainerStyled', () => {
            const containerStyled = container.find('ContainerStyled');
            expect(containerStyled).toHaveLength(1);
        });

        it('should have children', () => {
            expect(container.prop('children')).toBe('children');
        });

    });

});