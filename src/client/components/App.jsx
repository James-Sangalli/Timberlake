import React, {Component} from 'react'
import Overview from './Overview.jsx'
import Transactions from './Transactions.jsx'

export default class Client extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <div id='overview'><Overview /></div>
        <div id='transactions'><Transactions /></div>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
      </div>
    )
  }
}