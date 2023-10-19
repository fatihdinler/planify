import React from 'react'
import { Input, Button } from '../../components'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='min-vh-100 d-flex align-items-center' style={{ backgroundColor: '#6495ED' }}>
      <div className='my-5 w-25  bg-white rounded-3 mx-auto p-3'>
        <div className='mb-4'>
          <h3>Login</h3>
          <p>Login into your account to continue</p>
        </div>
        <Input
          placeholder='johndoe@mail.com'
          helperText='Username'
          type='email'
        />
        <Input
          helperText='Password'
          placeholder='******'
          type='password'
        />
        <Link to='/admin'>
          <Button
            content='Login'
            style={{ color: 'white', backgroundColor: '#6495ED' }}
          />
        </Link>
        <Link to='/forgot-password'>
          <Button
            content='Forgot Password'
            style={{ color: '#6495ED', borderColor: '#6495ED', marginTop: 15 }}
          />
        </Link>
      </div>
    </div>
  )
}

export default Login