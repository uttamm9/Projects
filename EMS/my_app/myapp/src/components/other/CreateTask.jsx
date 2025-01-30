import React from 'react'
import { useContext }  from 'react'
import { useState } from 'react'
import { Authcontext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData,setUserData] = useContext(Authcontext)

  const [taskTitle, setTaskTitle] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const [newtask, setNewTask] = useState({})
  
  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(taskTitle,date,assignTo,category,description)
    setNewTask({
      taskTitle,
      date,
      category,
      description,
      active:false,
      newtask:true,
      completed:false,
      failed:false
    })
    
    const data = userData

    data.forEach(function(employee){
      // console.log(employee.firstname)
      if(assignTo == employee.firstname){
        employee.tasks.push(newtask)
        employee.taskcount.newtask = employee.taskcount.newtask + 1
        console.log(employee)
      }
    })
    setUserData(data)
    console.log(data)

    // setTaskTitle('')
    // setDate('')
    // setAssignTo('')
    // setCategory('')
    // setDescription('')
  }
  return (
    <div className=' bg-[#1c1c1c] mt-7 rounded p-5'>
    <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-wrap w-full items-start justify-between rounded'>
     <div className='w-1/2'>
     <div><h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
     <input
     value={taskTitle}
     onChange={(e)=>{setTaskTitle(e.target.value)}}

     className='text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 ' type="text" placeholder='make a UI design' /></div>

     <div>
    <h3 className='text-sm text-gray-300 mb-0.5' >Date</h3>
    <input
    value={date}
    onChange={(e)=>{setDate(e.target.value)}}
     className='text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 ' type="date"/>
    </div>

    <div>
    <h3 className='text-sm text-gray-300 mb-0.5'>Asing to</h3>
    <input
     value={assignTo}
     onChange={(e)=>{setAssignTo(e.target.value)}}
    className='text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 ' type="text" placeholder='Employee name'/>
    </div>

    <div>
    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
    <input
    value={category}
    onChange={(e)=>{setCategory(e.target.value)}}
    className='text-sm py-1 px-2 w-4/5 rounded bg-transparent border-[1px] border-gray-400 ' type="text" placeholder='design,dev,etc'/>
    </div>

     </div>
    
    
    <div className='w-2/5 fle-col items-start'>
    <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
    <textarea 
     value={description}
     onChange={(e)=>{setDescription(e.target.value)}}
    className='w-full h-44 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" clo="30" rows="10"></textarea>
    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rou text-sm mt-4 w-full'>Create task</button>
    </div>
    </form>
  </div>
  )
}

export default CreateTask