import { 
    USER_AUTH, 
    FAILED_AUTH,
    USER_DATA,
    FETCH_USER,
    FAIL_FETCH_USER,
    IMAGES_UPLOAD,
    EDIT_USER,
    FETCH_SUCCESS,
    CLEAR_PROGRESS,
    SUCCESS_FETCH,
    FETCH_FAILED,
    FETCH_BOOK
} from '../types'

export const userLogin = (payload) => {
    return {
        type: USER_AUTH,
        payload
    }
}

export const authFailed = (error) => {
    return {
        type: FAILED_AUTH,
        error
    }
}

export const getData = (response) => {
    return {
        type: USER_DATA,
        response
    }
}

export const fetchUser = () => {
    return {
        type: FETCH_USER
    }
}

export const failFetchUser = (error) => {
    return {
        type: FAIL_FETCH_USER,
        error
    }
}

export const fetchImages = (payload) => {
    return {
        type: IMAGES_UPLOAD,
        payload
    }
}

export const editUserProfile = (payload) => {
    return {
        type: EDIT_USER,
        payload
    }
}

export const fetchSuccess = (progress,loading) => {
    return {
        type: FETCH_SUCCESS,
        progress,
        loading
    }
}

export const clearProgress = (progress,loading) => {
    return {
        type: CLEAR_PROGRESS,
        progress,
        loading
    }
}

export const fetchBook = (pages) => {
    return {
        type: FETCH_BOOK,
        pages
    }
}

export const successFetch = (response) => {
    return {
        type: SUCCESS_FETCH,
        response
    }
}

export const failedFetch = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}