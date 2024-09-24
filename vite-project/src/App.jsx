import React from 'react'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
