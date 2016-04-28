import React, {Component} from 'react'
import request from 'superagent'

export default class Overview extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  render(){
    return(
      <div>
        <h2>Hello xxx</h2>
        <h3>Your balance is xxx</h3>
        <h4>Would you like to:</h4>
        <p>Make a payment</p>
        <p>View transactions</p>
      </div>
    )
  }
}
