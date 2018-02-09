import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';
import rootSagas from './sagas';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
];

export const store = createStore(
    rootReducer(),
    applyMiddleware(...middlewares)
);

store.runSaga = sagaMiddleware.run;
store.runSaga(rootSagas);