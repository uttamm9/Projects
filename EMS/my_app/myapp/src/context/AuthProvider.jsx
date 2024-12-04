import React, { createContext, useState, useEffect} from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/Localstorage'

export const Authcontext = createContext()

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)

    useEffect(() => {
      setLocalStorage()
      const {employees,admin} = getLocalStorage()
      setUserData({employees,admin})
    }, [])
    

  return (
    <div>
      <Authcontext.Provider value={userData}>
      {children}
      </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider