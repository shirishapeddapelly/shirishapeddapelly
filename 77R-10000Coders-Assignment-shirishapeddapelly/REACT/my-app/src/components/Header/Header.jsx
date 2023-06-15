import REACT from "react";
import Logo from "./Logo/Logo";
import Navbar from "./NavBar/Navbar";
class Header extends REACT.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          textAlign: "center",
          backgroundColor: "lightcyan",
        }}
      >
        <Logo />
        <Navbar />
      </div>
    );
  }
}
export default Header;
