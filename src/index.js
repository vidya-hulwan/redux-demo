import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'
import rootReducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(rootReducer)

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  )
