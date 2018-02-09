import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from '../../components/Container';

class Example extends Component {

    constructor (props) {
        super(props);

        this.state = {
            
        };
    }

    render () {
        return (
            <Container>
                Example Container
            </Container>
        )
    }

};

function mapStateToProps(state) {
    return {
        
    };
};

const mapDispatchToProps = {  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Example);