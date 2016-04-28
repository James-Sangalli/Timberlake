import React, {Component} from 'react'
import routes from '../routes'
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
      </div>
    )
  }
}