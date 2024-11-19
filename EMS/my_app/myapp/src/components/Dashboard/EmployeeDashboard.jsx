import React from 'react'
import Header from '../other/Header'
import TaskNumbers from '../other/TaskNumbers'
import TaskList from '../Tasklist/TaskList'
const EmployeeDashboard = () => {
  return (
    <div>
      <div className='p-10 bg-[#1c1c1c] h-screen'> 
        <Header/>
        <TaskNumbers/>
        <TaskList/>
      </div>
    </div>
  )
}

export default EmployeeDashboard