import "./Award.css";
import B1 from "../../Assests/Membership.png";
import { Button, background } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function MembershipAward() {
    const totalRequirements = 14;
    const initialState = {
        status: "ATTEMPT",
        marks: "--",
    };

    // Create an array to hold the state variables and setter functions
    const [stateVariables, setStateVariables] = useState(
        Array.from({ length: totalRequirements }, () => initialState)
    );

    // useEffect to fetch requirement data
    useEffect(() => {
        const fetchRequirementData = async (
            awardId,
            requirementId,
            setData
        ) => {
            const userEmail = localStorage.getItem("loggedInUserEmail");
            try {
                const response = await fetch(
                    `http://localhost:8081/api/scoutcompass/requirement/status?userName=${userEmail}&awardId=${awardId}&requirementId=${requirementId}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        // Fetch data for each requirement
        for (let i = 1; i <= totalRequirements; i++) {
            const req = {
                awardId: 1,
                requirementId: i,
                setData: setDataAtIndex(i - 1), // Pass index of the state variable in the array
            };
            fetchRequirementData(req.awardId, req.requirementId, req.setData);
        }
    }, []); // Empty dependency array since we only want to run this once

    // Function to set data at a specific index in stateVariables array
    const setDataAtIndex = (index) => (newData) => {
        setStateVariables((prevState) => {
            const newState = [...prevState];
            newState[index] = newData;
            return newState;
        });
    };
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem("loggedInUserEmail");
        if (!email) navigate("/login");
    }, []);

    // State variable to control notification box visibility
    const [showNotification, setShowNotification] = useState(false);

    // Function to handle clicking on attempt buttons
    const handleAttemptClick = () => {
        setShowNotification(true);
    };

    const handleCloseNotification = () => {
        setShowNotification(false);
    };

    return (
        <div className="bg_awards">
            {showNotification && (
                <div>
                    <div
                        className="notification-overlay"
                        onClick={handleCloseNotification}
                    ></div>
                    <div className="notification-box">
                        <h2 id="window-header">Practical Requirment</h2>
                        <p>
                            This is a practicle requirement. Press below button
                            to Send a request to your instructor mentioning that
                            you want to pass this requirment.
                        </p>
                        <div>
                            <button
                                className="pr-window-btn"
                                style={{ backgroundColor: "transparent" }}
                                onClick={handleCloseNotification}
                            >
                                Cancel
                            </button>
                            <button
                                className="pr-window-btn"
                                style={{ backgroundColor: "#b30021" }}
                            >
                                Send Request
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <section class="table__header">
                <Button
                    bg="transparent"
                    textColor="black"
                    fontWeight="600"
                    width="100px"
                    borderRadius="40px"
                    leftIcon={<FaArrowLeft />}
                    border="2px solid black"
                    padding="10px"
                    onClick={() => window.history.back()}
                    _hover={{ bg: "yellow", textColor: "black" }}
                >
                    Back
                </Button>

                <div className="image">
                    <img src={B1} alt="" />
                </div>
                <h1 className="award-name">Membership Award</h1>
            </section>

            <section class="table__body">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Requirment</th>
                            <th>Completed Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 1 </td>
                            <td>
                                {" "}
                                Scout Promise and Law <br />
                                බාලදක්ෂ පොරොන්දුව සහ නීතිය{" "}
                            </td>
                            <td> 17 Dec, 2022 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            1
                                        );
                                        localStorage.setItem("award_id", 1);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[0].marks !== "--"
                                            ? stateVariables[0].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[0].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[0].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 2 </td>
                            <td>
                                {" "}
                                National Anthem <br />
                                ජාතික ගීය
                            </td>
                            <td> 27 Aug, 2023 </td>
                            <td>
                                <button
                                    onClick={handleAttemptClick}
                                    className="status attempt"
                                >
                                    ATTEMPT
                                </button>
                                <span className="practical">PR</span>
                            </td>
                        </tr>
                        <tr>
                            <td> 3</td>
                            <td>
                                {" "}
                                Scout Sign and Methods of Saluting
                                <br />
                                බාලදක්ෂ ආචාරය සහ සලකුණ
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            3
                                        );
                                        localStorage.setItem("award_id", 1);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[2].marks !== "--"
                                            ? stateVariables[2].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[2].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[2].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 4</td>
                            <td>
                                {" "}
                                Founder
                                <br />
                                නිර්මාතෘවරයා
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            4
                                        );
                                        localStorage.setItem("award_id", 1);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[3].marks !== "--"
                                            ? stateVariables[3].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[3].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[3].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 5</td>
                            <td>
                                {" "}
                                Scout Whistle and Hand Signals
                                <br />
                                බාලදක්ෂ නලා සහ හස්ත සංඥා
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={handleAttemptClick}
                                    className="status attempt"
                                >
                                    ATTEMPT
                                </button>
                                <span className="practical">PR</span>
                            </td>
                        </tr>
                        <tr>
                            <td> 6</td>
                            <td>
                                {" "}
                                Knots and Whipping 1 <br />
                                ගැට හා වෙළුම් 1
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={handleAttemptClick}
                                    className="status attempt"
                                >
                                    ATTEMPT
                                </button>
                                <span className="practical">PR</span>
                            </td>
                        </tr>
                        <tr>
                            <td> 7</td>
                            <td>
                                {" "}
                                Smartness and Good Order 1 <br />
                                හුරුබුහුටි බව සහ හොඳ පිළිවෙල 1
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={handleAttemptClick}
                                    className="status attempt"
                                >
                                    ATTEMPT
                                </button>
                                <span className="practical">PR</span>
                            </td>
                        </tr>
                        <tr>
                            <td> 8</td>
                            <td>
                                {" "}
                                Log Book 1 <br />
                                ලොග් පොත 1
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={handleAttemptClick}
                                    className="status attempt"
                                >
                                    ATTEMPT
                                </button>
                                <span className="practical">PR</span>
                            </td>
                        </tr>
                        <tr>
                            <td> 9</td>
                            <td>
                                {" "}
                                Simple Health Habits 1 <br />
                                සරල සෞඛය පුරුදු 1
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            9
                                        );
                                        localStorage.setItem("award_id", 1);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[8].marks !== "--"
                                            ? stateVariables[8].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[8].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[8].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 10</td>
                            <td>
                                {" "}
                                Safe from Harm 7 <br />
                                හානියෙන් සුරක්ෂාව 7
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            10
                                        );
                                        localStorage.setItem("award_id", 1);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[9].marks !== "--"
                                            ? stateVariables[9].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[9].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[9].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 11</td>
                            <td>
                                {" "}
                                Thrift-Savings Account 1 <br />
                                ඉතුරුම් ගිණුම 1
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={handleAttemptClick}
                                    className="status attempt"
                                >
                                    ATTEMPT
                                </button>
                                <span className="practical">PR</span>
                            </td>
                        </tr>
                        <tr>
                            <td> 12</td>
                            <td>
                                {" "}
                                Good Habbits 1 <br />
                                යහපත් පුරුදු 1
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            12
                                        );
                                        localStorage.setItem("award_id", 1);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[11].marks !== "--"
                                            ? stateVariables[11].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[11].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[11].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 13</td>
                            <td>
                                {" "}
                                First Aid 1 <br />
                                ප්රථමාධාර 1
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            13
                                        );
                                        localStorage.setItem("award_id", 1);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[12].marks !== "--"
                                            ? stateVariables[12].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[12].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[12].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 14</td>
                            <td>
                                {" "}
                                Wood Craft Signs <br />
                                වන මං සලකුණු
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={handleAttemptClick}
                                    className="status attempt"
                                >
                                    ATTEMPT
                                </button>
                                <span className="practical">PR</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <table className="sevice">
                <tbody>
                    <tr>
                        <td>***</td>
                        <td>
                            2 Months of Service <br />
                            මාස 2 ක සේවා කාලය
                        </td>
                        <td> 17 Dec, 2022 </td>
                        <td>
                            <button
                                onClick={handleAttemptClick}
                                className="status attempt"
                            >
                                ATTEMPT
                            </button>
                            <span className="practical">PR</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MembershipAward;
