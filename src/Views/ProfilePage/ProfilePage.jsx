import React, { useEffect, useState } from "react";
import { DrawerBody } from "@chakra-ui/modal";
import SideMenu from "../../Components/SideMenu/SideMenu";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const navigate = useNavigate();
    useEffect(() => {
        const email = localStorage.getItem("loggedInUserEmail");
        if (!email) navigate("/login");
    }, []);

    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        dob: "",
        district: "",
        gender: "",
        mobNumber: "",
        school: "",
        instructor_name: "",
    });
    const [userEmail, setUserEmail] = useState(null);
    const [currentTab, setCurrentTab] = useState(0);
    const handleTabClick = (tabIndex) => {
        setCurrentTab(tabIndex);
    };

    useEffect(() => {
        const userEmail = localStorage.getItem("loggedInUserEmail");
        const fetchUserProfile = async (email) => {
            console.log("email:", email);

            try {
                const response = await fetch(
                    `http://localhost:8081/api/scoutcompass/profile/scout/${email}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        // Call the fetchUserProfile function when the component mounts
        fetchUserProfile(userEmail);
    }, []); // Empty dependency array ensures the effect runs only once
    return (
        <div className="bg_profile">
            <SideMenu />
            <h1>My Profile</h1>

            <div class="profile-header">
                <div class="profile-img">
                    <img
                        src="https://i.pinimg.com/236x/39/a5/e6/39a5e6cbb6ecbdbff778f5ccc7f4d2cf.jpg"
                        alt="Profile Image"
                    />
                </div>
                <div class="profile-nav-info">
                    <h3> {userData.fullName}</h3>
                    <h2 class="school"> {userData.school} </h2>
                    <h2 class="email">{userData.email}</h2>
                </div>
            </div>

            <div class="main-bd">
                <div class="left-side">
                    <div class="profile-side">
                        <div class="main5">
                            <h2>Personal Details</h2>
                            <div class="card5">
                                <div class="card-body5">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>:</td>
                                                <td>{userData.fullName}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>:</td>
                                                <td>{userData.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Of Birth</td>
                                                <td>:</td>
                                                <td>{userData.dob}</td>
                                            </tr>
                                            <tr>
                                                <td>District</td>
                                                <td>:</td>
                                                <td>{userData.district}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td>:</td>
                                                <td>{userData.gender}</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td>:</td>
                                                <td>{userData.mobNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>School</td>
                                                <td>:</td>
                                                <td>{userData.school}</td>
                                            </tr>
                                            <tr>
                                                <td>Assigned Instructor</td>
                                                <td>:</td>
                                                <td>
                                                    {userData.instructor_name}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="right-side">
                    <div class="nav">
                        <ul>
                            <li
                                onClick={() => handleTabClick(0)}
                                className={`user-post ${
                                    currentTab === 0 ? "active" : ""
                                }`}
                            >
                                Current Progress
                            </li>
                        </ul>
                    </div>
                    <div class="profile-body">
                        <div
                            style={{
                                display: currentTab === 0 ? "block" : "none",
                            }}
                        >
                            <div id="wrapper5">
                                {/* <div id="q2_2010"> */}
                                {/* <div id="q1_2010">
                      <div id="q4_2009">
                        <div id="q3_2009">
                          <div id="q2_2009">
                            <div id="q1_2005"> */}
                                <div id="labels">
                                    <ul>
                                        <li>
                                            <span></span>Attempt
                                        </li>
                                        <li>
                                            <span></span>Complete
                                        </li>
                                        <li>
                                            <span></span>Incomlete
                                        </li>
                                        {/* <li>
                                    <span></span>D
                                  </li>
                                  <li>
                                    <span></span>E
                                  </li> */}
                                    </ul>
                                </div>

                                <div id="percentage_wrapper">
                                    <div id="percentage">
                                        <ul>
                                            <li>
                                                <p>60.14%</p>
                                                <p>61.79%</p>
                                                <p>63.90%</p>
                                                <p>67.02%</p>
                                                <p>68.28%</p>
                                                <p>20.68%</p>
                                            </li>
                                            <li>
                                                <p>24.98%</p>
                                                <p>24.56%</p>
                                                <p>24.39%</p>
                                                <p>23.28%</p>
                                                <p>23.22%</p>
                                                <p>6.83%</p>
                                            </li>
                                            <li>
                                                <p>7.14%</p>
                                                <p>6.03%</p>
                                                <p>4.27%</p>
                                                <p>3.08%</p>
                                                <p>2.35%</p>
                                                <p>90%</p>
                                            </li>
                                            {/* <li>
                                      <p>5.10%</p>
                                      <p>4.91%</p>
                                      <p>4.64%</p>
                                      <p>4.35%</p>
                                      <p>3.89%</p>
                                      <p>2.36%</p>
                                    </li>
                                    <li>
                                      <p>2.66%</p>
                                      <p>2.73%</p>
                                      <p>2.52%</p>
                                      <p>2.29%</p>
                                      <p>2.27%</p>
                                      <p>1.15%</p>
                                    </li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div id="slider">
                                    <div id="chart_holder">
                                        <div id="pie_chart">
                                            <ul>
                                                <li id="c1_r">
                                                    <p>
                                                        <span class="pie_left"></span>
                                                    </p>
                                                </li>
                                                <li id="c1_l">
                                                    <p>
                                                        <span class="pie_right"></span>
                                                    </p>
                                                </li>
                                                {/* <li id="c2_r">
                                        <p>
                                          <span class="pie_left"></span>
                                        </p>
                                      </li>
                                      <li id="c2_l">
                                        <p>
                                          <span class="pie_right"></span>
                                        </p>
                                      </li>
                                      <li id="c3_r">
                                        <p>
                                          <span class="pie_left"></span>
                                        </p>
                                      </li>
                                      <li id="c3_l">
                                        <p>
                                          <span class="pie_right"></span>
                                        </p>
                                      </li> */}
                                                <li id="c4_r">
                                                    <p>
                                                        <span class="pie_left"></span>
                                                    </p>
                                                </li>
                                                <li id="c4_l">
                                                    <p>
                                                        <span class="pie_right"></span>
                                                    </p>
                                                </li>
                                                <li id="c5_r">
                                                    <p>
                                                        <span class="pie_left"></span>
                                                    </p>
                                                </li>
                                                <li id="c5_l">
                                                    <p>
                                                        <span class="pie_right"></span>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <div id="btn_panel">
                    <ul> */}
                                {/* <li>
                                    <a href="#q1_2005">
                                      <span>AW</span>
                                      <span>01</span>
                                    </a>
                                  </li> */}
                                {/* <li>
                                    <a href="#q2_2009">
                                      <span>AW</span>
                                      <span>01</span>
                                    </a>
                                  </li> */}
                                {/* <li>
                                    <a href="#q3_2009">
                                      <span>AW</span>
                                      <span>02</span>
                                    </a>
                                  </li> */}
                                {/* <li>
                                    <a href="#q4_2009">
                                      <span>AW</span>
                                      <span>03</span>
                                    </a>
                                  </li> */}
                                {/* <li>
                                    <a href="#q1_2010">
                                      <span>AW</span>
                                      <span>04</span>
                                    </a>
                                  </li> */}
                                {/* <li>
                          <a href="#q2_2010">
                            <span>AW</span>
                            <span>05</span>
                          </a>
                        </li> */}
                                {/* </ul>
                  </div> */}
                                {/* </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
