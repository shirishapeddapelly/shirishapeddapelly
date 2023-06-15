import REACT from "react";
import "./Navbar.css";
//import AppRouter from "../../AppRouter/AppRouter";
import { Link } from "react-router-dom";
class Navbar extends REACT.Component {
  render() {
    return (
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          flex: 11,
          //backgroundColor: "light brown",
        }}
      >
        <ul className="Header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Why">Why</Link>
          </li>
          <li>
            <Link to="/Curriculam">Curriculam</Link>
          </li>
          <li>
            <Link to="/Team">team</Link>
          </li>
          <li>
            <Link to="/Employees">Employers</Link>
          </li>
          <li>
            <Link to="/Admission">Admission</Link>
          </li>
          <li>
            <Link to="/Price">Price</Link>
          </li>
          <li>
            <Link to="/Faq">FAQ</Link>
          </li>
          {/* 
          <li>Home </li>
          <li> Why</li>
          <li>Curriculam</li>
          <li>team </li>
          <li> Employerers </li>
          <li> Admission </li>
          <li> Price </li>
          <li> FAQ </li>
          */}
        </ul>
      </div>
    );
  }
}
export default Navbar;
