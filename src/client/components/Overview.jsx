import React, {Component} from 'react'
import request from 'superagent'
import NavLink from './Navlink'

export default class Overview extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: ''
    }
  }

  componentDidMount(){
    request.get('/api/getBalance/1').end(function(err, res){
      console.log(res.text)
      var balance = JSON.parse(res.text)[0].balance
      console.log(balance)
      this.setState({ balance: balance })
    }.bind(this))

  }

  render(){
    return(
      <div>
        <h2>Hello Olliexxx</h2>
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
