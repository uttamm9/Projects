import React from 'react'

const CreateTask = () => {
  return (
    <div className=' bg-[#1c1c1c] mt-7 rounded p-5'>
    <form className='flex flex-wrap w-full items-start justify-between rounded'>
     <div className='w-1/2'>
     <div><h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
     <input className='text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 ' type="text" placeholder='make a UI design' /></div>

     <div>
    <h3 className='text-sm text-gray-300 mb-0.5' >Date</h3>
    <input className='text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 ' type="date"/>
    </div>

    <div>
    <h3 className='text-sm text-gray-300 mb-0.5'>Asing to</h3>
    <input className='text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 ' type="text" placeholder='Employee name'/>
    </div>

    <div>
    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
    <input className='text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 ' type="text" placeholder='design,dev,etc'/>
    </div>

     </div>
    
    
    <div className='w-2/5 fle-col items-start'>
    <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
    <textarea className='w-full h-44 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" clo="30" rows="10"></textarea>
    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rou text-sm mt-4 w-full'>Create task</button>
    </div>
    </form>
  </div>
  )
}

export default CreateTask