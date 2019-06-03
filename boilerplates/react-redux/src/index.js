import './main.css';

import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from 'core/routes.config';
import React, { Fragment } from 'react';
import { Route, Router } from 'react-router';

import { history, store } from './core/store.config';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
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
        </Router>
    </Provider>,
    rootElement
);

registerServiceWorker();
