/* @flow */
import { fromJS } from 'immutable'

export const CHANGE_NAME = 'CHANGE_NAME'

export const changeName = (value: string) => ({
  type: CHANGE_NAME,
  payload: value,
})

// flow types
type User = {
  name: string
}

type Action = {
  type: string,
  payload: string,
}

type initStateType = fromJS<User>

// initState
const initState = fromJS(
  {
    name: '',
  },
)

const userReducer = (state: initStateType = initState, action: Action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return state.set('name', action.payload)
    default:
      return state
  }
}

export default userReducer