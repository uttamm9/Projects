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
  const [loggedINUserData, setloggedINUserData] = useState(null)
  const authdata = useContext(Authcontext)

  // useEffect(() => {
  //   if(authdata){
  //     const loggedInUser = localStorage.getItem('loggedInUser')
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
   
  // }, [authdata])
  

  const handleLogin = (email,password)=>{
    // console.log(email,password)
    if(email=='admin1@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authdata ){
      const employee = authdata.employees.find((e)=>e.email==email&&e.password==password )

      if(employee){
        setUser('employee')
        setloggedINUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      }
    }
    else{
      alert('somthing went wrong')
    }
  }
  // handleLogin('user12@us.com',321)

  return (
    <>
    {!user ? <Login handleLogin = {handleLogin}/>:''} 
    {/* if user not exist open login page otherwise null */}
    {user == 'admin' ? <AdminDashboard/>:(user=='employee'?<EmployeeDashboard data = {loggedINUserData}/>:null)}
     {/* <Login/> */}
     {/* <EmployeeDashboard/> */}
     {/* <AdminDashboard/> */}
     
    </>
  )
}

export default App
