import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useState } from "react";


export default function Login(){
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate()

  const {login  , error} = useAuth();

  const handleLogin = () => {
    login(username , password , navigate)
  }


  return (
    <div>
      <input type="text" value={username} onChange={(e) => {
        setUsername(e.target.value)
      }} placeholder="username"/>
      <input type="password" value={password} onChange={(e) => {
        setPassword(e.target.value)
      }} placeholder="password"/>

      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  )

}