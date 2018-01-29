import registerServiceWorker from './registerServiceWorker'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './containers/app'
import React from 'react'
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App/>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)

registerServiceWorker()