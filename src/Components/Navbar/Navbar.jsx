import "./Navbar.css";
import { NavLink } from "react-router-dom";
import L1 from "../../Assests/logo.png";

function Navbar() {
  return (
    <nav class="navbar">
      <div class="max-width">
        <div class="logo">
          <a href="/">
            <img src={L1} alt="" />
          </a>
        </div>

        <ul class="menu">
          <li>
            <NavLink to="/" activeClassName="active-page">
              Home
            </NavLink>
          </li>
          {/* <li><NavLink className="nav-link" onClick={scrollToBlogs}>Blogs</NavLink></li> */}
          <li>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/resource" className="nav-link">
              Resource
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
