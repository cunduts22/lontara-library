/**
 * yield all (@param array and fork(@param ourSagaMethod))
 */

import {all, fork} from 'redux-saga/effects'
import {userSaga} from './user.saga'
import {bookSaga} from './book.saga'
export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(bookSaga)
    ])
}