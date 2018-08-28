import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index'
import fetchMiddleware from '../middleware/fetchMiddleware'

const middleware = [thunk, fetchMiddleware]
const enhancers = []

const configureStore = createStore(
  reducers,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(
      applyMiddleware(
        ...middleware,
        ...enhancers,
      ),
    )
    : compose(
      applyMiddleware(
        ...middleware,
        ...enhancers,
      ),
    ),
)

export default configureStore