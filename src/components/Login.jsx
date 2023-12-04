import { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate, useLocation } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('')
  const auth = useAuth()
  const location = useLocation();
  const redirectpath = location.state?.path || "/";
  const handleLogin = () => {
    auth.login(user) 
    // Add {replace: true} in order not to move back to login page again after login is completed
    navigate(redirectpath, {replace: true})
  }
  return (
    <div>
      <label>
        Username: {' '}
        <input type="text" onChange={(e) => setUser(e.target.value)}/>
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}