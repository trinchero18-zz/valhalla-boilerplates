import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer.root';
import rootSaga from './sagas.root';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
];

export const store = createStore(
    rootReducer(),
    applyMiddleware(...middlewares)
);

const browserHistory = createBrowserHistory();
export const history = syncHistoryWithStore(browserHistory, store);

store.runSaga = sagaMiddleware.run;
store.runSaga(rootSaga);
