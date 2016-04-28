import React, {Component} from 'react'
import Overview from './Overview.jsx'
import Transactions from './Transactions.jsx'

export default class Client extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className='container'>
        <div id='overview'>
          <Overview />
          {this.props.children}
        </div>
      </div>
    )
  }
}
