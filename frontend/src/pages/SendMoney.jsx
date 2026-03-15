import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function SendMoney(){

  const [receiverEmail,setReceiverEmail] = useState("");
  const [amount,setAmount] = useState("");

  const handleSend = async(e)=>{
    e.preventDefault();

    const token = localStorage.getItem("token");

    try{

      await api.post("/account/transfer",
      {receiverEmail,amount:Number(amount)},
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      alert("Money Sent");

    }
    catch{
      alert("Transfer failed");
    }

  }

  return(

    <div>

      <Navbar/>

      <h2>Send Money</h2>

      <form onSubmit={handleSend}>

        <input
        placeholder="Receiver Email"
        onChange={(e)=>setReceiverEmail(e.target.value)}
        />

        <br/>

        <input
        placeholder="Amount"
        type="number"
        onChange={(e)=>setAmount(e.target.value)}
        />

        <br/>

        <button>Send</button>

      </form>

    </div>

  )
}

export default SendMoney;