import React, { useState } from 'react'
import { LoginAsset } from '../../shared/assets'

const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  console.log(email, password)

  return (
    <div className='flex flex-col md:flex-row h-screen'>
      <div className='hidden md:block md:w-2/3'>
        <img
          src={LoginAsset}
          alt='Login'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='md:w-1/3 flex items-center justify-center bg-gray-50 sm:w-full sm:flex sm:items-center sm:justify-center'>
        <form className='w-4/5 md:w-3/4 lg:w-2/3 bg-white p-6 rounded-2xl shadow-md'>
          <div className='flex flex-row items-center'>
            <h2 className='text-2xl font-thin mb-6 font-Poppins'>Login to</h2>
            <h2 className='text-2xl font-light mb-6 ml-1 font-Poppins'>Shopper</h2>
          </div>
          <div className='mb-4'>
            <p className='font-Poppins font-extralight text-gray-500'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias rerum ea quasi?
            </p>
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 font-medium mb-2 font-Poppins'>
              Email
            </label>
            <input
              className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
              placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='example@mail.com'
              type='email'
              name='email'
              autoComplete='email'
              value={email}
              onChange={(event) => setFormValue(event, setEmail)}
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block text-gray-700 font-medium mb-2 font-Poppins'>
              Password
            </label>
            <input
              className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
              placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='******'
              type='password'
              name='password'
              autoComplete='current-password'
              value={password}
              onChange={(event) => setFormValue(event, setPassword)}
            />
          </div>
          <div className='mb-6'>
            <button
              type='submit'
              className='w-full py-2 px-4 bg-blue-400 hover:bg-white hover:text-blue-400 hover:border-blue-400 hover:border-2 text-white font-medium rounded focus:outline-none transition-colors duration-300 font-Poppins'
            >
              Log in
            </button>
          </div>
          <div className='flex flex-row mb-6'>
            <p className='font-Poppins font-extralight text-gray-700'>Are you new in Shopper?</p>
            <p className='ml-1 text-blue-400 font-Poppins'>Come & Join to us.</p>
          </div>
        </form>
      </div>
    </div>
  );
}

const setFormValue = (event, setMethod) => {
  setMethod(event.target.value)
}

export default Login
