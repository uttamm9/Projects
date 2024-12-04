import React from 'react'

const Header = ({data}) => {
  // console.log(data)
  return (
    <div className='flex items-end justify-between py-5'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data.firstname} 👋</span> </h1>
      <button className='bg-red-700 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header