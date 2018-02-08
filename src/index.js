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
 * Main container
 */
import { App } from './views/containers/App';
/**
 * Containers
 */
import Example from './views/containers/Example';

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
        <App>
            <Route exact path="/" component={Example} />
        </App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
