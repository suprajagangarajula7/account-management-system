import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: "15px", background: "#eee" }}>
      <Link to="/dashboard">Dashboard</Link> | 
      <Link to="/send"> Send Money</Link> | 
      <Link to="/statement"> Statement</Link>
    </div>
  );
}

export default Navbar;