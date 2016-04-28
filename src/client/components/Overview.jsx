import React, {Component} from 'react'
import NavLink from './Navlink'

export default class Overview extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h2>Hi there im Overview</h2>
        <ul role="nav">
          <li><NavLink to="/transactions">View Transaction History</NavLink></li>
          <li><NavLink to="/payment">Make a Payment</NavLink></li>
        </ul>
      </div>
    )
  }
}