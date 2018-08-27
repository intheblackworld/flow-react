import { combineReducers } from 'redux-immutable'
import userReducer from './user'
import duck from '../HOCDucks/list'

const reducers = combineReducers({
  user: userReducer,
  duckEx: duck('child').reducer,
})

export default reducers