import { USER_AUTH, FAILED_AUTH, USER_DATA, FAIL_FETCH_USER } from "../types";

const userReducers = (state = {}, action) => {
    switch (action.type) {
        case USER_AUTH :
            return {
                ...state,
                payload: action.payload
            }
        case FAILED_AUTH :
            return {
                ...state,
                error: action.error
            }
        case USER_DATA :
            return {
                ...state,
                data: action.response
            }
        case FAIL_FETCH_USER :
            return {
                ...state,
                error: action.error
            }
        default : 
            return state
    }
}

export default userReducers