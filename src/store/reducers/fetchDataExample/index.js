import { fromJS } from 'immutable'
import { API_REQUEST } from '../../../middleware/fetchMiddleware'


const FETCH_EXAMPLE = '/api/example'
const FETCH_EXAMPLE_SUCCESS = '/api/example/success'
const FETCH_EXAMPLE_FAIL = '/api/example/fail'

const initState = fromJS({
  isFetching: false,
  data: [],
})

export const fetchDataExample = (url, reqData) => dispatch => (
  dispatch({
    [API_REQUEST]: {
      types: [
        FETCH_EXAMPLE,
        FETCH_EXAMPLE_SUCCESS,
        FETCH_EXAMPLE_FAIL,
      ],
      url,
      reqData,
    },
  })
)


const fetchDataExampleReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_EXAMPLE:
      return state.set('isFetching', true)
    case FETCH_EXAMPLE_SUCCESS:
      return state
        .set('data', action.payload)
        .set('isFetching', false)
    case FETCH_EXAMPLE_FAIL:
      return state.set('isFetching', false)
    default:
      return state
  }
}

export default fetchDataExampleReducer