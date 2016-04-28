import React from 'react'
import {render} from 'react-dom'
import App from './components/App.jsx'
import Payment from './components/Payment.jsx'
import {Router, Route, hashHistory} from 'react-router'

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/payment' component={Payment}/>
    </Route>
  </Router>
  , document.getElementById('main')
)
