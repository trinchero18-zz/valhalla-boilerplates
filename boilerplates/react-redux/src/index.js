import './main.css';

import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';

import registerServiceWorker from './registerServiceWorker';

import routes from 'core/routes.config';
import { history, store } from './core/store.config';

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Fragment>
                {
                    routes.map(({ component, path }) =>
                        <Route
                            exact
                            component={ component }
                            key={ path }
                            path={ path }
                        />
                    )
                }
            </Fragment>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
