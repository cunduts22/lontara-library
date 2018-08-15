import {put, call, takeLatest} from 'redux-saga/effects'
import {SUCCESS_AUTH, FAILED_AUTH,USER_AUTH, AUTHORIZATION, UNAUTHORIZATION, CHECK_AUTH} from '../types'
import {authUser, checkAuthentication} from './api'

function* login(action) {
    try {
        const {response, error} = yield call(authUser,action.payload)
        if(response) {
            yield put({type: SUCCESS_AUTH, response})         
            window.location.replace('/')
        } else {
            yield put({type: FAILED_AUTH, error: error.response})
        }

    } catch(error) {
        console.log('error')
        yield put({type: FAILED_AUTH, error: error.response})        
    }
}

function* authorization() {
    try {
        const {response, error} = yield call(checkAuthentication)
        if(response) {
            yield put({type: AUTHORIZATION, response});
        } else {
            yield put({type: UNAUTHORIZATION, response: error.response.data ? error.response.data : error.response})
        }
    } catch (error) {
        console.log(error)
    }
}

export function* userSaga() {
    yield takeLatest(USER_AUTH, login)
    yield takeLatest(CHECK_AUTH, authorization)
}