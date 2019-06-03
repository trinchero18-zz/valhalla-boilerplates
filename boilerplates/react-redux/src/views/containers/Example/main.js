import { Container } from '../../components/Container';
import { Layout } from '../../components/Layout';

import React from 'react';

import logo from '../../../assets/valhalla-logo.png';

import { string } from 'prop-types';

const Example = ({ title }) => (
    <Layout>
        <Container>
            <img alt={ title } src={ logo } />
        </Container>
    </Layout>
);

Example.propTypes = {
    title: string
};

Example.defaultProps = {
    title: ''
};

export default Example;
