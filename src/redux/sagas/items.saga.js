import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchItems() {
    try {
        
        const items = yield axios.get('/api/shelf');
        console.log( 'response - ', items );
        yield put({ type: 'SET_ITEMS', payload: items.data });
    } catch (error) {
        console.log('Error in GET all items - ', error);
        alert('Something went wrong!');
    }
}

function* itemsSaga() {
    yield takeEvery('FETCH_ITEMS', fetchItems);
}

export default itemsSaga;