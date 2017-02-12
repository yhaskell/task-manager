import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import AppRoot from './components/app-root'
import store from './store'


import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('root')
)
