import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authcontext from './context/Authcontext.jsx'
import Taskcontext from './context/Taskcontext.jsx'

// localStorage.clear //for clear browser storage
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authcontext>
      <Taskcontext>
        <App />           //data wrapr
      </Taskcontext>
    </Authcontext>
  </StrictMode>,
)
