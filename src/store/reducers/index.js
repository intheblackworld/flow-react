import { combineReducers } from 'redux-immutable'
import userReducer from './user'

const reducers = combineReducers({
  user: userReducer,
})

export default reducers