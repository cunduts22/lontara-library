import { combineReducers } from 'redux'
import userReducers from './user.Reducers'
import bookReducers from './book.Reducers'
const allReducers = combineReducers({
    userReducers,
    bookReducers
})

export default allReducers