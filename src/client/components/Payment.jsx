import React, {Component} from 'react'

export default class Overview extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='form-container'>
        <form method='post' action='/'>
          <div className='form-group'>
            <label htmlFor='last_name'>Recipient</label>
            <input type='text' className='form-control' placeholder='last name' name='last_name'/>
          </div>
          <div className='form-group'>
            <label htmlFor='amount'>Amount (hours)</label>
            <input type='amount' className='form-control spec' placeholder='0' name='amount'/>
          </div>
          <div className='checkbox'>
            <label>
              <input type='checkbox' name='confirm'/>The above information is correct
            </label>
          </div>
          <input type='submit' className='btn btn-default' name='payment'/>
        </form>
      </div>
    )
  }
}