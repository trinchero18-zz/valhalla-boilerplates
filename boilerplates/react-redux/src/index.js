import './main.css';
import { ConnectedRouter } from 'react-router-redux';

import Example from './views/containers/Example';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import { history, store } from './core/store';

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Route exact component={ Example } path="/" />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
