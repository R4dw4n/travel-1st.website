import React from 'react'
// import '../../App.css'
import Button from '../Button'
import './SignUp.css'


function SignUp() {
  return (
    <form className='sign-up'>
      <h3>Login</h3>

      <label Htmlfor="username">Username</label>
        <input className='sign-up-input' type="text" placeHolder="Email or Phone" id="username" />

        <label Htmlfor="password">Password</label>
        <input className='sign-up-input' type="password" placeHolder="Password" id="password" />

        <Button buttonStyle="btn--login" buttonSize="btn--medium">Login</Button>
    </form>
  )
}

export default SignUp