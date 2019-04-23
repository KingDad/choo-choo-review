import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import Train from './Train'

export const App = (props) => {
  return (
      <Router history={browserHistory}>
        <Route path="/trains/:id" component={Train} />
      </Router>
  )
}

export default App
