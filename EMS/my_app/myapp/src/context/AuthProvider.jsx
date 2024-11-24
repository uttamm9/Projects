import React, { createContext, useState, useEffect} from 'react'
import { getLocalStorage } from '../Utils/Localstorage'

export const Authcontext = createContext()
const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)

    useEffect(() => {
      const {employee,admin} = getLocalStorage()
      setUserData({employee,admin})
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