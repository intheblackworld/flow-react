import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Router from './router/index'

render(
  <Provider store={configureStore}>
    <Router />
  </Provider>,
  document.getElementById('app'),
)