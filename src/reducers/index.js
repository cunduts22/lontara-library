import { combineReducers } from 'redux'
import userReducers from './user.Reducers'
const allReducers = combineReducers({
    userReducers
})

export default allReducers