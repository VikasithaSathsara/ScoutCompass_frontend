import "./SideMenu.css";
import React from "react";
import L1 from "../../Assests/logo.png";
import { useNavigate } from "react-router-dom";

function SideMenu() {
    const navigate = useNavigate();
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
                    <li>
                        <span className="material-symbols-outlined">
                            show_chart
                        </span>
                        <a href="/passing">Passings</a>
                    </li>
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
                    <li>
                        <span className="material-symbols-outlined">
                            person
                        </span>
                        <a href="/profile">My Profile</a>
                    </li>
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
