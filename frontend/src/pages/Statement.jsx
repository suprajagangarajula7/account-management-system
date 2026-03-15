import { useEffect,useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Statement(){

  const [transactions,setTransactions] = useState([]);

  useEffect(()=>{

    const getTransactions = async()=>{

      const token = localStorage.getItem("token");

      const res = await api.get("/account/statement",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });

      setTransactions(res.data);
    }

    getTransactions();

  },[])

  return(

    <div>

      <Navbar/>

      <h2>Transaction Statement</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          {transactions.map((t)=>(
            <tr key={t.id}>

              <td>₹{t.amount}</td>

              <td style={{
                color:t.transaction_type==="credit" ? "green":"red"
              }}>
                {t.transaction_type}
              </td>

              <td>{new Date(t.created_at).toLocaleDateString()}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )
}

export default Statement;