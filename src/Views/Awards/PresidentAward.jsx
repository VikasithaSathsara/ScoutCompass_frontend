import "./Award.css";
import B5 from "../../Assests/PresidentsAward.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function PresidentAward() {
  const totalRequirements = 13;
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
    const fetchRequirementData = async (awardId, requirementId, setData) => {
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
        awardId: 5,
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
              This is a practicle requirement. Press below button to Send a
              request to your instructor mentioning that you want to pass this
              requirment.
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
          <img src={B5} alt="" />
        </div>
        <h1>President's Award</h1>
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
                Scout Promise and Law 3 <br />
                බාලදක්ෂ පොරොන්දුව සහ නීතිය 3{" "}
              </td>
              <td> 17 Dec, 2022 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 1);
                    localStorage.setItem("award_id", 5);
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
                <span className="marks">{stateVariables[0].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 2 </td>
              <td>
                {" "}
                Log Book 2 <br />
                ලොග් පොත 2
              </td>
              <td> 27 Aug, 2023 </td>
              <td>
                <button onClick={handleAttemptClick} className="status attempt">
                  ATTEMPT
                </button>
                <span className="practical">PR</span>
              </td>
            </tr>
            <tr>
              <td> 3</td>
              <td>
                {" "}
                Skills in Art and Hobbies 3
                <br />
                කලා සහ විනෝදාංශ කුසලතා 3
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 3);
                    localStorage.setItem("award_id", 5);
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
                <span className="marks">{stateVariables[2].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 4</td>
              <td>
                {" "}
                Scout Craft
                <br />
                බාලදක්ෂ ශිල්පය
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button onClick={handleAttemptClick} className="status attempt">
                  ATTEMPT
                </button>
                <span className="practical">PR</span>
              </td>
            </tr>
            <tr>
              <td> 5</td>
              <td>
                {" "}
                Pioneering Project 4
                <br />
                පුරෝගාමී ව්‍යාපෘතිය 4
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button onClick={handleAttemptClick} className="status attempt">
                  ATTEMPT
                </button>
                <span className="practical">PR</span>
              </td>
            </tr>
            <tr>
              <td> 6</td>
              <td>
                {" "}
                Leadership in Emergencies and Natural Disasters <br />
                හදිසි අවස්ථාවකදී ස්වභාවික විපතකදී නායකත්වය දැරීම
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 6);
                    localStorage.setItem("award_id", 5);
                    navigate("/requirments");
                  }}
                  className={`status ${
                    stateVariables[5].marks !== "--"
                      ? stateVariables[5].marks >= 70
                        ? "completed"
                        : "re-attempt"
                      : "attempt"
                  }`}
                >
                  {stateVariables[5].status}
                </button>
                <span className="marks">{stateVariables[5].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 7</td>
              <td>
                {" "}
                Health Habits <br />
                සෞඛ්‍ය පුරුදු
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 7);
                    localStorage.setItem("award_id", 5);
                    navigate("/requirments");
                  }}
                  className={`status ${
                    stateVariables[6].marks !== "--"
                      ? stateVariables[6].marks >= 70
                        ? "completed"
                        : "re-attempt"
                      : "attempt"
                  }`}
                >
                  {stateVariables[6].status}
                </button>
                <span className="marks">{stateVariables[6].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 8</td>
              <td>
                {" "}
                IT Literacy 4 <br />
                තොරතුරු තාක්ෂණ දැනුම 4{" "}
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 8);
                    localStorage.setItem("award_id", 5);
                    navigate("/requirments");
                  }}
                  className={`status ${
                    stateVariables[7].marks !== "--"
                      ? stateVariables[7].marks >= 70
                        ? "completed"
                        : "re-attempt"
                      : "attempt"
                  }`}
                >
                  {stateVariables[7].status}
                </button>
                <span className="marks">{stateVariables[7].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 9</td>
              <td>
                {" "}
                Link Language Skills 4 <br />
                සම්බන්ධීකරන භාෂා කුසලතා 4
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 9);
                    localStorage.setItem("award_id", 5);
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
                <span className="marks">{stateVariables[8].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 10</td>
              <td>
                {" "}
                Safe from Harm 11 <br />
                හානියෙන් සුරක්ෂාව 11
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 10);
                    localStorage.setItem("award_id", 5);
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
                <span className="marks">{stateVariables[9].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 11</td>
              <td>
                {" "}
                Organising a Hike including Scout Skills and Challenges <br />
                බාලදක්ෂ ශිල්පිය දක්ශතා සහ අභියෝග ඇතුළුව පාගමනක් සංවිධානය කිරීම
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button onClick={handleAttemptClick} className="status attempt">
                  ATTEMPT
                </button>
                <span className="practical">PR</span>
              </td>
            </tr>
            <tr>
              <td> 12</td>
              <td>
                {" "}
                Community Service Project <br />
                ප්‍රජා සේවා ව්‍යාපෘතිය
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button onClick={handleAttemptClick} className="status attempt">
                  ATTEMPT
                </button>
                <span className="practical">PR</span>
              </td>
            </tr>
            <tr>
              <td> 13</td>
              <td>
                {" "}
                Four Nights Camping <br />
                කඳවුරු රාත්‍රී 4
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button onClick={handleAttemptClick} className="status attempt">
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
              <button onClick={handleAttemptClick} className="status attempt">
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

export default PresidentAward;
