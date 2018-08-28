import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
// import Card from './components/Card'
import Demo from './containers/Demo'

render(
  <Provider store={configureStore}>
    <Demo />
  </Provider>,
  document.getElementById('app'),
)