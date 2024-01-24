import "./Navbar.css"

function Navbar() {
    return ( 

        <nav class="navbar">
            <div class="max-width">
                <div class="logo">
                    {/* <a href="home.html"><img src="../imgs/logo-no-background.png" alt="PlayZona"></a> */}
                </div>

                <ul class="menu">
                    <li><a href="home.html" class="nav-link">Events</a></li>
                    <li><a href="products.html" class="nav-link">Login</a></li>
                    <li><a href="queries.html" class="nav-link">Sign Up</a></li>
                    {/* <li><a href="quiz.html" class="nav-link">Quiz</a></li>
                    <li><a href="about.html" class="nav-link">About Us</a></li>
                    <li><a href="gallery.html" class="nav-link">Gallery</a></li>
                    <li><a href="sitemap.html" class="nav-link">Site Map</a></li> */}
                </ul>

                <div class="menu-btn">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;