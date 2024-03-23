import "./Award.css";
import B4 from "../../Assests/PrimeMinisters.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function PrimeMinisterAward() {
    const totalRequirements = 22;
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
                awardId: 4,
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
                    <img src={B4} alt="" />
                </div>
                <h1>Prime Minister Award</h1>
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
                                Scout Promise and Scout Law 2 <br />
                                බාලදක්ෂ පොරොන්දුව සහ නීතිය 2{" "}
                            </td>
                            <td> 17 Dec, 2022 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            1
                                        );
                                        localStorage.setItem("award_id", 4);
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
                                Structure of the WOSM <br />
                                ලෝක බාලදක්ෂ සංවිධානයෙහි ව්‍යුහය
                            </td>
                            <td> 27 Aug, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            2
                                        );
                                        localStorage.setItem("award_id", 4);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[1].marks !== "--"
                                            ? stateVariables[1].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[1].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[1].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 3</td>
                            <td>
                                {" "}
                                Thrift-Savings Account 3 <br />
                                ඉතුරුම් ගිණුම 3
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
                            <td> 4</td>
                            <td>
                                {" "}
                                Public Consciousness and Protection of Public
                                Property
                                <br />
                                යහපත් ප්‍රජා හැගීම් හා පොදු සම්පත් සුරැකීම
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            4
                                        );
                                        localStorage.setItem("award_id", 4);
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
                                Skills in Arts and Hobbies 2
                                <br />
                                කලා සහ විනෝදාංශ කුසලතා 2
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            5
                                        );
                                        localStorage.setItem("award_id", 4);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[4].marks !== "--"
                                            ? stateVariables[4].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[4].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[4].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 6</td>
                            <td>
                                {" "}
                                Backwoodsman Cooking <br />
                                වනවාසියාගේ ක්‍රමයට ආහාර පිසීම
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
                                Splicing <br />
                                පිරිද්දීම කඹ ආධාරයෙන්
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
                                Pioneering 3
                                <br />
                                පුරෝගාමී කටයුතු 3
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
                                Tents and Other Equipment <br />
                                කූඩාරම් සහ අනෙකුත් උපකරණ
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button href="#" class="status attempt">
                                    ATTEMPT
                                </button>
                                <span className="practical">PR</span>
                            </td>
                        </tr>
                        <tr>
                            <td> 10</td>
                            <td>
                                {" "}
                                Smartness and Good Order 4
                                <br />
                                සුරුබුහුටිකම සහ නිසි පිළිවෙළ 4
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
                            <td> 11</td>
                            <td>
                                {" "}
                                Balanced meal <br />
                                සමබර ආහාර
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            11
                                        );
                                        localStorage.setItem("award_id", 4);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[10].marks !== "--"
                                            ? stateVariables[10].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[10].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[10].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 12</td>
                            <td>
                                {" "}
                                Productivity Concept <br />
                                ඵලදායිතා සංකල්පය
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            12
                                        );
                                        localStorage.setItem("award_id", 4);
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
                                IT Literacy 3 <br />
                                තොරතුරු තාක්ෂණ දැනුම 3
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            13
                                        );
                                        localStorage.setItem("award_id", 4);
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
                                Link Language Skills 3 <br />
                                සම්බන්ධීකරන භාෂා කුසලතා 3
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            14
                                        );
                                        localStorage.setItem("award_id", 4);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[13].marks !== "--"
                                            ? stateVariables[13].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[13].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[13].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 15 </td>
                            <td>
                                {" "}
                                Compass and Mapping 3 <br />
                                මාලිමාව හා සිතියම්කරණය 3
                            </td>
                            <td> 17 Dec, 2022 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            15
                                        );
                                        localStorage.setItem("award_id", 4);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[14].marks !== "--"
                                            ? stateVariables[14].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[14].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[14].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 16 </td>
                            <td>
                                {" "}
                                Camp Equipment <br />
                                කඳවුරු මෙවලම්
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
                            <td> 17 </td>
                            <td>
                                {" "}
                                Adventure Skills
                                <br />
                                වික්‍රමාන්තික ක්‍රියා
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
                            <td> 18 </td>
                            <td>
                                {" "}
                                Time Management
                                <br />
                                කාලය කළමණාකරණය කිරීම
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            18
                                        );
                                        localStorage.setItem("award_id", 4);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[17].marks !== "--"
                                            ? stateVariables[17].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[17].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[17].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 19 </td>
                            <td>
                                {" "}
                                Safe From Harm 10
                                <br />
                                හානියෙන් සුරක්ෂාව 10
                            </td>
                            <td> 14 Mar, 2023 </td>
                            <td>
                                <button
                                    onClick={() => {
                                        localStorage.setItem(
                                            "requirment_id",
                                            19
                                        );
                                        localStorage.setItem("award_id", 4);
                                        navigate("/requirments");
                                    }}
                                    className={`status ${
                                        stateVariables[18].marks !== "--"
                                            ? stateVariables[18].marks >= 70
                                                ? "completed"
                                                : "re-attempt"
                                            : "attempt"
                                    }`}
                                >
                                    {stateVariables[18].status}
                                </button>
                                <span className="marks">
                                    {stateVariables[18].marks}
                                </span>{" "}
                            </td>
                        </tr>
                        <tr>
                            <td> 20 </td>
                            <td>
                                {" "}
                                Four Nights Camping <br />
                                කඳවුරු රාත්‍රී 4
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
                            <td> 21 </td>
                            <td>
                                {" "}
                                Community Service Project <br />
                                ප්‍රජා සේවා ව්‍යාපෘතිය
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
                            <td> 22 </td>
                            <td>
                                {" "}
                                Make the Bushman's Thong <br />
                                වනවාසියාගේ රැහැන සකස් කිරීම
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
                            9 Months of Service <br />
                            මාස 9 ක සේවා කාලය
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

export default PrimeMinisterAward;
