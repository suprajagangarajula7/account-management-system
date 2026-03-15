import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      await api.post("/auth/signup",form);
      alert("Signup Successful");
      navigate("/login");
    }
    catch(err){
      alert("Signup failed");
    }
  }

  return(
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <br/>

        <input name="email" placeholder="Email" onChange={handleChange}/>
        <br/>

        <input name="password" placeholder="Password" type="password" onChange={handleChange}/>
        <br/>

        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup;