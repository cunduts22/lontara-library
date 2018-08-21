import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects'
import { getAllBooks } from './book.api';
import { FETCH_SUCCESS, FETCH_FAILED, FETCH_BOOK } from '../types';


function* getBooks(action) {
    try {
        const {response, error} = yield call(getAllBooks, action.pages)
        if(response) {
            yield put({type: FETCH_SUCCESS, response: response.data})
        } else {
            yield put({type: FETCH_FAILED, error})
        }
    } catch (error) {
        console.log(error)
    }
}

export function* bookSaga() {
    yield takeLatest(FETCH_BOOK, getBooks)
}