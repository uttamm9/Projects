import React from 'react'

const AcceptTask = ({task}) => {
  console.log(task.taskTitle)
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
           <h3 className='bg-red-600 text-sm py-1 rounded'>{task.category}</h3>
           <h4 className='text-base'>{task.taskDate}</h4>
        </div>
           <h2 className='mt-5 text-2xl font-semibold'>{task.taskTitle}</h2>
           <p className='text-sm'>
            {task.taskDescription}
           </p>
          <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
          </div>
      </div>
  )
  //update
}

export default AcceptTask