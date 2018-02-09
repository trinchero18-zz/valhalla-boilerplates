import { call, put } from 'redux-saga/effects';

import axios from 'axios';

function get() {
    return axios.get(`/url here/`)
        .then(function ({data}) {
            return data;
        });
};

export function* getExample() {
    try {
        const data = yield call(get);
        
        yield put({ type: 'EXAMPLE_SET', payload: data });
    } catch (e) {
        console.log(e);
    }
};