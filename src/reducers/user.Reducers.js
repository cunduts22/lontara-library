import { USER_AUTH, FAILED_AUTH, SUCCESS_AUTH, UNAUTHORIZATION, AUTHORIZATION } from "../types";

const userReducers = (state = {}, action) => {
    switch (action.type) {
        case USER_AUTH :
            return {
                ...state,
                payload: action.payload
            }
        case FAILED_AUTH :
            // console.log(action)
            return {
                ...state,
                error: action.error
            }
        case SUCCESS_AUTH :
            return action.response ? localStorage.setItem('token',action.response.data.token) : null
        case AUTHORIZATION : 
            return {
                ...state,
                auth: action.response
            }
            
        case UNAUTHORIZATION :
            return {
                ...state,
                error: action.response
            }
        default : 
            return state
    }
}

export default userReducers