import React from 'react'
import {render} from 'react-dom'
import App from './components/App.jsx'

import {Router, Route} from 'react-router'

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/payment' component={Overview}/>
    </Route>
  </Router>
  , document.getElementById('main')
)
