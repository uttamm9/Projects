import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CommpletTask from './CommpletTask'

const TaskList = ({data}) => {
  // console.log(data)
  return (
    <div id = 'tasklist' className='h-[55%] flex items-center justify-start gap-5 flex-nowrap py-5 overflow-x-auto  bg-red-500 mt-10 rounded-xl'>

      {data.tasks.map((task) => {
        if(task.active){
          return <AcceptTask key={task.id} task={task} />
          } 
        if(task.newtask){
          return <NewTask key={task.id} task={task}/>
          }
        if(task.completed){
          return <CommpletTask key={task.id} task={task} />
          }
        if(task.failed){
          return <FailedTask key={task.id} task={task}/>
          }
        
    })}
     
    </div>
  )
}

export default TaskList