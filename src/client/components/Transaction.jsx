import React, {Component} from 'react'
import request from 'superagent'

export default class Transaction extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

  render(){

    return(
      <div>
        <p>{this.props.data.payee}</p>
        <p>{this.props.data.transaction}</p>
      </div>
    )
  }
}
