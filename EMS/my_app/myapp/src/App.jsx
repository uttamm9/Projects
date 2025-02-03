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
  const [userData,setUserData] = useContext(Authcontext)
  
  // useEffect(() => {
  //   if(authdata){
  //     const loggedInUser = localStorage.getItem('loggedInUser')
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
   
  // }, [authdata])
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    console.log('login-user',loggedInUser)
    if(loggedInUser){
      const user = JSON.parse(loggedInUser)
      console.log(user)
      setUser(user.role)
      setloggedINUserData(user.data)
    }
  }
  , [])

  const handleLogin = (email,password)=>{
    // console.log(email,password)
    if(email=='admin1@me.com' && password == '1234'){
      setUser('admin')
     const admin = 
      {
        firstname: 'Admin',
        email: 'admin1@me.com',
        role: 'admin'
      }
      console.log('admin-data',admin)
      setloggedINUserData(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }))
    }else if(userData){
      console.log('user employee',userData)
      const employee = userData.employees.find((e)=>e.email==email&&e.password==password )
      // const employee = userData.find((e)=>e.email==email&&e.password==password )

      if(employee){
        setUser('employee')
        setloggedINUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    }
    else{
      alert('somthing went wrong')
    }
  }
  // handleLogin('user12@us.com',321)
  // console.log('user data',userData.employees)
  console.log('loggd in user data',loggedINUserData)
  return (
    <>
    {!user ? <Login handleLogin = {handleLogin}/>:''} 
    {/* if user not exist open login page otherwise null */}
    {user == 'admin' ? <AdminDashboard changeUser = {setUser}  data = {loggedINUserData}/>:(user=='employee'?<EmployeeDashboard changeUser = {setUser} data = {loggedINUserData}/>:null)}
     {/* <Login/> */}
     {/* <EmployeeDashboard/> */}
     {/* <AdminDashboard/> */}
     
    </>
  )
}

export default App
