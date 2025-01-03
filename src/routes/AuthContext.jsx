import { createContext , useContext , useState} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const admin = {
  username:"kominfo",
  password:"admin#123",
}

export function AuthProvider({children}){

const [isLoggin , setLoggin] = useState(false);
const [error , setError] = useState("");


const login = (username , password , navigate) => {
  if(username === admin.username && password === admin.password) {
    console.log("succes")
    setLoggin(true);
    setError("")
    navigate('/dasboard')
  } else {
    setError("invalid username or password");
  };
}

const Logout = () => {
  setLoggin(false);
  setError("");
}

return (
  <AuthContext.Provider value={{isLoggin , error , login , Logout}}>
    {children}
  </AuthContext.Provider>
)

}

export function useAuth(){
  return useContext(AuthContext)
}