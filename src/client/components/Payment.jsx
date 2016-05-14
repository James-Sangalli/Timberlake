import React, {Component} from 'react'
import request from 'superagent'

export default class Overview extends Component {
  handleSubmit(e) {
    e.preventDefault();
    var formData = {
      last_name: this.refs.last_name.value,
      amount: this.refs.amount.value
    }
    request.post('/users/transaction')
           .send(formData)
           .end(()=>{
             this.props.handleTransition(formData.amount)
             this.refs.last_name.value=''
             this.refs.amount.value=0
           })
  }


  render(){
    console.log('this is fn',this.refs.last_name)
    return(
      <div className='form-container'>
        <form >
          <div className='form-group'>
            <label htmlFor='last_name'>Recipient</label>
            <input type='text' className='form-control' placeholder='last name' ref="last_name" name='last_name'/>
          </div>
          <div className='form-group'>
            <label htmlFor='amount'>Amount (hours)</label>
            <input type='amount' className='form-control spec' placeholder='0' ref="amount" name='amount'/>
          </div>
          <div className='checkbox'>
            <label>
              <input type='checkbox' name='confirm' required/>The above information is correct
            </label>
          </div>
          <input type='submit' className='btn btn-default' name='payment' onClick={this.handleSubmit.bind(this)}/>
        </form>
      </div>
    )
  }
}
