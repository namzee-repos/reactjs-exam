import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'

import store from './store'
import App from './App'

import registerServiceWorker from './registerServiceWorker'

import 'semantic-ui-css/semantic.min.css'
import './styles/index.css'
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
