import { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('')
  const auth = useAuth()
  const handleLogin = () => {
    auth.login(user) 
    navigate('/')
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