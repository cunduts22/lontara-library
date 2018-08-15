import { 
    USER_AUTH, 
    SUCCESS_AUTH, 
    FAILED_AUTH, 
    CHECK_AUTH, 
    UNAUTHORIZATION, 
    AUTHORIZATION
} from '../types'

export const userLogin = (payload) => {
    return {
        type: USER_AUTH,
        payload
    }
}

export const authSuccess = (response) => {
    console.log(response)
    return {
        type: SUCCESS_AUTH,
        response
    }
}

export const authFailed = (error) => {
    return {
        type: FAILED_AUTH,
        error
    }
}

export const checkAuth = () => {
    return {
        type: CHECK_AUTH
    }
}

export const notAuth = (error) => {
    return {
        type: UNAUTHORIZATION,
        error
    }
}

export const authenticated = (response) => {
    console.log(response)
    return {
        type: AUTHORIZATION,
        response
    }
}