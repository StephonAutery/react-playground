import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="main">
      <nav>
        <NavLink to="/">Landing | </NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
