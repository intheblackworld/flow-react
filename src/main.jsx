import * as React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './store/reducers/index'

// import Card from './components/Card'
import Admin from './containers/Admin'

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...[]),
  ),
)
render(
  <Provider store={store}>
    <Admin />
  </Provider>,
  document.getElementById('app'),
)