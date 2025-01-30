import React, { createContext, useState, useEffect} from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/Localstorage'

export const Authcontext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()
  const [userData, setUserData] = useState(null)

    useEffect(() => {
      setLocalStorage()
      const {employees} = getLocalStorage()
      setUserData(employees)
    }, [])
    

  return (
    <div>
      <Authcontext.Provider value={[userData,setUserData]}>
      {children}
      </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider