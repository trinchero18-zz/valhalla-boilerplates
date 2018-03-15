import React from 'react';
import styled from 'styled-components';

export const Sidebar = () => (
    <Container>
        Sidebar
    </Container>
)

const Container = styled.div`
    position: fixed;
    top: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 80px);
    width: 50px;
    padding: 25px 0;
    z-index: 9999;
    background-color: #C4C4C4;
`;

Container.displayName = 'Container';
Sidebar.displayName = 'Sidebar';