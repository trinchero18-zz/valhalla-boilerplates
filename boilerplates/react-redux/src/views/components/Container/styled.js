import styled from 'styled-components';

export const ContainerStyled = styled.div`
    position: relative;
    top: 80px;
    left: 50px;
    height: calc(100vh - 130px);
    width: calc(100% - 100px);
    padding: 25px;
    overflow-y: auto;
    overflow-x: hidden;
`;

ContainerStyled.displayName = 'ContainerStyled';
