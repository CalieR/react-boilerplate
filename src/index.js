import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'
import DefaultErrorBoundary from './DefaultErrorBoundary'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)

// React.StrictMode will warn if any deprecated lifecycle methods are being used

// DefaultErrorBoundary will catch any exception thrown in the component tree, rendering an alternate UI so users aren't left with a blank screen
