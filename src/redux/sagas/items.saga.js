import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems() {
    try {
        const response = axios.get('/api/item');
        yield put({ type: 'SET_ITEMS', payload: response.data});
    } catch (error) {
        console.log('Error in GET all items - ', error);
        alert('Something went wrong!');
    }
}

function* itemsSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems);
}

export default itemsSaga;