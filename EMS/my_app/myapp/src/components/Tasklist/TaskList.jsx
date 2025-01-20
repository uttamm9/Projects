import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CommpletTask from './CommpletTask'

const TaskList = ({data}) => {
  return (
    <div id = 'tasklist' className='h-[55%] flex items-center justify-start gap-5 flex-nowrap py-5 overflow-x-auto  bg-red-500 mt-10 rounded-xl'>
      <AcceptTask/>
      <NewTask/>
      
      <CommpletTask/>
      <FailedTask/>

      
     
    </div>
  )
}

export default TaskList