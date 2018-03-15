import React, { Component } from 'react';

import { Layout } from '../../components/Layout';
import { Container } from '../../components/Container';

class Example extends Component {

    constructor (props) {
        super(props);

        this.state = {
            
        };
    }

    render () {
        return (
            <Layout>
                <Container>
                    Example Container
                </Container>
            </Layout>
        )
    }

};

export default Example;