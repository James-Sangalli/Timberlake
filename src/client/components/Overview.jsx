import React, {Component} from 'react'
import request from 'superagent'
import NavLink from './Navlink'

export default class Overview extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: '',
      name: ''
    }
  }

  componentDidMount(){
    request.get('/api/users/1').end(function(err, res){
      var { first_name, balance } = JSON.parse(res.text)[0]
      this.setState({ name: first_name, balance: balance })
    }.bind(this))

  }

  render(){
    return(
      <div>
        <h2>Hello {this.state.name}</h2>
        <h3>Your balance is {this.state.balance}</h3>
        <h4>Would you like to:</h4>
        <ul role="nav">
          <li><NavLink to="/transactions">View Transaction History</NavLink></li>
          <li><NavLink to="/payment">Make a Payment</NavLink></li>
        </ul>
      </div>
    )
  }
}
