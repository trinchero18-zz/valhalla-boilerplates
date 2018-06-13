import { ContainerStyled } from './styled';
import React from 'react';
import { any } from 'prop-types';

export const Container = ({ children }) => (
    <ContainerStyled>
        { children }
    </ContainerStyled>
);

Container.propTypes = {
    children: any
};

Container.displayName = 'Container';
