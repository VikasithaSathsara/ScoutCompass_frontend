import React, { useState, useEffect } from "react";
import "./ScoutDetailsView.css";
import SideMenu from "../../Components/SideMenu/SideMenu";
import Swal from "sweetalert2";

function ScoutDetailsView() {
    const [selectedStatus, setSelectedStatus] = useState("PNDING");
    const [scoutUserName, setScoutUserName] = useState("");
    const [awardId, setAwardId] = useState("");
    const [requirementId, setRequiementId] = useState("");
    const [isOpenR, setIsOpenR] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [RequirementList, setRequirementList] = useState([]);
    const [ProfileData, setProfileData] = useState("");
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

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const toggleModalR = () => {
        setIsOpenR(!isOpenR);
    };

    const [scoutList, setScoutList] = useState([]);
    useEffect(() => {
        const fetchScoutList = async () => {
            const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
            try {
                const response = await fetch(
                    `http://13.233.134.21:8081/api/scoutcompass/passing/scoutList?instructorEmail=${loggedInUserEmail}`
                );
                const data = await response.json();

                setScoutList(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchScoutList();
    }, []);

    const fetchRequirementListByScoutName = async (scoutEmail) => {
        try {
            const response = await fetch(
                `http://13.233.134.21:8081/api/scoutcompass/requirement/status/requirementStatusList?scoutEmail=${scoutEmail}`
            );
            const data = await response.json();

            setRequirementList(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const fetchUserProfile = async (scoutEmail) => {
        try {
            const response = await fetch(
                `http://13.233.134.21:8081/api/scoutcompass/profile/scout/${scoutEmail}`
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

    const dataToSend = {
        userName: scoutUserName,
        awardId: awardId,
        requirementId: requirementId,
        newStatus: selectedStatus,
    };

    const handleSubmit = async () => {
        fetch(
            `http://13.233.134.21:8081/api/scoutcompass/requirement/status/updateStatus`,
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

    const handleRequirementButtonClick = (scoutEmail) => {
        fetchRequirementListByScoutName(scoutEmail);
    };

    const handleProfileButtonClick = (scoutEmail) => {
        fetchUserProfile(scoutEmail);
    };
    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    };

    const handleButtonClick = (scout_user_name, award_id, requirement_id) => {
        setScoutUserName(scout_user_name);
        setAwardId(award_id);
        setRequiementId(requirement_id);
        dataToSend.userName = scout_user_name;
        dataToSend.awardId = award_id;
        dataToSend.requirementId = requirement_id;
        handleSubmit();
    };

    return (
        <div className="bg_details">
            <SideMenu />

            <h1>Scouts Details</h1>

            <section className="scoutview-body">
                <table className="scoutview-table">
                    <thead>
                        <tr>
                            <th className="scoutview-th">No</th>
                            <th className="scoutview-th">Scout's Name</th>
                            <th className="scoutview-th">Requirements</th>
                            <th className="scoutview-th">Profile</th>
                        </tr>
                    </thead>

                    <tbody>
                        {scoutList.map((item, index) => (
                            <tr>
                                <td>{item.scoutId}</td>
                                <td>
                                    {item.scoutFirstName} {item.scoutLastname}
                                </td>
                                <td>
                                    <div>
                                        <input
                                            className="modal-btn"
                                            type="checkbox"
                                            id="requirements-modal-btn"
                                            name="modal-btn"
                                            checked={isOpenR}
                                            onChange={toggleModalR}
                                        />

                                        <label
                                            htmlFor="requirements-modal-btn"
                                            onClick={() =>
                                                handleRequirementButtonClick(
                                                    item.scoutEmail
                                                )
                                            }
                                        >
                                            View Requirements
                                        </label>
                                        <div
                                            className="modal"
                                            onClick={toggleModalR}
                                        >
                                            <div
                                                className="modal-wrap"
                                                id="requirement-div"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                <table className="scoutview-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Award Id</th>
                                                            <th>
                                                                Requirement Id
                                                            </th>
                                                            <th>
                                                                Requirement Name
                                                            </th>
                                                            <th>Status</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {RequirementList.map(
                                                            (item_, index) => (
                                                                <tr
                                                                    key={index}
                                                                    className="profileview-tr"
                                                                >
                                                                    <td>
                                                                        {
                                                                            item_?.awardId
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item_?.requirementId
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item_?.sinhalaName
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            <select
                                                                                className="dropdown-status"
                                                                                onChange={
                                                                                    handleStatusChange
                                                                                }
                                                                            >
                                                                                <option value="PENDING">
                                                                                    {item_?.status.toUpperCase()}
                                                                                </option>
                                                                                <option value="COMPLETED">
                                                                                    COMPLETED
                                                                                </option>
                                                                            </select>
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        <button
                                                                            className="accept-btn"
                                                                            onClick={() => {
                                                                                handleButtonClick(
                                                                                    item?.scoutEmail,
                                                                                    item_?.awardId,
                                                                                    item_?.requirementId
                                                                                );
                                                                                Swal.fire(
                                                                                    {
                                                                                        icon: "success",
                                                                                        title: "Your request has been sent successfully !",
                                                                                        showConfirmButton: false,
                                                                                        timer: 1500,
                                                                                    }
                                                                                );

                                                                                setTimeout(
                                                                                    () => {
                                                                                        window.close();
                                                                                        window.location.reload();
                                                                                    },
                                                                                    1500
                                                                                );
                                                                            }}
                                                                        >
                                                                            Submit
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <input
                                            className="modal-btn"
                                            type="checkbox"
                                            id="profile-modal-btn"
                                            name="modal-btn"
                                            checked={isOpen}
                                            onChange={toggleModal}
                                        />
                                        <label
                                            onClick={() =>
                                                handleProfileButtonClick(
                                                    item.scoutEmail
                                                )
                                            }
                                            htmlFor="profile-modal-btn"
                                        >
                                            View Profile
                                        </label>

                                        <div
                                            className="modal"
                                            onClick={toggleModal}
                                        >
                                            <div className="modal-wrap">
                                                <h2 className="profileh2">
                                                    Profile Details
                                                </h2>
                                                <table className="profileview-table">
                                                    <tbody>
                                                        <tr className="profileview-tr">
                                                            <td>Name</td>
                                                            <td>:</td>
                                                            <td>
                                                                {" "}
                                                                {
                                                                    userData?.fullName
                                                                }{" "}
                                                            </td>
                                                        </tr>
                                                        <tr className="profileview-tr">
                                                            <td className="profileview-td">
                                                                Email
                                                            </td>
                                                            <td className="profileview-td">
                                                                :
                                                            </td>
                                                            <td>
                                                                {" "}
                                                                {
                                                                    userData?.email
                                                                }
                                                            </td>
                                                        </tr>
                                                        <tr className="profileview-tr">
                                                            <td className="profileview-td">
                                                                Date Of Birth
                                                            </td>
                                                            <td className="profileview-td">
                                                                :
                                                            </td>
                                                            <td>
                                                                {userData?.dob}
                                                            </td>
                                                        </tr>
                                                        <tr className="profileview-tr">
                                                            <td className="profileview-td">
                                                                District
                                                            </td>
                                                            <td className="profileview-td">
                                                                :
                                                            </td>
                                                            <td>
                                                                {
                                                                    userData?.district
                                                                }
                                                            </td>
                                                        </tr>
                                                        <tr className="profileview-tr">
                                                            <td className="profileview-td">
                                                                Gender
                                                            </td>
                                                            <td className="profileview-td">
                                                                :
                                                            </td>
                                                            <td>
                                                                {
                                                                    userData?.gender
                                                                }
                                                            </td>
                                                        </tr>
                                                        <tr className="profileview-tr">
                                                            <td className="profileview-td">
                                                                Contact Number
                                                            </td>
                                                            <td className="profileview-td">
                                                                :
                                                            </td>
                                                            <td>
                                                                {
                                                                    userData?.mobNumber
                                                                }
                                                            </td>
                                                        </tr>
                                                        <tr className="profileview-tr">
                                                            <td className="profileview-td">
                                                                School
                                                            </td>
                                                            <td className="profileview-td">
                                                                :
                                                            </td>
                                                            <td>
                                                                {
                                                                    userData?.school
                                                                }
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default ScoutDetailsView;
