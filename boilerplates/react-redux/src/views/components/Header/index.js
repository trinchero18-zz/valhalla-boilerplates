import React from 'react';
import styled from 'styled-components';

export const Header = () => (
    <Container>
        <h1>Header</h1>
    </Container>
);

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    position: fixed;
    top: 0;
    height: 60px;
    width: calc(100% - 50px);
    padding: 10px 25px;
    z-index: 999;
    color: #FAFAFA;
`;

Container.displayName = 'Container';
Header.displayName = 'Header';