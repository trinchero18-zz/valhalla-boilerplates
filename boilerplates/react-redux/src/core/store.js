import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSagas from './sagas';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';

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
