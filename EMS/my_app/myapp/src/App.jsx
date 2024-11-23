import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/Localstorage'


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
  // setLocalStorage()
  getLocalStorage()
   
  },)
  

  return (
    <>
     <Login/>
     {/* <EmployeeDashboard/> */}
     {/* <AdminDashboard/> */}
     
    </>
  )
}

export default App
