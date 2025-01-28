import React from 'react'
import Header from '../other/Header'
import TaskNumbers from '../other/TaskNumbers'
import TaskList from '../Tasklist/TaskList'
const EmployeeDashboard = (props) => {
  // console.log(data)
  return (
    <div>
      <div className='p-10 bg-[#1c1c1c] h-screen'> 
        <Header changeUser = {props.changeUser} data={props.data}/>
        <TaskNumbers data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard