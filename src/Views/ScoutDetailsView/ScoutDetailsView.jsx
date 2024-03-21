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
    const [RequirementList,setRequirementList] = useState([]);

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
       // fetchRequirementListByScoutName("knchana2.20212055@iit.ac.lk");
   
    const handleButtonClick = (scoutEmail) => {
        fetchRequirementListByScoutName(scoutEmail);
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
                                       <td>{item.scoutFirstName} {item.scoutLastname }</td>
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

                                                        <label htmlFor="requirements-modal-btn" 
                                                        onClick={() => handleButtonClick(item.scoutEmail)}
                                                        >View Requirements</label>
                                                        <div className="modal" onClick={toggleModalR}>
                                                            <div className="modal-wrap">
                                                                <h2 className="profileh2">Requirements</h2>
                                                                <table className="profileview-table">
                                                                    <tbody>
                                                                        <tr className="profileview-tr">
                                                                            
                                                                            <td>{RequirementList[0]?.awardId}</td>  <td>{RequirementList[0]?.requirementId}</td><td>{RequirementList[0]?.sinhalaName}</td><td>{RequirementList[0]?.status}</td>
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            
                                                                            <td>{RequirementList[1]?.awardId}</td>  <td>{RequirementList[1]?.requirementId}</td><td>{RequirementList[1]?.sinhalaName}</td><td>{RequirementList[1]?.status}</td>
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            
                                                                            <td>{RequirementList[2]?.awardId}</td>  <td>{RequirementList[2]?.requirementId}</td><td>{RequirementList[2]?.sinhalaName}</td><td>{RequirementList[2]?.status}</td>
                                                                        </tr>
                                                                      


        
                                                                        {/* <tr className="profileview-tr">
                                                                            <td className="profileview-td">Email</td>
                                                                            <td className="profileview-td">:</td>
                                                                            <td>{item.scoutEmail}</td>
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            <td className="profileview-td">
                                                                                Date Of Birth
                                                                            </td>
                                                                            <td className="profileview-td">:</td>
                                                                             <td>{item.scoutDob}</td>
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            <td className="profileview-td">District</td>
                                                                            <td className="profileview-td">:</td>
                                                                            <td>{item.scoutDistrict}</td> 
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            <td className="profileview-td">Gender</td>
                                                                            <td className="profileview-td">:</td>
                                                                           <td>{item.scoutGender}</td> 
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            <td className="profileview-td">
                                                                                Contact Number
                                                                            </td>
                                                                            <td className="profileview-td">:</td>
                                                                             <td>{item.scoutMobNum}</td>
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            <td className="profileview-td">School</td>
                                                                            <td className="profileview-td">:</td>
                                                                           <td>{item.scoutSchool}</td> 
                                                                        </tr> */}
                                                                       
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
                                                        <label htmlFor="profile-modal-btn">View Profile</label>
                                                        <div className="modal" onClick={toggleModal}>
                                                            <div className="modal-wrap">
                                                                <h2 className="profileh2">Profile Details</h2>
                                                                <table className="profileview-table">
                                                                    <tbody>
                                                                        <tr className="profileview-tr">
                                                                            <td>Name</td>
                                                                            <td>:</td>
                                                                            <td>{item.scoutFirstName} {item.scoutLastname }</td>
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            <td className="profileview-td">Email</td>
                                                                            <td className="profileview-td">:</td>
                                                                            <td>{item.scoutEmail}</td>
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            <td className="profileview-td">
                                                                                Date Of Birth
                                                                            </td>
                                                                            <td className="profileview-td">:</td>
                                                                             <td>{item.scoutDob}</td>
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            <td className="profileview-td">District</td>
                                                                            <td className="profileview-td">:</td>
                                                                            <td>{item.scoutDistrict}</td> 
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            <td className="profileview-td">Gender</td>
                                                                            <td className="profileview-td">:</td>
                                                                           <td>{item.scoutGender}</td> 
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            <td className="profileview-td">
                                                                                Contact Number
                                                                            </td>
                                                                            <td className="profileview-td">:</td>
                                                                             <td>{item.scoutMobNum}</td>
                                                                        </tr>
                                                                        <tr className="profileview-tr">
                                                                            <td className="profileview-td">School</td>
                                                                            <td className="profileview-td">:</td>
                                                                           <td>{item.scoutSchool}</td> 
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