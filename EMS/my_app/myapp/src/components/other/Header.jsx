import React from 'react'
import { useState, useEffect } from 'react'
const Header = (props) => {
  console.log(props)
  // const [userName, setUserName] = useState('')
  // useEffect(() => {
  //   if(data){
  //     setUserName(data.firstname)
  //   }
  //   else{
  //     setUserName('Admin')
  //   }
  // }, [data])

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    // window.location.reload()
    props.changeUser(null)
  }
  return (
    <div className='flex items-end justify-between py-5'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data.firstname} 👋</span> </h1>
      <button onClick={logOutUser} className='bg-red-700 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header