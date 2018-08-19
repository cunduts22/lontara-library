import {put, call, takeLatest} from 'redux-saga/effects'
import { FAILED_AUTH,USER_AUTH, USER_DATA, FAIL_FETCH_USER, FETCH_USER, IMAGES_UPLOAD, EDIT_USER} from '../types'
import {authUser, getUser, changeImages, editUser} from './api'

function* login(action) {
    try {
        const {response, error} = yield call(authUser,action.payload)
        if(response) {
            window.localStorage.setItem('token', response.data.token)
            window.localStorage.setItem('id', response.data.userId)
            window.location.reload('/')
        } else {
            yield put({type: FAILED_AUTH, error: error.response})
        }

    } catch(error) {
        yield put({type: FAILED_AUTH, error})
    }
}

function* getData(action) {
    try {
        const {response, error} = yield call (getUser)
        if(response) {
            yield put({type: USER_DATA, response: response.data})
        } else {
            yield put ({type: FAIL_FETCH_USER, error})
        }
    } catch (error) {
        console.log(error)
    }
}

function* fetchImages(action) {
    try {
        const {response, error} = yield call (changeImages, action.payload)
        if(response) {
            yield put({type: FETCH_USER})
        } else {
            yield put ({type: FAIL_FETCH_USER, error})
        }
    } catch (error) {
        console.log(error)
    }
}

function* editUserData(action) {
    try {
        const {response, error} = yield call (editUser, action.payload)
        if(response) {
            yield put({type: FETCH_USER})
        } else {
            // yield put({type: FAIL_FETCH_USER, error})
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}

export function* userSaga() {
    yield takeLatest(USER_AUTH, login)
    yield takeLatest(FETCH_USER, getData)
    yield takeLatest(IMAGES_UPLOAD, fetchImages)
    yield takeLatest(EDIT_USER, editUserData)
}