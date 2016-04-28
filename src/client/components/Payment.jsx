import React, {Component} from 'react'

export default class Overview extends Component {
  constructor(props){
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault();
    // Scroll to the top of the page to show the status message.
    // document.getElementById('heading').scrollIntoView();
    // this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
    this.sendFormData();
    console.log('you made a payment!!')
  }

  sendFormData() {
    var formData = {
      recipient: React.findDOMNode(this.refs.last_name).value,
      amount: React.findDOMNode(this.refs.amount).value,
      confirmed: React.findDOMNode(this.refs.confirm).value
    }
    //make XMLHttpRequest()
  }

  render(){
    return(
      <div className='form-container'>
        <form action="" onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='last_name'>Recipient</label>
            <input type='text' className='form-control' placeholder='last name' name='last_name' ref='last_name'/>
          </div>
          <div className='form-group'>
            <label htmlFor='amount'>Amount (hours)</label>
            <input type='amount' className='form-control spec' placeholder='0' name='amount' ref='amount'/>
          </div>
          <div className='checkbox'>
            <label>
              <input type='checkbox' name='confirm' ref='confirm'/>The above information is correct
            </label>
          </div>
          <button type='submit' className='btn btn-default'>Submit</button>
        </form>
      </div>
    )
  }
}
