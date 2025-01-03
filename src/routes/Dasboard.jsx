import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Dasboard(){
  const { isLoggin , Logout } = useAuth();

  return (
    <div>
      {isLoggin ? "yes" : "no"}
      <button onClick={Logout}>Logout</button>

      <div>
        <Link to={'/about'}/>
        <Link to={'/page'}/>
      </div>
    </div>
  )
}