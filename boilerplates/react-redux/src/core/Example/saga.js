import axios from 'axios';
import { get } from './service';
import { call, put } from 'redux-saga/effects';

export function* getExample () {
    try {
        const data = yield call(get);
        yield put({ payload: data, type: 'EXAMPLE_SET' });
    } catch (e) {
        console.log(e);
    }
}
