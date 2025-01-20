import React from 'react'

const CommpletTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
           <h3 className='bg-red-600 text-sm py-1 rounded'>High</h3>
           <h4 className='text-base'>20 feb 2024</h4>
        </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
           <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloremque temporibus atque debitis impedit et.
           </p>
          <div className='flex justify-between mt-4'>
            <button className='bg-green-500 w-full'>completed</button>
           
          </div>
      </div>
  )
}

export default CommpletTask