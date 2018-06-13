import { Container } from '../../components/Container';
import { Layout } from '../../components/Layout';

import React, { Component } from 'react';

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
        );
    }

}

export default Example;
