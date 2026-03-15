import { useState,useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login(){

  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async(e)=>{
    e.preventDefault();

    try{

      const res = await api.post("/auth/login",{email,password});

      login(res.data.token);

      navigate("/dashboard");

    }
    catch{
      alert("Login failed")
    }
  }

  return(
    <div>

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />

        <br/>

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <br/>

        <button>Login</button>

      </form>

    </div>
  )
}

export default Login;