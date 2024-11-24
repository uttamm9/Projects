import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {
  // console.log(handleLogin)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(`Email is ${email} and password is ${password}`);
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-500 p-20'>
          <form
          onSubmit={(e)=>{
              submitHandler(e)
          } }
           className='flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            required
             className=' outline-none bg-transparent border-2 border-emerald-500 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
            <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }} 
            required className=' outline-none bg-transparent border-2 border-emerald-500 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter your password'/>
            <button className='text-white mt-7 border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-500 text-xl py-3 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
          </form>
      </div>
    </div>
  )
}

export default Login