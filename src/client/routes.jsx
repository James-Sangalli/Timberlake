import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import Payment from './components/Payment.jsx'
import Transactions from './components/Transactions.jsx'
import Overview from './components/Overview.jsx'

export default (
  <Router>
    <Route path='/' component={} />
    {/*<IndexRoute component={Transactions} />
    <Route path='/payment' component={Payment} />*/}
  </Router>
)