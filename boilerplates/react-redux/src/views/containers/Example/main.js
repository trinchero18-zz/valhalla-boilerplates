import { Container } from '../../components/Container';
import { Layout } from '../../components/Layout';

import logo from '../../../assets/valhalla-logo.png';

import { string } from 'prop-types';
import React, { Component } from 'react';

class Example extends Component {

    static propTypes = {
        title: string
    }

    static defaultProps = {
        title: ''
    }

    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        const { title } = this.props;
        
        return (
            <Layout>
                <Container>
                    <img alt={ title } src={ logo } />
                </Container>
            </Layout>
        );
    }

}

export default Example;
