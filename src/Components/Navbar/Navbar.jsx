import "./Navbar.css";
import { NavLink } from 'react-router-dom';


function Navbar() {
    return ( 
        <nav class="navbar">
            <div class="max-width">
                <div class="logo">
                    {/* <a href="home.html"><img src="../imgs/logo-no-background.png" alt="PlayZona"></a> */}
                </div>

                <ul class="menu">
                    <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
                    <li><NavLink to="/signup" className="nav-link">Sign Up</NavLink></li>       
                </ul>

                {/* <div class="menu-btn">
                    <i class="fas fa-bars"></i>
                </div> */}
            </div>
        </nav>
    );
}

export default Navbar;