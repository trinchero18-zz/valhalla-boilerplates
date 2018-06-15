import Example from '../container';
import { Provider } from 'react-redux';
import React from 'react';
import { Record } from 'immutable';
import configureStore from 'redux-mock-store';
import { exampleReducer } from 'core/Example/reducer';
import saga from 'redux-saga';
import { shallow } from 'enzyme';

const title = 'Welcome to Valhalla - React/Redux boilerplate';

const defaultState = new Record({
    title
});

describe('Example container', () => {
    
    const middlewares = [saga];
    const mockStore = configureStore(middlewares);

    let newState;
    let store;
    let wrapper;

    beforeEach(() => {
        newState = exampleReducer(new defaultState(), {});
        store = mockStore({ example: newState });
        wrapper = shallow(<Example store={ store } />);
    });

    describe('mapDispatchToProps', () => {
        
        it('should have exampleActionCreator action dispatcher', () => {
            expect(wrapper.prop('exampleActionCreator')).toBeDefined();
        });

    });

    describe('mapStateToProps', () => {
        
        it('exampleSelector should set title as prop', () => {
            expect(wrapper.prop('title')).toEqual(title);
        });

    });

});
