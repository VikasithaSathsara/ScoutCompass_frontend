import React, { useState } from "react";
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
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <input
                className="modal-btn"
                type="checkbox"
                id="requirements-modal-btn"
                name="modal-btn"
                checked={isOpen}
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
                        <tr>
                            <td>1</td>
                            <td>W.H.Sachini Wewalwala</td>
                            <td>
                                <ViewRequirements />
                            </td>
                            <td>
                                <ViewProfile />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default ScoutDetailsView;