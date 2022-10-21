import Nav from "../components/NavBar";
import Logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to={"/home"}>
        <div className="logo">
          <img src={Logo} alt="logo"></img>
        </div>
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;
