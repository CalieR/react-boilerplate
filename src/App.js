import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default hot(module)(App)

// expression above calls a function with a function as an argument.  This returns a function which we then call with App as an argument
// same as:

// const hotFunction = hot(module)
// export default hotFunction(App)
