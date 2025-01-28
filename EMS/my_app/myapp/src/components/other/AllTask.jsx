import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(Authcontext)
  
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded '>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
          <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
          <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
          <h5 className='text-lg font-medium w-1/5 '>Completed Task</h5>
          <h5 className='text-lg font-medium w-1/5 '>Failed Task</h5>
        </div>
        <div className=''>
      {authData.employees.map((employee,idx) => {
        return (
        <div key={idx} className='border 2 border-emerald-300 mb-2 py-2 px-4 flex justify-between rounded'>
          <h2 className='text-lg font-medium w-1/5'>{employee.firstname}</h2>
          <h3 className='text-lg font-medium w-1/5 text-blue-400'>{employee.taskcount.newtask}</h3>
          <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{employee.taskcount.active}</h5>
          <h5 className='text-lg font-medium w-1/5 text-slate-300'>{employee.taskcount.completed}</h5>
          <h5 className='text-lg font-medium  w-1/5 text-red-700'>{employee.taskcount.failed}</h5>
        </div>
        )
      })}
      </div>
    </div>
  )
}

export default AllTask