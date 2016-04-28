import React, {Component} from 'react'

export default class Overview extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <form method='post' action='/'>
          <label htmlFor='last_name'>Recipient</label>
          <input type='text' placeholder='last name' name='last_name'/><br></br>
          <label htmlFor='amount'>Amount</label>
          <input type='amount' placeholder='0' name='amount'/>
          <p>hours</p>
          <label htmlFor='checkbox'>The above information is correct'</label>
          <input type='checkbox' name='confirm'/><br></br>
          <input type='submit' name='payment'/>
        </form>
      </div>
    )
  }
}