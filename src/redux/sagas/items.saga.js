import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems() {
    try {

    } catch {

    }
}

function* itemsSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems);
}

export default itemsSaga;