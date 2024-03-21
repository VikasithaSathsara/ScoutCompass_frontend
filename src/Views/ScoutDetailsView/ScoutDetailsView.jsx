import React, { useState, useEffect } from "react";
import "./ScoutDetailsView.css";

function ViewProfile() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <input
                className="modal-btn"
                type="checkbox"
                id="profile-modal-btn"
                name="modal-btn"
                checked={isOpen}
                onChange={toggleModal}
            />
            <label htmlFor="profile-modal-btn">View Profile</label>
            <div className="modal" onClick={toggleModal}>
                <div className="modal-wrap">
                    <h2 className="profileh2">Profile Details</h2>
                    <table className="profileview-table">
                        <tbody>
                            <tr className="profileview-tr">
                                <td>Name</td>
                                <td>:</td>
                                <td>vikasitha sathsara dambure liyanage</td>
                            </tr>
                            <tr className="profileview-tr">
                                <td className="profileview-td">Email</td>
                                <td className="profileview-td">:</td>
                                {/* <td>{userData.email}</td> */}
                            </tr>
                            <tr className="profileview-tr">
                                <td className="profileview-td">
                                    Date Of Birth
                                </td>
                                <td className="profileview-td">:</td>
                                {/* <td>{userData.dob}</td> */}
                            </tr>
                            <tr className="profileview-tr">
                                <td className="profileview-td">District</td>
                                <td className="profileview-td">:</td>
                                {/* <td>{userData.district}</td> */}
                            </tr>
                            <tr className="profileview-tr">
                                <td className="profileview-td">Gender</td>
                                <td className="profileview-td">:</td>
                                {/* <td>{userData.gender}</td> */}
                            </tr>
                            <tr className="profileview-tr">
                                <td className="profileview-td">
                                    Contact Number
                                </td>
                                <td className="profileview-td">:</td>
                                {/* <td>{userData.mobNumber}</td> */}
                            </tr>
                            <tr className="profileview-tr">
                                <td className="profileview-td">School</td>
                                <td className="profileview-td">:</td>
                                {/* <td>{userData.school}</td> */}
                            </tr>
                            <tr className="profileview-tr">
                                <td className="profileview-td">
                                    Assigned Instructor
                                </td>
                                <td className="profileview-td">:</td>
                                {/* <td>{userData.instructor_name}</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function ViewRequirements() {
    const [isOpenR, setIsOpenR] = useState(false);

    const toggleModal = () => {
        setIsOpenR(!isOpenR);
    };

    return (
        <div>
            <input
                className="modal-btn"
                type="checkbox"
                id="requirements-modal-btn"
                name="modal-btn"
                checked={isOpenR}
                onChange={toggleModal}
            />
            <label htmlFor="requirements-modal-btn">View Requirements</label>
            <div className="modal" onClick={toggleModal}>
                <div className="modal-wrap">
                    <h2 className="profileh2">Requirements</h2>
                </div>
            </div>
        </div>
    );
}

function ScoutDetailsView() {
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
                    `http://localhost:8081/api/scoutcompass/passing/scoutList?instructorEmail=${loggedInUserEmail}`
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
        const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
        try {
            const response = await fetch(
                `http://localhost:8081/api/scoutcompass/requirement/status/requirementList?scoutEmail=${scoutEmail}`
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
                `http://localhost:8081/api/scoutcompass/profile/scout/${scoutEmail}`
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

    const handleRequirementButtonClick = (scoutEmail) => {
        fetchRequirementListByScoutName(scoutEmail);
    };

    const handleProfileButtonClick = (scoutEmail) => {
        fetchUserProfile(scoutEmail);
    };

    return (
        <div className="bg_details">
            <section className="scoutview-header">
                <h1>Scouts Details</h1>
            </section>

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
                                            <div className="modal-wrap">
                                                <h2 className="profileh2">
                                                    Requirements
                                                </h2>
                                                <table className="profileview-table">
                                                    <tbody>
                                                        {RequirementList.map(
                                                            (item, index) => (
                                                                <tr
                                                                    key={index}
                                                                    className="profileview-tr"
                                                                >
                                                                    <td>
                                                                        {
                                                                            item?.awardId
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item?.requirementId
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item?.sinhalaName
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            item?.status
                                                                        }
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
