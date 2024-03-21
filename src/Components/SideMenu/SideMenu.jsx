import "./SideMenu.css";

import L1 from "../../Assests/logo.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";


function SideMenu() {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(null);
    const [isScout, setIsScout] = useState(false);
    const [isInstructor, setIsInstrcutor] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        // Fetch user entity based on logged-in user's email
        const fetchUserEntity = async () => {
            try {
                const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
                const response = await fetch(`http://localhost:8081/api/scoutcompass/auth/user?userEmail=${loggedInUserEmail}`);
                const userData = await response.json();
                // Assuming userData has a 'role' key
                setIsScout(userData.role === "ROLE_SCOUT");
                setIsInstrcutor(userData.role === "ROLE_INSTRUCTOR");
                setIsAdmin(userData.role === "ROLE_ADMIN");
            } catch (error) {
                console.error("Error fetching user entity:", error);
            }
        };

        fetchUserEntity();
    }, []);
 
  
    return (
        <div className="page">
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            ></link>

            <aside className="sidebar">
                <div className="menulogo">
                    <a href="#">
                        <img src={L1} alt="" />
                    </a>
                </div>
                <ul className="links">
                    <h4>Main Menu</h4>
                    <li>
                        <span className="material-symbols-outlined">home</span>
                        <a href="/home">Home</a>
                    </li>
                    {isScout && (                   
                          <li>
                        <span className="material-symbols-outlined">
                            show_chart
                        </span>
                        <a href="/passing">Passings</a>
                    </li> )}
                    {isInstructor && (                  
                         <li>
                        <span className="material-symbols-outlined">
                            Camping
                        </span>
                        <a href="/scoutDetails">Scouts</a>
                    </li>  )}

                    <li>
                        <span className="material-symbols-outlined">
                            source
                        </span>
                        <a href="/resource">Resources</a>
                    </li>

                    <li>
                        <span className="material-symbols-outlined">event</span>
                        <a href="/event">Events</a>
                    </li>
                    {!isAdmin && (                  
                         <li>
                        <span className="material-symbols-outlined">
                            person
                        </span>
                        <a href="/profile">My Profile</a>
                    </li> )}
  
                    <hr />

                    <li className="logout-link">
                        <span className="material-symbols-outlined">
                            logout
                        </span>
                        <a
                            href="#"
                            onClick={() => {
                                localStorage.removeItem("loggedInUserEmail");
                                navigate("/login");
                            }}
                        >
                            Logout
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default SideMenu;
