import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
export const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const handleLogOut = () => {
     auth.logout()
     navigate("/")
  }
  console.log(auth);
  return (
    <div>
      <h2>Welcome {auth.user}</h2>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}
