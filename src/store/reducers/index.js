import { combineReducers } from 'redux-immutable'
import userReducer from './user'
import fetchDataExampleReducer from './fetchDataExample'
import duck from '../HOCDucks/list'

const reducers = combineReducers({
  user: userReducer,
  duckEx: duck('children').reducer,
  fetchExample: fetchDataExampleReducer,
})

export default reducers