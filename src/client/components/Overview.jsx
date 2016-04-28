import React, {Component} from 'react'
import request from 'superagent'

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
        <p>Make a payment</p>
        <p>View transactions</p>
      </div>
    )
  }
}
