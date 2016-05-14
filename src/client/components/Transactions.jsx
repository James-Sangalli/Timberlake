import React, {Component} from 'react'
import request from 'superagent'
import Transaction from './Transaction'

export default class Transactions extends Component {
  constructor(props){
    super(props)
  }
  // componentDidMount(){
  //   this.updateLog()
  // }
  // updateLog(){
  //   request.get('/api/user/history').end(function(err, res){
  //     console.log('error', err)
  //     var data = JSON.parse(res.text)
  //     this.setState({ transactions: data })
  //     console.log("state", this.state)
  //   }.bind(this))
  // }

  render(){
    console.log('state at render', this.props)
    return(
      <div>
        <h2>Transaction Log</h2>
        {this.props.logs[0]? this.props.logs.map((transaction, i) => {
          return <Transaction key={i} data={transaction} />
        }) : ''}

      </div>
    )
  }
}
