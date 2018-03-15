/**
 * React
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Redux
 */
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router'

/**
 * create-react-app service worker
 */
import registerServiceWorker from './registerServiceWorker';

/**
 * Store and history
 */
import { store, history } from './core/store';

/**
 * Containers
 */
import Example from './views/containers/Example/container';

/**
 * Global css file
 */
import './main.css';

/**
 * Main render function
 */
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route exact path="/" component={Example} />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
