import "./Award.css";
import B3 from "../../Assests/ChiefCommissioners.png";
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function ChiefCommissionerAward() {
  const totalRequirements = 23;
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
        awardId: 3,
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
          <img src={B3} alt="" />
        </div>
        <h1>
          Chief Commissioner <br />
          Award
        </h1>
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
                Thrift - Savings Account 2 <br />
                සකසුරුවම් - ඉතුරුම් ගිණුම 2{" "}
              </td>
              <td> 17 Dec, 2022 </td>
              <td>
                <button onClick={handleAttemptClick} className="status attempt">
                  ATTEMPT
                </button>
                <span className="practical">PR</span>
              </td>
            </tr>
            <tr>
              <td> 2 </td>
              <td>
                {" "}
                Skills in Art and Hobbies 1 <br />
                කලාව සහ විනෝදාංශ පිළිබඳ කුසලතා 1
              </td>
              <td> 27 Aug, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 2);
                    localStorage.setItem("award_id", 3);
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
                <span className="marks">{stateVariables[1].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 3</td>
              <td>
                {" "}
                Knots and Whipping 3
                <br />
                ගැට හා වෙලීම 3
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
              <td> 4</td>
              <td>
                {" "}
                Types of Fire Places
                <br />
                ගිනි මෙලවීමේ ක්‍රම
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 4);
                    localStorage.setItem("award_id", 3);
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
                <span className="marks">{stateVariables[3].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 5</td>
              <td>
                {" "}
                Pioneering Project 2
                <br />
                පුරෝගාමී ව්‍යාපෘතිය 2
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
                Identify parts of a human foot print/ shoe print/ animal / bird
                foot prints <br />
                මිනිස් පා සටහනක / සත්ව / පක්ෂි පා සටහනක කොටස් හඳුනා ගැනීමට
                හැකිවීම
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
              <td> 7</td>
              <td>
                {" "}
                Compass and Mapping 2 <br />
                මාලිමාව හා සිතියම්කරණය 2
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 7);
                    localStorage.setItem("award_id", 3);
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
                Estimation of Heights, Lengths, Weights <br />
                උස, දුර, බර නිශ්චය කිරීම
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
              <td> 9</td>
              <td>
                {" "}
                Use of Different Tools <br />
                විවිධ උපකරණ භාවිතය
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
              <td> 10</td>
              <td>
                {" "}
                Ten Common Birds <br />
                පක්ෂීන් වර්ග 15
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 10);
                    localStorage.setItem("award_id", 3);
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
                Swimming/ Alternate skill <br />
                පිහිනුම්/ විකල්ප කුසලතා
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
                Smartness and Good Order 3
                <br />
                සුරුබුහුටිකම සහ නිසි පිළිවෙළ 3
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
                Social Health 2 <br />
                ප්‍රජා සෞඛ්‍යය 2
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 13);
                    localStorage.setItem("award_id", 3);
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
                <span className="marks">{stateVariables[12].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 14</td>
              <td>
                {" "}
                Highway Code <br />
                මාර්ග නීති
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 14);
                    localStorage.setItem("award_id", 3);
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
                <span className="marks">{stateVariables[13].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 15 </td>
              <td>
                {" "}
                IT Literacy 2 <br />
                තොරතුරු තාක්ෂණ දැනුම 2{" "}
              </td>
              <td> 17 Dec, 2022 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 15);
                    localStorage.setItem("award_id", 3);
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
                <span className="marks">{stateVariables[14].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 16 </td>
              <td>
                {" "}
                Knowledge of the Area Around 2 <br />
                අවට ප්රදේශය පිළිබඳ දැනුම 2
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
              <td> 17 </td>
              <td>
                {" "}
                Scout Vision and Mission
                <br />
                බාලදක්ෂ අභිප්‍රාය ප්‍රකාශය හා මෙහෙවර ප්‍රකාශය
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 17);
                    localStorage.setItem("award_id", 3);
                    navigate("/requirments");
                  }}
                  className={`status ${
                    stateVariables[16].marks !== "--"
                      ? stateVariables[16].marks >= 70
                        ? "completed"
                        : "re-attempt"
                      : "attempt"
                  }`}
                >
                  {stateVariables[16].status}
                </button>
                <span className="marks">{stateVariables[16].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 18 </td>
              <td>
                {" "}
                First Aid 3
                <br />
                ප්‍රථමාධාර 3
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 18);
                    localStorage.setItem("award_id", 3);
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
                <span className="marks">{stateVariables[17].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 19 </td>
              <td>
                {" "}
                Safe From Harm 9
                <br />
                හානියෙන් සුරක්ෂාව 9
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 19);
                    localStorage.setItem("award_id", 3);
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
                <span className="marks">{stateVariables[18].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 20 </td>
              <td>
                {" "}
                Environment Protection Activity <br />
                පරිසර ආරක්ෂණ ක්‍රියාකාරකම්
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 20);
                    localStorage.setItem("award_id", 3);
                    navigate("/requirments");
                  }}
                  className={`status ${
                    stateVariables[19].marks !== "--"
                      ? stateVariables[19].marks >= 70
                        ? "completed"
                        : "re-attempt"
                      : "attempt"
                  }`}
                >
                  {stateVariables[19].status}
                </button>
                <span className="marks">{stateVariables[19].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 21 </td>
              <td>
                {" "}
                Link Language Skills 2 <br />
                සම්බන්ධීකරන භාෂා කුසලතා 2
              </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <button
                  onClick={() => {
                    localStorage.setItem("requirment_id", 21);
                    localStorage.setItem("award_id", 3);
                    navigate("/requirments");
                  }}
                  className={`status ${
                    stateVariables[20].marks !== "--"
                      ? stateVariables[20].marks >= 70
                        ? "completed"
                        : "re-attempt"
                      : "attempt"
                  }`}
                >
                  {stateVariables[20].status}
                </button>
                <span className="marks">{stateVariables[20].marks}</span>{" "}
              </td>
            </tr>
            <tr>
              <td> 22 </td>
              <td>
                {" "}
                Two Nights Camping <br />
                කඳවුරු රාත්‍රී දෙක
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
              <td> 23 </td>
              <td>
                {" "}
                District Commissioner's Hike <br />
                දිසා කොමසාරිස් පා ගමන
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

export default ChiefCommissionerAward;
