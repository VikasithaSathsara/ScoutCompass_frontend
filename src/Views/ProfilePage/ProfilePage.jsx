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

    const fetchScoutProfile = async (email) => {
        console.log("email:", email);

        try {
            const response = await fetch(
                `http://13.233.134.21:8081/api/scoutcompass/profile/scout/${email}`
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

    const fetchInstructorUserProfile = async (email) => {
        console.log("email:", email);

        try {
            const response = await fetch(
                `http://13.233.134.21:8081/api/scoutcompass/profile/instructor/${email}`
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

    const [isInstructor, setIsInstructor] = useState(false);
    useEffect(() => {
        const fetchUserEntity = async () => {
            try {
                const loggedInUserEmail =
                    localStorage.getItem("loggedInUserEmail");
                const response = await fetch(
                    `http://13.233.134.21:8081/api/scoutcompass/auth/user?userEmail=${loggedInUserEmail}`
                );
                const userData = await response.json();
                setIsInstructor(userData.role === "ROLE_INSTRUCTOR");

                if (userData.role === "ROLE_INSTRUCTOR") {
                    fetchInstructorUserProfile(loggedInUserEmail);
                } else {
                    fetchScoutProfile(loggedInUserEmail);
                }
            } catch (error) {
                console.error("Error fetching user entity:", error);
            }
        };

        fetchUserEntity();
    }, []);

    return (
        <div className="bg_profile">
            <SideMenu />
            <h1>My Profile</h1>

            <div
                className={`profile-header ${
                    isInstructor ? "instructor-profile-header" : ""
                }`}
            >
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
                    <div
                        className={`profile-side ${
                            isInstructor ? "instructor-profile-side" : ""
                        }`}
                    >
                        <div
                            className={`main5 ${
                                isInstructor ? "instructor-main5" : ""
                            }`}
                        >
                            <h2
                                className={`ins_h2 ${
                                    isInstructor ? "instructor-ins_h2" : ""
                                }`}
                            >
                                Personal Details
                            </h2>
                            <div
                                className={`card5 ${
                                    isInstructor ? "instructor-card5" : ""
                                }`}
                            >
                                <div
                                    className={`card-body5 ${
                                        isInstructor
                                            ? "instructor-card-body5"
                                            : ""
                                    }`}
                                >
                                    <table
                                        className={`table5 ${
                                            isInstructor
                                                ? "instructor-table5"
                                                : ""
                                        }`}
                                    >
                                        <tbody>
                                            <tr>
                                                <td
                                                    className={`label ${
                                                        isInstructor
                                                            ? "instructor-label"
                                                            : ""
                                                    }`}
                                                >
                                                    Name
                                                </td>
                                                <td>:</td>
                                                <td
                                                    className={`value ${
                                                        isInstructor
                                                            ? "instructor-value"
                                                            : ""
                                                    }`}
                                                >
                                                    {userData.fullName}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className={`label ${
                                                        isInstructor
                                                            ? "instructor-label"
                                                            : ""
                                                    }`}
                                                >
                                                    Email
                                                </td>
                                                <td>:</td>
                                                <td
                                                    className={`value ${
                                                        isInstructor
                                                            ? "instructor-value"
                                                            : ""
                                                    }`}
                                                >
                                                    {userData.email}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className={`label ${
                                                        isInstructor
                                                            ? "instructor-label"
                                                            : ""
                                                    }`}
                                                >
                                                    Date Of Birth
                                                </td>
                                                <td>:</td>
                                                <td
                                                    className={`value ${
                                                        isInstructor
                                                            ? "instructor-value"
                                                            : ""
                                                    }`}
                                                >
                                                    {userData.dob}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className={`label ${
                                                        isInstructor
                                                            ? "instructor-label"
                                                            : ""
                                                    }`}
                                                >
                                                    District
                                                </td>
                                                <td>:</td>
                                                <td
                                                    className={`value ${
                                                        isInstructor
                                                            ? "instructor-value"
                                                            : ""
                                                    }`}
                                                >
                                                    {userData.district}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className={`label ${
                                                        isInstructor
                                                            ? "instructor-label"
                                                            : ""
                                                    }`}
                                                >
                                                    Gender
                                                </td>
                                                <td>:</td>
                                                <td
                                                    className={`value ${
                                                        isInstructor
                                                            ? "instructor-value"
                                                            : ""
                                                    }`}
                                                >
                                                    {userData.gender}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className={`label ${
                                                        isInstructor
                                                            ? "instructor-label"
                                                            : ""
                                                    }`}
                                                >
                                                    Contact Number
                                                </td>
                                                <td>:</td>
                                                <td
                                                    className={`value ${
                                                        isInstructor
                                                            ? "instructor-value"
                                                            : ""
                                                    }`}
                                                >
                                                    {userData.mobNumber}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    className={`label ${
                                                        isInstructor
                                                            ? "instructor-label"
                                                            : ""
                                                    }`}
                                                >
                                                    School
                                                </td>
                                                <td>:</td>
                                                <td
                                                    className={`value ${
                                                        isInstructor
                                                            ? "instructor-value"
                                                            : ""
                                                    }`}
                                                >
                                                    {userData.school}
                                                </td>
                                            </tr>

                                            {!isInstructor && (
                                                <tr>
                                                    <td>Assigned Instructor</td>
                                                    <td>:</td>
                                                    <td>
                                                        {
                                                            userData.instructor_name
                                                        }
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!isInstructor && (
                    <div class="right-side">
                        <div class="nav">
                            <ul>
                                <li
                                    onClick={() => handleTabClick(0)}
                                    className={`user-post ${
                                        currentTab === 0 ? "active" : ""
                                    }`}
                                >
                                    Award Requirement Percentage
                                </li>
                            </ul>
                        </div>
                        <div class="profile-body">
                            <div
                                style={{
                                    display:
                                        currentTab === 0 ? "block" : "none",
                                }}
                            >
                                <div id="wrapper5">
                                    <div id="labels">
                                        <ul>
                                            <li>
                                                <span></span>President's Award
                                            </li>

                                            <li>
                                                <span></span>Membership Award
                                            </li>

                                            <li>
                                                <span></span>Scout Award
                                            </li>

                                            <li>
                                                <span></span>Chief Commissioner
                                                Award
                                            </li>

                                            <li>
                                                <span></span>Prime Minister
                                                Award
                                            </li>
                                        </ul>
                                    </div>

                                    <div id="percentage_wrapper">
                                        <div id="percentage">
                                            <ul>
                                                <li>
                                                    <span></span>13.7%
                                                </li>
                                                <li>
                                                    <span></span>14.7%
                                                </li>
                                                <li>
                                                    <span></span>24.2%
                                                </li>
                                                <li>
                                                    <span></span>24.2%
                                                </li>
                                                <li>
                                                    <span></span>23.2%
                                                </li>
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
                                                    <li id="c2_r">
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
                                                    </li>
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
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
