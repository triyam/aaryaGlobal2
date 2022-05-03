/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

const Login = () => (
    <>
    
    <h2 className='m-3 text-center'>LOGIN PAGE</h2>
    <div className="col-md-6 mb-md-0 mb-2 mx-auto">
    <form method='POST' className="m-5" id='register-form'>

  <div className="form-group mb-3">
    <label htmlFor="email">Email</label>
    <input type="email" name='email' className="form-control" id="email" placeholder="Enter Your Email" 
    autoComplete="off"/>
  </div>
  
  <div className="form-group mb-3">
    <label htmlFor="password">Password</label>
    <input type="password" name='password' className="form-control" id="password" placeholder="Enter Your Password" 
    autoComplete="off"/>
  </div>

  <div className="form-group mb-3">
    <input type="submit" name='signin' className="btn btn-primary" id="signin" />
  </div>
  
</form>
</div>
</>
  )

export default Login