import "./Award.css";
import B5 from "../../Assests/PresidentsAward.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function PresidentAward() {
    const totalRequirements = 13;
    const initialState = {
        status: "ATTEMPT",
        marks: "--",
        englishName: "",
        sinhalaName: "",
    };

    const [stateVariables, setStateVariables] = useState(
        Array.from({ length: totalRequirements }, () => initialState)
    );

    useEffect(() => {
        const fetchRequirementData = async (
            awardId,
            requirementId,
            setData
        ) => {
            const userEmail = localStorage.getItem("loggedInUserEmail");
            try {
                const response = await fetch(
                    `http://13.233.134.21:8081/api/scoutcompass/requirement/status?userName=${userEmail}&awardId=${awardId}&requirementId=${requirementId}`
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

        for (let i = 1; i <= totalRequirements; i++) {
            const req = {
                awardId: 5,
                requirementId: i,
                setData: setDataAtIndex(i - 1),
            };
            fetchRequirementData(req.awardId, req.requirementId, req.setData);
        }
    }, []);

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

    const [showNotification, setShowNotification] = useState(false);

    const handleAttemptClick = () => {
        setShowNotification(true);
    };

    const handleCloseNotification = () => {
        setShowNotification(false);
    };
    const [RequirementList, setRequirementList] = useState([]);

    useEffect(() => {
        const fetchRequirements = async (awardId) => {
            try {
                const response = await fetch(
                    `http://13.233.134.21:8081/api/scoutcompass/requirement/requirements_by_awards?awardId=${awardId}`
                );
                const data = await response.json();
                if (data) {
                    setRequirementList(data);
                }
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchRequirements(5);
    }, []);

    const dataToSend = {
        userName: localStorage.getItem("loggedInUserEmail"),
        awardId: localStorage.getItem("award_id"),
        requirementId: localStorage.getItem("requirment_id"),
        status: "PENDING",
    };

    const handleSubmitPracticalRequirementStatus = async () => {
        fetch(
            `http://13.233.134.21:8081/api/scoutcompass/requirement/status/pracical_req_status`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            }
        )
            .then((response) => {
                if (response.ok) {
                    console.log("Requirement updated successfully");
                }
            })
            .catch((error) => {});
    };

    const handlePRequirementSubmitButtonClick = () => {
        handleSubmitPracticalRequirementStatus();
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
                                onClick={() => {
                                    handlePRequirementSubmitButtonClick();
                                    Swal.fire({
                                        icon: "success",
                                        title: "Your request has been sent successfully !",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });

                                    setTimeout(() => {
                                        window.close();
                                        window.location.reload();
                                    }, 1500);
                                }}
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

                <div className="image2">
                    <img src={B5} alt="" />
                </div>
                <h1 className="award-name">President Award</h1>
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
                        {RequirementList.map((item_, index) =>
                            item_.isPracticalRequirement === 0 ? (
                                <tr>
                                    <td> {item_?.requirementId} </td>
                                    <td>
                                        {" "}
                                        {item_?.englishName} <br />
                                        {item_?.sinhalaName}{" "}
                                    </td>
                                    <td>
                                        {
                                            stateVariables[
                                                item_?.requirementId - 1
                                            ].completedDate
                                        }
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                localStorage.setItem(
                                                    "requirment_id",
                                                    item_?.requirementId
                                                );
                                                localStorage.setItem(
                                                    "award_id",
                                                    5
                                                );
                                                localStorage.setItem(
                                                    "requirment_sinhala_name",
                                                    item_?.sinhalaName
                                                );
                                                localStorage.setItem(
                                                    "requirment_english_name",
                                                    item_?.englishName
                                                );
                                                localStorage.setItem(
                                                    "requirment_completed_date",
                                                    stateVariables[
                                                        item_?.requirementId - 1
                                                    ].completedDate
                                                );
                                                localStorage.setItem(
                                                    "award_name",
                                                    "Scout Award"
                                                );
                                                navigate("/requirments");
                                            }}
                                            className={`status ${
                                                stateVariables[
                                                    item_?.requirementId - 1
                                                ].marks !== "--"
                                                    ? stateVariables[
                                                          item_?.requirementId -
                                                              1
                                                      ].marks >= 70
                                                        ? "completed"
                                                        : "re-attempt"
                                                    : "attempt"
                                            }`}
                                            disabled={
                                                stateVariables[
                                                    item_?.requirementId - 1
                                                ].status.toUpperCase() ===
                                                "COMPLETED"
                                            }
                                            style={{
                                                cursor:
                                                    stateVariables[
                                                        item_?.requirementId - 1
                                                    ].status.toUpperCase() ===
                                                    "COMPLETED"
                                                        ? "not-allowed"
                                                        : "pointer",
                                            }}
                                        >
                                            {stateVariables[
                                                item_?.requirementId - 1
                                            ].status.toUpperCase()}
                                        </button>
                                        <span className="marks">
                                            {
                                                stateVariables[
                                                    item_?.requirementId - 1
                                                ].marks
                                            }
                                        </span>{" "}
                                    </td>
                                </tr>
                            ) : (
                                <tr>
                                    <td> {item_?.requirementId}</td>
                                    <td>
                                        {" "}
                                        {item_?.englishName} <br />
                                        {item_?.sinhalaName}
                                    </td>
                                    <td>
                                        {
                                            stateVariables[
                                                item_?.requirementId - 1
                                            ].completedDate
                                        }
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                localStorage.setItem(
                                                    "requirment_id",
                                                    item_?.requirementId
                                                );
                                                localStorage.setItem(
                                                    "award_id",
                                                    5
                                                );
                                                handleAttemptClick();
                                            }}
                                            className={`status ${
                                                stateVariables[
                                                    item_?.requirementId - 1
                                                ].status.toUpperCase() ===
                                                "COMPLETED"
                                                    ? "completed"
                                                    : stateVariables[
                                                          item_?.requirementId -
                                                              1
                                                      ].status.toUpperCase() ===
                                                      "PENDING"
                                                    ? "pending"
                                                    : "attempt"
                                            }`}
                                            disabled={
                                                stateVariables[
                                                    item_?.requirementId - 1
                                                ].status.toUpperCase() ===
                                                    "COMPLETED" ||
                                                stateVariables[
                                                    item_?.requirementId - 1
                                                ].status.toUpperCase() ===
                                                    "PENDING"
                                            }
                                            style={{
                                                cursor:
                                                    stateVariables[
                                                        item_?.requirementId - 1
                                                    ].status.toUpperCase() ===
                                                        "COMPLETED" ||
                                                    stateVariables[
                                                        item_?.requirementId - 1
                                                    ].status.toUpperCase() ===
                                                        "PENDING"
                                                        ? "not-allowed"
                                                        : "pointer",
                                            }}
                                        >
                                            {stateVariables[
                                                item_?.requirementId - 1
                                            ].status.toUpperCase()}
                                        </button>
                                        <span className="practical">PR</span>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default PresidentAward;
