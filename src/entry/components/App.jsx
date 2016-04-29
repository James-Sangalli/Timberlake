import React, {Component} from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <h1>Timeberlake Bank</h1>
        <h2>Login Details</h2>
        <form method='post' action='/api/users'>
          <label htmlFor='last_name'>Last Name</label>
          <input type='text' placeholder='last name' name='last_name'/>
          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='password' name='password'/>
          <input type='submit' name='login'/>
        </form>
        <button>Register</button>
        <a href='/client'>Go to client</a>
      </div>
    )
  }
}
