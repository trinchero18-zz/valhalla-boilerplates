import { Container } from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Container />', () => {
    
    const children = 'children';
    let container;

    beforeEach(() => {
        container = shallow(
            <Container>{ children }</Container>
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
