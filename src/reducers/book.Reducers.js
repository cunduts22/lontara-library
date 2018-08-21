import { 
    FETCH_FAILED,
    FETCH_SUCCESS
} from "../types";

const bookReducers = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SUCCESS :
            return {
                ...state,
                data: action.response
            }
        case FETCH_FAILED :
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default bookReducers