import Example from './main';

import { connect } from 'react-redux';

import { exampleActionCreator } from 'core/Example/action';
import { exampleSelector } from 'core/Example/selector';

function mapStateToProps (state) {
    return {
        title: exampleSelector(state)
    };
}

const mapDispatchToProps = { exampleActionCreator };

export default connect(mapStateToProps, mapDispatchToProps)(Example);
