import { NavLink } from "react-router-dom";

/* Header Navigation Menus */
const Nav = () => {
  return (
    <>
      <nav>
        <ul className="nav-bar">
          <NavLink to="/home">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
