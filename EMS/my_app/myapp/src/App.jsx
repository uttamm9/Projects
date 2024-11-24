import { useContext, useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/Localstorage'
import { Authcontext } from './context/AuthProvider'


function App() {
  // useEffect(() => {
  // // setLocalStorage()
  // getLocalStorage()
   
  // },)
  const [user, setUser] = useState(null)

  const handleLogin = (email,password)=>{
    // console.log(email,password)
    if(email=='admin1@me.com' && password == '123'){
      setUser('admin')
    }else if(email == 'user12@us.com' && password == '321'){
      setUser('employee')
    }
    else{
      alert('somthing went wrong')
    }
  }
  // handleLogin('user12@us.com',321)
  const data = useContext(Authcontext)

  return (
    <>
    {!user ? <Login handleLogin = {handleLogin}/>:''} 
    {/* if user not exist open login page otherwise null*/}
    {user == 'admin' ? <AdminDashboard/>:<EmployeeDashboard/>}
     {/* <Login/> */}
     {/* <EmployeeDashboard/> */}
     {/* <AdminDashboard/> */}
     
    </>
  )
}

export default App
