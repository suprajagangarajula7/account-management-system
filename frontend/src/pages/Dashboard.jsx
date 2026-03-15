import { useEffect,useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Dashboard(){

  const [balance,setBalance] = useState(0);

  useEffect(()=>{

    const fetchBalance = async()=>{

      const token = localStorage.getItem("token");

      const res = await api.get("/account/balance",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      setBalance(res.data.balance);
    }

    fetchBalance();

  },[])

  return(

    <div>

      <Navbar/>

      <h2>Dashboard</h2>

      <h3>Account Balance: ₹{balance}</h3>

    </div>

  )
}

export default Dashboard;